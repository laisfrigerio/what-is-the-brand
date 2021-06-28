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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n}\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '',\n    className,\n    padding = '',\n    escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '',\n    padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n}\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (\n    val === false ||\n    val == null ||\n    (!val && (key === 'class' || key === 'style'))\n  ) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if (\n    (type === 'object' || type === 'function') &&\n    typeof val.toJSON === 'function'\n  ) {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + \"='\" + val.replace(/'/g, '&#39;') + \"'\";\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n}\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse) {\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n}\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html) {\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34:\n        escape = '&quot;';\n        break;\n      case 38:\n        escape = '&amp;';\n        break;\n      case 60:\n        escape = '&lt;';\n        break;\n      case 62:\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n}\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str) {\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 1).readFileSync(filename, 'utf8');\n  } catch (ex) {\n    pug_rethrow(err, null, lineno);\n  }\n  var context = 3,\n    lines = str.split('\\n'),\n    start = Math.max(lineno - context, 0),\n    end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines\n    .slice(start, end)\n    .map(function(line, i) {\n      var curr = i + start + 1;\n      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;\n    })\n    .join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  try {\n    err.message =\n      (filename || 'Pug') +\n      ':' +\n      lineno +\n      '\\n' +\n      context +\n      '\\n\\n' +\n      err.message;\n  } catch (e) {}\n  throw err;\n}\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./resources/scripts/board.js":
/*!************************************!*\
  !*** ./resources/scripts/board.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Board = function Board(el, totalCards) {\n  var _this = this;\n\n  _classCallCheck(this, Board);\n\n  _defineProperty(this, \"init\", function () {\n    var $board = document.querySelector(_this.el);\n    $board.innerHTML = \"\";\n\n    for (var i = 0; i < _this.totalCards; i++) {\n      $board.appendChild(\"\\n                <li class=\\\"card\\\">\\n                    <p class=\\\"question\\\">?</p>\\n                </li>\\n            \");\n    }\n  });\n\n  this.el = el;\n  this.totalCards = totalCards;\n};\n\n\n\n//# sourceURL=webpack:///./resources/scripts/board.js?");

/***/ }),

/***/ "./resources/scripts/game.js":
/*!***********************************!*\
  !*** ./resources/scripts/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./resources/scripts/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Game = function Game(el, level, jsonData) {\n  var _this = this;\n\n  _classCallCheck(this, Game);\n\n  _defineProperty(this, \"init\", function () {\n    _this.cards.forEach(function (card, index) {\n      var brand = _this.jsonData.logos[_this.arraySort[index]];\n      if (brand.type === 'icon') card.append(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createImageNode\"])(brand, index));else card.append(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createParagraphNode\"])(brand, index));\n      /**\n       * Add on click event listener\n       */\n\n      card.addEventListener(\"click\", function () {\n        _this.onCardPressed(card);\n      });\n    });\n  });\n\n  _defineProperty(this, \"onCardPressed\", function (card) {\n    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"containsClass\"])(card, 'show') && !Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"containsClass\"])(card, 'is-correct')) _this.hide(card);else _this.show(card);\n\n    _this.check();\n\n    _this.end();\n  });\n\n  _defineProperty(this, \"show\", function (card) {\n    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"containsClass\"])(card, 'is-correct')) {\n      _this.selectedCards.push(card);\n\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(card, ['show']);\n    }\n  });\n\n  _defineProperty(this, \"hide\", function (card) {\n    if (_this.selectedCards.length === 1) {\n      // flip back card, if has only one card selected\n      var check = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"inArray\"])(_this.selectedCards, card); // check if this card is in array\n\n      if (check) {\n        _this.selectedCards = []; // remove element from array\n\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"removeClass\"])(card, ['show']); // remove class show from card element\n      }\n    }\n  });\n\n  _defineProperty(this, \"check\", function () {\n    /**\n     * Check is correct or not\n     */\n    if (_this.selectedCards.length === 2) {\n      var cardOne = _this.selectedCards[0];\n      var cardTwo = _this.selectedCards[1];\n      /**\n       * The slug data attribute is in the <img> tag or <p> tag\n       */\n\n      var slugOne = cardOne.children[1].getAttribute(\"data\");\n      var slugTwo = cardTwo.children[1].getAttribute(\"data\");\n      if (slugOne === slugTwo) _this.correct(cardOne, cardTwo);else _this.wrong(cardOne, cardTwo);\n      _this.selectedCards = [];\n    }\n  });\n\n  _defineProperty(this, \"correct\", function (cardOne, cardTwo) {\n    _this.finalResponse.push(cardOne, cardTwo);\n\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(cardOne, ['is-correct']);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"])(cardTwo, ['is-correct']);\n  });\n\n  _defineProperty(this, \"wrong\", function (cardOne, cardTwo) {\n    setTimeout(function () {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"removeClass\"])(cardOne, ['show']);\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"removeClass\"])(cardTwo, ['show']);\n    }, 2000);\n  });\n\n  _defineProperty(this, \"end\", function () {\n    if (_this.finalResponse.length === _this.level) {\n      alert(\"Você concluiu a partida!!! Pressione f5 para jogar novamente\");\n    }\n  });\n\n  this.el = el;\n  this.cards = document.querySelectorAll(el);\n  this.arraySort = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"sortArr\"])(level);\n  this.level = level;\n  this.selectedCards = [];\n  this.finalResponse = [];\n  this.jsonData = jsonData;\n};\n\n\n\n//# sourceURL=webpack:///./resources/scripts/game.js?");

