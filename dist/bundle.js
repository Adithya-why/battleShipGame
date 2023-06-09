/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/computerPlayer.js":
/*!*******************************!*\
  !*** ./src/computerPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\n\nvar computerPlayer = function computerPlayer(enemyGameBoard) {\n  var attacked = [];\n  var attack = function attack() {\n    var pre = false;\n    var x = Math.floor(Math.random() * 10);\n    var y = Math.floor(Math.random() * 10);\n    var p = true;\n    while (p === true) {\n      var _x = Math.floor(Math.random() * 10);\n      var _y = Math.floor(Math.random() * 10);\n      p = false;\n      for (var i = 0; i < attacked.length; i++) {\n        if (attacked[i][0] === _x && attacked[i][1] === _y) {\n          p = true;\n        }\n      }\n    }\n    enemyGameBoard.receiveHit(x, y);\n    attacked.push([x, y]);\n  };\n  return {\n    attack: attack\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/computerPlayer.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nvar gameBoard = function gameBoard() {\n  var board = {};\n  var missed = [];\n  var nMissed = 0;\n  var ships = [];\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      board[\"\".concat(i).concat(j)] = \"\";\n    }\n  }\n  var getBoard = function getBoard() {\n    return board;\n  };\n  var placeShip = function placeShip(x, y, length) {\n    var tempShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(length);\n    board[\"\".concat(x).concat(y)] = tempShip;\n    ships.push(board[\"\".concat(x).concat(y)]);\n    return board;\n  };\n  var receiveHit = function receiveHit(x, y) {\n    var possibleShip = getBoard()[\"\".concat(x).concat(y)];\n    if (possibleShip) {\n      possibleShip.isHit();\n    } else {\n      missed.push([x, y]);\n      nMissed += 1;\n    }\n  };\n  var getMisses = function getMisses() {\n    return nMissed;\n  };\n  var allSunk = function allSunk() {\n    var alSunk = false;\n    var count = 0;\n    for (var _i = 0; _i < ships.length; _i++) {\n      if (ships[_i].isSunk()) {\n        count += 1;\n      }\n    }\n    if (count === ships.length) {\n      alSunk = true;\n    }\n    return alSunk;\n  };\n  return {\n    getBoard: getBoard,\n    placeShip: placeShip,\n    receiveHit: receiveHit,\n    allSunk: allSunk\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _computerPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerPlayer.js */ \"./src/computerPlayer.js\");\n\n\n\n\nconsole.log(\"imports sucess\");\nvar game = function game() {\n  var gb1 = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();\n  var gb2 = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();\n  var player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.player)();\n  var player2 = (0,_computerPlayer_js__WEBPACK_IMPORTED_MODULE_3__.computerPlayer)();\n  console.log(gb1.getBoard());\n  console.log(gb1.placeShip(0, 1, 2));\n  console.log(gb1.allSunk());\n  gb1.receiveHit(0, 1);\n  console.log(gb1.allSunk());\n};\ngame();\nconsole.log(\"Finished\");\n\n//# sourceURL=webpack://battleshipgame/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\n\nvar player = function player(enemyGameBoard) {\n  var attacked = [];\n  var attack = function attack(x, y) {\n    x = 0;\n    y = 0;\n    var pre = false;\n    for (var i = 0; i < attacked.length; i++) {\n      if (attacked[i][0] === x && attacked[i][1] === y) {\n        pre = true;\n      }\n    }\n    if (!pre) {\n      enemyGameBoard.receiveHit(x, y);\n      attacked.push([x, y]);\n    }\n  };\n  return {\n    attack: attack\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nvar ship = function ship() {\n  var lent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var hit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var sunkk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var length = lent;\n  var hits = hit;\n  var sunk = sunkk;\n  //creates a ship object\n\n  var isHit = function isHit() {\n    hits = hits + 1;\n    return hits;\n  };\n  var isSunk = function isSunk() {\n    if (hits >= length) {\n      sunk = true;\n      return sunk;\n    } else {\n      sunk = false;\n      return sunk;\n    }\n  };\n  return {\n    length: length,\n    isSunk: isSunk,\n    isHit: isHit\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/ship.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;