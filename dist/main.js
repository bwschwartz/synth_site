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

eval("const Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nconst osc = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext();\n\nconst Knob = __webpack_require__(/*! ./scripts/knob */ \"./src/scripts/knob.js\");\n\nconst knob = new Knob();\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  drag.makeDraggable();\n  osc.test();\n  osc.init(audioCtx); //is this kosher (passing in arg to init)\n\n  drag.makeClassDraggable();\n  drag.makeKnobDraggable();\n  knob.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUNBLE1BQU1DLEdBQUcsR0FBRyxJQUFJRixVQUFKLEVBQVo7O0FBRUEsTUFBTUcsSUFBSSxHQUFHRixtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHSixtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUNBLE1BQU1LLE9BQU8sR0FBRyxJQUFJRCxPQUFKLEVBQWhCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBakI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHUixtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUNBLE1BQU1TLElBQUksR0FBRyxJQUFJRCxJQUFKLEVBQWI7QUFHQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBSztFQUNqRFIsSUFBSSxDQUFDUyxhQUFMO0VBQ0FYLEdBQUcsQ0FBQ1ksSUFBSjtFQUVBWixHQUFHLENBQUNhLElBQUosQ0FBU1IsUUFBVCxFQUppRCxDQUk3Qjs7RUFDcEJILElBQUksQ0FBQ1ksa0JBQUw7RUFDQVosSUFBSSxDQUFDYSxpQkFBTDtFQUVBUCxJQUFJLENBQUNRLE9BQUw7QUFJRCxDQVpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9zY2lsbGF0b3IgPSByZXF1aXJlKCcuL3NjcmlwdHMvb3NjaWxsYXRvcicpXG5jb25zdCBvc2MgPSBuZXcgT3NjaWxsYXRvcjtcblxuY29uc3QgRHJhZyA9IHJlcXVpcmUoJy4vc2NyaXB0cy9kcmFnJylcbmNvbnN0IGRyYWcgPSBuZXcgRHJhZztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9jb250ZXh0JylcbmNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dDtcbmNvbnN0IGF1ZGlvQ3R4ID0gY29udGV4dC5tYWtlQ29udGV4dCgpXG5cbmNvbnN0IEtub2IgPSByZXF1aXJlKCcuL3NjcmlwdHMva25vYicpXG5jb25zdCBrbm9iID0gbmV3IEtub2I7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG4gIGRyYWcubWFrZURyYWdnYWJsZSgpO1xuICBvc2MudGVzdCgpO1xuXG4gIG9zYy5pbml0KGF1ZGlvQ3R4KTsgLy9pcyB0aGlzIGtvc2hlciAocGFzc2luZyBpbiBhcmcgdG8gaW5pdClcbiAgZHJhZy5tYWtlQ2xhc3NEcmFnZ2FibGUoKTtcbiAgZHJhZy5tYWtlS25vYkRyYWdnYWJsZSgpO1xuXG4gIGtub2IucnVuS25vYigpO1xuXG5cblxufSk7XG4iXSwibmFtZXMiOlsiT3NjaWxsYXRvciIsInJlcXVpcmUiLCJvc2MiLCJEcmFnIiwiZHJhZyIsIkNvbnRleHQiLCJjb250ZXh0IiwiYXVkaW9DdHgiLCJtYWtlQ29udGV4dCIsIktub2IiLCJrbm9iIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZURyYWdnYWJsZSIsInRlc3QiLCJpbml0IiwibWFrZUNsYXNzRHJhZ2dhYmxlIiwibWFrZUtub2JEcmFnZ2FibGUiLCJydW5Lbm9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  runKnob() {\n    const knob = document.querySelector(\".knob\");\n\n    function volumeKnob(e) {\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - knob.offsetLeft;\n      const y = e.clientY - knob.offsetTop;\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      let deg = rad * (180 / Math.PI);\n      return deg;\n    }\n\n    function rotate(e) {\n      const result = Math.floor(volumeKnob(e) - 80); // console.log(result);\n\n      knob.style.transform = `rotate(${result}deg)`;\n      const ampChange = result / 360;\n      console.log(ampChange);\n      return ampChange;\n    }\n\n    function startRotation(e) {\n      window.addEventListener(\"mousemove\", rotate);\n      window.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      window.removeEventListener(\"mousemove\", rotate);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nmodule.exports = Knob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iLmpzLmpzIiwibmFtZXMiOlsiS25vYiIsInJ1bktub2IiLCJrbm9iIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidm9sdW1lS25vYiIsImUiLCJ3IiwiY2xpZW50V2lkdGgiLCJoIiwiY2xpZW50SGVpZ2h0IiwieCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwieSIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJkWCIsImRZIiwicmFkIiwiTWF0aCIsImF0YW4yIiwiZGVnIiwiUEkiLCJyb3RhdGUiLCJyZXN1bHQiLCJmbG9vciIsInN0eWxlIiwidHJhbnNmb3JtIiwiYW1wQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInN0YXJ0Um90YXRpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kUm90YXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ludGhfc2l0ZS8uL3NyYy9zY3JpcHRzL2tub2IuanM/MmNhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzb3VyY2U6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QzJtNHdNZmpsbEFcblxuY2xhc3MgS25vYiB7XG4gIHJ1bktub2IoKSB7XG4gICAgY29uc3Qga25vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25vYlwiKTtcblxuICAgIGZ1bmN0aW9uIHZvbHVtZUtub2IoZSkge1xuICAgICAgY29uc3QgdyA9IGtub2IuY2xpZW50V2lkdGggLyAyO1xuICAgICAgY29uc3QgaCA9IGtub2IuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIGtub2Iub2Zmc2V0TGVmdDtcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSBrbm9iLm9mZnNldFRvcDtcblxuICAgICAgY29uc3QgZFggPSB3LXg7XG4gICAgICBjb25zdCBkWSA9IGgteTtcblxuICAgICAgY29uc3QgcmFkID0gTWF0aC5hdGFuMihkWSwgZFgpO1xuXG4gICAgICBsZXQgZGVnID0gcmFkICogKDE4MCAvIE1hdGguUEkpO1xuXG4gICAgICByZXR1cm4gZGVnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdGF0ZShlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHZvbHVtZUtub2IoZSkgLSA4MCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cmVzdWx0fWRlZylgO1xuICAgICAgY29uc3QgYW1wQ2hhbmdlID0gcmVzdWx0LzM2MDtcbiAgICAgIGNvbnNvbGUubG9nKGFtcENoYW5nZSk7XG4gICAgICByZXR1cm4gYW1wQ2hhbmdlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0Um90YXRpb24oZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcm90YXRlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmRSb3RhdGlvbik7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZFJvdGF0aW9uKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcm90YXRlKTtcbiAgICB9XG4gICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0Um90YXRpb24pO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLbm9iO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsSUFBTixDQUFXO0VBQ1RDLE9BQU8sR0FBRztJQUNSLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7O0lBRUEsU0FBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7TUFDckIsTUFBTUMsQ0FBQyxHQUFHTCxJQUFJLENBQUNNLFdBQUwsR0FBbUIsQ0FBN0I7TUFDQSxNQUFNQyxDQUFDLEdBQUdQLElBQUksQ0FBQ1EsWUFBTCxHQUFvQixDQUE5QjtNQUVBLE1BQU1DLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxPQUFGLEdBQVlWLElBQUksQ0FBQ1csVUFBM0I7TUFDQSxNQUFNQyxDQUFDLEdBQUdSLENBQUMsQ0FBQ1MsT0FBRixHQUFZYixJQUFJLENBQUNjLFNBQTNCO01BRUEsTUFBTUMsRUFBRSxHQUFHVixDQUFDLEdBQUNJLENBQWI7TUFDQSxNQUFNTyxFQUFFLEdBQUdULENBQUMsR0FBQ0ssQ0FBYjtNQUVBLE1BQU1LLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEVBQVgsRUFBZUQsRUFBZixDQUFaO01BRUEsSUFBSUssR0FBRyxHQUFHSCxHQUFHLElBQUksTUFBTUMsSUFBSSxDQUFDRyxFQUFmLENBQWI7TUFFQSxPQUFPRCxHQUFQO0lBQ0Q7O0lBRUQsU0FBU0UsTUFBVCxDQUFnQmxCLENBQWhCLEVBQW1CO01BQ2pCLE1BQU1tQixNQUFNLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXckIsVUFBVSxDQUFDQyxDQUFELENBQVYsR0FBZ0IsRUFBM0IsQ0FBZixDQURpQixDQUVqQjs7TUFDQUosSUFBSSxDQUFDeUIsS0FBTCxDQUFXQyxTQUFYLEdBQXdCLFVBQVNILE1BQU8sTUFBeEM7TUFDQSxNQUFNSSxTQUFTLEdBQUdKLE1BQU0sR0FBQyxHQUF6QjtNQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtNQUNBLE9BQU9BLFNBQVA7SUFDRDs7SUFFRCxTQUFTRyxhQUFULENBQXVCMUIsQ0FBdkIsRUFBMEI7TUFDeEIyQixNQUFNLENBQUNDLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDVixNQUFyQztNQUNBUyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DQyxXQUFuQztNQUNBN0IsQ0FBQyxDQUFDOEIsZUFBRjtJQUNEOztJQUVELFNBQVNELFdBQVQsR0FBdUI7TUFDckJGLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0NiLE1BQXhDO0lBQ0Q7O0lBQ0R0QixJQUFJLENBQUNnQyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ0YsYUFBbkM7RUFDRDs7QUF4Q1E7O0FBNENYTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QyxJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/knob.js\n");

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