/***/ }),

/***/ "./resources/scripts/helpers.js":
/*!**************************************!*\
  !*** ./resources/scripts/helpers.js ***!
  \**************************************/
/*! exports provided: addClass, removeClass, containsClass, createImageNode, createParagraphNode, createHTMLTag, getAttribute, setAttribute, sortArr, insert, inArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containsClass\", function() { return containsClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImageNode\", function() { return createImageNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createParagraphNode\", function() { return createParagraphNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHTMLTag\", function() { return createHTMLTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAttribute\", function() { return getAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAttribute\", function() { return setAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortArr\", function() { return sortArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return insert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inArray\", function() { return inArray; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * Add a class into a HTML tag\n */\nvar addClass = function addClass(node, classList) {\n  var _iterator = _createForOfIteratorHelper(classList),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var className = _step.value;\n      node.classList.add(className);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n/**\n * Remove a class into a HTML tag\n */\n\nvar removeClass = function removeClass(node, classList) {\n  var _iterator2 = _createForOfIteratorHelper(classList),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var className = _step2.value;\n      node.classList.remove(className);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\nvar containsClass = function containsClass(node, className) {\n  return node.classList.contains(className);\n};\n/**\n * Create a img tag\n */\n\nvar createImageNode = function createImageNode(brand, index) {\n  var node = document.createElement('img');\n  setAttribute(node, 'src', \"./images/\".concat(brand.path));\n  setAttribute(node, 'data', brand.slug);\n  addClass(node, ['item', 'card-img', \"img-\".concat(index)]);\n  return node;\n};\n/**\n * Create a paragraph tag\n */\n\nvar createParagraphNode = function createParagraphNode(brand, index) {\n  var node = document.createElement('p');\n  node.innerText = brand.name;\n  addClass(node, ['item', 'card-p', \"p-\".concat(index)]);\n  setAttribute(node, 'data', brand.slug);\n  return node;\n};\nvar createHTMLTag = function createHTMLTag(tag) {\n  var classList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var node = document.createElement(tag);\n  addClass(node, classList);\n  return node;\n};\nvar getAttribute = function getAttribute(node, attr) {\n  return node.getAttribute(attr);\n};\nvar setAttribute = function setAttribute(node, attr, value) {\n  node.setAttribute(attr, value);\n};\n/**\n * Add values into array (uniques) random\n */\n\nvar sortArr = function sortArr(size) {\n  if (size === 0) return [];\n  var arr = [];\n\n  while (arr.length < size) {\n    var r = Math.floor(Math.random() * size);\n    arr = insert(arr, r);\n  }\n\n  return arr;\n};\n/**\n * Insert into arr case el not exists in it\n */\n\nvar insert = function insert(arr, el) {\n  if (arr.indexOf(el) === -1) arr.push(el);\n  return arr;\n};\n/**\n * Check el is into arr\n */\n\nvar inArray = function inArray(arr, el) {\n  return arr.indexOf(el) > -1;\n};\n\n//# sourceURL=webpack:///./resources/scripts/helpers.js?");

/***/ }),

/***/ "./resources/scripts/index.js":
/*!************************************!*\
  !*** ./resources/scripts/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json_level_1_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/level-1.json */ \"./resources/scripts/json/level-1.json\");\nvar _json_level_1_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/level-1.json */ \"./resources/scripts/json/level-1.json\", 1);\n/* harmony import */ var _json_level_2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/level-2.json */ \"./resources/scripts/json/level-2.json\");\nvar _json_level_2_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./json/level-2.json */ \"./resources/scripts/json/level-2.json\", 1);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ \"./resources/scripts/board.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./resources/scripts/game.js\");\n\n\n\n\nvar levels = {\n  easy: {\n    jsonData: _json_level_1_json__WEBPACK_IMPORTED_MODULE_0__,\n    totalCards: 16\n  },\n  intermediary: {\n    jsonData: _json_level_2_json__WEBPACK_IMPORTED_MODULE_1__,\n    totalCards: 32\n  }\n};\nvar board = new _board__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.memory-game .list-cards');\nvar game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.memory-game .card', 16, _json_level_1_json__WEBPACK_IMPORTED_MODULE_0__);\ngame.init();\ndocument.querySelectorAll(\".start\").forEach(function (button, index) {\n  button.addEventListener(\"click\", function () {\n    var dataLevel = button.getAttribute(\"data-level\");\n    var level = levels[dataLevel];\n    board.init();\n    game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.memory-game .card', level.totalCards, level.jsonData);\n    game.init();\n  });\n});\n\n//# sourceURL=webpack:///./resources/scripts/index.js?");

