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

/***/ "./public/assets/js/app.js":
/*!*********************************!*\
  !*** ./public/assets/js/app.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createForm */ \"./public/assets/js/createForm.js\");\n\nloadImages();\n\nfunction createEl() {\n  var htmlString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var className = arguments.length > 1 ? arguments[1] : undefined;\n  var el = document.createElement(htmlString);\n\n  if (className) {\n    el.setAttribute(\"class\", className);\n  }\n\n  return el;\n}\n\nfunction loadImages() {\n  fetch(\"http://localhost:3000/api/images\").then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    return createCards(data);\n  });\n}\n\nfunction createCards(data) {\n  console.log(document.getElementsByClassName(\"container\"));\n  var container = document.getElementsByClassName(\"container\")[0];\n  container.innerHTML = \"\";\n  var lastRow;\n  var row = createEl(\"div\", \"row\");\n  return data.forEach(function (image, index) {\n    var col = createEl(\"div\", \"col-md-4 mt-4\");\n    col.appendChild(createCard(image));\n\n    if (index % 3 === 0) {\n      row.appendChild(col);\n      container.appendChild(row);\n      lastRow = row;\n    }\n\n    return lastRow.appendChild(col);\n  });\n}\n\nfunction createCard(image) {\n  var card = createEl(\"div\", \"card\");\n  var imageContainer = createEl(\"div\", \"card__image-container\");\n  var img = createEl(\"img\", \"card-img-top card__image--cover\");\n  img.setAttribute(\"src\", image.image);\n  img.setAttribute(\"alt\", image.description);\n  var cardBody = createEl(\"div\", \"card-body\");\n  var ratingFormContainer = createEl(\"div\", \"rating d-flex justify-content-start\");\n  ratingFormContainer.setAttribute(\"data-id\", image._id);\n  ratingFormContainer.setAttribute(\"data-rating\", image.rating);\n  var ratingForm = (0,_createForm__WEBPACK_IMPORTED_MODULE_0__.createRatingForm)(image);\n  var cardText = createEl(\"p\", \"card-text font-weight-bold mt-2\");\n  cardText.innerText = \"\".concat(image.description, \" (\").concat(image.rating, \")\");\n  imageContainer.append(img);\n  ratingFormContainer.append(ratingForm);\n  cardBody.appendChild(ratingFormContainer);\n  cardBody.appendChild(cardText);\n  card.appendChild(imageContainer);\n  card.appendChild(cardBody);\n  return card;\n}\n\n//# sourceURL=webpack://images-demo/./public/assets/js/app.js?");

/***/ }),

/***/ "./public/assets/js/createForm.js":
/*!****************************************!*\
  !*** ./public/assets/js/createForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRatingForm\": () => (/* binding */ createRatingForm)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction createRatingForm(image) {\n  var labelText = {\n    1: \"One Star\",\n    2: \"Two Stars\",\n    3: \"Three Stars\",\n    4: \"Four Stars\",\n    5: \"Five Stars\"\n  };\n  var form = createEl(\"form\");\n  form.setAttribute(\"action\", \"post\");\n\n  for (var i = 1; i <= 5; i++) {\n    var input = createEl(\"input\", \"visuallyhidden\");\n    input.setAttribute(\"type\", \"radio\");\n    input.setAttribute(\"name\", \"rating\");\n    input.setAttribute(\"id\", \"\".concat(image._id, \"-star-\").concat(i));\n    input.setAttribute(\"value\", i);\n    var label = createEl(\"label\");\n    label.setAttribute(\"for\", \"\".concat(image._id, \"-star-\").concat(i));\n    var labelSpan = createEl(\"span\", \"visuallyhidden\");\n    labelSpan.innerText = labelText[i];\n    var star = createEl(\"i\", \"fa-star \".concat(image.rating >= i ? \"fas\" : \"far\"));\n    label.appendChild(labelSpan);\n    label.appendChild(star);\n    label.onclick = updateRating;\n    form.appendChild(input);\n    form.appendChild(label);\n  }\n\n  return form;\n}\n\nfunction updateRating(event) {\n  var _event$currentTarget$ = event.currentTarget.getAttribute(\"for\").split(\"-\"),\n      _event$currentTarget$2 = _slicedToArray(_event$currentTarget$, 3),\n      id = _event$currentTarget$2[0],\n      rating = _event$currentTarget$2[2];\n\n  fetch(\"http://localhost:3000/api/images/\".concat(id), {\n    method: \"PUT\",\n    body: JSON.stringify({\n      rating: rating\n    }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function () {\n    loadImages();\n  });\n}\n\n//# sourceURL=webpack://images-demo/./public/assets/js/createForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/assets/js/app.js");
/******/ 	
/******/ })()
;