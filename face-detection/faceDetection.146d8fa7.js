!function(e,t,o,i){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof n.parcelRequire&&n.parcelRequire,d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(o,i){if(!t[o]){if(!e[o]){var n="function"==typeof parcelRequire&&parcelRequire;if(!i&&n)return n(o,!0);if(r)return r(o,!0);if(d&&"string"==typeof o)return d(o);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}a.resolve=function(t){return e[o][1][t]||t},a.cache={};var u=t[o]=new c.Module(o);e[o][0].call(u.exports,a,u,u.exports,this)}return t[o].exports;function a(e){return c(a.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=t,c.parent=r,c.register=function(t,o){e[t]=[function(e,t){t.exports=o},{}]},n.parcelRequire=c;for(var f=0;f<o.length;f++)c(o[f]);if(o.length){var u=c(o[o.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define((function(){return u}))}}({"67483d788f789efd1f09754e7882eb6a":[function(e,t,o){const i=document.querySelector(".webcam"),n=document.querySelector(".video"),r=n.getContext("2d"),d=document.querySelector(".face"),c=d.getContext("2d"),f=new window.FaceDetector,u=(document.querySelector('.controls input[type="range"]'),{SIZE:10,SCALE:1.35});function a(e){const{width:t,height:o,top:i,left:d}=e.boundingBox;r.clearRect(0,0,n.width,n.height),r.strokeStyle="#ffc600",r.lineWidth=2,console.log({width:t,height:o,top:i,left:d}),r.strokeRect(d,i,t,o)}function h({boundingBox:e}){c.imageSmoothingEnabled=!1,c.clearRect(0,0,d.width,d.height),c.drawImage(i,e.x,e.y,e.width,e.height,e.x,e.y,u.SIZE,u.SIZE);const t=e.width*u.SCALE,o=e.height*u.SCALE;c.drawImage(d,e.x,e.y,u.SIZE,u.SIZE,e.x-(t-e.width)/2,e.y-(o-e.height)/2,t,o)}(async function(){const e=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});i.srcObject=e,await i.play(),console.log(i.videoWidth,i.videoHeight),n.width=i.videoWidth,n.height=i.videoHeight,d.width=i.videoWidth,d.height=i.videoHeight})().then((async function e(){const t=await f.detect(i);console.log(t),t.forEach(a),t.forEach(h),requestAnimationFrame(e)}))},{}]},{},["67483d788f789efd1f09754e7882eb6a"]);
//# sourceMappingURL=faceDetection.146d8fa7.js.map