/***/ }),

/***/ "./resources/scripts/json/level-1.json":
/*!*********************************************!*\
  !*** ./resources/scripts/json/level-1.json ***!
  \*********************************************/
/*! exports provided: logos, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"logos\\\":[{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"amazon.svg\\\",\\\"slug\\\":\\\"amazon\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Amazon\\\",\\\"slug\\\":\\\"amazon\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"dartlang.svg\\\",\\\"slug\\\":\\\"dartlang\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Dart\\\",\\\"slug\\\":\\\"dartlang\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"firebase.svg\\\",\\\"slug\\\":\\\"firebase\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Firebase\\\",\\\"slug\\\":\\\"firebase\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"git.svg\\\",\\\"slug\\\":\\\"git\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Git\\\",\\\"slug\\\":\\\"git\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"html5.svg\\\",\\\"slug\\\":\\\"html5\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"HTML5\\\",\\\"slug\\\":\\\"html5\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"laravel.svg\\\",\\\"slug\\\":\\\"laravel\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Laravel\\\",\\\"slug\\\":\\\"laravel\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"mongodb.svg\\\",\\\"slug\\\":\\\"mongodb\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"MongoDB\\\",\\\"slug\\\":\\\"mongodb\\\"},{\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"pugjs.svg\\\",\\\"slug\\\":\\\"pugjs\\\"},{\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Pug\\\",\\\"slug\\\":\\\"pugjs\\\"}]}\");\n\n//# sourceURL=webpack:///./resources/scripts/json/level-1.json?");

/***/ }),

/***/ "./resources/scripts/json/level-2.json":
/*!*********************************************!*\
  !*** ./resources/scripts/json/level-2.json ***!
  \*********************************************/
