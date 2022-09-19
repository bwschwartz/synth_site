/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nconst osc = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  drag.makeDraggable();\n  osc.test();\n  osc.init(audioCtx); //is this kosher (passing in arg to init)\n\n  drag.makeClassDraggable();\n  drag.makeKnobDraggable();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJRixVQUFKLEVBQVo7O0FBRUEsTUFBTUcsSUFBSSxHQUFHRixtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHSixtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1LLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBSztFQUNqRE4sSUFBSSxDQUFDTyxhQUFMO0VBQ0FULEdBQUcsQ0FBQ1UsSUFBSjtFQUVBVixHQUFHLENBQUNXLElBQUosQ0FBU04sUUFBVCxFQUppRCxDQUk3Qjs7RUFDcEJILElBQUksQ0FBQ1Usa0JBQUw7RUFDQVYsSUFBSSxDQUFDVyxpQkFBTDtBQUlELENBVkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3NjaWxsYXRvciA9IHJlcXVpcmUoJy4vc2NyaXB0cy9vc2NpbGxhdG9yJylcbmNvbnN0IG9zYyA9IG5ldyBPc2NpbGxhdG9yO1xuXG5jb25zdCBEcmFnID0gcmVxdWlyZSgnLi9zY3JpcHRzL2RyYWcnKVxuY29uc3QgZHJhZyA9IG5ldyBEcmFnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9zY3JpcHRzL2NvbnRleHQnKVxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0O1xuY29uc3QgYXVkaW9DdHggPSBjb250ZXh0Lm1ha2VDb250ZXh0KClcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgZHJhZy5tYWtlRHJhZ2dhYmxlKCk7XG4gIG9zYy50ZXN0KCk7XG5cbiAgb3NjLmluaXQoYXVkaW9DdHgpOyAvL2lzIHRoaXMga29zaGVyIChwYXNzaW5nIGluIGFyZyB0byBpbml0KVxuICBkcmFnLm1ha2VDbGFzc0RyYWdnYWJsZSgpO1xuICBkcmFnLm1ha2VLbm9iRHJhZ2dhYmxlKCk7XG5cblxuXG59KTtcbiJdLCJuYW1lcyI6WyJPc2NpbGxhdG9yIiwicmVxdWlyZSIsIm9zYyIsIkRyYWciLCJkcmFnIiwiQ29udGV4dCIsImNvbnRleHQiLCJhdWRpb0N0eCIsIm1ha2VDb250ZXh0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZURyYWdnYWJsZSIsInRlc3QiLCJpbml0IiwibWFrZUNsYXNzRHJhZ2dhYmxlIiwibWFrZUtub2JEcmFnZ2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/context.js":
/*!********************************!*\
  !*** ./src/scripts/context.js ***!
  \********************************/
/***/ (function(module) {

eval("// initialize DSP framework\nclass Context {\n  makeContext() {\n    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();\n    return audioCtx;\n  } // should include error handling\n\n\n}\n\nmodule.exports = Context;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb250ZXh0LmpzLmpzIiwibmFtZXMiOlsiQ29udGV4dCIsIm1ha2VDb250ZXh0IiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMvY29udGV4dC5qcz9jNDA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluaXRpYWxpemUgRFNQIGZyYW1ld29ya1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgICBtYWtlQ29udGV4dCgpIHtcbiAgICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICAgIHJldHVybiBhdWRpb0N0eDtcbiAgfVxuICAvLyBzaG91bGQgaW5jbHVkZSBlcnJvciBoYW5kbGluZ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLE9BQU4sQ0FBYztFQUNWQyxXQUFXLEdBQUc7SUFDZCxNQUFNQyxRQUFRLEdBQUcsS0FBS0MsTUFBTSxDQUFDQyxZQUFQLElBQXVCRCxNQUFNLENBQUNFLGtCQUFuQyxHQUFqQjtJQUNBLE9BQU9ILFFBQVA7RUFDRCxDQUpXLENBS1o7OztBQUxZOztBQVFkSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLE9BQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/context.js\n");

/***/ }),

/***/ "./src/scripts/drag.js":
/*!*****************************!*\
  !*** ./src/scripts/drag.js ***!
  \*****************************/
