window.onload = function(event) {
    window.localStream = null;
    let height = document.getElementById('GameCanvas').style.maxHeight;
    console.log("height ia " + height);
    document.getElementById('videocontainer').style.maxHeight = height;
    ////Micro Phone Call Backs ////////////
    document.getElementById("togglegame").onclick = function(e) {
        window.VideoChatManager.gameVideoToggle();
    }
    let microhones = document.getElementsByClassName("microbtn");
    for (let i = 0; i < microhones.length; i++) {
        microhones[i].addEventListener('click', microphoneCallback);
    }

    function microphoneCallback(e) {
        console.log("microphoneCallback " + e.target.parentNode.id);
        var btn = e.target;
        superToggle(btn, "microphoneon", "microphoneoff");
        window.VideoUI.microPhoneBtnHandler(btn.parentNode.id);
    };

    window.VideoUI = {};
    //This need to be call with my parentId to disable audio of video

    window.VideoUI.microPhoneBtnHandler = function microPhoneBtnHandler(parentId) {
        if (parentId === "my" && cc.sys.isMobile)
            window.localStream.getAudioTracks()[0].enabled = !(window.localStream.getAudioTracks()[0].enabled);
        else
            window.VideoChatManager.enableAudioStream();

        let mediaPlayer = document.getElementById(parentId + "-camera");
        mediaPlayer.muted = !mediaPlayer.muted;
    }

    ////Video Call Btn  Call Backs ////////////

    let videoBtns = document.getElementsByClassName("videobtn");
    for (let i = 0; i < videoBtns.length; i++) {
        videoBtns[i].addEventListener('click', videoBtnCallback);
    }

    function videoBtnCallback(e) {
        console.log("videoBtnCallback " + e.target.parentNode.id);
        var btn = e.target;
        superToggle(btn, "videoon", "videooff");
        window.VideoUI.videoCallBtnHandler(btn.parentNode.id);
    };
    //This need to be call with my parentId to disable video
    window.VideoUI.videoCallBtnHandler = function videoCallBtnHandler(parentId) {
        let mediaPlayer = document.getElementById(parentId + "-camera");
        if (parentId === "my" && cc.sys.isMobile)
            window.localStream.getVideoTracks()[0].enabled = !(window.localStream.getVideoTracks()[0].enabled);
        else {
            window.VideoChatManager.enableVideoStream((mediaPlayer.paused || mediaPlayer.ended));
        }

        if (mediaPlayer.paused || mediaPlayer.ended) {
            mediaPlayer.play();
        } else {
            mediaPlayer.pause();
        }
    }
    window.VideoUI.registeredTouch = function registeredTouchEvent() {
        let element = document.getElementById("videocontainer");
        element.style.position = "absolute";
        console.log("Drag Element ", element)
        element.addEventListener('touchstart', process_touchstart, false);
        element.addEventListener('touchmove', process_touchmove, false);
        // element.addEventListener('touchcancel', process_touchcancel, false);
        // element.addEventListener('touchend', process_touchend, false);
        console.log("registered touch events");
    }


    window.VideoUI.deRegisteredTouch = function deRegisteredTouchEvent() {
        let element = document.getElementById("videocontainer");
        element.removeEventListener('touchstart', process_touchstart);
        element.removeEventListener('touchmove', process_touchmove);
        // element.removeEventListener('touchcancel', process_touchcancel);
        // element.removeEventListener('touchend', process_touchend);
        console.log("DeRegistered touc h revents");
    }

    window.VideoUI.registeredTouch();

    var prevPosX, prevPosY;

    function process_touchstart(event) {
        prevPosX = event.touches[0].clientX;
        prevPosY = event.touches[0].clientY;
    }

    function process_touchmove(event) {
        //event.preventDefault();
        event.stopPropagation();
        let currX = event.touches[0].clientX;
        let currY = event.touches[0].clientY;
        let pos1 = prevPosX - currX;
        let pos2 = prevPosY - currY;
        prevPosX = currX;
        prevPosY = currY;
        let element = document.getElementById("videocontainer");
        element.style.position = "absolute";
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";

        let topValue = element.style.top.substring(0, element.style.top.length - 2);
        let leftValue = element.style.left.substring(0, element.style.left.length - 2);
        if (topValue < 0)
            element.style.top = "0px";
        if (topValue > (window.document.documentElement.clientHeight - element.clientHeight))
            element.style.top = (window.document.documentElement.clientHeight - element.clientHeight) + "px";
        if (leftValue < 0)
            element.style.left = "0px";
        if (leftValue > (window.document.documentElement.clientWidth - element.clientWidth))
            element.style.left = (window.document.documentElement.clientWidth - element.clientWidth) + "px";

    }



    //Leave Btn Callback ////////////////
    let leaveBtns = document.getElementsByClassName("leavebtn");
    for (let i = 0; i < leaveBtns.length; i++) {
        leaveBtns[i].addEventListener('click', leaveCallback);
    }

    function leaveCallback(e) {
        if (e.target.parentNode.id === "my") {
            window.VideoChatManager.disconnectAllPeers();
            return;
        }
        window.VideoChatManager.leavePeer(e.target.parentNode);
    }

    function superToggle(element, class0, class1) {
        console.log("inside script .js toggle called for element ", element + " with class " + element.classList[0] + " second " + element.classList[1]);
        element.classList.toggle(class0);
        element.classList.toggle(class1);
    }







};