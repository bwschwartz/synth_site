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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/knob1 */ \"./src/scripts/knob1.js\");\nconst Oscillator = __webpack_require__(/*! ./scripts/oscillator */ \"./src/scripts/oscillator.js\");\n\nlet osc1 = new Oscillator();\nlet osc2 = new Oscillator();\nlet osc3 = new Oscillator();\nlet osc4 = new Oscillator();\n\nconst Drag = __webpack_require__(/*! ./scripts/drag */ \"./src/scripts/drag.js\");\n\nconst drag = new Drag();\n\nconst Context = __webpack_require__(/*! ./scripts/context */ \"./src/scripts/context.js\");\n\nconst context = new Context();\nconst audioCtx = context.makeContext(); // const Knob = require('./scripts/knob1')\n// const knob = new freqKnob;\n\n\n\nconst Amplitude = __webpack_require__(/*! ./scripts/amp */ \"./src/scripts/amp.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  osc1 = osc1.init(audioCtx, 1); //is this kosher\n\n  osc2 = osc2.init(audioCtx, 2);\n  osc3 = osc3.init(audioCtx, 3);\n  osc4 = osc4.init(audioCtx, 4);\n  drag.init();\n  const freqknob1 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.freqKnob(osc1, audioCtx, 1);\n  const freqknob2 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.freqKnob(osc2, audioCtx, 2);\n  const freqknob3 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.freqKnob(osc3, audioCtx, 3);\n  const freqknob4 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.freqKnob(osc4, audioCtx, 4);\n  freqknob1.runKnob();\n  freqknob2.runKnob();\n  freqknob3.runKnob();\n  freqknob4.runKnob();\n  const ampknob1 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.ampKnob(osc1, audioCtx, 1, 'amp');\n  const ampknob2 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.ampKnob(osc1, audioCtx, 2, 'amp');\n  const ampknob3 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.ampKnob(osc1, audioCtx, 3, 'amp');\n  const ampknob4 = new _scripts_knob1__WEBPACK_IMPORTED_MODULE_0__.ampKnob(osc1, audioCtx, 4, 'amp');\n  ampknob1.runKnob();\n  ampknob2.runKnob();\n  ampknob3.runKnob();\n  ampknob4.runKnob();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBMUI7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlGLFVBQUosRUFBWDtBQUNBLElBQUlHLElBQUksR0FBRyxJQUFJSCxVQUFKLEVBQVg7QUFDQSxJQUFJSSxJQUFJLEdBQUcsSUFBSUosVUFBSixFQUFYO0FBQ0EsSUFBSUssSUFBSSxHQUFHLElBQUlMLFVBQUosRUFBWDs7QUFFQSxNQUFNTSxJQUFJLEdBQUdMLG1CQUFPLENBQUMsNkNBQUQsQ0FBcEI7O0FBQ0EsTUFBTU0sSUFBSSxHQUFHLElBQUlELElBQUosRUFBYjs7QUFFQSxNQUFNRSxPQUFPLEdBQUdQLG1CQUFPLENBQUMsbURBQUQsQ0FBdkI7O0FBQ0EsTUFBTVEsT0FBTyxHQUFHLElBQUlELE9BQUosRUFBaEI7QUFDQSxNQUFNRSxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsV0FBUixFQUFqQixFQUVBO0FBQ0E7O0FBQ0E7O0FBRUEsTUFBTUcsU0FBUyxHQUFHYixtQkFBTyxDQUFDLDJDQUFELENBQXpCOztBQUVBYyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFLO0VBR2pEZCxJQUFJLEdBQUdBLElBQUksQ0FBQ2UsSUFBTCxDQUFVUCxRQUFWLEVBQW9CLENBQXBCLENBQVAsQ0FIaUQsQ0FHbEI7O0VBQy9CUCxJQUFJLEdBQUdBLElBQUksQ0FBQ2MsSUFBTCxDQUFVUCxRQUFWLEVBQW9CLENBQXBCLENBQVA7RUFDQU4sSUFBSSxHQUFHQSxJQUFJLENBQUNhLElBQUwsQ0FBVVAsUUFBVixFQUFvQixDQUFwQixDQUFQO0VBQ0FMLElBQUksR0FBR0EsSUFBSSxDQUFDWSxJQUFMLENBQVVQLFFBQVYsRUFBb0IsQ0FBcEIsQ0FBUDtFQUNBSCxJQUFJLENBQUNVLElBQUw7RUFHQSxNQUFNQyxTQUFTLEdBQUcsSUFBSU4sb0RBQUosQ0FBYVYsSUFBYixFQUFtQlEsUUFBbkIsRUFBNkIsQ0FBN0IsQ0FBbEI7RUFDQSxNQUFNUyxTQUFTLEdBQUcsSUFBSVAsb0RBQUosQ0FBYVQsSUFBYixFQUFtQk8sUUFBbkIsRUFBNkIsQ0FBN0IsQ0FBbEI7RUFDQSxNQUFNVSxTQUFTLEdBQUcsSUFBSVIsb0RBQUosQ0FBYVIsSUFBYixFQUFtQk0sUUFBbkIsRUFBNkIsQ0FBN0IsQ0FBbEI7RUFDQSxNQUFNVyxTQUFTLEdBQUcsSUFBSVQsb0RBQUosQ0FBYVAsSUFBYixFQUFtQkssUUFBbkIsRUFBNkIsQ0FBN0IsQ0FBbEI7RUFFQVEsU0FBUyxDQUFDSSxPQUFWO0VBQ0FILFNBQVMsQ0FBQ0csT0FBVjtFQUNBRixTQUFTLENBQUNFLE9BQVY7RUFDQUQsU0FBUyxDQUFDQyxPQUFWO0VBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUlWLG1EQUFKLENBQVlYLElBQVosRUFBa0JRLFFBQWxCLEVBQTRCLENBQTVCLEVBQStCLEtBQS9CLENBQWpCO0VBQ0EsTUFBTWMsUUFBUSxHQUFHLElBQUlYLG1EQUFKLENBQVlYLElBQVosRUFBa0JRLFFBQWxCLEVBQTRCLENBQTVCLEVBQStCLEtBQS9CLENBQWpCO0VBQ0EsTUFBTWUsUUFBUSxHQUFHLElBQUlaLG1EQUFKLENBQVlYLElBQVosRUFBa0JRLFFBQWxCLEVBQTRCLENBQTVCLEVBQStCLEtBQS9CLENBQWpCO0VBQ0EsTUFBTWdCLFFBQVEsR0FBRyxJQUFJYixtREFBSixDQUFZWCxJQUFaLEVBQWtCUSxRQUFsQixFQUE0QixDQUE1QixFQUErQixLQUEvQixDQUFqQjtFQUdBYSxRQUFRLENBQUNELE9BQVQ7RUFDQUUsUUFBUSxDQUFDRixPQUFUO0VBQ0FHLFFBQVEsQ0FBQ0gsT0FBVDtFQUNBSSxRQUFRLENBQUNKLE9BQVQ7QUFJRCxDQWpDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bnRoX3NpdGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPc2NpbGxhdG9yID0gcmVxdWlyZSgnLi9zY3JpcHRzL29zY2lsbGF0b3InKVxubGV0IG9zYzEgPSBuZXcgT3NjaWxsYXRvcjtcbmxldCBvc2MyID0gbmV3IE9zY2lsbGF0b3I7XG5sZXQgb3NjMyA9IG5ldyBPc2NpbGxhdG9yO1xubGV0IG9zYzQgPSBuZXcgT3NjaWxsYXRvcjtcblxuY29uc3QgRHJhZyA9IHJlcXVpcmUoJy4vc2NyaXB0cy9kcmFnJylcbmNvbnN0IGRyYWcgPSBuZXcgRHJhZztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9jb250ZXh0JylcbmNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dDtcbmNvbnN0IGF1ZGlvQ3R4ID0gY29udGV4dC5tYWtlQ29udGV4dCgpXG5cbi8vIGNvbnN0IEtub2IgPSByZXF1aXJlKCcuL3NjcmlwdHMva25vYjEnKVxuLy8gY29uc3Qga25vYiA9IG5ldyBmcmVxS25vYjtcbmltcG9ydCB7ZnJlcUtub2IsIGFtcEtub2J9IGZyb20gJy4vc2NyaXB0cy9rbm9iMSc7XG5cbmNvbnN0IEFtcGxpdHVkZSA9IHJlcXVpcmUoJy4vc2NyaXB0cy9hbXAnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG5cblxuICBvc2MxID0gb3NjMS5pbml0KGF1ZGlvQ3R4LCAxKTsgLy9pcyB0aGlzIGtvc2hlclxuICBvc2MyID0gb3NjMi5pbml0KGF1ZGlvQ3R4LCAyKTtcbiAgb3NjMyA9IG9zYzMuaW5pdChhdWRpb0N0eCwgMyk7XG4gIG9zYzQgPSBvc2M0LmluaXQoYXVkaW9DdHgsIDQpO1xuICBkcmFnLmluaXQoKTtcblxuXG4gIGNvbnN0IGZyZXFrbm9iMSA9IG5ldyBmcmVxS25vYihvc2MxLCBhdWRpb0N0eCwgMSk7XG4gIGNvbnN0IGZyZXFrbm9iMiA9IG5ldyBmcmVxS25vYihvc2MyLCBhdWRpb0N0eCwgMik7XG4gIGNvbnN0IGZyZXFrbm9iMyA9IG5ldyBmcmVxS25vYihvc2MzLCBhdWRpb0N0eCwgMyk7XG4gIGNvbnN0IGZyZXFrbm9iNCA9IG5ldyBmcmVxS25vYihvc2M0LCBhdWRpb0N0eCwgNCk7XG5cbiAgZnJlcWtub2IxLnJ1bktub2IoKTtcbiAgZnJlcWtub2IyLnJ1bktub2IoKTtcbiAgZnJlcWtub2IzLnJ1bktub2IoKTtcbiAgZnJlcWtub2I0LnJ1bktub2IoKTtcblxuICBjb25zdCBhbXBrbm9iMSA9IG5ldyBhbXBLbm9iKG9zYzEsIGF1ZGlvQ3R4LCAxLCAnYW1wJyk7XG4gIGNvbnN0IGFtcGtub2IyID0gbmV3IGFtcEtub2Iob3NjMSwgYXVkaW9DdHgsIDIsICdhbXAnKTtcbiAgY29uc3QgYW1wa25vYjMgPSBuZXcgYW1wS25vYihvc2MxLCBhdWRpb0N0eCwgMywgJ2FtcCcpO1xuICBjb25zdCBhbXBrbm9iNCA9IG5ldyBhbXBLbm9iKG9zYzEsIGF1ZGlvQ3R4LCA0LCAnYW1wJyk7XG5cblxuICBhbXBrbm9iMS5ydW5Lbm9iKCk7XG4gIGFtcGtub2IyLnJ1bktub2IoKTtcbiAgYW1wa25vYjMucnVuS25vYigpO1xuICBhbXBrbm9iNC5ydW5Lbm9iKCk7XG5cblxuXG59KTtcbiJdLCJuYW1lcyI6WyJPc2NpbGxhdG9yIiwicmVxdWlyZSIsIm9zYzEiLCJvc2MyIiwib3NjMyIsIm9zYzQiLCJEcmFnIiwiZHJhZyIsIkNvbnRleHQiLCJjb250ZXh0IiwiYXVkaW9DdHgiLCJtYWtlQ29udGV4dCIsImZyZXFLbm9iIiwiYW1wS25vYiIsIkFtcGxpdHVkZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJmcmVxa25vYjEiLCJmcmVxa25vYjIiLCJmcmVxa25vYjMiLCJmcmVxa25vYjQiLCJydW5Lbm9iIiwiYW1wa25vYjEiLCJhbXBrbm9iMiIsImFtcGtub2IzIiwiYW1wa25vYjQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/amp.js":
/*!****************************!*\
  !*** ./src/scripts/amp.js ***!
  \****************************/