/*! exports provided: logos, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"logos\\\":[{\\\"slug\\\":\\\"amazon\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"amazon.svg\\\"},{\\\"slug\\\":\\\"amazon\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Amazon\\\"},{\\\"slug\\\":\\\"dartlang\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"dartlang.svg\\\"},{\\\"slug\\\":\\\"dartlang\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Dart\\\"},{\\\"slug\\\":\\\"firebase\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"firebase.svg\\\"},{\\\"slug\\\":\\\"firebase\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Firebase\\\"},{\\\"slug\\\":\\\"git\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"git.svg\\\"},{\\\"slug\\\":\\\"git\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Git\\\"},{\\\"slug\\\":\\\"html5\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"html5.svg\\\"},{\\\"slug\\\":\\\"html5\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"HTML5\\\"},{\\\"slug\\\":\\\"laravel\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"laravel.svg\\\"},{\\\"slug\\\":\\\"laravel\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Laravel\\\"},{\\\"slug\\\":\\\"mongodb\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"mongodb.svg\\\"},{\\\"slug\\\":\\\"mongodb\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"MongoDB\\\"},{\\\"slug\\\":\\\"pugjs\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"pugjs.svg\\\"},{\\\"slug\\\":\\\"pugjs\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Pug\\\"},{\\\"slug\\\":\\\"sqlite\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"sqlite.svg\\\"},{\\\"slug\\\":\\\"sqlite\\\",\\\"type\\\":\\\"ibrand-namecon\\\",\\\"path\\\":\\\"SQLite\\\"},{\\\"slug\\\":\\\"twitch\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"twitch.svg\\\"},{\\\"slug\\\":\\\"twitch\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Twitch\\\"},{\\\"slug\\\":\\\"typescript\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"typescript.svg\\\"},{\\\"slug\\\":\\\"typescript\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Typescript\\\"},{\\\"slug\\\":\\\"zeplin\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"zeplin.svg\\\"},{\\\"slug\\\":\\\"zeplin\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Zeplin\\\"},{\\\"slug\\\":\\\"webpack\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"webpack.svg\\\"},{\\\"slug\\\":\\\"webpack\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Webpack\\\"},{\\\"slug\\\":\\\"ruby\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"ruby.svg\\\"},{\\\"slug\\\":\\\"ruby\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Ruby\\\"},{\\\"slug\\\":\\\"npmjs\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"npmjs.svg\\\"},{\\\"slug\\\":\\\"npmjs\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"NPM\\\"},{\\\"slug\\\":\\\"microsoft\\\",\\\"type\\\":\\\"icon\\\",\\\"path\\\":\\\"microsoft.svg\\\"},{\\\"slug\\\":\\\"microsoft\\\",\\\"type\\\":\\\"brand-name\\\",\\\"name\\\":\\\"Microsoft\\\"}]}\");\n\n//# sourceURL=webpack:///./resources/scripts/json/level-2.json?");

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./resources/styles/app.scss?");

/***/ }),

/***/ "./resources/templates/index.pug":
/*!***************************************!*\
  !*** ./resources/templates/index.pug ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"pt-BR\\\"\\u003E\\u003Chead\\u003E\\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"\\u003E\\u003Ctitle\\u003EJS Memory Game\\u003C\\u002Ftitle\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\\u003Cmain class=\\\"memory-game\\\"\\u003E\\u003Ch1\\u003EWhat is the brand?\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"levels\\\"\\u003E\\u003Cbutton class=\\\"item-80 start\\\" type=\\\"button\\\" data-level=\\\"easy\\\"\\u003EFácil\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"item-70 start\\\" type=\\\"button\\\" data-level=\\\"intermediary\\\"\\u003EIntermediário\\u003C\\u002Fbutton\\u003E\\u003Cbutton class=\\\"item-90 start\\\" type=\\\"button\\\" data-level=\\\"high\\\"\\u003EDíficil\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cul class=\\\"list-cards\\\"\\u003E\";\n// iterate [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]\n;(function(){\n  var $$obj = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var item = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cli class=\\\"card\\\"\\u003E\\u003Cp class=\\\"question\\\"\\u003E?\\u003C\\u002Fp\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cli class=\\\"card\\\"\\u003E\\u003Cp class=\\\"question\\\"\\u003E?\\u003C\\u002Fp\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fmain\\u003E\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./resources/templates/index.pug?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************!*\
  !*** multi ./resources/styles/app.scss ./resources/scripts/index.js ./resources/templates/index.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/laiss/Documentos/js-memory-game/resources/styles/app.scss */\"./resources/styles/app.scss\");\n__webpack_require__(/*! /home/laiss/Documentos/js-memory-game/resources/scripts/index.js */\"./resources/scripts/index.js\");\nmodule.exports = __webpack_require__(/*! /home/laiss/Documentos/js-memory-game/resources/templates/index.pug */\"./resources/templates/index.pug\");\n\n\n//# sourceURL=webpack:///multi_./resources/styles/app.scss_./resources/scripts/index.js_./resources/templates/index.pug?");

/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });