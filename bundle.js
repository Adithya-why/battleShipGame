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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\n\n\n//same as player,but the coorindtaes to attack are generated ranbdomly\n\nvar computerPlayer = function computerPlayer(enemyGameBoard) {\n  var attacked = [];\n  var attack = function attack() {\n    var pre = false;\n\n    //selects random coordinates\n    var x = Math.floor(Math.random() * 10);\n    var y = Math.floor(Math.random() * 10);\n    var p = true;\n\n    //if coorinates attacked already, then new cooridnates are generated\n    while (p === true) {\n      var _x = Math.floor(Math.random() * 10);\n      var _y = Math.floor(Math.random() * 10);\n      p = false;\n      for (var i = 0; i < attacked.length; i++) {\n        if (attacked[i][0] === _x && attacked[i][1] === _y) {\n          p = true;\n        }\n      }\n    }\n\n    //then the given location is attacked\n    enemyGameBoard.receiveHit(x, y);\n\n    //attacked location is kept track of\n    attacked.push([x, y]);\n  };\n  return {\n    attack: attack\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/computerPlayer.js?");

/***/ }),

/***/ "./src/displayStuff.js":
/*!*****************************!*\
  !*** ./src/displayStuff.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayBoard: () => (/* binding */ displayBoard)\n/* harmony export */ });\n//this file is for DOM interaction\n\n//function displays a given gameboard\n//the cname classname is given so that the gameboards of the two players are displayed at different divs\nvar displayBoard = function displayBoard(gboard, cname) {\n  //gets the board object\n  var board = gboard.getBoard();\n  console.log(gboard);\n  //selects the div where gameboard is to be displayed\n  var boardDiv = document.querySelector(\".board.\".concat(cname));\n\n  //loops ina 10*10 same as keys of board object(00 to 99)\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      //creates a div for each square in the board\n      var div = document.createElement('div');\n      div.classList.add(\"bd\");\n      //adds the cname, which generally denotes to which player the board belongs to\n      //so gb1 means board of player 1 and sop on\n      div.classList.add(cname);\n      //add the grid number, sames as the keys of board object\n      //so a div with class 00 will coreespond to the value in board obj at obj[01]\n\n      div.classList.add(\"\".concat(i).concat(j));\n\n      //ads an id\n      div.setAttribute('id', \"\".concat(cname).concat(i).concat(j));\n\n      //appaende to parent div\n      boardDiv.appendChild(div);\n    }\n  }\n  //let element = document.querySelector(\".bd.gb1.11\");\n  console.log(\"passed\");\n\n  //this section gets the ships and locations of ships\n  var shipLocs = gboard.getSlocs();\n  var ships = gboard.getShip();\n  console.log(shipLocs);\n\n  //tries to add a ship class to all the loactions where ships is present\n  //shiplocs only has the starting grid od ship\n  //so based on if it  is row or column, adjacent grids are also considered ships(based on length)\n  //if ship of len 2 starts at 00 and is a row ship, the both 00 and 01 must be added to the ship class\n  for (var k = 0; k < shipLocs.length; k++) {\n    var loc = shipLocs[k];\n    var sh = ships[k];\n    var ori = sh.ori;\n    var l = sh.length;\n    if (ori == \"row\") {\n      for (var f = 0; f < l; f++) {\n        //let locstr = `${loc[0]}${loc[1]+f}`;\n        //console.log(locstr);\n\n        //it selects the startin square of ship and adds class ship\n        //eventuallly adds to the cooridnate based on row or column to find the next square to add class ship \n        var temp = document.querySelector(\"#\".concat(cname).concat(loc[0]).concat(loc[1] + f));\n        temp.classList.add('ship');\n      }\n    }\n    //if column ship\n    //same procedure, but the next square is found by adding to the first coordinate\n    if (ori == \"column\") {\n      for (var _f = 0; _f < l; _f++) {\n        //let locstr = `${loc[0]}${loc[1]+f}`;\n        //console.log(locstr);\n\n        //it selects the startin square of ship and adds class ship\n        //eventuallly adds to the cooridnate based on row or column to find the next square to add class ship \n        var _temp = document.querySelector(\"#\".concat(cname).concat(loc[0] + _f).concat(loc[1]));\n        _temp.classList.add('ship');\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/displayStuff.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n//this modules exports a function that creates a gameboard and places ships in it.\n\nvar gameBoard = function gameBoard() {\n  //contains a key for every square in a 10*10 board, the value is the ship object if it exists\n  var board = {};\n\n  //keeps track of coordinates of missed attacks(empty squares) so they are not hit again\n  var missed = [];\n\n  //keeps track of number os such misses\n  var nMissed = 0;\n\n  //keeps track of all the ships placed oin board\n  var ships = [];\n\n  //keeps track of locations of all ships placed\n  var slocs = [];\n\n  //populates the board objects with keys from 00 to 99 with empty values for now\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      board[\"\".concat(i).concat(j)] = \"\";\n    }\n  }\n\n  //function to return the board object\n  var getBoard = function getBoard() {\n    return board;\n  };\n\n  //function to place a ship\n  //creates a ship with given length and orinetation\n  //inserts that ship to the given location\n  var placeShip = function placeShip(x, y, length) {\n    var or = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"row\";\n    var tempShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(length, 0, false, or);\n\n    //inserts to board\n    board[\"\".concat(x).concat(y)] = tempShip;\n\n    //keeps tracks of the ship and location\n    ships.push(board[\"\".concat(x).concat(y)]);\n    slocs.push([x, y]);\n    //returns the updated board\n    return board;\n  };\n\n  //return locations of all ships\n  var getSlocs = function getSlocs() {\n    return slocs;\n  };\n\n  //function that takes a coordinated and hits the ship if a ship is present at the given location\n  //also keeps track of missed shots if there is no ship\n  var receiveHit = function receiveHit(x, y) {\n    //gets the element at the given coordinate from board\n    var possibleShip = getBoard()[\"\".concat(x).concat(y)];\n\n    //if there is a ship, its number of hits is increased\n    if (possibleShip) {\n      possibleShip.isHit();\n    }\n    //if no ship,misses increased and missed location is recorded\n    else {\n      missed.push([x, y]);\n      nMissed += 1;\n    }\n  };\n\n  //returns all teh present ships\n  var getShip = function getShip() {\n    return ships;\n  };\n\n  //returns number of misses\n  var getMisses = function getMisses() {\n    return nMissed;\n  };\n\n  //checks if all the ships in the gameboard are sunk\n  var allSunk = function allSunk() {\n    var alSunk = false;\n    var count = 0;\n    //checks the issunk property of all ships in board\n    for (var _i = 0; _i < ships.length; _i++) {\n      if (ships[_i].isSunk()) {\n        count += 1;\n      }\n    }\n    //if all ships in voard return false, then alsunk = true\n    if (count === ships.length) {\n      alSunk = true;\n    }\n\n    //returns if all ships are sunk\n    return alSunk;\n  };\n  return {\n    getBoard: getBoard,\n    placeShip: placeShip,\n    receiveHit: receiveHit,\n    allSunk: allSunk,\n    getShip: getShip,\n    getSlocs: getSlocs\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _computerPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerPlayer.js */ \"./src/computerPlayer.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _displayStuff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayStuff.js */ \"./src/displayStuff.js\");\n\n\n\n\n\n\n\n//this file handles game loops\n//creates player and gamboards\n//and handles interaction between them\nconsole.log(\"imports sucess\");\nvar game = function game() {\n  var gb1 = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();\n  var gb2 = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();\n  var player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.player)();\n  var player2 = (0,_computerPlayer_js__WEBPACK_IMPORTED_MODULE_3__.computerPlayer)();\n  gb1.placeShip(1, 1, 2, \"row\");\n  gb1.placeShip(2, 3, 4, \"row\");\n  gb2.placeShip(3, 1, 5, \"column\");\n\n  //gb1.placeShip(7,3,4);\n  //gb1.placeShip(0,4,7);\n  console.log(gb1.getBoard());\n  (0,_displayStuff_js__WEBPACK_IMPORTED_MODULE_5__.displayBoard)(gb1, \"gb1\");\n  (0,_displayStuff_js__WEBPACK_IMPORTED_MODULE_5__.displayBoard)(gb2, \"gb2\");\n};\ngame();\nconsole.log(\"Finished\");\n\n//# sourceURL=webpack://battleshipgame/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\n\n\n//returns a player object with an attack function tHAT interacts with the gameboard of the other player\n\nvar player = function player(enemyGameBoard) {\n  //keeps track of all the squares attacked\n  var attacked = [];\n\n  //function to attack a given square\n  var attack = function attack(x, y) {\n    x = 0;\n    y = 0;\n    //checks if the given location is already attacked\n    var pre = false;\n    for (var i = 0; i < attacked.length; i++) {\n      if (attacked[i][0] === x && attacked[i][1] === y) {\n        pre = true;\n      }\n    }\n\n    //if already not attacked\n    //then recive hit of enemy board is called to attack the square\n\n    if (!pre) {\n      enemyGameBoard.receiveHit(x, y);\n      //attacked square are kept track of\n      attacked.push([x, y]);\n    }\n  };\n  return {\n    attack: attack\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\n//this module exports a functions that creates a ship object\n//it takes in the length, number of hits taken, if it is sunk and takes the orientation(row or column)\n//default values used since most ships are initalized with only the length\n\nvar ship = function ship() {\n  var lent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var hit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var sunkk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var or = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"row\";\n  //sets the main properties\n  //length, number of hits taken, if it is sunk and takes the orientation(row or column)\n  var length = lent;\n  var hits = hit;\n  var sunk = sunkk;\n  var ori = or;\n  //creates a ship object\n\n  //this function increases the number of hits, is used when a ship is hit by enemy\n  //also returns the number of hits\n  var isHit = function isHit() {\n    hits = hits + 1;\n    return hits;\n  };\n\n  //function checks if the ship is sunk\n  //it is usuaally invoked after a hit\n  //if hit>=length,ship is sunk\n  //that is a ship of length 2 can survive only 1 hit and is sunk after second hit\n  var isSunk = function isSunk() {\n    if (hits >= length) {\n      //is sunk, sets the global sunk variable to true\n      sunk = true;\n      return sunk;\n    }\n    //else not sunk\n    else {\n      sunk = false;\n      return sunk;\n    }\n  };\n\n  //returns properties used outside\n\n  return {\n    length: length,\n    isSunk: isSunk,\n    isHit: isHit,\n    ori: ori\n  };\n};\n\n\n//# sourceURL=webpack://battleshipgame/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.main{\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.gb1.board,.gb2.board{\r\n    display: grid;\r\n    grid-template-columns: repeat(10,1fr);\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.gb2.board>div{\r\n    background-color: lightcoral;\r\n}\r\n\r\n\r\n.bd{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid black;\r\n    background-color: aqua;\r\n}\r\n\r\n\r\n.bd.ship{\r\n    background-color: grey;\r\n}\r\n\r\n\r\n.gb2.bd.ship{\r\n    background-color: grey;\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleshipgame/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleshipgame/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleshipgame/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleshipgame/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleshipgame/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleshipgame/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleshipgame/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleshipgame/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleshipgame/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleshipgame/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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