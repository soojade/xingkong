/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bubble/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bubble/bubble.js":
/*!******************************!*\
  !*** ./src/bubble/bubble.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Bubble = function () {\n  function Bubble(x, y, r, colors) {\n    _classCallCheck(this, Bubble);\n\n    this.x = x;\n    this.y = y;\n    this.r = r;\n    this.color = colors[Math.floor(Math.random() * colors.length)]; // 随机获取颜色\n  }\n\n  // 更新x y 坐标及半径\n\n\n  _createClass(Bubble, [{\n    key: 'update',\n    value: function update() {\n      this.x += (Math.random() - 0.5) * 5; // x轴随机偏移\n      this.y += (Math.random() - 0.5) * 5; // x轴随机偏移\n      this.r += -Math.random() - 1; // 半径随机变化\n      if (this.r < 0) {\n        this.r = 0;\n      }\n    }\n\n    /**\r\n     *  绘制圆形\r\n     * @param {Canvas context} context canvas 2d 上下文\r\n     */\n\n  }, {\n    key: 'draw',\n    value: function draw(context) {\n      context.beginPath();\n      context.fillStyle = this.color;\n      context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false); // 绘制圆弧(x,y,半径,起始角度,结束角度,false顺时针)\n      context.globalCompositeOperation = 'lighter'; // 设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上\n      context.fill();\n      this.update();\n    }\n  }]);\n\n  return Bubble;\n}();\n\nexports.default = Bubble;\n\n//# sourceURL=webpack:///./src/bubble/bubble.js?");

/***/ }),

/***/ "./src/bubble/canvas.js":
/*!******************************!*\
  !*** ./src/bubble/canvas.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _bubble = __webpack_require__(/*! ./bubble */ \"./src/bubble/bubble.js\");\n\nvar _bubble2 = _interopRequireDefault(_bubble);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Canvas = function () {\n  function Canvas() {\n    var _this = this;\n\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.createElement('canvas');\n    this.canvas.innerText = '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';\n    this.canvas.style.display = 'block';\n    this.canvas.style.background = '#000';\n    document.body.appendChild(this.canvas);\n    this.context = this.canvas.getContext('2d');\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n    this.arr = []; // 存放鼠标移动产生的气泡\n    this.r = 50; // 默认气泡初始半径\n    this.colors = ['#69d2e7', '#a7dbdb', '#3e0e4cc', '#f38630', '#fa6900', '#ff4e50', '#f9d423']; // 设置一组比较好看的颜色\n    window.onresize = function () {\n      // 实时根据视窗大小调整canvas大小\n      _this.canvas.width = window.innerWidth;\n      _this.canvas.height = window.innerHeight;\n    };\n  }\n\n  // resize (canvas) {\n  //   canvas.width = window.innerWidth;\n  //   canvas.height = window.innerHeight;\n  // }\n\n  // 通过鼠标移动生成气泡\n\n\n  _createClass(Canvas, [{\n    key: 'handler',\n    value: function handler() {\n      var _this2 = this;\n\n      this.canvas.onmousemove = function (e) {\n        return _this2.arr.push(new _bubble2.default(e.offsetX, e.offsetY, _this2.r, _this2.colors));\n      };\n      this.render();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // 清空给定矩形内的像素(x,y,宽,高)\n      this.arr.forEach(function (item, i) {\n        item.draw(_this3.context);\n        if (item.r === 0) {\n          // 半径变成0时，删除气泡\n          _this3.arr.splice(i, 1);\n          i--; // 由于删除了一个，索引要回拨1\n        }\n      });\n      window.requestAnimationFrame(this.render.bind(this));\n    }\n  }]);\n\n  return Canvas;\n}();\n\nexports.default = Canvas;\n\n//# sourceURL=webpack:///./src/bubble/canvas.js?");

/***/ }),

/***/ "./src/bubble/index.js":
/*!*****************************!*\
  !*** ./src/bubble/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _canvas = __webpack_require__(/*! ./canvas */ \"./src/bubble/canvas.js\");\n\nvar _canvas2 = _interopRequireDefault(_canvas);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function () {\n  var canvas = new _canvas2.default();\n  canvas.handler();\n};\n\n//# sourceURL=webpack:///./src/bubble/index.js?");

/***/ })

/******/ });