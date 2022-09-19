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

eval("// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  runKnob() {\n    const knob = document.querySelector(\".knob\");\n    const audio = document.querySelector(\"#audio\");\n    const prog = document.querySelector(\".progress > div\");\n    const bar = document.querySelector(\".progress\");\n    const play = document.querySelector(\".play-btn\");\n    const percent = document.querySelector(\".percent\");\n    let prevX = 0;\n    let prevY = 0;\n    let vol = 0.0; // barW = bar.clientWidth;\n\n    const barW = 3;\n\n    function volumeKnob(e) {\n      const w = knob.clientWidth / 2;\n      const h = knob.clientHeight / 2;\n      const x = e.clientX - knob.offsetLeft;\n      const y = e.clientY - knob.offsetTop;\n      const dX = w - x;\n      const dY = h - y;\n      const rad = Math.atan2(dY, dX);\n      let deg = rad * (180 / Math.PI); // top right quadrant\n\n      if (y < h && x > w) {\n        if (prevX <= x && prevY <= y) {\n          vol++;\n        } else if (prevX >= x && prevY >= y) {\n          vol--;\n        }\n      } else if (y > h && x > w) {\n        if (prevX >= x && prevY <= y) {\n          vol++;\n        } else if (prevX < x && prevY >= y) {\n          vol--;\n        }\n      } else if (y < h && x < w) {\n        if (prevX <= x && prevY >= y) {\n          vol++;\n        } else if (prevX >= x && prevY <= y) {\n          vol--;\n        }\n      } else if (y > h && x < w) {\n        if (prevX >= x && prevY >= y) {\n          vol++;\n        } else if (prevX <= x && prevY <= y) {\n          vol--;\n        }\n      }\n\n      const percentage = Math.round(100 * vol / barW);\n\n      if (vol < 0) {\n        vol = 0;\n      } else if (vol > barW) {\n        vol = barW;\n      }\n\n      prevX = x;\n      prevY = y;\n      return deg;\n    }\n\n    function rotate(e) {\n      const result = Math.floor(volumeKnob(e) - 80);\n      console.log(result);\n      knob.style.transform = `rotate(${result}deg)`;\n    }\n\n    function startRotation(e) {\n      window.addEventListener(\"mousemove\", rotate);\n      window.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      window.removeEventListener(\"mousemove\", rotate);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nmodule.exports = Knob;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbm9iLmpzLmpzIiwibmFtZXMiOlsiS25vYiIsInJ1bktub2IiLCJrbm9iIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXVkaW8iLCJwcm9nIiwiYmFyIiwicGxheSIsInBlcmNlbnQiLCJwcmV2WCIsInByZXZZIiwidm9sIiwiYmFyVyIsInZvbHVtZUtub2IiLCJlIiwidyIsImNsaWVudFdpZHRoIiwiaCIsImNsaWVudEhlaWdodCIsIngiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsInkiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwiZFgiLCJkWSIsInJhZCIsIk1hdGgiLCJhdGFuMiIsImRlZyIsIlBJIiwicGVyY2VudGFnZSIsInJvdW5kIiwicm90YXRlIiwicmVzdWx0IiwiZmxvb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzdGFydFJvdGF0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZFJvdGF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvc2NyaXB0cy9rbm9iLmpzPzJjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc291cmNlOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUMybTR3TWZqbGxBXG5cblxuY2xhc3MgS25vYiB7XG4gIHJ1bktub2IoKSB7XG4gICAgY29uc3Qga25vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25vYlwiKTtcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXVkaW9cIik7XG4gICAgY29uc3QgcHJvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MgPiBkaXZcIik7XG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKTtcbiAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWJ0blwiKTtcbiAgICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJjZW50XCIpO1xuXG4gICAgbGV0IHByZXZYID0gMDtcbiAgICBsZXQgcHJldlkgPSAwO1xuICAgIGxldCB2b2wgPSAwLjA7XG5cbiAgICAvLyBiYXJXID0gYmFyLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGJhclcgPSAzO1xuXG4gICAgZnVuY3Rpb24gdm9sdW1lS25vYihlKSB7XG4gICAgICBjb25zdCB3ID0ga25vYi5jbGllbnRXaWR0aCAvIDI7XG4gICAgICBjb25zdCBoID0ga25vYi5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0ga25vYi5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGtub2Iub2Zmc2V0VG9wO1xuXG4gICAgICBjb25zdCBkWCA9IHcteDtcbiAgICAgIGNvbnN0IGRZID0gaC15O1xuICAgICAgY29uc3QgcmFkID0gTWF0aC5hdGFuMihkWSwgZFgpO1xuXG4gICAgICBsZXQgZGVnID0gcmFkKiAoMTgwIC8gTWF0aC5QSSk7XG5cbiAgICAgIC8vIHRvcCByaWdodCBxdWFkcmFudFxuICAgICAgaWYgKHkgPCBoICYmIHggPiB3KXtcbiAgICAgICAgaWYgKHByZXZYIDw9IHggJiYgcHJldlkgPD0geSkge1xuICAgICAgICAgIHZvbCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZYID49IHggJiYgcHJldlkgPj0geSkge1xuICAgICAgICAgIHZvbC0tO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoeSA+IGggJiYgeCA+IHcpIHtcbiAgICAgICAgaWYgKHByZXZYID49IHggJiYgcHJldlkgPD0geSkge1xuICAgICAgICAgIHZvbCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZYIDwgeCAmJiBwcmV2WSA+PSB5KSB7XG4gICAgICAgICAgdm9sLS07XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmICh5IDwgaCAmJiB4IDwgdykge1xuICAgICAgICBpZiAocHJldlggPD0geCAmJiBwcmV2WSA+PSB5KSB7XG4gICAgICAgICAgdm9sKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIHByZXZYID49IHggJiYgcHJldlkgPD0geSkge1xuICAgICAgICAgIHZvbC0tO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoeSA+IGggJiYgeCA8IHcpIHtcbiAgICAgICAgaWYgKHByZXZYID49IHggJiYgcHJldlkgPj0geSkge1xuICAgICAgICAgIHZvbCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByZXZYIDw9IHggJiYgcHJldlkgPD0geSkge1xuICAgICAgICAgIHZvbC0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKCgxMDAqdm9sKS8gYmFyVyk7XG5cbiAgICAgIGlmICh2b2wgPCAwKXtcbiAgICAgICAgdm9sID0gMDtcbiAgICAgIH0gZWxzZSBpZiAodm9sPmJhclcpe1xuICAgICAgICB2b2wgPSBiYXJXO1xuICAgICAgfVxuICAgICAgcHJldlggPSB4O1xuICAgICAgcHJldlkgPSB5O1xuXG4gICAgICByZXR1cm4gZGVnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdGF0ZShlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHZvbHVtZUtub2IoZSkgLSA4MCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cmVzdWx0fWRlZylgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0Um90YXRpb24oZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcm90YXRlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmRSb3RhdGlvbik7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZFJvdGF0aW9uKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcm90YXRlKTtcbiAgICB9XG4gICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0Um90YXRpb24pO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLbm9iO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBR0EsTUFBTUEsSUFBTixDQUFXO0VBQ1RDLE9BQU8sR0FBRztJQUNSLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7SUFDQSxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0lBQ0EsTUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7SUFDQSxNQUFNRyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFaO0lBQ0EsTUFBTUksSUFBSSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYjtJQUNBLE1BQU1LLE9BQU8sR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0lBRUEsSUFBSU0sS0FBSyxHQUFHLENBQVo7SUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUNBLElBQUlDLEdBQUcsR0FBRyxHQUFWLENBVlEsQ0FZUjs7SUFDQSxNQUFNQyxJQUFJLEdBQUcsQ0FBYjs7SUFFQSxTQUFTQyxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtNQUNyQixNQUFNQyxDQUFDLEdBQUdkLElBQUksQ0FBQ2UsV0FBTCxHQUFtQixD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\n//# sourceURL=webpack-internal:///./src/scripts/knob.js\n");

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