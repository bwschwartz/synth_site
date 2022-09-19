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

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nconst osc = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\n\nconst Knob = __webpack_require__(/*! ./scripts/knob */ \"./src/scripts/knob.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  drag.makeDraggable();\n  osc1 = osc.init(audioCtx, 1); //is this kosher (passing in arg to init)\n\n  drag.makeClassDraggable();\n  drag.makeKnobDraggable();\n  const knob = new Knob(osc1, audioCtx);\n  knob.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJRixVQUFKLEVBQVo7O0FBRUEsTUFBTUcsSUFBSSxHQUFHRixtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHSixtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1LLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHUixtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUVBUyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBQ2pEUCxJQUFJLENBQUNRLGFBQUw7RUFFQUMsSUFBSSxHQUFHWCxHQUFHLENBQUNZLElBQUosQ0FBU1AsUUFBVCxFQUFtQixDQUFuQixDQUFQLENBSGlELENBR25COztFQUU5QkgsSUFBSSxDQUFDVyxrQkFBTDtFQUNBWCxJQUFJLENBQUNZLGlCQUFMO0VBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlSLElBQUosQ0FBU0ksSUFBVCxFQUFlTixRQUFmLENBQWI7RUFFQVUsSUFBSSxDQUFDQyxPQUFMO0FBR0QsQ0FiRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPc2NpbGxhdG9yID0gcmVxdWlyZSgnLi9zY3JpcHRzL29zY2lsbGF0b3InKVxuY29uc3Qgb3NjID0gbmV3IE9zY2lsbGF0b3I7XG5cbmNvbnN0IERyYWcgPSByZXF1aXJlKCcuL3NjcmlwdHMvZHJhZycpXG5jb25zdCBkcmFnID0gbmV3IERyYWc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL3NjcmlwdHMvY29udGV4dCcpXG5jb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQ7XG5jb25zdCBhdWRpb0N0eCA9IGNvbnRleHQubWFrZUNvbnRleHQoKVxuXG5jb25zdCBLbm9iID0gcmVxdWlyZSgnLi9zY3JpcHRzL2tub2InKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgZHJhZy5tYWtlRHJhZ2dhYmxlKCk7XG5cbiAgb3NjMSA9IG9zYy5pbml0KGF1ZGlvQ3R4LCAxKTsgLy9pcyB0aGlzIGtvc2hlciAocGFzc2luZyBpbiBhcmcgdG8gaW5pdClcblxuICBkcmFnLm1ha2VDbGFzc0RyYWdnYWJsZSgpO1xuICBkcmFnLm1ha2VLbm9iRHJhZ2dhYmxlKCk7XG5cbiAgY29uc3Qga25vYiA9IG5ldyBLbm9iKG9zYzEsIGF1ZGlvQ3R4KTtcblxuICBrbm9iLnJ1bktub2IoKTtcblxuXG59KTtcbiJdLCJuYW1lcyI6WyJPc2NpbGxhdG9yIiwicmVxdWlyZSIsIm9zYyIsIkRyYWciLCJkcmFnIiwiQ29udGV4dCIsImNvbnRleHQiLCJhdWRpb0N0eCIsIm1ha2VDb250ZXh0IiwiS25vYiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VEcmFnZ2FibGUiLCJvc2MxIiwiaW5pdCIsIm1ha2VDbGFzc0RyYWdnYWJsZSIsIm1ha2VLbm9iRHJhZ2dhYmxlIiwia25vYiIsInJ1bktub2IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("class Drag {\n  init() {}\n\n  makeDraggable() {\n    $(\"#draggable\").draggable();\n  }\n\n  makeClassDraggable() {\n    $(\"#draggable1\").draggable();\n  }\n\n  makeKnobDraggable() {\n    $(\"#draggable2\").draggable();\n  }\n\n}\n\nmodule.exports = Drag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmFnLmpzLmpzIiwibmFtZXMiOlsiRHJhZyIsImluaXQiLCJtYWtlRHJhZ2dhYmxlIiwiJCIsImRyYWdnYWJsZSIsIm1ha2VDbGFzc0RyYWdnYWJsZSIsIm1ha2VLbm9iRHJhZ2dhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9zY3JpcHRzL2RyYWcuanM/NzMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcmFnIHtcblxuICBpbml0KCkge1xuICAgIFxuICB9XG4gIG1ha2VEcmFnZ2FibGUoKSB7XG4gICAgJCggXCIjZHJhZ2dhYmxlXCIgKS5kcmFnZ2FibGUoKTtcbiAgfTtcblxuICBtYWtlQ2xhc3NEcmFnZ2FibGUoKSB7XG4gICAgJCggXCIjZHJhZ2dhYmxlMVwiICkuZHJhZ2dhYmxlKCk7XG4gIH07XG5cbiAgbWFrZUtub2JEcmFnZ2FibGUoKSB7XG4gICAgJCggXCIjZHJhZ2dhYmxlMlwiICkuZHJhZ2dhYmxlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEcmFnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFOLENBQVc7RUFFVEMsSUFBSSxHQUFHLENBRU47O0VBQ0RDLGFBQWEsR0FBRztJQUNkQyxDQUFDLENBQUUsWUFBRixDQUFELENBQWtCQyxTQUFsQjtFQUNEOztFQUVEQyxrQkFBa0IsR0FBRztJQUNuQkYsQ0FBQyxDQUFFLGFBQUYsQ0FBRCxDQUFtQkMsU0FBbkI7RUFDRDs7RUFFREUsaUJBQWlCLEdBQUc7SUFDbEJILENBQUMsQ0FBRSxhQUFGLENBQUQsQ0FBbUJDLFNBQW5CO0VBQ0Q7O0FBZlE7O0FBa0JYRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLElBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/drag.js\n");

/***/ }),

/***/ "./src/scripts/knob.js":
/*!*****************************!*\
  !*** ./src/scripts/knob.js ***!
  \*****************************/
/***/ (function(module) {

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  constructor(oscillator, audioCtx) {\n    this.osc = oscillator;\n    this.audioCtx = audioCtx;\n  }\n\n  runKnob() {\n    const knob = document.querySelector(\".knob\");\n\n    function volumeKnob(e) {\n      const container = document.querySelector('.module-container');\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - (container.offsetLeft + knob.offsetLeft); //+70\n\n      const y = e.clientY - (container.offsetTop + knob.offsetTop); //+1s\n\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      const deg = rad * (180 / Math.PI); //used to be let\n\n      return deg;\n    }\n\n    function rotate(e) {\n      let result = Math.floor(volumeKnob(e) - 80);\n      knob.style.transform = `rotate(${result}deg)`;\n\n      if (result < 0) {\n        result = 360 + result;\n      }\n\n      this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime);\n      console.log(result); // return result;\n    }\n\n    const that = this;\n    const boundRotate = rotate.bind(this);\n\n    function startRotation(e) {\n      knob.addEventListener(\"mousemove\", boundRotate);\n      knob.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      knob.removeEventListener(\"mousemove\", boundRotate);\n      knob.removeEventListener(\"mouseup\", endRotation);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nmodule.exports = Knob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iLmpzLmpzIiwibmFtZXMiOlsiS25vYiIsImNvbnN0cnVjdG9yIiwib3NjaWxsYXRvciIsImF1ZGlvQ3R4Iiwib3NjIiwicnVuS25vYiIsImtub2IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2b2x1bWVLbm9iIiwiZSIsImNvbnRhaW5lciIsInciLCJjbGllbnRXaWR0aCIsImgiLCJjbGllbnRIZWlnaHQiLCJ4IiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJ5IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsImRYIiwiZFkiLCJyYWQiLCJNYXRoIiwiYXRhbjIiLCJkZWciLCJQSSIsInJvdGF0ZSIsInJlc3VsdCIsImZsb29yIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJmcmVxdWVuY3kiLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwiY29uc29sZSIsImxvZyIsInRoYXQiLCJib3VuZFJvdGF0ZSIsImJpbmQiLCJzdGFydFJvdGF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZFJvdGF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvc2NyaXB0cy9rbm9iLmpzPzJjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc291cmNlOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUMybTR3TWZqbGxBXG5cbmNsYXNzIEtub2Ige1xuICBjb25zdHJ1Y3Rvcihvc2NpbGxhdG9yLCBhdWRpb0N0eCl7XG4gICAgdGhpcy5vc2MgPSBvc2NpbGxhdG9yO1xuICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcbiAgfVxuXG4gIHJ1bktub2IoKSB7XG4gICAgY29uc3Qga25vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25vYlwiKTtcblxuICAgIGZ1bmN0aW9uIHZvbHVtZUtub2IoZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHcgPSBrbm9iLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IGggPSBrbm9iLmNsaWVudEhlaWdodCAvIDI7XG5cbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSAoY29udGFpbmVyLm9mZnNldExlZnQgKyBrbm9iLm9mZnNldExlZnQpOyAvLys3MFxuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIChjb250YWluZXIub2Zmc2V0VG9wICsga25vYi5vZmZzZXRUb3ApOyAvLysxc1xuXG4gICAgICBjb25zdCBkWCA9IHcteDtcbiAgICAgIGNvbnN0IGRZID0gaC15O1xuXG4gICAgICBjb25zdCByYWQgPSBNYXRoLmF0YW4yKGRZLCBkWCk7XG5cbiAgICAgIGNvbnN0IGRlZyA9IHJhZCAqICgxODAgLyBNYXRoLlBJKTsgLy91c2VkIHRvIGJlIGxldFxuXG4gICAgICByZXR1cm4gZGVnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdGF0ZShlKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gTWF0aC5mbG9vcih2b2x1bWVLbm9iKGUpIC0gODApO1xuICAgICAga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cmVzdWx0fWRlZylgO1xuXG4gICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICByZXN1bHQgPSAzNjAgKyByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZShyZXN1bHQsIHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWUpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAvLyByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJvdW5kUm90YXRlID0gcm90YXRlLmJpbmQodGhpcyk7XG4gICAgZnVuY3Rpb24gc3RhcnRSb3RhdGlvbihlKSB7XG4gICAgICBrbm9iLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgYm91bmRSb3RhdGUpO1xuICAgICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmRSb3RhdGlvbik7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZFJvdGF0aW9uKCkge1xuICAgICAga25vYi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGJvdW5kUm90YXRlKTtcbiAgICAgIGtub2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZW5kUm90YXRpb24pO1xuICAgIH1cblxuICAgIGtub2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFJvdGF0aW9uKTtcblxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLbm9iO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsSUFBTixDQUFXO0VBQ1RDLFdBQVcsQ0FBQ0MsVUFBRCxFQUFhQyxRQUFiLEVBQXNCO0lBQy9CLEtBQUtDLEdBQUwsR0FBV0YsVUFBWDtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0Q7O0VBRURFLE9BQU8sR0FBRztJQUNSLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7O0lBRUEsU0FBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7TUFDckIsTUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO01BQ0EsTUFBTUksQ0FBQyxHQUFHTixJQUFJLENBQUNPLFdBQUwsR0FBbUIsQ0FBN0I7TUFDQSxNQUFNQyxDQUFDLEdBQUdSLElBQUksQ0FBQ1MsWUFBTCxHQUFvQixDQUE5QjtNQUVBLE1BQU1DLENBQUMsR0FBR04sQ0FBQyxDQUFDTyxPQUFGLElBQWFOLFNBQVMsQ0FBQ08sVUFBVixHQUF1QlosSUFBSSxDQUFDWSxVQUF6QyxDQUFWLENBTHFCLENBSzJDOztNQUNoRSxNQUFNQyxDQUFDLEdBQUdULENBQUMsQ0FBQ1UsT0FBRixJQUFhVCxTQUFTLENBQUNVLFNBQVYsR0FBc0JmLElBQUksQ0FBQ2UsU0FBeEMsQ0FBVixDQU5xQixDQU15Qzs7TUFFOUQsTUFBTUMsRUFBRSxHQUFHVixDQUFDLEdBQUNJLENBQWI7TUFDQSxNQUFNTyxFQUFFLEdBQUdULENBQUMsR0FBQ0ssQ0FBYjtNQUVBLE1BQU1LLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEVBQVgsRUFBZUQsRUFBZixDQUFaO01BRUEsTUFBTUssR0FBRyxHQUFHSCxHQUFHLElBQUksTUFBTUMsSUFBSSxDQUFDRyxFQUFmLENBQWYsQ0FicUIsQ0FhYzs7TUFFbkMsT0FBT0QsR0FBUDtJQUNEOztJQUVELFNBQVNFLE1BQVQsQ0FBZ0JuQixDQUFoQixFQUFtQjtNQUNqQixJQUFJb0IsTUFBTSxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV3RCLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWLEdBQWdCLEVBQTNCLENBQWI7TUFDQUosSUFBSSxDQUFDMEIsS0FBTCxDQUFXQyxTQUFYLEdBQXdCLFVBQVNILE1BQU8sTUFBeEM7O01BRUEsSUFBSUEsTUFBTSxHQUFHLENBQWIsRUFBZ0I7UUFDZEEsTUFBTSxHQUFHLE1BQU1BLE1BQWY7TUFDRDs7TUFFRCxLQUFLMUIsR0FBTCxDQUFTOEIsU0FBVCxDQUFtQkMsY0FBbkIsQ0FBa0NMLE1BQWxDLEVBQTBDLEtBQUszQixRQUFMLENBQWNpQyxXQUF4RDtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWixFQVRpQixDQVVqQjtJQUNEOztJQUVELE1BQU1TLElBQUksR0FBRyxJQUFiO0lBQ0EsTUFBTUMsV0FBVyxHQUFHWCxNQUFNLENBQUNZLElBQVAsQ0FBWSxJQUFaLENBQXBCOztJQUNBLFNBQVNDLGFBQVQsQ0FBdUJoQyxDQUF2QixFQUEwQjtNQUN4QkosSUFBSSxDQUFDcUMsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUNILFdBQW5DO01BQ0FsQyxJQUFJLENBQUNxQyxnQkFBTCxDQUFzQixTQUF0QixFQUFpQ0MsV0FBakM7TUFDQWxDLENBQUMsQ0FBQ21DLGVBQUY7SUFDRDs7SUFFRCxTQUFTRCxXQUFULEdBQXVCO01BQ3JCdEMsSUFBSSxDQUFDd0MsbUJBQUwsQ0FBeUIsV0FBekIsRUFBc0NOLFdBQXRDO01BQ0FsQyxJQUFJLENBQUN3QyxtQkFBTCxDQUF5QixTQUF6QixFQUFvQ0YsV0FBcEM7SUFDRDs7SUFFRHRDLElBQUksQ0FBQ3FDLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DRCxhQUFuQztFQUVEOztBQXZEUTs7QUEyRFhLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhELElBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/knob.js\n");

/***/ }),

/***/ "./src/scripts/oscillator.js":
/*!***********************************!*\
  !*** ./src/scripts/oscillator.js ***!
  \***********************************/
/***/ (function(module) {

eval("class Oscillator {\n  init(audioCtx, buttonNum) {\n    audioCtx = audioCtx; // get this from the context.js file\n\n    const oscillator = audioCtx.createOscillator();\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);\n    oscillator.connect(audioCtx.destination); // document.querySelector('button').addEventListener('click', function() {\n    // oscillator.start();\n    //   })\n\n    console.log(document.querySelector('.second-button'));\n    document.querySelector(`.button${buttonNum}`).addEventListener('click', function () {\n      oscillator.start();\n    });\n    return oscillator;\n  }\n\n}\n\nmodule.exports = Oscillator;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vc2NpbGxhdG9yLmpzLmpzIiwibmFtZXMiOlsiT3NjaWxsYXRvciIsImluaXQiLCJhdWRpb0N0eCIsImJ1dHRvbk51bSIsIm9zY2lsbGF0b3IiLCJjcmVhdGVPc2NpbGxhdG9yIiwidHlwZSIsImZyZXF1ZW5jeSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9zY3JpcHRzL29zY2lsbGF0b3IuanM/ZTRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBPc2NpbGxhdG9yIHtcblxuICBpbml0KGF1ZGlvQ3R4LCBidXR0b25OdW0pIHtcblxuICAgIGF1ZGlvQ3R4ID0gYXVkaW9DdHg7IC8vIGdldCB0aGlzIGZyb20gdGhlIGNvbnRleHQuanMgZmlsZVxuICAgIGNvbnN0IG9zY2lsbGF0b3IgPSBhdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgb3NjaWxsYXRvci50eXBlID0gJ3NpbmUnO1xuICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDIyMCwgYXVkaW9DdHguY3VycmVudFRpbWUpO1xuICAgIG9zY2lsbGF0b3IuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIG9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgICAvLyAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWJ1dHRvbicpKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1dHRvbiR7YnV0dG9uTnVtfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBvc2NpbGxhdG9yLnN0YXJ0KCk7XG4gICAgICAgIH0pXG5cblxuICAgIHJldHVybiBvc2NpbGxhdG9yO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPc2NpbGxhdG9yOyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBTixDQUFpQjtFQUVmQyxJQUFJLENBQUNDLFFBQUQsRUFBV0MsU0FBWCxFQUFzQjtJQUV4QkQsUUFBUSxHQUFHQSxRQUFYLENBRndCLENBRUg7O0lBQ3JCLE1BQU1FLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxnQkFBVCxFQUFuQjtJQUNBRCxVQUFVLENBQUNFLElBQVgsR0FBa0IsTUFBbEI7SUFDQUYsVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxjQUFyQixDQUFvQyxHQUFwQyxFQUF5Q04sUUFBUSxDQUFDTyxXQUFsRDtJQUNBTCxVQUFVLENBQUNNLE9BQVgsQ0FBbUJSLFFBQVEsQ0FBQ1MsV0FBNUIsRUFOd0IsQ0FReEI7SUFDQTtJQUNBOztJQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFaO0lBRUFELFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixVQUFTWixTQUFVLEVBQTNDLEVBQThDYSxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsWUFBVztNQUNqRlosVUFBVSxDQUFDYSxLQUFYO0lBQ0csQ0FGTDtJQUtBLE9BQU9iLFVBQVA7RUFDQzs7QUF0Qlk7O0FBeUJqQmMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsVUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/oscillator.js\n");

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