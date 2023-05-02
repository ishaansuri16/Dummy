window.__require=function e(t,n,o){function i(c,r){if(!n[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var p="function"==typeof __require&&__require;if(!r&&p)return p(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var l=n[c]={exports:{}};t[c][0].call(l.exports,function(e){return i(t[c][1][e]||e)},l,l.exports,e,t,n,o)}return n[c].exports}for(var s="function"==typeof __require&&__require,c=0;c<o.length;c++)i(o[c]);return i}({API:[function(require,module,exports){"use strict";cc._RF.push(module,"30e05ZXEYVAOYbJ4+IyakVK","API"),exports.__esModule=!0,exports.default=API;var _Globals=require("./Globals");function API(){}API.prototype.getRequest=function getRequest(apiName,options,callback){var request_url=this.getAPIURL(apiName),http=new XMLHttpRequest;http.timeout=7e3;var params="";console.log("request url : "+request_url),http.open("GET",request_url),http.onreadystatechange=function(){if(http.responseText)var responseJSON=eval("("+http.responseText+")");else var responseJSON={};switch(http.readyState){case 4:Object.keys(responseJSON).length>0&&callback(responseJSON)}},http.ontimeout=function(){console.log("ontimeout"),callback({status:{resp_code:405,resp_message:"Connection Lost\nDue to slow Internet.\n\nPlease check your settings."}})},http.onerror=function(){console.log("error"),callback({status:{resp_code:405,resp_message:"Connection Lost\nDue to slow Internet.\n\nPlease check your settings."}})},http.send()},API.prototype.getAPIURL=function(e){var t="https://altdrx.huntergames.co.in/api/v1";switch(e){case _Globals.APINAME.GETOFFERS:return t+"/offersdetail/"+window.mid+"/"+window.gid;case _Globals.APINAME.ACHIEVEDOFFER:return t+"/showoffer/"+window.mid+"/"+window.gid;case _Globals.APINAME.CREATEPLAYER:return t+"/createplayer/"+window.playerid+"/"+window.mid+"/"+window.gid+"/"+window.pid;case _Globals.APINAME.PLAYER:return t+"/updateplayer/"+window.playerid;case _Globals.APINAME.POSTSCORE:console.log(window.result);var n=window.result;return n+=100,t+"/postscore/"+window.playerid+"/"+window.pid+"/"+n}return e},API.prototype.checkIfAuthRequired=function(e){if(e!=_Globals.APINAME.LOGIN)return!0},API.prototype.getMerchantName=function(){return MERCHANT_PATH+"/"},API.prototype.getHostName=function(){return"https://"+MERCHANT_HOST},API.prototype.getCurrencyWithUnit=function(e){return e},API.prototype.loadImage=function(e){return new Promise(function(t,n){cc.loader.load(e,function(e,o){return e?n():t(new cc.SpriteFrame(o))})})},module.exports=exports.default,cc._RF.pop()},{"./Globals":"Globals"}],AbstractScreen:[function(e,t){"use strict";cc._RF.push(t,"7fcb2KsobpH9q7vHo2YmNn/","AbstractScreen"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},onShow:function(e){this.data=e},onHide:function(){},onButtonClick:function(){ScreenManager.sounds.playSound(GameSFX.Click,!1)},onDestroy:function(){}}),cc._RF.pop()},{}],AnimBase:[function(e,t){"use strict";cc._RF.push(t,"30c39OMes9Gc56F8w4ugI9L","AnimBase"),cc.Class({extends:cc.Component,properties:{callback:{default:null,visible:!1},anim:{default:null,type:cc.Animation},reverse:{default:!1,visible:!1}},play:function(e,t){this.callback=t,"showPopUp"==e?(this.anim.play("popup").wrapMode=cc.WrapMode.Normal,this.reverse=!1):(console.log("Here"),this.anim.play("popup").wrapMode=cc.WrapMode.Reverse,this.reverse=!0)},onAnimEnd:function(){this.reverse||(console.log("Anim Callback"),this.callback())},OnAnimStart:function(){this.reverse&&(console.log("Anim Callback"),this.callback())}}),cc._RF.pop()},{}],AutoDisable:[function(e,t){"use strict";cc._RF.push(t,"ff3b6irKxND1LVQeCa+CuNe","AutoDisable"),cc.Class({extends:cc.Component,properties:{},onEnable:function(){var e=this;setTimeout(function(){e.node.active=!1},500)}}),cc._RF.pop()},{}],CircularList:[function(e,t){"use strict";function n(){this.length=0,this.first=null,this.last=null}cc._RF.push(t,"d8144PWyXtI6I7dVDrEoCVC","CircularList"),t.exports=n,n.Node=function(e){this.prev=null,this.next=null,this.data=e},n.prototype.append=function(e){null===this.first?(this.first=e.prev=e,this.last=e.next=e):(e.prev=this.last,e.next=this.first,this.first.prev=e,this.last.next=e,this.last=e),this.length+=1},n.prototype.insert=function(e,t){t.prev=e,t.next=e.next,e.next.prev=t,e.next=t,t.prev===this.last&&(this.last=t),this.length+=1},n.prototype.remove=function(e){this.length>1?(e.prev.next=e.next,e.next.prev=e.prev,e===this.first&&(this.first=e.next),e===this.last&&(this.last=e.prev)):this.first===e&&(this.first=null,this.last=null),e.prev=null,e.next=null,this.length-=1},n.prototype.each=function(e){for(var t=this.first,n=this.length;n--;)e(t.data),t=t.next},cc._RF.pop()},{}],Config:[function(e,t){"use strict";cc._RF.push(t,"14503Ztv4ZIQ7m7RhW0MXWg","Config");var n=n||{};n.gearInfo=["100% Off","Spin Again","20% Off","Spin Again","40% Off","Spin Again","60% Off","Spin Again"],t.exports=n,cc._RF.pop()},{}],Decryptor:[function(e,t){"use strict";cc._RF.push(t,"e579aL5Z7VPA7PCJDyOSu5g","Decryptor"),cc._RF.pop()},{}],ErrorPopUp:[function(e,t){"use strict";cc._RF.push(t,"fb313N+PmtHVJYqmC6SA0O/","ErrorPopUp");var n=e("PopUpBase");cc.Class({extends:n,properties:{message:{type:cc.Label,default:null},title:{type:cc.Label,default:null},moreGames:{type:cc.Node,default:null},tryAgain:{type:cc.Node,default:null}},onShow:function(e){this.message.string=e.msg,this.title.string=e.title},okClicked:function(){window.open("https://dev.altdrx.com/gamesuccess","_self")},onMoreGames:function(){window.open("https://dev.altdrx.com/gamesuccess","_self")}}),cc._RF.pop()},{PopUpBase:"PopUpBase"}],EventEmitter:[function(e,t){"use strict";cc._RF.push(t,"68e54jeEAtClqGEoH6SW9P6","EventEmitter");var n=function(){this.events={},this.hosts={}};n.inst=new n,n.prototype.on=function(e,t,n){"object"!=typeof this.events[e]&&(this.events[e]=[],this.hosts[e]=[]),this.events[e].push(t),this.hosts[e].push(n)},n.prototype.removeListener=function(e,t){var n;"object"==typeof this.events[e]&&"object"==typeof this.hosts[e]&&(n=this.events[e].indexOf(t))>-1&&(this.events[e].splice(n,1),this.hosts[e].splice(n,1))},n.prototype.emit=function(e){var t,n,o,i,s=[].slice.call(arguments,1);if("object"==typeof this.events[e])for(o=this.events[e].slice(),n=this.hosts[e].slice(),i=o.length,t=0;t<i;t++)null!==this.events[o[t]]?o[t].apply(n[t],s):o[t].apply(this,s)},n.prototype.once=function(e,t){this.on(e,function n(){this.removeListener(e,n),t.apply(this,arguments)})},t.exports=n,cc._RF.pop()},{}],FinalWinPopup:[function(e,t){"use strict";cc._RF.push(t,"4592bMaFAVKD4NS6Ty11UT+","FinalWinPopup");var n=e("PopUpBase");cc.Class({extends:n,properties:{},onShow:function(){},closePopup:function(){window.open(URLS.CURRENT_GAME,"_self")},onPlayNow:function(){window.open(URLS.CURRENT_GAME,"_self")},setTextLbls:function(){},onMoreGames:function(){window.open(URLS.MORE_GAMES,"_self")}}),cc._RF.pop()},{PopUpBase:"PopUpBase"}],GameController:[function(e,t){"use strict";cc._RF.push(t,"1a92fSkY0hOAaXUkfE1hmMN","GameController");var n=s(e("../../Utils/Screens/AbstractScreen")),o=s(e("../API")),i=e("../Globals");function s(e){return e&&e.__esModule?e:{default:e}}var c=e("Wheel");cc.Class({extends:n.default,properties:{wheel:{default:null,type:c},defaultCurrencyIcon:{default:null,type:cc.SpriteFrame}},onLoad:function(){window.defaultCurrencyIcon=null},start:function(){window.api=new o.default;var e=window.location.href,t=new URL(e);window.mid=t.searchParams.get("mid"),window.gid=t.searchParams.get("gid"),window.pid=t.searchParams.get("pid"),window.mid&&window.gid?this.GetPlayerID():PopUpManager.show(PopUpType.Error,{msg:"Something went wrong",title:"OOPS!"})},GetPlayerID:function(){FingerprintJS.load().then(function(e){return e.get()}).then(function(e){window.playerid=e.visitorId,console.log(e.visitorId)}),this.scheduleOnce(function(){this.getPlayer()},5)},getPlayer:function(){var e=this;PopUpManager.show(PopUpType.Loading),window.api.getRequest(i.APINAME.CREATEPLAYER,"",function(t){null!=t?"True"!=t?(PopUpManager.hide(PopUpType.Loading),PopUpManager.show(PopUpType.Error,{msg:"You already played\n the game,\n your entry has been\nregistered.",title:"OOPS!"})):e.GetWheelData():PopUpManager.show(PopUpType.Error,{msg:"Something went wrong",title:"OOPS!"})}.bind(this))},achievedOffer:function(){window.api.getRequest(i.APINAME.ACHIEVEDOFFER,"",function(e){null!=e?(window.result=e[0],window.code=e[1],PopUpManager.hide(PopUpType.Loading)):PopUpManager.show(PopUpType.Error,{msg:"Something went wrong",title:"OOPS!"})}.bind(this))},loginRequest:function(){},GetWheelData:function(){var e=this;window.api.getRequest(i.APINAME.GETOFFERS,"",function(t){null!=t?(window.spokesData=t,e.SetWheel(window.spokesData),e.achievedOffer(),PopUpManager.hide(PopUpType.Loading)):PopUpManager.show(PopUpType.Error,{msg:"Something went wrong",title:"OOPS!"})}.bind(this))},arrayToJson:function(e){for(var t={},n=0;n<e.length;n++)t[e[n].key]=e[n].value;return t},SetWheel:function(e){this.wheel.SetConfiguration(e)}}),cc._RF.pop()},{"../../Utils/Screens/AbstractScreen":"AbstractScreen","../API":"API","../Globals":"Globals",Wheel:"Wheel"}],GameOverMenu:[function(e,t){"use strict";cc._RF.push(t,"80eb4P1os9AtZWYtEYclUXC","GameOverMenu"),cc.Class({extends:cc.Component,properties:{btn_play:cc.Button,score:cc.Label},restart:function(){cc.director.loadScene("Game")}}),cc._RF.pop()},{}],Globals:[function(e,t,n){"use strict";cc._RF.push(t,"7d11aSE8gdMwJz6IFDr+Raj","Globals"),n.__esModule=!0,n.APINAME=void 0,n.APINAME={LOGIN:0,GAME:1,POSTSCORE:2,CONFIG_WITH_KEY:3,GETOFFERS:4,ACHIEVEDOFFER:5,CREATEPLAYER:6,PLAYER:7},cc._RF.pop()},{}],ImageLoader:[function(e,t){"use strict";cc._RF.push(t,"c9d95yvS5hA2rPk8jpFZKbc","ImageLoader"),cc.Class({extends:cc.Component,properties:{},loadImage:function(e){cc.loader.load(e,function(){})}}),cc._RF.pop()},{}],Loading:[function(e,t){"use strict";cc._RF.push(t,"e6121Qh6StP0I2211KDdusX","Loading");var n=e("PopUpBase");cc.Class({extends:n,properties:{speed:{default:1,type:cc.Integer},load:{type:cc.Node,default:null}},onLoad:function(){this.scheduleOnce(function(){this.node.active=!1},5)},update:function(e){this.load.angle+=e*this.speed}}),cc._RF.pop()},{PopUpBase:"PopUpBase"}],LosePopup:[function(e,t){"use strict";cc._RF.push(t,"6048dbDy0xPJpIAJVn/4cfw","LosePopup");var n=e("PopUpBase");cc.Class({extends:n,properties:{msgLbl:{type:cc.Label,default:null},couponImg:{type:cc.Sprite,default:null},imageUrl:{visible:!1,default:null},externalUrl:{visible:!1,default:null},loading:{type:cc.Node,default:null}},onShow:function(e){this.msgLbl.string=e},goToLoginScreen:function(){window.open("https://dev.altdrx.com/gamesuccess","_self")},onMoreGames:function(){window.open("https://dev.altdrx.com/gamesuccess","_self")}}),cc._RF.pop()},{PopUpBase:"PopUpBase"}],PopUpBase:[function(e,t){"use strict";cc._RF.push(t,"19261/3IdVAz48b8sXLkoPg","PopUpBase"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},onShow:function(e){this.data=e},onHide:function(){},onButtonClick:function(){},onDestroy:function(){}}),cc._RF.pop()},{}],PopUpManager:[function(e,t){"use strict";cc._RF.push(t,"3702ccDZspNkaBA65DoORRL","PopUpManager"),e("SoundManager");var n=e("PopUpBase"),o=window,i=new cc.Enum({None:100,Lose:0,Error:1,GameOVer:2,Win:3,Loading:4}),s=cc.Class({extends:cc.Component,properties:{popUps:{default:[],type:n},currentPopUp:{default:i.None,type:i},currentOverLayedPopUps:{default:[],type:i}},onLoad:function(){o.PopUpManager=this,this.registerCloseBtn(),o.PopUpType=i},registerCloseBtn:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,n){t!=cc.macro.KEY.back&&t!=cc.macro.KEY.escape||(e.currentOverLayedPopUps.length>0&&n.stopPropagation(),e.hideCurrentPopUp())}},this.node)},show:function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=null);var o=-1!==this.currentOverLayedPopUps.indexOf(e);if(null!==e&&e!==i.None&&!o){this.currentOverLayedPopUps.push(e),this.popUps[e].node.active=!0;var s=this.popUps[e].getComponent("AnimBase"),c=this;null!==s?s.play("showPopUp",function(){console.log("PopUP shown"),c.popUps[e].onShow(t),null!==n&&n()}):(this.popUps[e].onShow(t),null!==n&&n()),this.currentPopUp=e}},hide:function(e,t){void 0===t&&(t=null);var n=-1!=this.currentOverLayedPopUps.indexOf(e);if(null!==e&&e!==i.None&&n){this.currentOverLayedPopUps.splice(this.currentOverLayedPopUps.indexOf(e),1);var o=this.popUps[e].getComponent("AnimBase"),s=this;null!==o?o.play("hidePopUp",function(){console.log("PopUp Closed"),s.popUps[e].node.active=!1,s.popUps[e].onHide(),null!==t&&t()}):(this.popUps[e].onHide(),null!==t&&t(),this.popUps[e].node.active=!1),this.currentPopUp=this.currentOverLayedPopUps[this.currentOverLayedPopUps.length-1]}else null!==t&&t()},hideCurrentPopUp:function(e){void 0===e&&(e=null),this.hide(this.currentPopUp,e)},hideAllPopUps:function(){for(;0!==this.currentOverLayedPopUps.length;)this.hide(this.currentPopUp,function(){})}});t.exports={PopUpManager:s,PopUpType:i},cc._RF.pop()},{PopUpBase:"PopUpBase",SoundManager:"SoundManager"}],SFX:[function(e,t){"use strict";cc._RF.push(t,"b4826blEJxGxJVeU0YY/xZu","SFX"),window.GameSFX=new cc.Enum({Collect:0,Click:1,Error:2,Popup:3}),cc._RF.pop()},{}],SceneManager:[function(e,t){"use strict";cc._RF.push(t,"16b33uCxwtMHIxVzk0+ks6H","SceneManager");var n=e("SceneObject");cc.Class({extends:cc.Component,properties:{spawnX:0,objectSpeed:0,_pool:null},onLoad:function(){D.sceneManager=this,this._pool=new cc.js.Pool(function(){console.log("clear obj success")},10),this._pool.get=this.getCompObj},spawn:function(e,t,n){var o=this._pool.get(t);return o||(o=cc.instantiate(e).getComponent(t)),n?o.node.parent=n:(this.node.addChild(o.node),o.node.x=this.spawnX),o.node.active=!0,o},despawn:function(e){e.node.removeFromParent(),e.node.active=!1,this.putIntoPool(e)},update:function(e){if(D.game.state===D.GameManager.State.Run)for(var t=this.objectSpeed*e,o=this.node.children,i=0;i<o.length;i++){var s=o[i];s.x+=t,s.getBoundingBoxToWorld().xMax<0&&this.despawn(s.getComponent(n))}},getCompObj:function(e){for(var t=this,n=0;n<this._pool.count;n++){var o=[],i=this._pool._get;if(i instanceof e)return o.forEach(function(e){t._pool.put(e)}),i;o.push(i)}return null},putIntoPool:function(e){var t=this._pool.count;return this._pool.put(e),t<this._pool.count||(console.warn("pool has been filled, please resize the array length."),!1)}}),cc._RF.pop()},{SceneObject:"SceneObject"}],SceneObject:[function(e,t){"use strict";cc._RF.push(t,"2a554KR7C5OQJFpP7nMlkSU","SceneObject"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){}}),cc._RF.pop()},{}],ScreenManager:[function(e,t){"use strict";cc._RF.push(t,"7dc08oGa+JEx57JLiQWfUvI","ScreenManager");var n=e("AbstractScreen"),o=e("SoundManager"),i=window,s=new cc.Enum({LoginScreen:0,Gameplay:1,None:100}),c=new cc.Enum({SHOWN:0,HIDDEN:1}),r=cc.Class({extends:cc.Component,properties:{screens:{default:[],type:[n]},currentScreen:{default:s.LoginScreen,type:s},screenState:{default:null,type:c,visible:!1},sounds:{default:null,type:o}},onLoad:function(){i.ScreenManager=this,r.instance=this,i.ScreenEnum=s,this.registerCloseBtn()},registerCloseBtn:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t){t!=cc.macro.KEY.back&&t!=cc.macro.KEY.escape||(e.currentScreen==s.SinglePlayerScreen?e.hideCurrentScreen(s.MainMenuScreen,null,function(){}):e.currentScreen==s.MultiplayerScreen?e.hideCurrentScreen(s.MainMenuScreen,null,function(){}):e.currentScreen==s.GameScreen||e.currentScreen!=s.MainMenuScreen&&e.currentScreen!=s.LoginScreen||PopUpManager.show(27,null,function(){}))}},this.node)},showScreen:function(e,t,n){this.enableNewScreen(e,t,n)},enableNewScreen:function(e,t,n){this.currentScreen!==s.None?this.hideCurrentScreen(e,t,n):this.showNextScreen(e,t,n)},showNextScreen:function(e,t,n){this.screens[e].node.active=!0,this.currentScreen=e,this.screens[e].onShow(t),null!==n&&n(),this.screenState=c.SHOWN},hideCurrentScreen:function(e,t,n){this.screens[this.currentScreen].onHide(),this.screens[this.currentScreen].node.active=!1,this.screenState=c.HIDDEN,this.currentScreen=s.None,null!==e&&"undefined"!==e&&this.showNextScreen(e,t,n)}});t.exports={ScreenManager:r,ScreenEnum:s},cc._RF.pop()},{AbstractScreen:"AbstractScreen",SoundManager:"SoundManager"}],Screenshot:[function(e,t){"use strict";cc._RF.push(t,"a4da36XTHZMEZG1gjdUwN2y","Screenshot"),cc.Class({extends:cc.Component,properties:{camera:{default:null,type:cc.Camera}},start:function(){},capture:function(){this.camera.node.active=!0,(new cc.Node).parent=cc.director.getScene();var e=this.camera,t=new cc.RenderTexture,n=cc.game._renderContext;t.initWithSize(cc.visibleRect.width,cc.visibleRect.height,n.STENCIL_INDEX8),e.targetTexture=t;var o=t.width,i=t.height;e.render();var s=t.readPixels(),c=document.createElement("canvas"),r=c.getContext("2d");c.width=t.width,c.height=t.height;for(var a=4*o,p=0;p<i;p++){for(var l=i-1-p,u=r.createImageData(o,1),h=l*o*4,d=0;d<a;d++)u.data[d]=s[h+d];r.putImageData(u,0,p)}var f=c.toDataURL("image/jpeg"),g=document.createElement("img");return g.src=f,this.camera.node.active=!1,g},onClick:function(e,t){console.log(t)},captureAndShow:function(){var e=this.capture(),t=new cc.Texture2D;t.initWithElement(e);var n=new cc.SpriteFrame;n.setTexture(t);var o=new cc.Node;o.addComponent(cc.Sprite).spriteFrame=n,o.zIndex=cc.macro.MAX_ZINDEX,o.parent=cc.director.getScene(),o.x=cc.winSize.width/2,o.y=cc.winSize.height/2,o.on(cc.Node.EventType.TOUCH_START,function(){o.parent=null})}}),cc._RF.pop()},{}],SettingToggle:[function(e,t){"use strict";cc._RF.push(t,"42483guWZ5EHaZV5We+Z/fL","SettingToggle");var n=e("EventEmitter");cc.Class({extends:cc.Component,properties:{onPos:cc.Node,offPos:cc.Node,status:!0,target:cc.Node,duration:.3,icon:cc.Sprite,bg:cc.Sprite,onIcon:cc.SpriteFrame,offIcon:cc.SpriteFrame,onBg:cc.SpriteFrame,offBg:cc.SpriteFrame},onClick:function(){this.status?(this.icon.spriteFrame=this.offIcon,this.bg.spriteFrame=this.offBg,this.target.position=this.offPos.position):(this.icon.spriteFrame=this.onIcon,this.bg.spriteFrame=this.onBg,this.target.position=this.onPos.position),this.status=!this.status,n.inst.emit(this.node.name,this.status)},setDefault:function(){this.status?(this.icon.spriteFrame=this.offIcon,this.bg.spriteFrame=this.offBg,this.target.position=this.offPos.position):(this.icon.spriteFrame=this.onIcon,this.bg.spriteFrame=this.onBg,this.target.position=this.onPos.position),this.status=!this.status}}),cc._RF.pop()},{EventEmitter:"EventEmitter"}],SoundManager:[function(e,t){"use strict";cc._RF.push(t,"d7b5f0vJZ1LupnE66dSfUp3","SoundManager");var n=window;cc.Class({extends:cc.Component,properties:{soundList:{default:[],type:cc.AudioClip}},onLoad:function(){n.SoundManager=this,SoundManager.instance=this,this.audioSource=this.getComponent(cc.AudioSource)},muteSound:function(e){this.audioSource.mute=e},playSound:function(e,t){console.log("play"),this.audioSource.mute||(this.audioSource.clip=this.soundList[e],this.audioSource.loop=t,this.audioSource.play())},stopSound:function(){this.audioSource.stop()}}),cc._RF.pop()},{}],Spoke:[function(e,t){"use strict";cc._RF.push(t,"9e89caYdRFFopd9OTLjbC9A","Spoke"),cc.Class({extends:cc.Component,properties:{winAmountLbl:{default:null,type:cc.Label},txtLbl:{default:null,type:cc.Label},spokeImage:{default:null,type:cc.Sprite},currencyIcon:{default:null,type:cc.Sprite}},SetSpokeUI:function(e){this.spokeData=e,this.txtLbl.string=e}}),cc._RF.pop()},{}],TabBtnUtil:[function(e,t){"use strict";cc._RF.push(t,"659fd78jjNLsrWOlbZl58RW","TabBtnUtil"),cc.Class({extends:cc.Component,properties:{tabs:{default:[],type:cc.Node},tabButtons:{default:[],type:cc.Sprite},currentTab:{default:0},activeColor:{default:new cc.Color},inactiveColor:{default:new cc.Color}},onLoad:function(){},start:function(){},updateCurrentTable:function(){this.tabs[this.currentTab].getComponent("Table").onEnable()},setActiveTab:function(e,t){null!==t&&(t.active=!1),e.active=!0},setActiveButton:function(e,t){null!==t&&(t.getComponent(cc.Sprite).node.color=new cc.Color(0,0,0),t.getComponent(cc.Sprite).node.opacity=140,t.node.parent.getChildByName("lbl").color=this.inactiveColor),e.getComponent(cc.Sprite).node.color=new cc.Color(253,253,0),e.getComponent(cc.Sprite).node.opacity=255,e.node.parent.getChildByName("lbl").color=this.activeColor},onShowTab_01:function(){this.setActiveTab(this.tabs[0],this.tabs[this.currentTab]),this.setActiveButton(this.tabButtons[0],this.tabButtons[this.currentTab]),this.currentTab=0},onShowTab_02:function(){this.setActiveTab(this.tabs[1],this.tabs[this.currentTab]),this.setActiveButton(this.tabButtons[1],this.tabButtons[this.currentTab]),this.currentTab=1},onShowTab_03:function(){this.setActiveTab(this.tabs[2],this.tabs[this.currentTab]),this.setActiveButton(this.tabButtons[2],this.tabButtons[this.currentTab]),this.currentTab=2},onShowTab_04:function(){this.setActiveTab(this.tabs[3],this.tabs[this.currentTab]),this.setActiveButton(this.tabButtons[3],this.tabButtons[this.currentTab]),this.currentTab=3},onShowTab_05:function(){this.setActiveTab(this.tabs[4],this.tabs[this.currentTab]),this.setActiveButton(this.tabButtons[4],this.tabButtons[this.currentTab]),this.currentTab=4},onShowTab_06:function(){this.tabs.length<6||(this.setActiveTab(this.tabs[5],this.tabs[this.currentTab]),this.setActiveButton(this.tabButtons[5],this.tabButtons[this.currentTab]),this.currentTab=5)}}),cc._RF.pop()},{}],TouchEvent:[function(e,t){"use strict";cc._RF.push(t,"1f95fokdqBIwbxapCZz12a2","TouchEvent"),cc.Class({extends:cc.Component,properties:{count:{default:0,visible:!1},duration:.1,animScale:1.1,defaultScale:1,callback:{default:[],type:cc.Component.EventHandler},anim:{default:null,visible:!1}},start:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(){this.touchStart()},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){this.touchEnd()},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){this.touchEnd()},this)},onDisable:function(){this.node.targetOff(this.node)},touchStart:function(){for(this.count=0;this.count<this.callback.length;this.count++)this.callback[this.count].emit();this.node.stopAllActions(),this.anim=cc.scaleTo(this.duration,this.animScale),this.node.runAction(this.anim)},touchEnd:function(){this.node.stopAllActions(),this.anim=cc.scaleTo(this.duration,this.defaultScale),this.node.runAction(this.anim)}}),cc._RF.pop()},{}],Trigger:[function(e,t){"use strict";cc._RF.push(t,"278ceHOKwdMm7SG7B6ntIAY","Trigger");var n=e("EventEmitter");cc.Class({extends:cc.Component,properties:{callback:{default:[],type:cc.Component.EventHandler},targetA:"RunCollider",targetB:"SliderCollider",index:0,triggerOnce:!0},onLoad:function(){n.inst.on("start",this.onGameStart,this)},onDestroy:function(){n.inst.removeListener("start",this.onGameStart,this)},onGameStart:function(){this.node.active=!0},onCollisionEnter:function(){if(this.node.active=!1,this.callback.length>1)for(this.index=0;this.index<this.callback.length;this.index++)this.callback[index].emit();else 1==this.callback.length&&this.callback[0].emit()}}),cc._RF.pop()},{EventEmitter:"EventEmitter"}],WheelUI:[function(e,t){"use strict";cc._RF.push(t,"49c52uo13tOwY7+Til6i5qz","WheelUI"),cc.Class({extends:cc.Component,properties:{spokes:{default:null,type:cc.Node}},onLoad:function(){},SetWheelUI:function(e){for(var t=Math.min(this.spokes.children.length,window.spokesData.length),n=0;n<t;n++)this.spokes.children[n].getComponent("Spoke").SetSpokeUI(e[n])}}),cc._RF.pop()},{}],Wheel:[function(e,t){"use strict";cc._RF.push(t,"5261c81JlpM0JY8b6TQZadt","Wheel"),e("./Globals"),cc.Class({extends:cc.Component,properties:{spinBtn:{default:null,type:cc.Button,visible:!0,displayName:"SpinBtn"},wheelSp:{default:null,type:cc.Node},maxSpeed:{default:5,type:cc.Float,max:15,min:2},duration:{default:3,type:cc.Float,max:5,min:1},acc:{default:.1,type:cc.Float,max:.2,min:.01},springback:{default:!1},effectAudio:{default:null,type:cc.AudioClip},spokenumber:{default:0,type:cc.Integer},wheel:{default:null,type:cc.Node},wheels:{default:[],type:cc.Node},spokeData:{default:null,visible:!1},spinAudio:{default:null,type:cc.AudioClip}},SetConfiguration:function(e){this.spokeData=e,this.spokenumber=e.length,this.selectWheel(this.spokeData),this.wheelState=0,this.curSpeed=0,this.spinTime=0,this.gearNum=this.spokenumber,this.defaultAngle=360/this.gearNum/2,6==this.gearNum&&(this.defaultAngle=0),this.gearAngle=360/this.gearNum,this.wheelSp.angle=this.defaultAngle,this.finalAngle=0,this.effectFlag=0,this.spinButtonClicked=!1,this.changeWheel()},changeWheel:function(){5==this.spokenumber?this.wheels[0].active=!0:6==this.spokenumber?this.wheels[1].active=!0:8==this.spokenumber?this.wheels[2].active=!0:10==this.spokenumber?this.wheels[3].active=!0:12==this.spokenumber&&(this.wheels[4].active=!0),this.spinBtn.node.active=!0},onSpinClick:function(){this.spinBtn.node.active=!1,PopUpManager.hide(PopUpType.Loading),window.targetId=this.spokeData.indexOf(window.result.toString()),this.getSpokeId(),this.audioID=cc.audioEngine.play(this.spinAudio,!1,.5),this.spinButtonClicked=!0},getSpokeId:function(){this.decAngle=720,this.curSpeed=0,this.spinTime=0,this.wheelState=1,console.log("before playsound"),SoundManager.playSound(0,!1)},selectWheel:function(e){var t=this.spokenumber;this.wheelSp=this.wheels[Math.ceil((t-5)/2)],PopUpManager.hide(PopUpType.Loading),this.wheelSp.getComponent("WheelUI").SetWheelUI(e)},update:function(e){if(0!==this.wheelState)if(this.effectFlag+=this.curSpeed,!cc.sys.isBrowser&&this.effectFlag>=this.gearAngle&&(this.audioID,this.effectFlag=0),1==this.wheelState)if(this.spinTime+=e,this.wheelSp.angle=this.wheelSp.angle-this.curSpeed,this.curSpeed<=this.maxSpeed)this.curSpeed+=this.acc;else{if(this.spinTime<this.duration)return;this.finalAngle=360-window.targetId*this.gearAngle+this.defaultAngle,this.maxSpeed=this.curSpeed,this.springback&&(this.finalAngle+=this.gearAngle),this.wheelSp.angle=this.finalAngle,this.wheelState=2}else if(2==this.wheelState){var t=this.wheelSp.angle,n=-(t-this.finalAngle);if(this.curSpeed=this.maxSpeed*((this.decAngle-n)/this.decAngle)+.2,this.wheelSp.angle=t-this.curSpeed,this.decAngle-n<=0)if(this.wheelState=0,this.wheelSp.angle=this.finalAngle,this.spinBtn.active=!1,this.springback){var o=cc.rotateBy(.6,-this.gearAngle),i=cc.sequence(cc.delayTime(.2),o,cc.callFunc(this.showRes,this));this.wheelSp.runAction(i)}else{var s=this;PopUpManager.show(PopUpType.Loading),setTimeout(function(){PopUpManager.hide(PopUpType.Loading),s.ShowPopUp()},1e3)}}},ShowPopUp:function(){if(window.targetId>=0){var e={winamount:window.result,image:this.wheelSp.getComponent("WheelUI").spokes.children[window.targetId].getComponent("Spoke").spokeImage.spriteFrame};PopUpManager.show(PopUpType.GameOVer,e,function(){})}else PopUpManager.show(PopUpType.Lose,window.result,function(){})}}),cc._RF.pop()},{"./Globals":"Globals"}],WinPopup:[function(e,t){"use strict";cc._RF.push(t,"b72e81Aor9DLL6UPbJ6Td6l","WinPopup");var n=e("../Globals"),o=e("PopUpBase"),i=e("../Wheel");cc.Class({extends:o,properties:{scoreLabel:{type:cc.Label,default:null},spokeImage:{default:null,type:cc.Sprite},wheel:{default:null,type:i},scores:{default:[],type:cc.Label},codeLabel:{type:cc.Label,default:null},backimage:{default:null,type:cc.Label},buttonString:{default:null,type:cc.Label},phoneimage:{default:null,type:cc.Sprite},youWonBG:{default:null,type:cc.Sprite}},onShow:function(e){api.getCurrencyWithUnit(e.winamount,window.prizeMode);var t=e.winamount.toString();3==t.length?(this.scores[2].string=t[0],this.scores[1].string=t[1],this.scores[0].string=t[2]):(this.scores[2].string="0",this.scores[1].string=t[0],this.scores[0].string=t[1]),this.getComponent(cc.Animation).play(),e.image&&(this.scoreLabel.node.active=!1,this.spokeImage.spriteFrame=e.image,this.spokeImage.node.active=!0),this.scoreLabel.getComponent(cc.Animation).play(),window.api.getRequest(n.APINAME.POSTSCORE)},closePopup:function(){window.open(URLS.CURRENT_GAME,"_self")},postScore:function(){window.location.replace("https://dev.altdrx.com/gamesuccess")}}),cc._RF.pop()},{"../Globals":"Globals","../Wheel":"Wheel",PopUpBase:"PopUpBase"}],use_reversed_rotateTo:[function(e,t){"use strict";cc._RF.push(t,"79b7fl+tpdNNZuiwWtXy4Ke","use_reversed_rotateTo"),cc.RotateTo._reverse=!0,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t){"use strict";cc._RF.push(t,"cb42bW1SRJDIrxCeVLqQyud","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}],"use_v2.1.x_cc.Action":[function(e,t){"use strict";cc._RF.push(t,"c21768ik2hGYp34fzbXMBvY","use_v2.1.x_cc.Action"),cc.macro.ROTATE_ACTION_CCW=!0,cc._RF.pop()},{}]},{},["Decryptor","GameOverMenu","API","Config","Globals","ErrorPopUp","FinalWinPopup","LosePopup","WinPopup","GameController","Spoke","Wheel","WheelUI","Loading","SceneManager","SceneObject","AnimBase","AutoDisable","CircularList","EventEmitter","ImageLoader","PopUpBase","PopUpManager","TabBtnUtil","SFX","AbstractScreen","ScreenManager","Screenshot","SettingToggle","SoundManager","TouchEvent","Trigger","use_reversed_rotateTo","use_v2.1-2.2.1_cc.Toggle_event","use_v2.1.x_cc.Action"]);