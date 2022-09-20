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

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nlet osc1 = new Oscillator();\nlet osc2 = new Oscillator();\nlet osc3 = new Oscillator();\nlet osc4 = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\n\nconst Knob = __webpack_require__(/*! ./scripts/knob */ \"./src/scripts/knob.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  drag.makeDraggable();\n  osc1 = osc1.init(audioCtx, 1); //is this kosher (passing in arg to init)\n\n  osc2 = osc2.init(audioCtx, 2);\n  osc3 = osc3.init(audioCtx, 3);\n  osc4 = osc4.init(audioCtx, 4);\n  drag.makeClassDraggable(); // drag.makeKnobDraggable();\n\n  drag.makeVcoDraggable();\n  const knob1 = new Knob(osc1, audioCtx, 1);\n  const knob2 = new Knob(osc2, audioCtx, 2);\n  const knob3 = new Knob(osc3, audioCtx, 3);\n  const knob4 = new Knob(osc4, audioCtx, 4);\n  knob1.runKnob();\n  knob2.runKnob();\n  knob3.runKnob();\n  knob4.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJRixVQUFKLEVBQVg7QUFDQSxJQUFJRyxJQUFJLEdBQUcsSUFBSUgsVUFBSixFQUFYO0FBQ0EsSUFBSUksSUFBSSxHQUFHLElBQUlKLFVBQUosRUFBWDtBQUNBLElBQUlLLElBQUksR0FBRyxJQUFJTCxVQUFKLEVBQVg7O0FBRUEsTUFBTU0sSUFBSSxHQUFHTCxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1NLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHUCxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1RLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHWCxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUVBWSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBRWpEUCxJQUFJLENBQUNRLGFBQUw7RUFFQWIsSUFBSSxHQUFHQSxJQUFJLENBQUNjLElBQUwsQ0FBVU4sUUFBVixFQUFvQixDQUFwQixDQUFQLENBSmlELENBSWxCOztFQUMvQlAsSUFBSSxHQUFHQSxJQUFJLENBQUNhLElBQUwsQ0FBVU4sUUFBVixFQUFvQixDQUFwQixDQUFQO0VBQ0FOLElBQUksR0FBR0EsSUFBSSxDQUFDWSxJQUFMLENBQVVOLFFBQVYsRUFBb0IsQ0FBcEIsQ0FBUDtFQUNBTCxJQUFJLEdBQUdBLElBQUksQ0FBQ1csSUFBTCxDQUFVTixRQUFWLEVBQW9CLENBQXBCLENBQVA7RUFFQUgsSUFBSSxDQUFDVSxrQkFBTCxHQVRpRCxDQVVqRDs7RUFDQVYsSUFBSSxDQUFDVyxnQkFBTDtFQUVBLE1BQU1DLEtBQUssR0FBRyxJQUFJUCxJQUFKLENBQVNWLElBQVQsRUFBZVEsUUFBZixFQUF5QixDQUF6QixDQUFkO0VBQ0EsTUFBTVUsS0FBSyxHQUFHLElBQUlSLElBQUosQ0FBU1QsSUFBVCxFQUFlTyxRQUFmLEVBQXlCLENBQXpCLENBQWQ7RUFDQSxNQUFNVyxLQUFLLEdBQUcsSUFBSVQsSUFBSixDQUFTUixJQUFULEVBQWVNLFFBQWYsRUFBeUIsQ0FBekIsQ0FBZDtFQUNBLE1BQU1ZLEtBQUssR0FBRyxJQUFJVixJQUFKLENBQVNQLElBQVQsRUFBZUssUUFBZixFQUF5QixDQUF6QixDQUFkO0VBRUFTLEtBQUssQ0FBQ0ksT0FBTjtFQUNBSCxLQUFLLENBQUNHLE9BQU47RUFDQUYsS0FBSyxDQUFDRSxPQUFOO0VBQ0FELEtBQUssQ0FBQ0MsT0FBTjtBQUVELENBdkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9zY2lsbGF0b3IgPSByZXF1aXJlKCcuL3NjcmlwdHMvb3NjaWxsYXRvcicpXG5sZXQgb3NjMSA9IG5ldyBPc2NpbGxhdG9yO1xubGV0IG9zYzIgPSBuZXcgT3NjaWxsYXRvcjtcbmxldCBvc2MzID0gbmV3IE9zY2lsbGF0b3I7XG5sZXQgb3NjNCA9IG5ldyBPc2NpbGxhdG9yO1xuXG5jb25zdCBEcmFnID0gcmVxdWlyZSgnLi9zY3JpcHRzL2RyYWcnKVxuY29uc3QgZHJhZyA9IG5ldyBEcmFnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9zY3JpcHRzL2NvbnRleHQnKVxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0O1xuY29uc3QgYXVkaW9DdHggPSBjb250ZXh0Lm1ha2VDb250ZXh0KClcblxuY29uc3QgS25vYiA9IHJlcXVpcmUoJy4vc2NyaXB0cy9rbm9iJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG5cbiAgZHJhZy5tYWtlRHJhZ2dhYmxlKCk7XG5cbiAgb3NjMSA9IG9zYzEuaW5pdChhdWRpb0N0eCwgMSk7IC8vaXMgdGhpcyBrb3NoZXIgKHBhc3NpbmcgaW4gYXJnIHRvIGluaXQpXG4gIG9zYzIgPSBvc2MyLmluaXQoYXVkaW9DdHgsIDIpO1xuICBvc2MzID0gb3NjMy5pbml0KGF1ZGlvQ3R4LCAzKTtcbiAgb3NjNCA9IG9zYzQuaW5pdChhdWRpb0N0eCwgNCk7XG5cbiAgZHJhZy5tYWtlQ2xhc3NEcmFnZ2FibGUoKTtcbiAgLy8gZHJhZy5tYWtlS25vYkRyYWdnYWJsZSgpO1xuICBkcmFnLm1ha2VWY29EcmFnZ2FibGUoKTtcblxuICBjb25zdCBrbm9iMSA9IG5ldyBLbm9iKG9zYzEsIGF1ZGlvQ3R4LCAxKTtcbiAgY29uc3Qga25vYjIgPSBuZXcgS25vYihvc2MyLCBhdWRpb0N0eCwgMik7XG4gIGNvbnN0IGtub2IzID0gbmV3IEtub2Iob3NjMywgYXVkaW9DdHgsIDMpO1xuICBjb25zdCBrbm9iNCA9IG5ldyBLbm9iKG9zYzQsIGF1ZGlvQ3R4LCA0KTtcblxuICBrbm9iMS5ydW5Lbm9iKCk7XG4gIGtub2IyLnJ1bktub2IoKTtcbiAga25vYjMucnVuS25vYigpO1xuICBrbm9iNC5ydW5Lbm9iKCk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIk9zY2lsbGF0b3IiLCJyZXF1aXJlIiwib3NjMSIsIm9zYzIiLCJvc2MzIiwib3NjNCIsIkRyYWciLCJkcmFnIiwiQ29udGV4dCIsImNvbnRleHQiLCJhdWRpb0N0eCIsIm1ha2VDb250ZXh0IiwiS25vYiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VEcmFnZ2FibGUiLCJpbml0IiwibWFrZUNsYXNzRHJhZ2dhYmxlIiwibWFrZVZjb0RyYWdnYWJsZSIsImtub2IxIiwia25vYjIiLCJrbm9iMyIsImtub2I0IiwicnVuS25vYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("class Drag {\n  init() {}\n\n  makeDraggable() {\n    $(\"#draggable\").draggable();\n  }\n\n  makeClassDraggable() {\n    $(\"#draggable1\").draggable();\n  }\n\n  makeKnobDraggable() {\n    $(\"#draggable2\").draggable();\n  }\n\n  makeVcoDraggable() {\n    $(\"#draggablevco\").draggable();\n  }\n\n}\n\nmodule.exports = Drag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmFnLmpzLmpzIiwibmFtZXMiOlsiRHJhZyIsImluaXQiLCJtYWtlRHJhZ2dhYmxlIiwiJCIsImRyYWdnYWJsZSIsIm1ha2VDbGFzc0RyYWdnYWJsZSIsIm1ha2VLbm9iRHJhZ2dhYmxlIiwibWFrZVZjb0RyYWdnYWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvc2NyaXB0cy9kcmFnLmpzPzczMDIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJhZyB7XG5cbiAgaW5pdCgpIHtcblxuICB9XG4gIG1ha2VEcmFnZ2FibGUoKSB7XG4gICAgJCggXCIjZHJhZ2dhYmxlXCIgKS5kcmFnZ2FibGUoKTtcbiAgfTtcblxuICBtYWtlQ2xhc3NEcmFnZ2FibGUoKSB7XG4gICAgJCggXCIjZHJhZ2dhYmxlMVwiICkuZHJhZ2dhYmxlKCk7XG4gIH07XG5cbiAgbWFrZUtub2JEcmFnZ2FibGUoKSB7XG4gICAgJCggXCIjZHJhZ2dhYmxlMlwiICkuZHJhZ2dhYmxlKCk7XG4gIH1cblxuICBtYWtlVmNvRHJhZ2dhYmxlKCl7XG4gICAgJCggXCIjZHJhZ2dhYmxldmNvXCIgKS5kcmFnZ2FibGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERyYWc7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQU4sQ0FBVztFQUVUQyxJQUFJLEdBQUcsQ0FFTjs7RUFDREMsYUFBYSxHQUFHO0lBQ2RDLENBQUMsQ0FBRSxZQUFGLENBQUQsQ0FBa0JDLFNBQWxCO0VBQ0Q7O0VBRURDLGtCQUFrQixHQUFHO0lBQ25CRixDQUFDLENBQUUsYUFBRixDQUFELENBQW1CQyxTQUFuQjtFQUNEOztFQUVERSxpQkFBaUIsR0FBRztJQUNsQkgsQ0FBQyxDQUFFLGFBQUYsQ0FBRCxDQUFtQkMsU0FBbkI7RUFDRDs7RUFFREcsZ0JBQWdCLEdBQUU7SUFDaEJKLENBQUMsQ0FBRSxlQUFGLENBQUQsQ0FBcUJDLFNBQXJCO0VBQ0Q7O0FBbkJROztBQXNCWEksTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/drag.js\n");

/***/ }),

/***/ "./src/scripts/knob.js":
/*!*****************************!*\
  !*** ./src/scripts/knob.js ***!
  \*****************************/
/***/ (function(module) {

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  constructor(oscillator, audioCtx, knobNum) {\n    this.osc = oscillator;\n    this.audioCtx = audioCtx;\n    this.knobNum = knobNum || 1;\n  }\n\n  runKnob() {\n    const knob = document.querySelector(`#knob${this.knobNum}`);\n\n    function volumeKnob(e) {\n      const container = document.querySelector('.vco');\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - (container.offsetLeft + knob.offsetLeft); //+70\n\n      const y = e.clientY - (container.offsetTop + knob.offsetTop); //+1s\n\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      const deg = rad * (180 / Math.PI); //used to be let\n\n      return deg;\n    }\n\n    function rotate(e) {\n      let result = Math.floor(volumeKnob(e) - 80);\n      knob.style.transform = `rotate(${result}deg)`;\n\n      if (result < 0) {\n        result = 360 + result;\n      }\n\n      this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime);\n      console.log(result);\n    }\n\n    const that = this;\n    const boundRotate = rotate.bind(this);\n\n    function startRotation(e) {\n      knob.addEventListener(\"mousemove\", boundRotate);\n      knob.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      knob.removeEventListener(\"mousemove\", boundRotate);\n      knob.removeEventListener(\"mouseup\", endRotation);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nmodule.exports = Knob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iLmpzLmpzIiwibmFtZXMiOlsiS25vYiIsImNvbnN0cnVjdG9yIiwib3NjaWxsYXRvciIsImF1ZGlvQ3R4Iiwia25vYk51bSIsIm9zYyIsInJ1bktub2IiLCJrbm9iIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidm9sdW1lS25vYiIsImUiLCJjb250YWluZXIiLCJ3IiwiY2xpZW50V2lkdGgiLCJoIiwiY2xpZW50SGVpZ2h0IiwieCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwieSIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJkWCIsImRZIiwicmFkIiwiTWF0aCIsImF0YW4yIiwiZGVnIiwiUEkiLCJyb3RhdGUiLCJyZXN1bHQiLCJmbG9vciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZnJlcXVlbmN5Iiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGF0IiwiYm91bmRSb3RhdGUiLCJiaW5kIiwic3RhcnRSb3RhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmRSb3RhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMva25vYi5qcz8yY2E1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNvdXJjZTogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1DMm00d01mamxsQVxuXG5jbGFzcyBLbm9iIHtcbiAgY29uc3RydWN0b3Iob3NjaWxsYXRvciwgYXVkaW9DdHgsIGtub2JOdW0pe1xuICAgIHRoaXMub3NjID0gb3NjaWxsYXRvcjtcbiAgICB0aGlzLmF1ZGlvQ3R4ID0gYXVkaW9DdHg7XG4gICAgdGhpcy5rbm9iTnVtID0ga25vYk51bSB8fCAxO1xuICB9XG5cbiAgcnVuS25vYigpIHtcbiAgICBjb25zdCBrbm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2tub2Ike3RoaXMua25vYk51bX1gKTtcblxuICAgIGZ1bmN0aW9uIHZvbHVtZUtub2IoZSkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZjbycpO1xuICAgICAgY29uc3QgdyA9IGtub2IuY2xpZW50V2lkdGggLyAyO1xuICAgICAgY29uc3QgaCA9IGtub2IuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIChjb250YWluZXIub2Zmc2V0TGVmdCArIGtub2Iub2Zmc2V0TGVmdCk7IC8vKzcwXG4gICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gKGNvbnRhaW5lci5vZmZzZXRUb3AgKyBrbm9iLm9mZnNldFRvcCk7IC8vKzFzXG5cbiAgICAgIGNvbnN0IGRYID0gdy14O1xuICAgICAgY29uc3QgZFkgPSBoLXk7XG5cbiAgICAgIGNvbnN0IHJhZCA9IE1hdGguYXRhbjIoZFksIGRYKTtcblxuICAgICAgY29uc3QgZGVnID0gcmFkICogKDE4MCAvIE1hdGguUEkpOyAvL3VzZWQgdG8gYmUgbGV0XG5cbiAgICAgIHJldHVybiBkZWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm90YXRlKGUpIHtcbiAgICAgIGxldCByZXN1bHQgPSBNYXRoLmZsb29yKHZvbHVtZUtub2IoZSkgLSA4MCk7XG4gICAgICBrbm9iLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtyZXN1bHR9ZGVnKWA7XG5cbiAgICAgIGlmIChyZXN1bHQgPCAwKSB7XG4gICAgICAgIHJlc3VsdCA9IDM2MCArIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKHJlc3VsdCwgdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZSlcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBib3VuZFJvdGF0ZSA9IHJvdGF0ZS5iaW5kKHRoaXMpO1xuICAgIGZ1bmN0aW9uIHN0YXJ0Um90YXRpb24oZSkge1xuICAgICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGJvdW5kUm90YXRlKTtcbiAgICAgIGtub2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZW5kUm90YXRpb24pO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRSb3RhdGlvbigpIHtcbiAgICAgIGtub2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBib3VuZFJvdGF0ZSk7XG4gICAgICBrbm9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVuZFJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBrbm9iLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRSb3RhdGlvbik7XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gS25vYjtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLElBQU4sQ0FBVztFQUNUQyxXQUFXLENBQUNDLFVBQUQsRUFBYUMsUUFBYixFQUF1QkMsT0FBdkIsRUFBK0I7SUFDeEMsS0FBS0MsR0FBTCxHQUFXSCxVQUFYO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLQyxPQUFMLEdBQWVBLE9BQU8sSUFBSSxDQUExQjtFQUNEOztFQUVERSxPQUFPLEdBQUc7SUFDUixNQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixRQUFPLEtBQUtMLE9BQVEsRUFBNUMsQ0FBYjs7SUFFQSxTQUFTTSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtNQUNyQixNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtNQUNBLE1BQU1JLENBQUMsR0FBR04sSUFBSSxDQUFDTyxXQUFMLEdBQW1CLENBQTdCO01BQ0EsTUFBTUMsQ0FBQyxHQUFHUixJQUFJLENBQUNTLFlBQUwsR0FBb0IsQ0FBOUI7TUFFQSxNQUFNQyxDQUFDLEdBQUdOLENBQUMsQ0FBQ08sT0FBRixJQUFhTixTQUFTLENBQUNPLFVBQVYsR0FBdUJaLElBQUksQ0FBQ1ksVUFBekMsQ0FBVixDQUxxQixDQUsyQzs7TUFDaEUsTUFBTUMsQ0FBQyxHQUFHVCxDQUFDLENBQUNVLE9BQUYsSUFBYVQsU0FBUyxDQUFDVSxTQUFWLEdBQXNCZixJQUFJLENBQUNlLFNBQXhDLENBQVYsQ0FOcUIsQ0FNeUM7O01BRTlELE1BQU1DLEVBQUUsR0FBR1YsQ0FBQyxHQUFDSSxDQUFiO01BQ0EsTUFBTU8sRUFBRSxHQUFHVCxDQUFDLEdBQUNLLENBQWI7TUFFQSxNQUFNSyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxFQUFYLEVBQWVELEVBQWYsQ0FBWjtNQUVBLE1BQU1LLEdBQUcsR0FBR0gsR0FBRyxJQUFJLE1BQU1DLElBQUksQ0FBQ0csRUFBZixDQUFmLENBYnFCLENBYWM7O01BRW5DLE9BQU9ELEdBQVA7SUFDRDs7SUFFRCxTQUFTRSxNQUFULENBQWdCbkIsQ0FBaEIsRUFBbUI7TUFDakIsSUFBSW9CLE1BQU0sR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVd0QixVQUFVLENBQUNDLENBQUQsQ0FBVixHQUFnQixFQUEzQixDQUFiO01BQ0FKLElBQUksQ0FBQzBCLEtBQUwsQ0FBV0MsU0FBWCxHQUF3QixVQUFTSCxNQUFPLE1BQXhDOztNQUVBLElBQUlBLE1BQU0sR0FBRyxDQUFiLEVBQWdCO1FBQ2RBLE1BQU0sR0FBRyxNQUFNQSxNQUFmO01BQ0Q7O01BRUQsS0FBSzFCLEdBQUwsQ0FBUzhCLFNBQVQsQ0FBbUJDLGNBQW5CLENBQWtDTCxNQUFsQyxFQUEwQyxLQUFLNUIsUUFBTCxDQUFja0MsV0FBeEQ7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQVo7SUFDRDs7SUFFRCxNQUFNUyxJQUFJLEdBQUcsSUFBYjtJQUNBLE1BQU1DLFdBQVcsR0FBR1gsTUFBTSxDQUFDWSxJQUFQLENBQVksSUFBWixDQUFwQjs7SUFDQSxTQUFTQyxhQUFULENBQXVCaEMsQ0FBdkIsRUFBMEI7TUFDeEJKLElBQUksQ0FBQ3FDLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DSCxXQUFuQztNQUNBbEMsSUFBSSxDQUFDcUMsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUNDLFdBQWpDO01BQ0FsQyxDQUFDLENBQUNtQyxlQUFGO0lBQ0Q7O0lBRUQsU0FBU0QsV0FBVCxHQUF1QjtNQUNyQnRDLElBQUksQ0FBQ3dDLG1CQUFMLENBQXlCLFdBQXpCLEVBQXNDTixXQUF0QztNQUNBbEMsSUFBSSxDQUFDd0MsbUJBQUwsQ0FBeUIsU0FBekIsRUFBb0NGLFdBQXBDO0lBQ0Q7O0lBRUR0QyxJQUFJLENBQUNxQyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ0QsYUFBbkM7RUFFRDs7QUF2RFE7O0FBMkRYSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqRCxJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/knob.js\n");

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