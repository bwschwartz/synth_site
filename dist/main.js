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

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nlet osc1 = new Oscillator();\nlet osc2 = new Oscillator();\nlet osc3 = new Oscillator();\nlet osc4 = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\n\nconst Knob = __webpack_require__(/*! ./scripts/knob1 */ \"./src/scripts/knob1.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // drag.makeDraggable();\n  osc1 = osc1.init(audioCtx, 1); //is this kosher\n\n  osc2 = osc2.init(audioCtx, 2);\n  osc3 = osc3.init(audioCtx, 3);\n  osc4 = osc4.init(audioCtx, 4);\n  drag.init(); // drag.makeClassDraggable();\n  // drag.makeVcoDraggable();\n\n  const knob1 = new Knob(osc1, audioCtx, 1);\n  const knob2 = new Knob(osc2, audioCtx, 2);\n  const knob3 = new Knob(osc3, audioCtx, 3);\n  const knob4 = new Knob(osc4, audioCtx, 4);\n  knob1.runKnob();\n  knob2.runKnob();\n  knob3.runKnob();\n  knob4.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJRixVQUFKLEVBQVg7QUFDQSxJQUFJRyxJQUFJLEdBQUcsSUFBSUgsVUFBSixFQUFYO0FBQ0EsSUFBSUksSUFBSSxHQUFHLElBQUlKLFVBQUosRUFBWDtBQUNBLElBQUlLLElBQUksR0FBRyxJQUFJTCxVQUFKLEVBQVg7O0FBRUEsTUFBTU0sSUFBSSxHQUFHTCxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1NLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHUCxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1RLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHWCxtQkFBTyxDQUFDLCtDQUFELENBQXBCOztBQUVBWSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBRWpEO0VBRUFaLElBQUksR0FBR0EsSUFBSSxDQUFDYSxJQUFMLENBQVVMLFFBQVYsRUFBb0IsQ0FBcEIsQ0FBUCxDQUppRCxDQUlsQjs7RUFDL0JQLElBQUksR0FBR0EsSUFBSSxDQUFDWSxJQUFMLENBQVVMLFFBQVYsRUFBb0IsQ0FBcEIsQ0FBUDtFQUNBTixJQUFJLEdBQUdBLElBQUksQ0FBQ1csSUFBTCxDQUFVTCxRQUFWLEVBQW9CLENBQXBCLENBQVA7RUFDQUwsSUFBSSxHQUFHQSxJQUFJLENBQUNVLElBQUwsQ0FBVUwsUUFBVixFQUFvQixDQUFwQixDQUFQO0VBQ0FILElBQUksQ0FBQ1EsSUFBTCxHQVJpRCxDQVVqRDtFQUNBOztFQUVBLE1BQU1DLEtBQUssR0FBRyxJQUFJSixJQUFKLENBQVNWLElBQVQsRUFBZVEsUUFBZixFQUF5QixDQUF6QixDQUFkO0VBQ0EsTUFBTU8sS0FBSyxHQUFHLElBQUlMLElBQUosQ0FBU1QsSUFBVCxFQUFlTyxRQUFmLEVBQXlCLENBQXpCLENBQWQ7RUFDQSxNQUFNUSxLQUFLLEdBQUcsSUFBSU4sSUFBSixDQUFTUixJQUFULEVBQWVNLFFBQWYsRUFBeUIsQ0FBekIsQ0FBZDtFQUNBLE1BQU1TLEtBQUssR0FBRyxJQUFJUCxJQUFKLENBQVNQLElBQVQsRUFBZUssUUFBZixFQUF5QixDQUF6QixDQUFkO0VBRUFNLEtBQUssQ0FBQ0ksT0FBTjtFQUNBSCxLQUFLLENBQUNHLE9BQU47RUFDQUYsS0FBSyxDQUFDRSxPQUFOO0VBQ0FELEtBQUssQ0FBQ0MsT0FBTjtBQUVELENBdkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9zY2lsbGF0b3IgPSByZXF1aXJlKCcuL3NjcmlwdHMvb3NjaWxsYXRvcicpXG5sZXQgb3NjMSA9IG5ldyBPc2NpbGxhdG9yO1xubGV0IG9zYzIgPSBuZXcgT3NjaWxsYXRvcjtcbmxldCBvc2MzID0gbmV3IE9zY2lsbGF0b3I7XG5sZXQgb3NjNCA9IG5ldyBPc2NpbGxhdG9yO1xuXG5jb25zdCBEcmFnID0gcmVxdWlyZSgnLi9zY3JpcHRzL2RyYWcnKVxuY29uc3QgZHJhZyA9IG5ldyBEcmFnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9zY3JpcHRzL2NvbnRleHQnKVxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0O1xuY29uc3QgYXVkaW9DdHggPSBjb250ZXh0Lm1ha2VDb250ZXh0KClcblxuY29uc3QgS25vYiA9IHJlcXVpcmUoJy4vc2NyaXB0cy9rbm9iMScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuXG4gIC8vIGRyYWcubWFrZURyYWdnYWJsZSgpO1xuXG4gIG9zYzEgPSBvc2MxLmluaXQoYXVkaW9DdHgsIDEpOyAvL2lzIHRoaXMga29zaGVyXG4gIG9zYzIgPSBvc2MyLmluaXQoYXVkaW9DdHgsIDIpO1xuICBvc2MzID0gb3NjMy5pbml0KGF1ZGlvQ3R4LCAzKTtcbiAgb3NjNCA9IG9zYzQuaW5pdChhdWRpb0N0eCwgNCk7XG4gIGRyYWcuaW5pdCgpO1xuXG4gIC8vIGRyYWcubWFrZUNsYXNzRHJhZ2dhYmxlKCk7XG4gIC8vIGRyYWcubWFrZVZjb0RyYWdnYWJsZSgpO1xuXG4gIGNvbnN0IGtub2IxID0gbmV3IEtub2Iob3NjMSwgYXVkaW9DdHgsIDEpO1xuICBjb25zdCBrbm9iMiA9IG5ldyBLbm9iKG9zYzIsIGF1ZGlvQ3R4LCAyKTtcbiAgY29uc3Qga25vYjMgPSBuZXcgS25vYihvc2MzLCBhdWRpb0N0eCwgMyk7XG4gIGNvbnN0IGtub2I0ID0gbmV3IEtub2Iob3NjNCwgYXVkaW9DdHgsIDQpO1xuXG4gIGtub2IxLnJ1bktub2IoKTtcbiAga25vYjIucnVuS25vYigpO1xuICBrbm9iMy5ydW5Lbm9iKCk7XG4gIGtub2I0LnJ1bktub2IoKTtcblxufSk7XG4iXSwibmFtZXMiOlsiT3NjaWxsYXRvciIsInJlcXVpcmUiLCJvc2MxIiwib3NjMiIsIm9zYzMiLCJvc2M0IiwiRHJhZyIsImRyYWciLCJDb250ZXh0IiwiY29udGV4dCIsImF1ZGlvQ3R4IiwibWFrZUNvbnRleHQiLCJLbm9iIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImtub2IxIiwia25vYjIiLCJrbm9iMyIsImtub2I0IiwicnVuS25vYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("class Drag {\n  init() {\n    this.makeDraggable();\n    this.makeClassDraggable();\n    this.makeVcoDraggable();\n    this.makeVcaDraggable();\n  }\n\n  makeDraggable() {\n    $(\"#draggable\").draggable();\n  }\n\n  makeClassDraggable() {\n    $(\"#draggable1\").draggable();\n  }\n\n  makeVcoDraggable() {\n    $(\"#draggablevco\").draggable();\n  }\n\n  makeVcaDraggable() {\n    $(\"#draggablevca\").draggable();\n  }\n\n}\n\nmodule.exports = Drag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmFnLmpzLmpzIiwibmFtZXMiOlsiRHJhZyIsImluaXQiLCJtYWtlRHJhZ2dhYmxlIiwibWFrZUNsYXNzRHJhZ2dhYmxlIiwibWFrZVZjb0RyYWdnYWJsZSIsIm1ha2VWY2FEcmFnZ2FibGUiLCIkIiwiZHJhZ2dhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9zY3JpcHRzL2RyYWcuanM/NzMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcmFnIHtcblxuICBpbml0KCkge1xuICAgIHRoaXMubWFrZURyYWdnYWJsZSgpO1xuICAgIHRoaXMubWFrZUNsYXNzRHJhZ2dhYmxlKCk7XG4gICAgdGhpcy5tYWtlVmNvRHJhZ2dhYmxlKCk7XG4gICAgdGhpcy5tYWtlVmNhRHJhZ2dhYmxlKCk7XG5cbiAgfVxuICBtYWtlRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZVwiICkuZHJhZ2dhYmxlKCk7XG4gIH07XG5cbiAgbWFrZUNsYXNzRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZTFcIiApLmRyYWdnYWJsZSgpO1xuICB9O1xuXG4gIG1ha2VWY29EcmFnZ2FibGUoKXtcbiAgICAkKCBcIiNkcmFnZ2FibGV2Y29cIiApLmRyYWdnYWJsZSgpO1xuICB9XG5cbiAgbWFrZVZjYURyYWdnYWJsZSgpe1xuICAgICQoIFwiI2RyYWdnYWJsZXZjYVwiICkuZHJhZ2dhYmxlKCk7XG4gIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHJhZztcbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBTixDQUFXO0VBRVRDLElBQUksR0FBRztJQUNMLEtBQUtDLGFBQUw7SUFDQSxLQUFLQyxrQkFBTDtJQUNBLEtBQUtDLGdCQUFMO0lBQ0EsS0FBS0MsZ0JBQUw7RUFFRDs7RUFDREgsYUFBYSxHQUFHO0lBQ2RJLENBQUMsQ0FBRSxZQUFGLENBQUQsQ0FBa0JDLFNBQWxCO0VBQ0Q7O0VBRURKLGtCQUFrQixHQUFHO0lBQ25CRyxDQUFDLENBQUUsYUFBRixDQUFELENBQW1CQyxTQUFuQjtFQUNEOztFQUVESCxnQkFBZ0IsR0FBRTtJQUNoQkUsQ0FBQyxDQUFFLGVBQUYsQ0FBRCxDQUFxQkMsU0FBckI7RUFDRDs7RUFFREYsZ0JBQWdCLEdBQUU7SUFDaEJDLENBQUMsQ0FBRSxlQUFGLENBQUQsQ0FBcUJDLFNBQXJCO0VBQ0Q7O0FBdkJROztBQTRCWEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/drag.js\n");

/***/ }),

/***/ "./src/scripts/knob1.js":
/*!******************************!*\
  !*** ./src/scripts/knob1.js ***!
  \******************************/
/***/ (function(module) {

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  constructor(oscillator, audioCtx, knobNum) {\n    this.osc = oscillator;\n    this.audioCtx = audioCtx;\n    this.knobNum = knobNum || 1;\n  }\n\n  translateValues(knobOutput) {\n    //I'm sorry, this actually also updates params\n    this.osc.frequency.setValueAtTime(knobOutput, this.audioCtx.currentTime);\n    return knobOutput + 100;\n  }\n\n  runKnob() {\n    const knob = document.querySelector(`#knob${this.knobNum}`);\n\n    function getKnobValues(e) {\n      const container = document.querySelector('.vco');\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - (container.offsetLeft + knob.offsetLeft); //+70\n\n      const y = e.clientY - (container.offsetTop + knob.offsetTop); //+1s\n\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      const deg = rad * (180 / Math.PI); //used to be let\n\n      return deg;\n    }\n\n    function rotate(e) {\n      let result = Math.floor(getKnobValues(e) - 80);\n      knob.style.transform = `rotate(${result}deg)`;\n\n      if (result < 0) {\n        result = 360 + result;\n      }\n\n      result = this.translateValues(result); // this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime)\n    }\n\n    const that = this;\n    const boundRotate = rotate.bind(this);\n\n    function startRotation(e) {\n      knob.addEventListener(\"mousemove\", boundRotate);\n      knob.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      knob.removeEventListener(\"mousemove\", boundRotate);\n      knob.removeEventListener(\"mouseup\", endRotation);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nclass freqKnob extends Knob {}\n\nmodule.exports = freqKnob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iMS5qcy5qcyIsIm5hbWVzIjpbIktub2IiLCJjb25zdHJ1Y3RvciIsIm9zY2lsbGF0b3IiLCJhdWRpb0N0eCIsImtub2JOdW0iLCJvc2MiLCJ0cmFuc2xhdGVWYWx1ZXMiLCJrbm9iT3V0cHV0IiwiZnJlcXVlbmN5Iiwic2V0VmFsdWVBdFRpbWUiLCJjdXJyZW50VGltZSIsInJ1bktub2IiLCJrbm9iIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0S25vYlZhbHVlcyIsImUiLCJjb250YWluZXIiLCJ3IiwiY2xpZW50V2lkdGgiLCJoIiwiY2xpZW50SGVpZ2h0IiwieCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwieSIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJkWCIsImRZIiwicmFkIiwiTWF0aCIsImF0YW4yIiwiZGVnIiwiUEkiLCJyb3RhdGUiLCJyZXN1bHQiLCJmbG9vciIsInN0eWxlIiwidHJhbnNmb3JtIiwidGhhdCIsImJvdW5kUm90YXRlIiwiYmluZCIsInN0YXJ0Um90YXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kUm90YXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZnJlcUtub2IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMva25vYjEuanM/YzdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzb3VyY2U6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QzJtNHdNZmpsbEFcblxuY2xhc3MgS25vYiB7XG4gIGNvbnN0cnVjdG9yKG9zY2lsbGF0b3IsIGF1ZGlvQ3R4LCBrbm9iTnVtKXtcbiAgICB0aGlzLm9zYyA9IG9zY2lsbGF0b3I7XG4gICAgdGhpcy5hdWRpb0N0eCA9IGF1ZGlvQ3R4O1xuICAgIHRoaXMua25vYk51bSA9IGtub2JOdW0gfHwgMTtcbiAgfVxuXG4gIHRyYW5zbGF0ZVZhbHVlcyhrbm9iT3V0cHV0KSB7IC8vSSdtIHNvcnJ5LCB0aGlzIGFjdHVhbGx5IGFsc28gdXBkYXRlcyBwYXJhbXNcbiAgICB0aGlzLm9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoa25vYk91dHB1dCwgdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZSlcbiAgICByZXR1cm4ga25vYk91dHB1dCArIDEwMDtcbiAgfVxuXG4gIHJ1bktub2IoKSB7XG4gICAgY29uc3Qga25vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNrbm9iJHt0aGlzLmtub2JOdW19YCk7XG5cbiAgICBmdW5jdGlvbiBnZXRLbm9iVmFsdWVzKGUpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52Y28nKTtcbiAgICAgIGNvbnN0IHcgPSBrbm9iLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IGggPSBrbm9iLmNsaWVudEhlaWdodCAvIDI7XG5cbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSAoY29udGFpbmVyLm9mZnNldExlZnQgKyBrbm9iLm9mZnNldExlZnQpOyAvLys3MFxuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIChjb250YWluZXIub2Zmc2V0VG9wICsga25vYi5vZmZzZXRUb3ApOyAvLysxc1xuXG4gICAgICBjb25zdCBkWCA9IHcteDtcbiAgICAgIGNvbnN0IGRZID0gaC15O1xuXG4gICAgICBjb25zdCByYWQgPSBNYXRoLmF0YW4yKGRZLCBkWCk7XG5cbiAgICAgIGNvbnN0IGRlZyA9IHJhZCAqICgxODAgLyBNYXRoLlBJKTsgLy91c2VkIHRvIGJlIGxldFxuXG4gICAgICByZXR1cm4gZGVnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdGF0ZShlKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gTWF0aC5mbG9vcihnZXRLbm9iVmFsdWVzKGUpIC0gODApO1xuICAgICAga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cmVzdWx0fWRlZylgO1xuXG4gICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICByZXN1bHQgPSAzNjAgKyByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZVZhbHVlcyhyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5vc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKHJlc3VsdCwgdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZSlcbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBib3VuZFJvdGF0ZSA9IHJvdGF0ZS5iaW5kKHRoaXMpO1xuICAgIGZ1bmN0aW9uIHN0YXJ0Um90YXRpb24oZSkge1xuICAgICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGJvdW5kUm90YXRlKTtcbiAgICAgIGtub2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZW5kUm90YXRpb24pO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRSb3RhdGlvbigpIHtcbiAgICAgIGtub2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBib3VuZFJvdGF0ZSk7XG4gICAgICBrbm9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVuZFJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBrbm9iLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRSb3RhdGlvbik7XG5cbiAgfVxufVxuXG5jbGFzcyBmcmVxS25vYiBleHRlbmRzIEtub2Ige31cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZXFLbm9iO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsSUFBTixDQUFXO0VBQ1RDLFdBQVcsQ0FBQ0MsVUFBRCxFQUFhQyxRQUFiLEVBQXVCQyxPQUF2QixFQUErQjtJQUN4QyxLQUFLQyxHQUFMLEdBQVdILFVBQVg7SUFD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\n//# sourceURL=webpack-internal:///./src/scripts/knob1.js\n");

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