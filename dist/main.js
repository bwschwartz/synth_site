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

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nlet osc1 = new Oscillator();\nlet osc2 = new Oscillator();\nlet osc3 = new Oscillator();\nlet osc4 = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\n\nconst Knob = __webpack_require__(/*! ./scripts/knob */ \"./src/scripts/knob.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  drag.makeDraggable();\n  osc1 = osc1.init(audioCtx, 1); //is this kosher (passing in arg to init)\n\n  osc2 = osc2.init(audioCtx, 2);\n  osc3 = osc3.init(audioCtx, 3);\n  osc4 = osc4.init(audioCtx, 4);\n  drag.makeClassDraggable();\n  drag.makeKnobDraggable();\n  const knob1 = new Knob(osc1, audioCtx, 1);\n  const knob2 = new Knob(osc2, audioCtx, 2);\n  const knob3 = new Knob(osc3, audioCtx, 3);\n  const knob4 = new Knob(osc4, audioCtx, 4);\n  knob1.runKnob();\n  knob2.runKnob();\n  knob3.runKnob();\n  knob4.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJRixVQUFKLEVBQVg7QUFDQSxJQUFJRyxJQUFJLEdBQUcsSUFBSUgsVUFBSixFQUFYO0FBQ0EsSUFBSUksSUFBSSxHQUFHLElBQUlKLFVBQUosRUFBWDtBQUNBLElBQUlLLElBQUksR0FBRyxJQUFJTCxVQUFKLEVBQVg7O0FBRUEsTUFBTU0sSUFBSSxHQUFHTCxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1NLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHUCxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1RLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHWCxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUVBWSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBQ2pEUCxJQUFJLENBQUNRLGFBQUw7RUFFQWIsSUFBSSxHQUFHQSxJQUFJLENBQUNjLElBQUwsQ0FBVU4sUUFBVixFQUFvQixDQUFwQixDQUFQLENBSGlELENBR2xCOztFQUMvQlAsSUFBSSxHQUFHQSxJQUFJLENBQUNhLElBQUwsQ0FBVU4sUUFBVixFQUFvQixDQUFwQixDQUFQO0VBQ0FOLElBQUksR0FBR0EsSUFBSSxDQUFDWSxJQUFMLENBQVVOLFFBQVYsRUFBb0IsQ0FBcEIsQ0FBUDtFQUNBTCxJQUFJLEdBQUdBLElBQUksQ0FBQ1csSUFBTCxDQUFVTixRQUFWLEVBQW9CLENBQXBCLENBQVA7RUFFQUgsSUFBSSxDQUFDVSxrQkFBTDtFQUNBVixJQUFJLENBQUNXLGlCQUFMO0VBRUEsTUFBTUMsS0FBSyxHQUFHLElBQUlQLElBQUosQ0FBU1YsSUFBVCxFQUFlUSxRQUFmLEVBQXlCLENBQXpCLENBQWQ7RUFDQSxNQUFNVSxLQUFLLEdBQUcsSUFBSVIsSUFBSixDQUFTVCxJQUFULEVBQWVPLFFBQWYsRUFBeUIsQ0FBekIsQ0FBZDtFQUNBLE1BQU1XLEtBQUssR0FBRyxJQUFJVCxJQUFKLENBQVNSLElBQVQsRUFBZU0sUUFBZixFQUF5QixDQUF6QixDQUFkO0VBQ0EsTUFBTVksS0FBSyxHQUFHLElBQUlWLElBQUosQ0FBU1AsSUFBVCxFQUFlSyxRQUFmLEVBQXlCLENBQXpCLENBQWQ7RUFFQVMsS0FBSyxDQUFDSSxPQUFOO0VBQ0FILEtBQUssQ0FBQ0csT0FBTjtFQUNBRixLQUFLLENBQUNFLE9BQU47RUFDQUQsS0FBSyxDQUFDQyxPQUFOO0FBRUQsQ0FyQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3NjaWxsYXRvciA9IHJlcXVpcmUoJy4vc2NyaXB0cy9vc2NpbGxhdG9yJylcbmxldCBvc2MxID0gbmV3IE9zY2lsbGF0b3I7XG5sZXQgb3NjMiA9IG5ldyBPc2NpbGxhdG9yO1xubGV0IG9zYzMgPSBuZXcgT3NjaWxsYXRvcjtcbmxldCBvc2M0ID0gbmV3IE9zY2lsbGF0b3I7XG5cbmNvbnN0IERyYWcgPSByZXF1aXJlKCcuL3NjcmlwdHMvZHJhZycpXG5jb25zdCBkcmFnID0gbmV3IERyYWc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL3NjcmlwdHMvY29udGV4dCcpXG5jb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQ7XG5jb25zdCBhdWRpb0N0eCA9IGNvbnRleHQubWFrZUNvbnRleHQoKVxuXG5jb25zdCBLbm9iID0gcmVxdWlyZSgnLi9zY3JpcHRzL2tub2InKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgZHJhZy5tYWtlRHJhZ2dhYmxlKCk7XG5cbiAgb3NjMSA9IG9zYzEuaW5pdChhdWRpb0N0eCwgMSk7IC8vaXMgdGhpcyBrb3NoZXIgKHBhc3NpbmcgaW4gYXJnIHRvIGluaXQpXG4gIG9zYzIgPSBvc2MyLmluaXQoYXVkaW9DdHgsIDIpO1xuICBvc2MzID0gb3NjMy5pbml0KGF1ZGlvQ3R4LCAzKTtcbiAgb3NjNCA9IG9zYzQuaW5pdChhdWRpb0N0eCwgNCk7XG5cbiAgZHJhZy5tYWtlQ2xhc3NEcmFnZ2FibGUoKTtcbiAgZHJhZy5tYWtlS25vYkRyYWdnYWJsZSgpO1xuXG4gIGNvbnN0IGtub2IxID0gbmV3IEtub2Iob3NjMSwgYXVkaW9DdHgsIDEpO1xuICBjb25zdCBrbm9iMiA9IG5ldyBLbm9iKG9zYzIsIGF1ZGlvQ3R4LCAyKTtcbiAgY29uc3Qga25vYjMgPSBuZXcgS25vYihvc2MzLCBhdWRpb0N0eCwgMyk7XG4gIGNvbnN0IGtub2I0ID0gbmV3IEtub2Iob3NjNCwgYXVkaW9DdHgsIDQpO1xuXG4gIGtub2IxLnJ1bktub2IoKTtcbiAga25vYjIucnVuS25vYigpO1xuICBrbm9iMy5ydW5Lbm9iKCk7XG4gIGtub2I0LnJ1bktub2IoKTtcblxufSk7XG4iXSwibmFtZXMiOlsiT3NjaWxsYXRvciIsInJlcXVpcmUiLCJvc2MxIiwib3NjMiIsIm9zYzMiLCJvc2M0IiwiRHJhZyIsImRyYWciLCJDb250ZXh0IiwiY29udGV4dCIsImF1ZGlvQ3R4IiwibWFrZUNvbnRleHQiLCJLbm9iIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZURyYWdnYWJsZSIsImluaXQiLCJtYWtlQ2xhc3NEcmFnZ2FibGUiLCJtYWtlS25vYkRyYWdnYWJsZSIsImtub2IxIiwia25vYjIiLCJrbm9iMyIsImtub2I0IiwicnVuS25vYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  constructor(oscillator, audioCtx, knobNum) {\n    this.osc = oscillator;\n    this.audioCtx = audioCtx;\n    this.knobNum = knobNum || 1;\n  }\n\n  runKnob() {\n    const knob = document.querySelector(`#knob${this.knobNum}`);\n\n    function volumeKnob(e) {\n      const container = document.querySelector('.module-container');\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - (container.offsetLeft + knob.offsetLeft); //+70\n\n      const y = e.clientY - (container.offsetTop + knob.offsetTop); //+1s\n\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      const deg = rad * (180 / Math.PI); //used to be let\n\n      return deg;\n    }\n\n    function rotate(e) {\n      let result = Math.floor(volumeKnob(e) - 80);\n      knob.style.transform = `rotate(${result}deg)`;\n\n      if (result < 0) {\n        result = 360 + result;\n      }\n\n      this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime);\n      console.log(result);\n    }\n\n    const that = this;\n    const boundRotate = rotate.bind(this);\n\n    function startRotation(e) {\n      knob.addEventListener(\"mousemove\", boundRotate);\n      knob.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      knob.removeEventListener(\"mousemove\", boundRotate);\n      knob.removeEventListener(\"mouseup\", endRotation);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nmodule.exports = Knob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iLmpzLmpzIiwibmFtZXMiOlsiS25vYiIsImNvbnN0cnVjdG9yIiwib3NjaWxsYXRvciIsImF1ZGlvQ3R4Iiwia25vYk51bSIsIm9zYyIsInJ1bktub2IiLCJrbm9iIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidm9sdW1lS25vYiIsImUiLCJjb250YWluZXIiLCJ3IiwiY2xpZW50V2lkdGgiLCJoIiwiY2xpZW50SGVpZ2h0IiwieCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwieSIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJkWCIsImRZIiwicmFkIiwiTWF0aCIsImF0YW4yIiwiZGVnIiwiUEkiLCJyb3RhdGUiLCJyZXN1bHQiLCJmbG9vciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZnJlcXVlbmN5Iiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGF0IiwiYm91bmRSb3RhdGUiLCJiaW5kIiwic3RhcnRSb3RhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmRSb3RhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMva25vYi5qcz8yY2E1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNvdXJjZTogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1DMm00d01mamxsQVxuXG5jbGFzcyBLbm9iIHtcbiAgY29uc3RydWN0b3Iob3NjaWxsYXRvciwgYXVkaW9DdHgsIGtub2JOdW0pe1xuICAgIHRoaXMub3NjID0gb3NjaWxsYXRvcjtcbiAgICB0aGlzLmF1ZGlvQ3R4ID0gYXVkaW9DdHg7XG4gICAgdGhpcy5rbm9iTnVtID0ga25vYk51bSB8fCAxO1xuICB9XG5cbiAgcnVuS25vYigpIHtcbiAgICBjb25zdCBrbm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2tub2Ike3RoaXMua25vYk51bX1gKTtcblxuICAgIGZ1bmN0aW9uIHZvbHVtZUtub2IoZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHcgPSBrbm9iLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IGggPSBrbm9iLmNsaWVudEhlaWdodCAvIDI7XG5cbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSAoY29udGFpbmVyLm9mZnNldExlZnQgKyBrbm9iLm9mZnNldExlZnQpOyAvLys3MFxuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIChjb250YWluZXIub2Zmc2V0VG9wICsga25vYi5vZmZzZXRUb3ApOyAvLysxc1xuXG4gICAgICBjb25zdCBkWCA9IHcteDtcbiAgICAgIGNvbnN0IGRZID0gaC15O1xuXG4gICAgICBjb25zdCByYWQgPSBNYXRoLmF0YW4yKGRZLCBkWCk7XG5cbiAgICAgIGNvbnN0IGRlZyA9IHJhZCAqICgxODAgLyBNYXRoLlBJKTsgLy91c2VkIHRvIGJlIGxldFxuXG4gICAgICByZXR1cm4gZGVnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdGF0ZShlKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gTWF0aC5mbG9vcih2b2x1bWVLbm9iKGUpIC0gODApO1xuICAgICAga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cmVzdWx0fWRlZylgO1xuXG4gICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICByZXN1bHQgPSAzNjAgKyByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZShyZXN1bHQsIHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWUpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgfVxuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYm91bmRSb3RhdGUgPSByb3RhdGUuYmluZCh0aGlzKTtcbiAgICBmdW5jdGlvbiBzdGFydFJvdGF0aW9uKGUpIHtcbiAgICAgIGtub2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBib3VuZFJvdGF0ZSk7XG4gICAgICBrbm9iLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVuZFJvdGF0aW9uKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kUm90YXRpb24oKSB7XG4gICAgICBrbm9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgYm91bmRSb3RhdGUpO1xuICAgICAga25vYi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmRSb3RhdGlvbik7XG4gICAgfVxuXG4gICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0Um90YXRpb24pO1xuXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtub2I7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxJQUFOLENBQVc7RUFDVEMsV0FBVyxDQUFDQyxVQUFELEVBQWFDLFFBQWIsRUFBdUJDLE9BQXZCLEVBQStCO0lBQ3hDLEtBQUtDLEdBQUwsR0FBV0gsVUFBWDtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBS0MsT0FBTCxHQUFlQSxPQUFPLElBQUksQ0FBMUI7RUFDRDs7RUFFREUsT0FBTyxHQUFHO0lBQ1IsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBd0IsUUFBTyxLQUFLTCxPQUFRLEVBQTVDLENBQWI7O0lBRUEsU0FBU00sVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7TUFDckIsTUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO01BQ0EsTUFBTUksQ0FBQyxHQUFHTixJQUFJLENBQUNPLFdBQUwsR0FBbUIsQ0FBN0I7TUFDQSxNQUFNQyxDQUFDLEdBQUdSLElBQUksQ0FBQ1MsWUFBTCxHQUFvQixDQUE5QjtNQUVBLE1BQU1DLENBQUMsR0FBR04sQ0FBQyxDQUFDTyxPQUFGLElBQWFOLFNBQVMsQ0FBQ08sVUFBVixHQUF1QlosSUFBSSxDQUFDWSxVQUF6QyxDQUFWLENBTHFCLENBSzJDOztNQUNoRSxNQUFNQyxDQUFDLEdBQUdULENBQUMsQ0FBQ1UsT0FBRixJQUFhVCxTQUFTLENBQUNVLFNBQVYsR0FBc0JmLElBQUksQ0FBQ2UsU0FBeEMsQ0FBVixDQU5xQixDQU15Qzs7TUFFOUQsTUFBTUMsRUFBRSxHQUFHVixDQUFDLEdBQUNJLENBQWI7TUFDQSxNQUFNTyxFQUFFLEdBQUdULENBQUMsR0FBQ0ssQ0FBYjtNQUVBLE1BQU1LLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEVBQVgsRUFBZUQsRUFBZixDQUFaO01BRUEsTUFBTUssR0FBRyxHQUFHSCxHQUFHLElBQUksTUFBTUMsSUFBSSxDQUFDRyxFQUFmLENBQWYsQ0FicUIsQ0FhYzs7TUFFbkMsT0FBT0QsR0FBUDtJQUNEOztJQUVELFNBQVNFLE1BQVQsQ0FBZ0JuQixDQUFoQixFQUFtQjtNQUNqQixJQUFJb0IsTUFBTSxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV3RCLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWLEdBQWdCLEVBQTNCLENBQWI7TUFDQUosSUFBSSxDQUFDMEIsS0FBTCxDQUFXQyxTQUFYLEdBQXdCLFVBQVNILE1BQU8sTUFBeEM7O01BRUEsSUFBSUEsTUFBTSxHQUFHLENBQWIsRUFBZ0I7UUFDZEEsTUFBTSxHQUFHLE1BQU1BLE1BQWY7TUFDRDs7TUFFRCxLQUFLMUIsR0FBTCxDQUFTOEIsU0FBVCxDQUFtQkMsY0FBbkIsQ0FBa0NMLE1BQWxDLEVBQTBDLEtBQUs1QixRQUFMLENBQWNrQyxXQUF4RDtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWjtJQUNEOztJQUVELE1BQU1TLElBQUksR0FBRyxJQUFiO0lBQ0EsTUFBTUMsV0FBVyxHQUFHWCxNQUFNLENBQUNZLElBQVAsQ0FBWSxJQUFaLENBQXBCOztJQUNBLFNBQVNDLGFBQVQsQ0FBdUJoQyxDQUF2QixFQUEwQjtNQUN4QkosSUFBSSxDQUFDcUMsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUNILFdBQW5DO01BQ0FsQyxJQUFJLENBQUNxQyxnQkFBTCxDQUFzQixTQUF0QixFQUFpQ0MsV0FBakM7TUFDQWxDLENBQUMsQ0FBQ21DLGVBQUY7SUFDRDs7SUFFRCxTQUFTRCxXQUFULEdBQXVCO01BQ3JCdEMsSUFBSSxDQUFDd0MsbUJBQUwsQ0FBeUIsV0FBekIsRUFBc0NOLFdBQXRDO01BQ0FsQyxJQUFJLENBQUN3QyxtQkFBTCxDQUF5QixTQUF6QixFQUFvQ0YsV0FBcEM7SUFDRDs7SUFFRHRDLElBQUksQ0FBQ3FDLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DRCxhQUFuQztFQUVEOztBQXZEUTs7QUEyRFhLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpELElBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/knob.js\n");

