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

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nconst osc = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\n\nconst Knob = __webpack_require__(/*! ./scripts/knob */ \"./src/scripts/knob.js\"); // console.log(knob.knob)\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  drag.makeDraggable();\n  osc1 = osc.init(audioCtx); //is this kosher (passing in arg to init)\n  // console.log(osc1)\n\n  drag.makeClassDraggable();\n  drag.makeKnobDraggable();\n  const knob = new Knob(osc1, audioCtx);\n  knob.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJRixVQUFKLEVBQVo7O0FBRUEsTUFBTUcsSUFBSSxHQUFHRixtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHSixtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1LLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHUixtQkFBTyxDQUFDLDZDQUFELENBQXBCLEMsQ0FFQTs7O0FBRUFTLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQUs7RUFDakRQLElBQUksQ0FBQ1EsYUFBTDtFQUVBQyxJQUFJLEdBQUdYLEdBQUcsQ0FBQ1ksSUFBSixDQUFTUCxRQUFULENBQVAsQ0FIaUQsQ0FHdEI7RUFDM0I7O0VBQ0FILElBQUksQ0FBQ1csa0JBQUw7RUFDQVgsSUFBSSxDQUFDWSxpQkFBTDtFQUVBLE1BQU1DLElBQUksR0FBRyxJQUFJUixJQUFKLENBQVNJLElBQVQsRUFBZU4sUUFBZixDQUFiO0VBRUFVLElBQUksQ0FBQ0MsT0FBTDtBQUdELENBYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3NjaWxsYXRvciA9IHJlcXVpcmUoJy4vc2NyaXB0cy9vc2NpbGxhdG9yJylcbmNvbnN0IG9zYyA9IG5ldyBPc2NpbGxhdG9yO1xuXG5jb25zdCBEcmFnID0gcmVxdWlyZSgnLi9zY3JpcHRzL2RyYWcnKVxuY29uc3QgZHJhZyA9IG5ldyBEcmFnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9zY3JpcHRzL2NvbnRleHQnKVxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0O1xuY29uc3QgYXVkaW9DdHggPSBjb250ZXh0Lm1ha2VDb250ZXh0KClcblxuY29uc3QgS25vYiA9IHJlcXVpcmUoJy4vc2NyaXB0cy9rbm9iJylcblxuLy8gY29uc29sZS5sb2coa25vYi5rbm9iKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgZHJhZy5tYWtlRHJhZ2dhYmxlKCk7XG5cbiAgb3NjMSA9IG9zYy5pbml0KGF1ZGlvQ3R4KTsgLy9pcyB0aGlzIGtvc2hlciAocGFzc2luZyBpbiBhcmcgdG8gaW5pdClcbiAgLy8gY29uc29sZS5sb2cob3NjMSlcbiAgZHJhZy5tYWtlQ2xhc3NEcmFnZ2FibGUoKTtcbiAgZHJhZy5tYWtlS25vYkRyYWdnYWJsZSgpO1xuXG4gIGNvbnN0IGtub2IgPSBuZXcgS25vYihvc2MxLCBhdWRpb0N0eCk7XG5cbiAga25vYi5ydW5Lbm9iKCk7XG5cblxufSk7XG4iXSwibmFtZXMiOlsiT3NjaWxsYXRvciIsInJlcXVpcmUiLCJvc2MiLCJEcmFnIiwiZHJhZyIsIkNvbnRleHQiLCJjb250ZXh0IiwiYXVkaW9DdHgiLCJtYWtlQ29udGV4dCIsIktub2IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWtlRHJhZ2dhYmxlIiwib3NjMSIsImluaXQiLCJtYWtlQ2xhc3NEcmFnZ2FibGUiLCJtYWtlS25vYkRyYWdnYWJsZSIsImtub2IiLCJydW5Lbm9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("class Drag {\n  makeDraggable() {\n    $(\"#draggable\").draggable();\n  }\n\n  makeClassDraggable() {\n    $(\"#draggable1\").draggable();\n  }\n\n  makeKnobDraggable() {\n    $(\"#draggable2\").draggable();\n  }\n\n}\n\nmodule.exports = Drag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcmFnLmpzLmpzIiwibmFtZXMiOlsiRHJhZyIsIm1ha2VEcmFnZ2FibGUiLCIkIiwiZHJhZ2dhYmxlIiwibWFrZUNsYXNzRHJhZ2dhYmxlIiwibWFrZUtub2JEcmFnZ2FibGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMvZHJhZy5qcz83MzAyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyYWcge1xuICBtYWtlRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZVwiICkuZHJhZ2dhYmxlKCk7XG4gIH07XG5cbiAgbWFrZUNsYXNzRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZTFcIiApLmRyYWdnYWJsZSgpO1xuICB9O1xuXG4gIG1ha2VLbm9iRHJhZ2dhYmxlKCkge1xuICAgICQoIFwiI2RyYWdnYWJsZTJcIiApLmRyYWdnYWJsZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHJhZztcbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBTixDQUFXO0VBQ1RDLGFBQWEsR0FBRztJQUNkQyxDQUFDLENBQUUsWUFBRixDQUFELENBQWtCQyxTQUFsQjtFQUNEOztFQUVEQyxrQkFBa0IsR0FBRztJQUNuQkYsQ0FBQyxDQUFFLGFBQUYsQ0FBRCxDQUFtQkMsU0FBbkI7RUFDRDs7RUFFREUsaUJBQWlCLEdBQUc7SUFDbEJILENBQUMsQ0FBRSxhQUFGLENBQUQsQ0FBbUJDLFNBQW5CO0VBQ0Q7O0FBWFE7O0FBY1hHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsSUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/drag.js\n");

/***/ }),

/***/ "./src/scripts/knob.js":
/*!*****************************!*\
  !*** ./src/scripts/knob.js ***!
  \*****************************/
/***/ (function(module) {

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  constructor(oscillator, audioCtx) {\n    this.osc = oscillator;\n    this.audioCtx = audioCtx;\n  }\n\n  runKnob() {\n    const knob = document.querySelector(\".knob\");\n\n    function volumeKnob(e) {\n      const container = document.querySelector('.module-container');\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - (container.offsetLeft + knob.offsetLeft); //+70\n\n      const y = e.clientY - (container.offsetTop + knob.offsetTop); //+1s\n\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      const deg = rad * (180 / Math.PI); //used to be let\n\n      return deg;\n    }\n\n    function rotate(e) {\n      // e.stopPropagation();\n      const result = Math.floor(volumeKnob(e) - 80);\n      knob.style.transform = `rotate(${result}deg)`;\n      const ampChange = result / 360;\n      this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime);\n      return result;\n    }\n\n    const that = this;\n    const boundRotate = rotate.bind(this);\n\n    function startRotation(e) {\n      knob.addEventListener(\"mousemove\", boundRotate);\n      knob.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      knob.removeEventListener(\"mousemove\", boundRotate);\n      knob.removeEventListener(\"mouseup\", endRotation);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation); // knob.addEventListener(\"mousedown\", rotate.bind(that));\n    // console.log(this.osc);\n    // this.osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);\n    // changeAmp(this.osc, 880, this.audioCtx);\n  }\n\n}\n\nmodule.exports = Knob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iLmpzLmpzIiwibmFtZXMiOlsiS25vYiIsImNvbnN0cnVjdG9yIiwib3NjaWxsYXRvciIsImF1ZGlvQ3R4Iiwib3NjIiwicnVuS25vYiIsImtub2IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2b2x1bWVLbm9iIiwiZSIsImNvbnRhaW5lciIsInciLCJjbGllbnRXaWR0aCIsImgiLCJjbGllbnRIZWlnaHQiLCJ4IiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJ5IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsImRYIiwiZFkiLCJyYWQiLCJNYXRoIiwiYXRhbjIiLCJkZWciLCJQSSIsInJvdGF0ZSIsInJlc3VsdCIsImZsb29yIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhbXBDaGFuZ2UiLCJmcmVxdWVuY3kiLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwidGhhdCIsImJvdW5kUm90YXRlIiwiYmluZCIsInN0YXJ0Um90YXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kUm90YXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9zY3JpcHRzL2tub2IuanM/MmNhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzb3VyY2U6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QzJtNHdNZmpsbEFcblxuY2xhc3MgS25vYiB7XG4gIGNvbnN0cnVjdG9yKG9zY2lsbGF0b3IsIGF1ZGlvQ3R4KXtcbiAgICB0aGlzLm9zYyA9IG9zY2lsbGF0b3I7XG4gICAgdGhpcy5hdWRpb0N0eCA9IGF1ZGlvQ3R4O1xuICB9XG5cbiAgcnVuS25vYigpIHtcbiAgICBjb25zdCBrbm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rbm9iXCIpO1xuXG4gICAgZnVuY3Rpb24gdm9sdW1lS25vYihlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgdyA9IGtub2IuY2xpZW50V2lkdGggLyAyO1xuICAgICAgY29uc3QgaCA9IGtub2IuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIChjb250YWluZXIub2Zmc2V0TGVmdCArIGtub2Iub2Zmc2V0TGVmdCk7IC8vKzcwXG4gICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gKGNvbnRhaW5lci5vZmZzZXRUb3AgKyBrbm9iLm9mZnNldFRvcCk7IC8vKzFzXG5cbiAgICAgIGNvbnN0IGRYID0gdy14O1xuICAgICAgY29uc3QgZFkgPSBoLXk7XG5cbiAgICAgIGNvbnN0IHJhZCA9IE1hdGguYXRhbjIoZFksIGRYKTtcblxuICAgICAgY29uc3QgZGVnID0gcmFkICogKDE4MCAvIE1hdGguUEkpOyAvL3VzZWQgdG8gYmUgbGV0XG5cbiAgICAgIHJldHVybiBkZWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm90YXRlKGUpIHtcbiAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHZvbHVtZUtub2IoZSkgLSA4MCk7XG4gICAgICBrbm9iLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtyZXN1bHR9ZGVnKWA7XG5cbiAgICAgIGNvbnN0IGFtcENoYW5nZSA9IHJlc3VsdC8zNjA7XG4gICAgICB0aGlzLm9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUocmVzdWx0LCB0aGlzLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lKVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBib3VuZFJvdGF0ZSA9IHJvdGF0ZS5iaW5kKHRoaXMpO1xuICAgIGZ1bmN0aW9uIHN0YXJ0Um90YXRpb24oZSkge1xuICAgICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGJvdW5kUm90YXRlKTtcbiAgICAgIGtub2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZW5kUm90YXRpb24pO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRSb3RhdGlvbigpIHtcbiAgICAgIGtub2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBib3VuZFJvdGF0ZSk7XG4gICAgICBrbm9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVuZFJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBrbm9iLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRSb3RhdGlvbik7XG4gICAgLy8ga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJvdGF0ZS5iaW5kKHRoYXQpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9zYyk7XG4gICAgLy8gdGhpcy5vc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDg4MCwgdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZSk7XG5cbiAgICAvLyBjaGFuZ2VBbXAodGhpcy5vc2MsIDg4MCwgdGhpcy5hdWRpb0N0eCk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtub2I7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxJQUFOLENBQVc7RUFDVEMsV0FBVyxDQUFDQyxVQUFELEVBQWFDLFFBQWIsRUFBc0I7SUFDL0IsS0FBS0MsR0FBTCxHQUFXRixVQUFYO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7RUFDRDs7RUFFREUsT0FBTyxHQUFHO0lBQ1IsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjs7SUFFQSxTQUFTQyxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtNQUNyQixNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbEI7TUFDQSxNQUFNSSxDQUFDLEdBQUdOLElBQUksQ0FBQ08sV0FBTCxHQUFtQixDQUE3QjtNQUNBLE1BQU1DLENBQUMsR0FBR1IsSUFBSSxDQUFDUyxZQUFMLEdBQW9CLENBQTlCO01BRUEsTUFBTUMsQ0FBQyxHQUFHTixDQUFDLENBQUNPLE9BQUYsSUFBYU4sU0FBUyxDQUFDTyxVQUFWLEdBQXVCWixJQUFJLENBQUNZLFVBQXpDLENBQVYsQ0FMcUIsQ0FLMkM7O01BQ2hFLE1BQU1DLENBQUMsR0FBR1QsQ0FBQyxDQUFDVSxPQUFGLElBQWFULFNBQVMsQ0FBQ1UsU0FBVixHQUFzQmYsSUFBSSxDQUFDZSxTQUF4QyxDQUFWLENBTnFCLENBTXlDOztNQUU5RCxNQUFNQyxFQUFFLEdBQUdWLENBQUMsR0FBQ0ksQ0FBYjtNQUNBLE1BQU1PLEVBQUUsR0FBR1QsQ0FBQyxHQUFDSyxDQUFiO01BRUEsTUFBTUssR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsRUFBWCxFQUFlRCxFQUFmLENBQVo7TUFFQSxNQUFNSyxHQUFHLEdBQUdILEdBQUcsSUFBSSxNQUFNQyxJQUFJLENBQUNHLEVBQWYsQ0FBZixDQWJxQixDQWFjOztNQUVuQyxPQUFPRCxHQUFQO0lBQ0Q7O0lBRUQsU0FBU0UsTUFBVCxDQUFnQm5CLENBQWhCLEVBQW1CO01BQ2pCO01BQ0EsTUFBTW9CLE1BQU0sR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVd0QixVQUFVLENBQUNDLENBQUQsQ0FBVixHQUFnQixFQUEzQixDQUFmO01BQ0FKLElBQUksQ0FBQzBCLEtBQUwsQ0FBV0MsU0FBWCxHQUF3QixVQUFTSCxNQUFPLE1BQXhDO01BRUEsTUFBTUksU0FBUyxHQUFHSixNQUFNLEdBQUMsR0FBekI7TUFDQSxLQUFLMUIsR0FBTCxDQUFTK0IsU0FBVCxDQUFtQkMsY0FBbkIsQ0FBa0NOLE1BQWxDLEVBQTBDLEtBQUszQixRQUFMLENBQWNrQyxXQUF4RDtNQUNBLE9BQU9QLE1BQVA7SUFDRDs7SUFFRCxNQUFNUSxJQUFJLEdBQUcsSUFBYjtJQUNBLE1BQU1DLFdBQVcsR0FBR1YsTUFBTSxDQUFDVyxJQUFQLENBQVksSUFBWixDQUFwQjs7SUFDQSxTQUFTQyxhQUFULENBQXVCL0IsQ0FBdkIsRUFBMEI7TUFDeEJKLElBQUksQ0FBQ29DLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DSCxXQUFuQztNQUNBakMsSUFBSSxDQUFDb0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUNDLFdBQWpDO01BQ0FqQyxDQUFDLENBQUNrQyxlQUFGO0lBQ0Q7O0lBRUQsU0FBU0QsV0FBVCxHQUF1QjtNQUNyQnJDLElBQUksQ0FBQ3VDLG1CQUFMLENBQXlCLFdBQXpCLEVBQXNDTixXQUF0QztNQUNBakMsSUFBSSxDQUFDdUMsbUJBQUwsQ0FBeUIsU0FBekIsRUFBb0NGLFdBQXBDO0lBQ0Q7O0lBRURyQyxJQUFJLENBQUNvQyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ0QsYUFBbkMsRUE1Q1EsQ0E2Q1I7SUFDQTtJQUNBO0lBRUE7RUFDRDs7QUF4RFE7O0FBNERYSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQyxJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/knob.js\n");

/***/ }),

/***/ "./src/scripts/oscillator.js":
/*!***********************************!*\
  !*** ./src/scripts/oscillator.js ***!
  \***********************************/
/***/ (function(module) {

eval("class Oscillator {\n  init(audioCtx) {\n    audioCtx = audioCtx; // get this from the context.js file\n\n    const oscillator = audioCtx.createOscillator();\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);\n    oscillator.connect(audioCtx.destination);\n    document.querySelector('button').addEventListener('click', function () {\n      oscillator.start();\n    });\n    return oscillator;\n  }\n\n}\n\nmodule.exports = Oscillator;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vc2NpbGxhdG9yLmpzLmpzIiwibmFtZXMiOlsiT3NjaWxsYXRvciIsImluaXQiLCJhdWRpb0N0eCIsIm9zY2lsbGF0b3IiLCJjcmVhdGVPc2NpbGxhdG9yIiwidHlwZSIsImZyZXF1ZW5jeSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMvb3NjaWxsYXRvci5qcz9lNGU0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE9zY2lsbGF0b3Ige1xuXG4gIGluaXQoYXVkaW9DdHgpIHtcblxuICAgIGF1ZGlvQ3R4ID0gYXVkaW9DdHg7IC8vIGdldCB0aGlzIGZyb20gdGhlIGNvbnRleHQuanMgZmlsZVxuICAgIGNvbnN0IG9zY2lsbGF0b3IgPSBhdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgb3NjaWxsYXRvci50eXBlID0gJ3NpbmUnO1xuICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDIyMCwgYXVkaW9DdHguY3VycmVudFRpbWUpO1xuICAgIG9zY2lsbGF0b3IuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gb3NjaWxsYXRvcjtcblxuXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gT3NjaWxsYXRvcjsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQU4sQ0FBaUI7RUFFZkMsSUFBSSxDQUFDQyxRQUFELEVBQVc7SUFFYkEsUUFBUSxHQUFHQSxRQUFYLENBRmEsQ0FFUTs7SUFDckIsTUFBTUMsVUFBVSxHQUFHRCxRQUFRLENBQUNFLGdCQUFULEVBQW5CO0lBQ0FELFVBQVUsQ0FBQ0UsSUFBWCxHQUFrQixNQUFsQjtJQUNBRixVQUFVLENBQUNHLFNBQVgsQ0FBcUJDLGNBQXJCLENBQW9DLEdBQXBDLEVBQXlDTCxRQUFRLENBQUNNLFdBQWxEO0lBQ0FMLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQlAsUUFBUSxDQUFDUSxXQUE1QjtJQUVBQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNDLGdCQUFqQyxDQUFrRCxPQUFsRCxFQUEyRCxZQUFXO01BQ3RFVixVQUFVLENBQUNXLEtBQVg7SUFDRyxDQUZIO0lBSUEsT0FBT1gsVUFBUDtFQUdDOztBQWpCWTs7QUFxQmpCWSxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixVQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/oscillator.js\n");

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