/***/ (function(module) {

eval("class Drag {\n  test() {\n    console.log(\"hey bitch from drag.js\");\n  }\n\n  makeDraggable() {\n    $(\"#draggable\").draggable();\n  }\n\n  makeClassDraggable() {\n    $(\"#draggable1\").draggable();\n  }\n\n  makeKnobDraggable() {\n    $(\"#draggable2\").draggable();\n  }\n\n}\n\nmodule.exports = Drag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmFnLmpzLmpzIiwibmFtZXMiOlsiRHJhZyIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwibWFrZURyYWdnYWJsZSIsIiQiLCJkcmFnZ2FibGUiLCJtYWtlQ2xhc3NEcmFnZ2FibGUiLCJtYWtlS25vYkRyYWdnYWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvc2NyaXB0cy9kcmFnLmpzPzczMDIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJhZyB7XG4gIHRlc3QoKXtcbiAgICBjb25zb2xlLmxvZyhcImhleSBiaXRjaCBmcm9tIGRyYWcuanNcIilcbiAgfVxuICBtYWtlRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZVwiICkuZHJhZ2dhYmxlKCk7XG4gIH07XG5cbiAgbWFrZUNsYXNzRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZTFcIiApLmRyYWdnYWJsZSgpO1xuICB9O1xuXG4gIG1ha2VLbm9iRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZTJcIiApLmRyYWdnYWJsZSgpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEcmFnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFOLENBQVc7RUFDVEMsSUFBSSxHQUFFO0lBQ0pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0VBQ0Q7O0VBQ0RDLGFBQWEsR0FBRztJQUNkQyxDQUFDLENBQUUsWUFBRixDQUFELENBQWtCQyxTQUFsQjtFQUNEOztFQUVEQyxrQkFBa0IsR0FBRztJQUNuQkYsQ0FBQyxDQUFFLGFBQUYsQ0FBRCxDQUFtQkMsU0FBbkI7RUFDRDs7RUFFREUsaUJBQWlCLEdBQUc7SUFDbEJILENBQUMsQ0FBRSxhQUFGLENBQUQsQ0FBbUJDLFNBQW5CO0VBQ0Q7O0FBZFE7O0FBa0JYRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLElBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/drag.js\n");

/***/ }),

/***/ "./src/scripts/oscillator.js":
/*!***********************************!*\
  !*** ./src/scripts/oscillator.js ***!
  \***********************************/
/***/ (function(module) {

eval("class Oscillator {\n  test() {\n    console.log(\"in the oscillator file\");\n  }\n\n  init(audioCtx) {\n    audioCtx = audioCtx; // get this from the context.js file\n\n    const oscillator = audioCtx.createOscillator();\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);\n    oscillator.connect(audioCtx.destination);\n    document.querySelector('button').addEventListener('click', function () {\n      oscillator.start();\n    });\n  }\n\n}\n\nmodule.exports = Oscillator;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vc2NpbGxhdG9yLmpzLmpzIiwibmFtZXMiOlsiT3NjaWxsYXRvciIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsImF1ZGlvQ3R4Iiwib3NjaWxsYXRvciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJ0eXBlIiwiZnJlcXVlbmN5Iiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvc2NyaXB0cy9vc2NpbGxhdG9yLmpzP2U0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgT3NjaWxsYXRvciB7XG5cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImluIHRoZSBvc2NpbGxhdG9yIGZpbGVcIilcbiAgfVxuXG4gIGluaXQoYXVkaW9DdHgpIHtcbiAgICBhdWRpb0N0eCA9IGF1ZGlvQ3R4OyAvLyBnZXQgdGhpcyBmcm9tIHRoZSBjb250ZXh0LmpzIGZpbGVcbiAgICBjb25zdCBvc2NpbGxhdG9yID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIG9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJztcbiAgICBvc2NpbGxhdG9yLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZSgyMjAsIGF1ZGlvQ3R4LmN1cnJlbnRUaW1lKTtcbiAgICBvc2NpbGxhdG9yLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBvc2NpbGxhdG9yLnN0YXJ0KClcbiAgICAgIH0pfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gT3NjaWxsYXRvcjsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQU4sQ0FBaUI7RUFFZkMsSUFBSSxHQUFHO0lBQ0xDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0VBQ0Q7O0VBRURDLElBQUksQ0FBQ0MsUUFBRCxFQUFXO0lBQ2JBLFFBQVEsR0FBR0EsUUFBWCxDQURhLENBQ1E7O0lBQ3JCLE1BQU1DLFVBQVUsR0FBR0QsUUFBUSxDQUFDRSxnQkFBVCxFQUFuQjtJQUNBRCxVQUFVLENBQUNFLElBQVgsR0FBa0IsTUFBbEI7SUFDQUYsVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxjQUFyQixDQUFvQyxHQUFwQyxFQUF5Q0wsUUFBUSxDQUFDTSxXQUFsRDtJQUNBTCxVQUFVLENBQUNNLE9BQVgsQ0FBbUJQLFFBQVEsQ0FBQ1EsV0FBNUI7SUFFQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDQyxnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkQsWUFBVztNQUN0RVYsVUFBVSxDQUFDVyxLQUFYO0lBQ0csQ0FGSDtFQUVLOztBQWZROztBQW1CakJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLFVBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/oscillator.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;