/***/ (function(module) {

eval("class Amplitude {\n  constructor() {\n    console.log(\"hi\"); // const input1 = document.querySelector('.input');\n  } // const input1 = document.querySelector('.input');\n\n\n}\n\nmodule.exports = Amplitude;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hbXAuanMuanMiLCJuYW1lcyI6WyJBbXBsaXR1ZGUiLCJjb25zdHJ1Y3RvciIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMvYW1wLmpzPzk0NjIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQW1wbGl0dWRlIHtcbiAgY29uc3RydWN0b3IgKCl7XG4gICAgY29uc29sZS5sb2coXCJoaVwiKVxuICAvLyBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKTtcbiAgfVxuXG4gIC8vIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBbXBsaXR1ZGU7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxTQUFOLENBQWdCO0VBQ2RDLFdBQVcsR0FBRztJQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBRFksQ0FFZDtFQUNDLENBSmEsQ0FNZDs7O0FBTmM7O0FBV2hCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLFNBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/amp.js\n");

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ampKnob\": function() { return /* binding */ ampKnob; },\n/* harmony export */   \"freqKnob\": function() { return /* binding */ freqKnob; }\n/* harmony export */ });\n// source: https://www.youtube.com/watch?v=C2m4wMfjllA\nclass Knob {\n  constructor(oscillator, audioCtx, knobNum, amp) {\n    this.osc = oscillator;\n    this.audioCtx = audioCtx;\n    this.knobNum = knobNum || 1;\n    this.amp = amp || '';\n    this.knob = document.querySelector(`#${this.amp}knob${this.knobNum}`);\n  }\n\n  translateValues(knobOutput) {\n    //I'm sorry, this actually also updates params\n    this.osc.frequency.setValueAtTime(knobOutput, this.audioCtx.currentTime);\n    console.log(knobOutput);\n    return knobOutput + 100;\n  }\n\n  getContainer() {\n    return document.querySelector('.vco');\n  }\n\n  getKnobValues(e) {\n    // const container = document.querySelector('.vca');\n    const container = this.getContainer();\n    const w = this.knob.clientWidth / 2;\n    const h = this.knob.clientHeight / 2;\n    const x = e.clientX - (container.offsetLeft + this.knob.offsetLeft); //+70\n\n    const y = e.clientY - (container.offsetTop + this.knob.offsetTop); //+1s\n\n    const dX = w - x;\n    const dY = h - y;\n    const rad = Math.atan2(dY, dX);\n    const deg = rad * (180 / Math.PI); //used to be let\n\n    return deg;\n  }\n\n  runKnob() {\n    const knob = document.querySelector(`#${this.amp}knob${this.knobNum}`);\n\n    function rotate(e) {\n      let result = Math.floor(this.getKnobValues(e) - 80);\n      knob.style.transform = `rotate(${result}deg)`;\n\n      if (result < 0) {\n        result = 360 + result;\n      }\n\n      result = this.translateValues(result); // this.osc.frequency.setValueAtTime(result, this.audioCtx.currentTime)\n    }\n\n    const that = this;\n    const boundRotate = rotate.bind(this);\n\n    function startRotation(e) {\n      knob.addEventListener(\"mousemove\", boundRotate);\n      knob.addEventListener(\"mouseup\", endRotation);\n      e.stopPropagation();\n    }\n\n    function endRotation() {\n      knob.removeEventListener(\"mousemove\", boundRotate);\n      knob.removeEventListener(\"mouseup\", endRotation);\n    }\n\n    knob.addEventListener(\"mousedown\", startRotation);\n  }\n\n}\n\nclass freqKnob extends Knob {}\nclass ampKnob extends Knob {\n  translateValues(knobOutput) {\n    //I'm sorry, this actually also updates params\n    const amplitude = knobOutput / 360.0;\n    console.log(amplitude);\n    return amplitude;\n  }\n\n  getContainer() {\n    return document.querySelector('.vca');\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDeEJaLElBQUksQ0FBQ3lDLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DSCxXQUFuQztNQUNBdEMsSUFBSSxDQUFDeUMsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUNDLFdBQWpDO01BQ0E5QixDQUFDLENBQUMrQixlQUFGO0lBQ0Q7O0lBRUQsU0FBU0QsV0FBVCxHQUF1QjtNQUNyQjFDLElBQUksQ0FBQzRDLG1CQUFMLENBQXlCLFdBQXpCLEVBQXNDTixXQUF0QztNQUNBdEMsSUFBSSxDQUFDNEMsbUJBQUwsQ0FBeUIsU0FBekIsRUFBb0NGLFdBQXBDO0lBQ0Q7O0lBRUQxQyxJQUFJLENBQUN5QyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ0QsYUFBbkM7RUFDRDs7QUFwRVE7O0FBdUVKLE1BQU1LLFFBQU4sU0FBdUJwRCxJQUF2QixDQUE0QjtBQUU1QixNQUFNcUQsT0FBTixTQUFzQnJELElBQXRCLENBQTJCO0VBQ2hDVSxlQUFlLENBQUNDLFVBQUQsRUFBYTtJQUFFO0lBQzVCLE1BQU0yQyxTQUFTLEdBQUczQyxVQUFVLEdBQUcsS0FBL0I7SUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVlzQyxTQUFaO0lBQ0EsT0FBT0EsU0FBUDtFQUNEOztFQUVEckMsWUFBWSxHQUFHO0lBQ2IsT0FBT1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVA7RUFDRDs7QUFUK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMva25vYjEuanM/YzdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzb3VyY2U6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QzJtNHdNZmpsbEFcblxuY2xhc3MgS25vYiB7XG4gIGNvbnN0cnVjdG9yKG9zY2lsbGF0b3IsIGF1ZGlvQ3R4LCBrbm9iTnVtLCBhbXApe1xuICAgIHRoaXMub3NjID0gb3NjaWxsYXRvcjtcbiAgICB0aGlzLmF1ZGlvQ3R4ID0gYXVkaW9DdHg7XG4gICAgdGhpcy5rbm9iTnVtID0ga25vYk51bSB8fCAxO1xuICAgIHRoaXMuYW1wID0gYW1wIHx8ICcnO1xuICAgIHRoaXMua25vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuYW1wfWtub2Ike3RoaXMua25vYk51bX1gKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZVZhbHVlcyhrbm9iT3V0cHV0KSB7IC8vSSdtIHNvcnJ5LCB0aGlzIGFjdHVhbGx5IGFsc28gdXBkYXRlcyBwYXJhbXNcbiAgICB0aGlzLm9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoa25vYk91dHB1dCwgdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZSlcbiAgICBjb25zb2xlLmxvZyhrbm9iT3V0cHV0KVxuICAgIHJldHVybiBrbm9iT3V0cHV0ICsgMTAwO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmNvJyk7XG4gIH1cblxuICBnZXRLbm9iVmFsdWVzKGUpIHtcblxuICAgICAgLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZjYScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG5cbiAgICBjb25zdCB3ID0gdGhpcy5rbm9iLmNsaWVudFdpZHRoIC8gMjtcbiAgICBjb25zdCBoID0gdGhpcy5rbm9iLmNsaWVudEhlaWdodCAvIDI7XG5cbiAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gKGNvbnRhaW5lci5vZmZzZXRMZWZ0ICsgdGhpcy5rbm9iLm9mZnNldExlZnQpOyAvLys3MFxuICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSAoY29udGFpbmVyLm9mZnNldFRvcCArIHRoaXMua25vYi5vZmZzZXRUb3ApOyAvLysxc1xuXG4gICAgY29uc3QgZFggPSB3LXg7XG4gICAgY29uc3QgZFkgPSBoLXk7XG5cbiAgICBjb25zdCByYWQgPSBNYXRoLmF0YW4yKGRZLCBkWCk7XG5cbiAgICBjb25zdCBkZWcgPSByYWQgKiAoMTgwIC8gTWF0aC5QSSk7IC8vdXNlZCB0byBiZSBsZXRcblxuICAgIHJldHVybiBkZWc7XG4gIH1cblxuICBydW5Lbm9iKCkge1xuICAgIGNvbnN0IGtub2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmFtcH1rbm9iJHt0aGlzLmtub2JOdW19YCk7XG5cbiAgICBmdW5jdGlvbiByb3RhdGUoZSkge1xuICAgICAgbGV0IHJlc3VsdCA9IE1hdGguZmxvb3IodGhpcy5nZXRLbm9iVmFsdWVzKGUpIC0gODApO1xuICAgICAga25vYi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cmVzdWx0fWRlZylgO1xuXG4gICAgICBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgICByZXN1bHQgPSAzNjAgKyByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZVZhbHVlcyhyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5vc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKHJlc3VsdCwgdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZSlcbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBib3VuZFJvdGF0ZSA9IHJvdGF0ZS5iaW5kKHRoaXMpO1xuICAgIGZ1bmN0aW9uIHN0YXJ0Um90YXRpb24oZSkge1xuICAgICAga25vYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGJvdW5kUm90YXRlKTtcbiAgICAgIGtub2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZW5kUm90YXRpb24pO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRSb3RhdGlvbigpIHtcbiAgICAgIGtub2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBib3VuZFJvdGF0ZSk7XG4gICAgICBrbm9iLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVuZFJvdGF0aW9uKTtcbiAgICB9XG5cbiAgICBrbm9iLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRSb3RhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIGZyZXFLbm9iIGV4dGVuZHMgS25vYiB7fVxuXG5leHBvcnQgY2xhc3MgYW1wS25vYiBleHRlbmRzIEtub2Ige1xuICB0cmFuc2xhdGVWYWx1ZXMoa25vYk91dHB1dCkgeyAvL0knbSBzb3JyeSwgdGhpcyBhY3R1YWxseSBhbHNvIHVwZGF0ZXMgcGFyYW1zXG4gICAgY29uc3QgYW1wbGl0dWRlID0ga25vYk91dHB1dCAvIDM2MC4wXG4gICAgY29uc29sZS5sb2coYW1wbGl0dWRlKTtcbiAgICByZXR1cm4gYW1wbGl0dWRlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmNhJyk7XG4gIH1cbn1cblxuXG5cblxuIl0sIm5hbWVzIjpbIktub2IiLCJjb25zdHJ1Y3RvciIsIm9zY2lsbGF0b3IiLCJhdWRpb0N0eCIsImtub2JOdW0iLCJhbXAiLCJvc2MiLCJrbm9iIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidHJhbnNsYXRlVmFsdWVzIiwia25vYk91dHB1dCIsImZyZXF1ZW5jeSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29udGFpbmVyIiwiZ2V0S25vYlZhbHVlcyIsImUiLCJjb250YWluZXIiLCJ3IiwiY2xpZW50V2lkdGgiLCJoIiwiY2xpZW50SGVpZ2h0IiwieCIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwieSIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJkWCIsImRZIiwicmFkIiwiTWF0aCIsImF0YW4yIiwiZGVnIiwiUEkiLCJydW5Lbm9iIiwicm90YXRlIiwicmVzdWx0IiwiZmxvb3IiLCJzdHlsZSIsInRyYW5zZm9ybSIsInRoYXQiLCJib3VuZFJvdGF0ZSIsImJpbmQiLCJzdGFydFJvdGF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZFJvdGF0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZyZXFLbm9iIiwiYW1wS25vYiIsImFtcGxpdHVkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/knob1.js\n");

/***/ }),

