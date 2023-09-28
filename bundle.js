(()=>{"use strict";function e(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var o="expires="+n.toUTCString();document.cookie=e+"="+t+";"+o+"; path=/; SameSite=Strict"}function t(e){for(var t=e+"=",i=decodeURIComponent(document.cookie).split(";"),n=0;n<i.length;n++){for(var o=i[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.left=t,this.right=i,this.up=n,this.down=o,this._start=null,this.addTouchStartListener(),this.addTouchedListener()}var t,i;return t=e,(i=[{key:"addTouchStartListener",value:function(){var e=this;window.addEventListener("touchstart",(function(t){if(1===t.touches.length){var i=t.touches.item(0);e.start=[i.clientX,i.clientY],console.log(e.start)}else e.start=null}))}},{key:"addTouchedListener",value:function(){var e=this;window.addEventListener("touchend",(function(t){var i=.6*Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),n=.4*Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);if(e.start){var o=t.changedTouches.item(0),r=[o.clientX,o.clientY];console.log(r),console.log("Test: ".concat(i,", ").concat(n)),r[0]-e.start[0]>i&&null!=e.right&&e.right(),r[0]-e.start[0]<-i&&null!=e.left&&e.left(),r[1]-e.start[1]<-n&&console.log("up"),r[1]-e.start[1]>n&&console.log("down")}}))}}])&&n(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===r(o)?o:String(o)),n)}var o}(new(function(){function i(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.content=document.querySelector(".slides"),this.slides=this.content.querySelectorAll("section"),this.currentSlideNo=1,""!=t("currentSlideNo")&&(this.currentSlideNo=Number(t("currentSlideNo"))),e("currentSlideNo",this.currentSlideNo),this.totalSlidesNo=0,this.currentSlide=null,this.isLooped=n,this.updateCurrentSlide(),this.currentSlide.classList.add("show"),this.intervalTimer=null,this.listener={},this.addKeyListener(this),this.addTouchListener(this)}var n,r;return n=i,(r=[{key:"updateCurrentSlide",value:function(){this.currentSlide=this.slides[this.currentSlideNo],this.currentSlide.classList.add("show")}},{key:"updateSlideNo",value:function(){this.slideCounter.innerText="".concat(this.currentSlideNo+1," of ").concat(this.totalSlidesNo)}},{key:"update",value:function(){this.totalSlidesNo=this.slides.length,this.updateCurrentSlide()}},{key:"changeCurrentSlideNo",value:function(t){this.currentSlide.classList.remove("show"),this.currentSlideNo=t,e("currentSlideNo",this.currentSlideNo)}},{key:"moveToLeftSlide",value:function(){if(0==this.currentSlideNo){if(!this.isLooped)return;this.currentSlideNo=this.totalSlidesNo}this.changeCurrentSlideNo(this.currentSlideNo-1),this.update()}},{key:"moveToRightSlide",value:function(){if(this.currentSlideNo==this.totalSlidesNo-1){if(!this.isLooped)return;this.currentSlideNo=-1}this.changeCurrentSlideNo(this.currentSlideNo+1),this.update()}},{key:"switchLooping",value:function(){this.isLooped=!this.isLooped,null!=this.intervalTimer&&this.stopAutomation()}},{key:"startAutomation",value:function(){var e=this;this.isLooped=!0,this.intervalTimer=window.setInterval((function(){e.moveToRightSlide()}),4e3)}},{key:"stopAutomation",value:function(){window.clearInterval(this.intervalTimer),this.intervalTimer=null}},{key:"automateLoop",value:function(){null==this.intervalTimer?this.startAutomation():this.stopAutomation()}},{key:"addTouchListener",value:function(e){this.listener.touch=new o((function(){e.moveToRightSlide()}),(function(){e.moveToLeftSlide()}))}},{key:"addKeyListener",value:function(e){document.addEventListener("keydown",(function(t){var i,n=e;switch(t.code){case"ArrowLeft":n.moveToLeftSlide();break;case"ArrowRight":n.moveToRightSlide();break;case"ArrowUp":case"ArrowDown":break;case"Escape":document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"KeyF":(i=document.documentElement).requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.msRequestFullscreen&&i.msRequestFullscreen();break;case"KeyL":n.switchLooping();break;case"KeyA":n.automateLoop()}}))}}])&&l(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),i}())).update()})();