/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var App_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(App_1.App, { name: "Gonzalo" }), document.getElementById("root"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = this && this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Foo_1 = __webpack_require__(4);
	var App = function (_super) {
	    __extends(App, _super);
	    function App(props) {
	        _super.call(this, props);
	        // We have to bind methods with this because you don't use
	        // React.createClass that does it automatically.:
	        this.handleClick = this.handleClick.bind(this);
	    }
	    App.prototype.handleClick = function () {
	        alert("Hello " + this.props.name);
	    };
	    App.prototype.render = function () {
	        return React.createElement("div", null, React.createElement("h1", null, "Hello ", this.props.name, "!"), React.createElement("a", { href: '#', onClick: this.handleClick }, "Click me!"), React.createElement(Foo_1.Foo, null));
	    };
	    return App;
	}(React.Component);
	exports.App = App;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = this && this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Foo = function (_super) {
	    __extends(Foo, _super);
	    function Foo() {
	        _super.apply(this, arguments);
	    }
	    Foo.prototype.render = function () {
	        return React.createElement("div", null, "Foo");
	    };
	    return Foo;
	}(React.Component);
	exports.Foo = Foo;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map