/***/ "./src/scripts/oscillator.js":
/*!***********************************!*\
  !*** ./src/scripts/oscillator.js ***!
  \***********************************/
/***/ (function(module) {

eval("class Oscillator {\n  init(audioCtx, buttonNum) {\n    audioCtx = audioCtx; // get this from the context.js file\n\n    const oscillator = audioCtx.createOscillator();\n    oscillator.type = 'sine';\n    oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);\n    oscillator.connect(audioCtx.destination);\n    document.querySelector(`.button${buttonNum}`).addEventListener('click', function () {\n      oscillator.start();\n    });\n    return oscillator;\n  }\n\n}\n\nmodule.exports = Oscillator;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vc2NpbGxhdG9yLmpzLmpzIiwibmFtZXMiOlsiT3NjaWxsYXRvciIsImluaXQiLCJhdWRpb0N0eCIsImJ1dHRvbk51bSIsIm9zY2lsbGF0b3IiLCJjcmVhdGVPc2NpbGxhdG9yIiwidHlwZSIsImZyZXF1ZW5jeSIsInNldFZhbHVlQXRUaW1lIiwiY3VycmVudFRpbWUiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW50aF9zaXRlLy4vc3JjL3NjcmlwdHMvb3NjaWxsYXRvci5qcz9lNGU0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE9zY2lsbGF0b3Ige1xuXG4gIGluaXQoYXVkaW9DdHgsIGJ1dHRvbk51bSkge1xuXG4gICAgYXVkaW9DdHggPSBhdWRpb0N0eDsgLy8gZ2V0IHRoaXMgZnJvbSB0aGUgY29udGV4dC5qcyBmaWxlXG4gICAgY29uc3Qgb3NjaWxsYXRvciA9IGF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICBvc2NpbGxhdG9yLnR5cGUgPSAnc2luZSc7XG4gICAgb3NjaWxsYXRvci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoMjIwLCBhdWRpb0N0eC5jdXJyZW50VGltZSk7XG4gICAgb3NjaWxsYXRvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idXR0b24ke2J1dHRvbk51bX1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgb3NjaWxsYXRvci5zdGFydCgpO1xuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIG9zY2lsbGF0b3I7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9zY2lsbGF0b3I7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFOLENBQWlCO0VBRWZDLElBQUksQ0FBQ0MsUUFBRCxFQUFXQyxTQUFYLEVBQXNCO0lBRXhCRCxRQUFRLEdBQUdBLFFBQVgsQ0FGd0IsQ0FFSDs7SUFDckIsTUFBTUUsVUFBVSxHQUFHRixRQUFRLENBQUNHLGdCQUFULEVBQW5CO0lBQ0FELFVBQVUsQ0FBQ0UsSUFBWCxHQUFrQixNQUFsQjtJQUNBRixVQUFVLENBQUNHLFNBQVgsQ0FBcUJDLGNBQXJCLENBQW9DLEdBQXBDLEVBQXlDTixRQUFRLENBQUNPLFdBQWxEO0lBQ0FMLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQlIsUUFBUSxDQUFDUyxXQUE1QjtJQUVBQyxRQUFRLENBQUNDLGFBQVQsQ0FBd0IsVUFBU1YsU0FBVSxFQUEzQyxFQUE4Q1csZ0JBQTlDLENBQStELE9BQS9ELEVBQXdFLFlBQVc7TUFDakZWLFVBQVUsQ0FBQ1csS0FBWDtJQUNHLENBRkw7SUFJQSxPQUFPWCxVQUFQO0VBQ0M7O0FBZlk7O0FBa0JqQlksTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsVUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/oscillator.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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