/***/ }),

/***/ "./src/scripts/oscillator.js":
/*!***********************************!*\
  !*** ./src/scripts/oscillator.js ***!
  \***********************************/
/***/ (function(module) {

eval("class Oscillator {\n  init(audioCtx, buttonNum) {\n    audioCtx = audioCtx; // get this from the context.js file\n\n    const oscillator = audioCtx.createOscillator();\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);\n    oscillator.connect(audioCtx.destination);\n    document.querySelector(`.button${buttonNum}`).addEventListener('click', function () {\n      oscillator.start();\n    });\n    return oscillator;\n  }\n\n}\n\nmodule.exports = Oscillator;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vc2NpbGxhdG9yLmpzLmpzIiwibmFtZXMiOlsiT3NjaWxsYXRvciIsImluaXQiLCJhdWRpb0N0eCIsImJ1dHRvbk51bSIsIm9zY2lsbGF0b3IiLCJjcmVhdGVPc2NpbGxhdG9yIiwidHlwZSIsImZyZXF1ZW5jeSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMvb3NjaWxsYXRvci5qcz9lNGU0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE9zY2lsbGF0b3Ige1xuXG4gIGluaXQoYXVkaW9DdHgsIGJ1dHRvbk51bSkge1xuXG4gICAgYXVkaW9DdHggPSBhdWRpb0N0eDsgLy8gZ2V0IHRoaXMgZnJvbSB0aGUgY29udGV4dC5qcyBmaWxlXG4gICAgY29uc3Qgb3NjaWxsYXRvciA9IGF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICBvc2NpbGxhdG9yLnR5cGUgPSAnc2luZSc7XG4gICAgb3NjaWxsYXRvci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoMjIwLCBhdWRpb0N0eC5jdXJyZW50VGltZSk7XG4gICAgb3NjaWxsYXRvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idXR0b24ke2J1dHRvbk51bX1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgb3NjaWxsYXRvci5zdGFydCgpO1xuICAgICAgICB9KVxuXG5cbiAgICByZXR1cm4gb3NjaWxsYXRvcjtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3NjaWxsYXRvcjsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQU4sQ0FBaUI7RUFFZkMsSUFBSSxDQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBc0I7SUFFeEJELFFBQVEsR0FBR0EsUUFBWCxDQUZ3QixDQUVIOztJQUNyQixNQUFNRSxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQVQsRUFBbkI7SUFDQUQsVUFBVSxDQUFDRSxJQUFYLEdBQWtCLE1BQWxCO0lBQ0FGLFVBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsY0FBckIsQ0FBb0MsR0FBcEMsRUFBeUNOLFFBQVEsQ0FBQ08sV0FBbEQ7SUFDQUwsVUFBVSxDQUFDTSxPQUFYLENBQW1CUixRQUFRLENBQUNTLFdBQTVCO0lBRUFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixVQUFTVixTQUFVLEVBQTNDLEVBQThDVyxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsWUFBVztNQUNqRlYsVUFBVSxDQUFDVyxLQUFYO0lBQ0csQ0FGTDtJQUtBLE9BQU9YLFVBQVA7RUFDQzs7QUFoQlk7O0FBbUJqQlksTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsVUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/oscillator.js\n");

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