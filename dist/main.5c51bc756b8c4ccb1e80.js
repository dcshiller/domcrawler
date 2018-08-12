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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./DomCrawler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DomCrawler.js":
/*!***********************!*\
  !*** ./DomCrawler.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//if (!localStorage.getItem(\"domElsSaved\")) {\n//const savedStyles = new Set();\n//const nodes = document.querySelectorAll(\"*:first-of-type\");\n//const styles = []\n\n//Array.from(nodes).\n//forEach((node) => {\n//const style = getComputedStyle(node);\n//style.tag = node.tagName;\n//const hashed = hash(style);\n//if (!savedStyles.includes(hashed)) {\n//styles.push(style);\n//savedStyles.add(hash(style))\n//}\n//});\n\n//obj = { styles };\n//obj.host = window.location.host;\n//obj.path = window.location.pathname;\n//obj.date = JSON.stringify(new Date);\n//var blob = new Blob([JSON.stringify(obj)], {type: \"text/plain;charset=utf-8\"});\n//saveAs(blob, `domEls${obj.host}${obj.path}.txt`);\n//localStorage.setItem(\"domElsSaved\", true);\n//};\n\n//# sourceURL=webpack:///./DomCrawler.js?");

/***/ })

/******/ });