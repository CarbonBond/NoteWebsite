/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/baseSite.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/baseSite.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    padding:0;\n    margin:0;\n}\n#container {\n    width: 100vw;\n    height: 100vh;\n}\n.siteBody{\n    background-color:rgb(5, 75, 11);\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n.noteBody{\n    background-color:green;\n    min-width:100vw;\n    min-height:100vh;\n}\n.noteDirectoryContainer{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: red;\n    max-width: none;\n    z-index: 50;\n}\n.noteDirectory{\n    position: fixed;\n    height: inherit;\n    width: inherit;\n    background-color:rgb(70, 26, 153);\n}\n.noteDirectoryButton{\n    position: fixed;\n    width: 35px;\n    height: 35px;\n    background-color: yellow;\n    z-index: 100;\n}\n.noteContainer{\n    padding: 70px 10px 0px 30px;\n}\n.noteAddContainer{\n    padding: 10px 10px 0px 30px;\n}\n.noteDirectoryButton:hover{\n    background-color: orange;\n}\n.add:hover{\n    cursor: pointer;\n}\n.hidden{\n    display: none;\n}\n@media screen and (min-width: 900px) {\n    .noteDirectoryContainer{\n        position: static;\n        float: left;\n        background-color:rgb(70, 26, 153);\n        width: 400px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/baseSite.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,+BAA+B;IAC/B,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,WAAW;AACf;AACA;IACI,eAAe;IACf,eAAe;IACf,cAAc;IACd,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,YAAY;AAChB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI;QACI,gBAAgB;QAChB,WAAW;QACX,iCAAiC;QACjC,YAAY;IAChB;AACJ","sourcesContent":["body{\n    padding:0;\n    margin:0;\n}\n#container {\n    width: 100vw;\n    height: 100vh;\n}\n.siteBody{\n    background-color:rgb(5, 75, 11);\n    width: 100%;\n    height: 100%;\n    display: flex;\n}\n.noteBody{\n    background-color:green;\n    min-width:100vw;\n    min-height:100vh;\n}\n.noteDirectoryContainer{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: red;\n    max-width: none;\n    z-index: 50;\n}\n.noteDirectory{\n    position: fixed;\n    height: inherit;\n    width: inherit;\n    background-color:rgb(70, 26, 153);\n}\n.noteDirectoryButton{\n    position: fixed;\n    width: 35px;\n    height: 35px;\n    background-color: yellow;\n    z-index: 100;\n}\n.noteContainer{\n    padding: 70px 10px 0px 30px;\n}\n.noteAddContainer{\n    padding: 10px 10px 0px 30px;\n}\n.noteDirectoryButton:hover{\n    background-color: orange;\n}\n.add:hover{\n    cursor: pointer;\n}\n.hidden{\n    display: none;\n}\n@media screen and (min-width: 900px) {\n    .noteDirectoryContainer{\n        position: static;\n        float: left;\n        background-color:rgb(70, 26, 153);\n        width: 400px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/note.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/note.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".directoryNote{\n    font-size:20px;\n    display:flex;\n    flex-direction: column;\n    margin: 10px 0px;\n}\n.noteHead{\n    display:flex;\n    flex-direction: row;\n    justify-content:space-between;\n}\n.noteAdd{\n    margin-left: 20px;\n    background-color: lightblue;\n    width: 25px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n.noteFoot{\n    display:flex;\n    flex-direction: column;\n    padding-left: 10px;\n}\n.noteName:hover, .noteAdd:hover{\n    cursor: pointer;\n}\n.noteCards{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(177, 43, 177);\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.noteContent{\n    background-color: purple;\n    position: relative;\n    min-width: 90%;\n    min-height: 90%;\n    width: auto;\n    height: auto;\n}\n.formContainer{\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    top: 0;\n    background-color: rgb(15, 170, 190);\n    z-index:200;\n}\n\n.underlined{\n    text-decoration: underline;\n}\n\n.noteToolBox{\n    display: flex;\n    flex-direction:row;\n    background-color: purple;\n    position: fixed;\n    z-index: 100;\n    top: 10px;\n}\n.noteToolAddCard{\n    order: 1;\n}\n.noteToolDelete{\n    order: 2;\n}\n.noteTool{\n    width: 35px;\n    height: 35px;\n    background-color: yellow;\n    margin:10px;\n    cursor: pointer;\n}\n.noteToolDelete{\n    background-color: red;\n}\n.card{\n    background-color: rgb(55, 204, 241);\n    display:flex;\n    flex-direction: column;\n    justify-self: center;\n    position: absolute;\n}\n.cardHeader{\n    display: flex;\n    align-items: center;\n}\n.cardFooter{\n    flex: 1;\n}\n.cardTitle{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: x-large;\n}\n.cardDragBox{\n    width: 30px;\n    height: 30px;\n    background-color: slategray;\n    cursor: pointer;\n}\n.cardTextBox{\n    width: 100%;\n    height: 100%;\n    outline: none;\n    background-color: yellow;\n    border: none;\n    resize: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n.hide{\n    display: none;\n}\n\n@media screen and (min-width: 900px) {\n    .formContainer{\n        padding: 15px;\n        width: auto;\n        height: auto;\n\n    }\n}", "",{"version":3,"sources":["webpack://./src/note.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,OAAO;IACP,MAAM;IACN,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,SAAS;AACb;AACA;IACI,QAAQ;AACZ;AACA;IACI,QAAQ;AACZ;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,mCAAmC;IACnC,YAAY;IACZ,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,OAAO;AACX;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,aAAa;QACb,WAAW;QACX,YAAY;;IAEhB;AACJ","sourcesContent":[".directoryNote{\n    font-size:20px;\n    display:flex;\n    flex-direction: column;\n    margin: 10px 0px;\n}\n.noteHead{\n    display:flex;\n    flex-direction: row;\n    justify-content:space-between;\n}\n.noteAdd{\n    margin-left: 20px;\n    background-color: lightblue;\n    width: 25px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n.noteFoot{\n    display:flex;\n    flex-direction: column;\n    padding-left: 10px;\n}\n.noteName:hover, .noteAdd:hover{\n    cursor: pointer;\n}\n.noteCards{\n    width: 100%;\n    height: 100%;\n    background-color: rgb(177, 43, 177);\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.noteContent{\n    background-color: purple;\n    position: relative;\n    min-width: 90%;\n    min-height: 90%;\n    width: auto;\n    height: auto;\n}\n.formContainer{\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    top: 0;\n    background-color: rgb(15, 170, 190);\n    z-index:200;\n}\n\n.underlined{\n    text-decoration: underline;\n}\n\n.noteToolBox{\n    display: flex;\n    flex-direction:row;\n    background-color: purple;\n    position: fixed;\n    z-index: 100;\n    top: 10px;\n}\n.noteToolAddCard{\n    order: 1;\n}\n.noteToolDelete{\n    order: 2;\n}\n.noteTool{\n    width: 35px;\n    height: 35px;\n    background-color: yellow;\n    margin:10px;\n    cursor: pointer;\n}\n.noteToolDelete{\n    background-color: red;\n}\n.card{\n    background-color: rgb(55, 204, 241);\n    display:flex;\n    flex-direction: column;\n    justify-self: center;\n    position: absolute;\n}\n.cardHeader{\n    display: flex;\n    align-items: center;\n}\n.cardFooter{\n    flex: 1;\n}\n.cardTitle{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: x-large;\n}\n.cardDragBox{\n    width: 30px;\n    height: 30px;\n    background-color: slategray;\n    cursor: pointer;\n}\n.cardTextBox{\n    width: 100%;\n    height: 100%;\n    outline: none;\n    background-color: yellow;\n    border: none;\n    resize: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n.hide{\n    display: none;\n}\n\n@media screen and (min-width: 900px) {\n    .formContainer{\n        padding: 15px;\n        width: auto;\n        height: auto;\n\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/baseSite.css":
/*!**************************!*\
  !*** ./src/baseSite.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_baseSite_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./baseSite.css */ "./node_modules/css-loader/dist/cjs.js!./src/baseSite.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_baseSite_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_baseSite_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_baseSite_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_baseSite_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/note.css":
/*!**********************!*\
  !*** ./src/note.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./note.css */ "./node_modules/css-loader/dist/cjs.js!./src/note.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/baseSite.js":
/*!*************************!*\
  !*** ./src/baseSite.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSite_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseSite.css */ "./src/baseSite.css");
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.js */ "./src/note.js");



const main = () => {
  const container = document.querySelector('#container');
  const siteBody = document.createElement('div');
  siteBody.classList.add('siteBody');
  container.appendChild(siteBody);

  // hamburger button for Note Directory
  const noteDirectoryButton = document.createElement('div');
  noteDirectoryButton.classList.add('noteDirectoryButton');
  siteBody.appendChild(noteDirectoryButton);

  // Note directory holder.
  const noteDirectoryContainer = document.createElement('div');
  noteDirectoryContainer.classList.add('noteDirectoryContainer');
  siteBody.appendChild(noteDirectoryContainer);

  // Note directory.
  const noteDirectory = document.createElement('div');
  noteDirectory.classList.add('noteDirectory');
  noteDirectoryContainer.appendChild(noteDirectory);

  // Note Container
  const noteContainer = document.createElement('div');
  noteContainer.classList.add('noteContainer');
  noteDirectory.appendChild(noteContainer);

  // noteBody
  const noteBody = document.createElement('div');
  noteBody.classList.add('noteBody');
  siteBody.appendChild(noteBody);

  noteDirectoryButton.addEventListener('click', () => {
    noteDirectoryContainer.classList.toggle('hidden');
  });

  const noteAddContainer = document.createElement('div');
  noteDirectory.appendChild(noteAddContainer);
  noteAddContainer.classList.add('noteAddContainer');

  const addDir = document.createElement('div');
  noteAddContainer.appendChild(addDir);
  addDir.textContent = 'Add';
  addDir.classList.add('add');
  addDir.setAttribute('note', 'root');
  addDir.addEventListener('click', (e) => {
    const form = _note_js__WEBPACK_IMPORTED_MODULE_1__.noteDom.addForm(e);
    const formButton = form.querySelector('.formButton');
    const formName = form.querySelector('.formName');
    function noteSubmit() {
      _note_js__WEBPACK_IMPORTED_MODULE_1__.noteManager.addNote(formName.value);
      form.remove();
    }
    formButton.addEventListener('click', () => {
      noteSubmit();
    });
    formName.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        noteSubmit();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domManager = (() => {

    const deleteElement = (deleteTarget, deleteAll) => {
        if(deleteAll == undefined || typeof(deleteAll) != "boolean") {
            console.error(" domManager: deleteElement: deleteAll is not a BOOL type")
            return 'error';
        }
        if(deleteAll == true) {
            if(typeof deleteTarget == 'string') {
                const elementToRemove = document.querySelectorAll(`.${deleteTarget}`);
                if(elementToRemove){
                    elementToRemove.forEach(item => {
                        item.remove();
                    })
                } else {
                    console.warn(`domManager.deleteElement: Didn't find ".${deleteTarget}" class.`)
                }
            } else {
                console.warn(`domManager.deleteElement: Can only delete multiple elements when using class selector`)
            }
        } else {
            if(typeof deleteTarget == 'string'){
                const elementToRemove = document.querySelector(`.${deleteTarget}`);
                if(elementToRemove){
                    elementToRemove.remove();
                } else {
                    console.warn(`domManager.deleteElement: Didn't find ".${deleteTarget}" class.`)
                }
            } else if (isDOM(deleteTarget)) {
                deleteTarget.remove();
            } else {
                console.warn(`domManager.deleteElement: deleteTarget is not a valid selector`)
            }
            
        }
    };


    function createElementDOM(elementStyle){
        const elementDOM = document.createElement(elementStyle);
        for(let i = 1; i < arguments.length; i++){
            elementDOM.classList.add(arguments[i]);
        }
        return elementDOM;
    }
    
    function checkIfDrawn(searchClass, searchLocation){
        if(searchLocation){
            const item = searchLocation.querySelector(`.${searchClass}`)
            let isDrawn = false;
            if(item) {
                isDrawn = true;
            }
            return isDrawn;
        }
    }

    function isDOM(Obj) {
              
        // Function that checks whether 
        // object is of type Element
       return Obj instanceof Element;
   }
   function makeValidSelector(string){
       const VALIDSELECTION = [
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
       'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
       '-', '_'];
       const VALIDNUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
   
       let validString = '';
   
       for(let i = 0; i < string.length; i++) {
           if(i == 0){
               if(VALIDSELECTION.includes(string.substr(i, 1))) {
                   validString +=(string.substr(i, 1))                
               } else if(VALIDNUMBER.includes(string.substr(i, 1))){
                    validString += '_';
                    validString += (string.substr(i))
               }
           } else{
               if(VALIDSELECTION.includes(string.substr(i, 1)) || VALIDNUMBER.includes(string.substr(i, 1))) {
                   validString +=(string.substr(i, 1))                
               } else {
               }
           }
       }
       return validString;
   }
    
    return{
        deleteElement,
        createElementDOM,
        checkIfDrawn,
        makeValidSelector
    }
})();



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);



/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteManager": () => (/* binding */ noteManager),
/* harmony export */   "noteDom": () => (/* binding */ noteDom)
/* harmony export */ });
/* harmony import */ var _note_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.css */ "./src/note.css");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");



const noteManager = (() => {
  let noteList = {};

  const addNote = (noteName, note) => {
    if (noteName != '' && typeof noteName == 'string') {
      let noteClass = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].makeValidSelector(noteName);
      let newNote = {
        name: `${noteName}`,
        id: '',
        cardList: {},
        noteFolder: {},
      };
      addCard(newNote, 'Default');
      if (typeof note == 'object') {
        noteClass = addDuplicateNumber(noteClass, note.noteFolder);
        newNote.id = `${note.id}-${noteClass}`;
        note.noteFolder[noteClass] = newNote;
        noteDom.addDirectory(note.noteFolder[noteClass], note.id);
      } else {
        noteClass = addDuplicateNumber(noteClass, noteList);
        newNote.id = noteClass;
        noteList[noteClass] = newNote;
        noteDom.addDirectory(noteList[noteClass], 'root');
      }
    } else {
      console.error('noteManager.addNote: Incorrect type');
    }
  };
  const removeNote = (note) => {
    delete noteList[note.id];
  };

  const addCard = (note, cardName) => {
    let cardID = cardName.replaceAll(' ', '');
    cardID = addDuplicateNumber(cardID, note.cardList);
    note.cardList[cardID] = {
      name: cardName,
      id: cardID,
      location: [600, 300],
      content: { textBox: '' },
    };
    return cardID;
  };

  const getAllNotes = (list) => {
    let allNotes = [];
    for (let note in list) {
      console.log(`${Object.keys(list[note].noteFolder).length}`);
      if (Object.keys(list[note].noteFolder).length > 0) {
        let anotherList = getAllNotes(list[note].noteFolder);
        for (let anotherNote in anotherList) {
          allNotes.push(anotherList[anotherNote]);
        }
      }
      allNotes.push(list[note]);
    }
    return allNotes;
  };

  const updateNoteName = (note, name) => {
    note.name = name;
  };

  return {
    addNote,
    removeNote,
    addCard,
    getAllNotes,
    updateNoteName,
  };
})();

const noteDom = (() => {
  function createToolMenu(location, note) {
    const noteToolBox = document.createElement('div');
    noteToolBox.classList.add('noteToolBox');

    const noteToolMenu = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM(
      'div',
      'noteToolMenu',
      'noteTool'
    );
    noteToolMenu.textContent = 'M';
    noteToolMenu.addEventListener('click', () => {
      const noteToolHide = noteToolBox.querySelectorAll('.noteToolHide');
      noteToolHide.forEach((item) => {
        item.classList.toggle('hide');
      });
    });

    const noteToolDelete = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM(
      'div',
      'noteToolDelete',
      'noteToolHide',
      'noteTool',
      'hide'
    );
    noteToolDelete.textContent = 'D';
    noteToolDelete.addEventListener('click', () => {
      noteManager.removeNote(note);
      _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteElement(note.id, true);
      _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteElement(location.classList[0], true);
    });

    const noteToolAddCard = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM(
      'div',
      'noteToolAddCard',
      'noteTool',
      'noteToolHide',
      'hide'
    );
    noteToolAddCard.textContent = 'A';
    noteToolAddCard.addEventListener('click', (e) => {
      const form = noteDom.addForm(e);
      const formButton = form.querySelector('.formButton');
      const formName = form.querySelector('.formName');
      formButton.addEventListener('click', () => {
        noteSubmit();
      });
      formName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          noteSubmit();
        }
      });
      function noteSubmit() {
        addCardDOM(
          note,
          noteManager.addCard(note, formName.value, 'textBox'),
          location.querySelector('.noteContent')
        );
        form.remove();
      }
    });

    noteToolBox.appendChild(noteToolMenu);
    noteToolBox.appendChild(noteToolDelete);
    noteToolBox.appendChild(noteToolAddCard);
    location.appendChild(noteToolBox);
  }

  const addDirectory = (note, location) => {
    const noteContainer = document.querySelector('.noteContainer');
    const noteMain = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM(
      'div',
      note.id,
      'directoryNote'
    );
    const noteHead = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'noteHead');
    const noteFoot = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'noteFoot');
    const noteName = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'noteName');
    const noteAdd = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'noteAdd');

    noteHead.appendChild(noteName);
    noteHead.appendChild(noteAdd);
    noteMain.appendChild(noteHead);
    noteMain.appendChild(noteFoot);
    noteName.textContent = note.name;
    noteAdd.textContent = '+';
    noteMain.setAttribute('note', note.id);
    if (location == 'root') {
      noteContainer.appendChild(noteMain);
    } else if (location != null && location != undefined && location != '') {
      const noteLocation = noteContainer.querySelector(`.${location}`);
      const footer = noteLocation.querySelector('.noteFoot');
      footer.appendChild(noteMain);
    }

    noteAdd.addEventListener('click', (e) => {
      const form = noteDom.addForm(e);
      const formButton = form.querySelector('.formButton');
      const formName = form.querySelector('.formName');
      formButton.addEventListener('click', () => {
        noteSubmit();
      });
      formName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          noteSubmit();
        }
      });
      function noteSubmit() {
        noteManager.addNote(formName.value, note);
        form.remove();
      }
    });

    noteName.addEventListener('click', (item) => {
      if (noteName.getAttribute('selected') != 'true') {
        updateNoteContent(note, noteName);
      }
    });
    noteName.addEventListener('dblclick', (e) => {
      noteName.setAttribute('contentEditable', 'true');
      noteName.focus();
    });

    noteName.addEventListener('keydown', (e) => {
      if (noteName.getAttribute('contentEditable')) {
        if (e.key == 'Enter') {
          console.table(note);
          noteName.setAttribute('contentEditable', 'false');
          noteManager.updateNoteName(note, noteName.textContent);
          console.table(note);
        }
      }
    });
  };

  function updateNoteContent(note, noteName) {
    //TEST
    _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteElement('noteCards', true);
    const noteBody = document.querySelector('.noteBody');
    const noteContent = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'noteContent');
    const noteCards = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'noteCards');
    noteBody.appendChild(noteCards);

    createToolMenu(noteCards, note);
    noteCards.appendChild(noteContent);
    document.querySelectorAll('.noteName').forEach((item) => {
      item.classList.remove('underlined');
      item.setAttribute('selected', 'false');
    });
    noteName.classList.add('underlined');
    noteName.setAttribute('selected', 'true');
    for (let card in note.cardList) {
      addCardDOM(note, card, document.querySelector('.noteContent'));
    }
  }
  const addCardDOM = (note, card, domLocation) => {
    const cardDOM = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'card', card);
    domLocation.appendChild(cardDOM);
    cardDOM.style.width = '300px';
    cardDOM.style.height = '300px';
    console.log(note['cardList'][card].location[0]);
    cardDOM.style.left = `${note.cardList[card].location[0]}px`;
    cardDOM.style.top = `${note.cardList[card].location[1]}px`;
    const header = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'cardHeader');
    cardDOM.appendChild(header);

    cardDOM.setAttribute('draggable', 'true');

    const boundingRect = domLocation.getBoundingClientRect();

    domLocation.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    domLocation.ondrop = (e) => {
      e.preventDefault();

      const cardX = e.dataTransfer.getData('cardX');
      const cardY = e.dataTransfer.getData('cardY');
      const cardTarget = e.dataTransfer.getData('cardDOM');
      console.log(cardTarget);
      const cardList = domLocation.querySelectorAll(`.card.${cardTarget}`);
      const targetDOM = cardList[0];
      note.cardList[cardTarget].location[0] = e.x - boundingRect.x - cardX;
      note.cardList[cardTarget].location[1] = e.y - boundingRect.y - cardY;
      console.table({ Card: card, Location: note.cardList[card].location });
      targetDOM.style.left = `${note.cardList[cardTarget].location[0]}px`;
      targetDOM.style.top = `${note.cardList[cardTarget].location[1]}px`;
    };
    cardDOM.addEventListener('dragstart', (e) => {
      const boundingCardRect = cardDOM.getBoundingClientRect();
      let cardX = e.x - boundingCardRect.x;
      let cardY = e.y - boundingCardRect.y;
      e.dataTransfer.setData('cardX', cardX);
      e.dataTransfer.setData('cardY', cardY);
      e.dataTransfer.setData('cardDOM', e.target.classList[1]);
    });

    const footer = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'cardFooter');
    cardDOM.appendChild(footer);

    addCardTitle(note.cardList[card], header, card);
    addCardTextbox(note.cardList[card], footer, 'Test');
  };
  const addCardTitle = (card, location, text) => {
    const title = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'cardTitle');
    header.appendChild(title);
    title.textContent = note.cardList[card].name;
  };
  const addCardTextbox = (card, location, text) => {
    const textBox = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('textarea', 'cardTextBox');
    location.appendChild(textBox);
    textBox.innerHTML = card.content[`textBox`];

    textBox.addEventListener('keyup', (e) => {
      card.content.textBox = textBox.value;
    });
  };
  const addForm = (e) => {
    const formContainer = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('div', 'formContainer');
    formContainer.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    document.querySelector('.siteBody').appendChild(formContainer);

    const form = document.createElement('form');
    formContainer.appendChild(form);
    const formNameLabel = document.createElement('label');
    formNameLabel.setAttribute('for', 'Name');
    formNameLabel.textContent = 'Name:';
    form.appendChild(formNameLabel);
    const formName = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('input', 'formName');
    formName.type = 'text';
    formName.classList.add('Name');

    form.appendChild(formName);
    const formButton = _domManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createElementDOM('input', 'formButton');

    formButton.type = 'button';
    formButton.value = 'Submit';
    form.appendChild(formButton);

    formName.focus();
    formName.select();

    const mediaQuery = window.matchMedia('(min-width: 900px)');
    if (mediaQuery.matches) {
      const siteBody = document.querySelector('.siteBody');
      if (siteBody.offsetWidth - formContainer.offsetWidth > e.x) {
        // Left side of Window
        formContainer.style.top = `${e.y}px`;
        formContainer.style.left = `${e.x}px`;
      } else {
        // right side of window
        formContainer.style.top = `${e.y}px`;
        formContainer.style.left = `${e.x - formContainer.offsetWidth}px`;
      }
    } else {
      formContainer.style.left = `0px`;
      formContainer.style.top = `0px`;
    }

    return formContainer;
  };
  return {
    addDirectory,
    addCardDOM,
    addForm,
  };
})();

function addDuplicateNumber(stringItem, itemList) {
  let count = 0;
  let countStart = 0;
  let checkNoMatch = 0;
  while (!checkNoMatch) {
    for (let i = 0; i < Object.keys(itemList).length; i += 1) {
      const item = Object.keys(itemList)[i];
      if (item === stringItem) {
        count += 1;
        if (!countStart) {
          stringItem += '0';
          stringItem += count;
          countStart = 1;
        } else {
          stringItem = stringItem.substring(0, stringItem.lastIndexOf('0') + 1);
          stringItem += count;
        }
      }
    }
    checkNoMatch = 1;
    for (let item in itemList) {
      if (item == stringItem) {
        checkNoMatch = 0;
      }
    }
  }
  return stringItem;
}




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseSite.js */ "./src/baseSite.js");
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.js */ "./src/note.js");
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager */ "./src/domManager.js");




(0,_baseSite_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

_note_js__WEBPACK_IMPORTED_MODULE_1__.noteManager.addNote('Default', 'root')





function logAll(items){
    for(let arg in arguments){
        console.log(arguments[arg])
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0s7QUFDQTs7QUFFckMsd0RBQUk7O0FBRUoseURBQW1COzs7Ozs7QUFNbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvLi9zcmMvYmFzZVNpdGUuY3NzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vc3JjL25vdGUuY3NzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3Rld2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vc3JjL2Jhc2VTaXRlLmNzcz9jNGQ1Iiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vc3JjL25vdGUuY3NzPzgxMGYiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3Rld2Vic2l0ZS8uL3NyYy9iYXNlU2l0ZS5qcyIsIndlYnBhY2s6Ly9ub3Rld2Vic2l0ZS8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL25vdGV3ZWJzaXRlLy4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25vdGV3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm90ZXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub3Rld2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxufVxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5zaXRlQm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNSwgNzUsIDExKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm5vdGVCb2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xcbiAgICBtaW4td2lkdGg6MTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxufVxcbi5ub3RlRGlyZWN0b3J5Q29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICB6LWluZGV4OiA1MDtcXG59XFxuLm5vdGVEaXJlY3Rvcnl7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzAsIDI2LCAxNTMpO1xcbn1cXG4ubm90ZURpcmVjdG9yeUJ1dHRvbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuLm5vdGVDb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDcwcHggMTBweCAwcHggMzBweDtcXG59XFxuLm5vdGVBZGRDb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMzBweDtcXG59XFxuLm5vdGVEaXJlY3RvcnlCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuLmFkZDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgICAubm90ZURpcmVjdG9yeUNvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDcwLCAyNiwgMTUzKTtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYmFzZVNpdGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFFBQVE7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGlDQUFpQztRQUNqQyxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLnNpdGVCb2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig1LCA3NSwgMTEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubm90ZUJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XFxuICAgIG1pbi13aWR0aDoxMDB2dztcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG59XFxuLm5vdGVEaXJlY3RvcnlDb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICAgIHotaW5kZXg6IDUwO1xcbn1cXG4ubm90ZURpcmVjdG9yeXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3MCwgMjYsIDE1Myk7XFxufVxcbi5ub3RlRGlyZWN0b3J5QnV0dG9ue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG4ubm90ZUNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogNzBweCAxMHB4IDBweCAzMHB4O1xcbn1cXG4ubm90ZUFkZENvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAzMHB4O1xcbn1cXG4ubm90ZURpcmVjdG9yeUJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4uYWRkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICAgIC5ub3RlRGlyZWN0b3J5Q29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzAsIDI2LCAxNTMpO1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kaXJlY3RvcnlOb3Rle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4ubm90ZUhlYWR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxufVxcbi5ub3RlQWRke1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbi5ub3RlRm9vdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5ub3RlTmFtZTpob3ZlciwgLm5vdGVBZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5vdGVDYXJkc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgNDMsIDE3Nyk7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ub3RlQ29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICBtaW4taGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbi5mb3JtQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE3MCwgMTkwKTtcXG4gICAgei1pbmRleDoyMDA7XFxufVxcblxcbi51bmRlcmxpbmVke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5vdGVUb29sQm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRvcDogMTBweDtcXG59XFxuLm5vdGVUb29sQWRkQ2FyZHtcXG4gICAgb3JkZXI6IDE7XFxufVxcbi5ub3RlVG9vbERlbGV0ZXtcXG4gICAgb3JkZXI6IDI7XFxufVxcbi5ub3RlVG9vbHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubm90ZVRvb2xEZWxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmNhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMjA0LCAyNDEpO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5jYXJkSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZEZvb3RlcntcXG4gICAgZmxleDogMTtcXG59XFxuLmNhcmRUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcbi5jYXJkRHJhZ0JveHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkVGV4dEJveHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgICAuZm9ybUNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbm90ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixPQUFPO0lBQ1AsTUFBTTtJQUNOLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7QUFDYjtBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLE9BQU87QUFDWDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZOztJQUVoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kaXJlY3RvcnlOb3Rle1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG4ubm90ZUhlYWR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxufVxcbi5ub3RlQWRke1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbi5ub3RlRm9vdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5ub3RlTmFtZTpob3ZlciwgLm5vdGVBZGQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5vdGVDYXJkc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgNDMsIDE3Nyk7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ub3RlQ29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICBtaW4taGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbi5mb3JtQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE3MCwgMTkwKTtcXG4gICAgei1pbmRleDoyMDA7XFxufVxcblxcbi51bmRlcmxpbmVke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5vdGVUb29sQm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRvcDogMTBweDtcXG59XFxuLm5vdGVUb29sQWRkQ2FyZHtcXG4gICAgb3JkZXI6IDE7XFxufVxcbi5ub3RlVG9vbERlbGV0ZXtcXG4gICAgb3JkZXI6IDI7XFxufVxcbi5ub3RlVG9vbHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubm90ZVRvb2xEZWxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmNhcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMjA0LCAyNDEpO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5jYXJkSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZEZvb3RlcntcXG4gICAgZmxleDogMTtcXG59XFxuLmNhcmRUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcbi5jYXJkRHJhZ0JveHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkVGV4dEJveHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgICAuZm9ybUNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZVNpdGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlU2l0ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm90ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vdGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9iYXNlU2l0ZS5jc3MnO1xuaW1wb3J0IHsgbm90ZU1hbmFnZXIsIG5vdGVEb20gfSBmcm9tICcuL25vdGUuanMnO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gIGNvbnN0IHNpdGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpdGVCb2R5LmNsYXNzTGlzdC5hZGQoJ3NpdGVCb2R5Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaXRlQm9keSk7XG5cbiAgLy8gaGFtYnVyZ2VyIGJ1dHRvbiBmb3IgTm90ZSBEaXJlY3RvcnlcbiAgY29uc3Qgbm90ZURpcmVjdG9yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlRGlyZWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25vdGVEaXJlY3RvcnlCdXR0b24nKTtcbiAgc2l0ZUJvZHkuYXBwZW5kQ2hpbGQobm90ZURpcmVjdG9yeUJ1dHRvbik7XG5cbiAgLy8gTm90ZSBkaXJlY3RvcnkgaG9sZGVyLlxuICBjb25zdCBub3RlRGlyZWN0b3J5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVEaXJlY3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZURpcmVjdG9yeUNvbnRhaW5lcicpO1xuICBzaXRlQm9keS5hcHBlbmRDaGlsZChub3RlRGlyZWN0b3J5Q29udGFpbmVyKTtcblxuICAvLyBOb3RlIGRpcmVjdG9yeS5cbiAgY29uc3Qgbm90ZURpcmVjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlRGlyZWN0b3J5LmNsYXNzTGlzdC5hZGQoJ25vdGVEaXJlY3RvcnknKTtcbiAgbm90ZURpcmVjdG9yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRGlyZWN0b3J5KTtcblxuICAvLyBOb3RlIENvbnRhaW5lclxuICBjb25zdCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90ZUNvbnRhaW5lcicpO1xuICBub3RlRGlyZWN0b3J5LmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuXG4gIC8vIG5vdGVCb2R5XG4gIGNvbnN0IG5vdGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVCb2R5LmNsYXNzTGlzdC5hZGQoJ25vdGVCb2R5Jyk7XG4gIHNpdGVCb2R5LmFwcGVuZENoaWxkKG5vdGVCb2R5KTtcblxuICBub3RlRGlyZWN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGVEaXJlY3RvcnlDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdGVBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZURpcmVjdG9yeS5hcHBlbmRDaGlsZChub3RlQWRkQ29udGFpbmVyKTtcbiAgbm90ZUFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlQWRkQ29udGFpbmVyJyk7XG5cbiAgY29uc3QgYWRkRGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkRGlyKTtcbiAgYWRkRGlyLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gIGFkZERpci5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcbiAgYWRkRGlyLnNldEF0dHJpYnV0ZSgnbm90ZScsICdyb290Jyk7XG4gIGFkZERpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5vdGVEb20uYWRkRm9ybShlKTtcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybUJ1dHRvbicpO1xuICAgIGNvbnN0IGZvcm1OYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybU5hbWUnKTtcbiAgICBmdW5jdGlvbiBub3RlU3VibWl0KCkge1xuICAgICAgbm90ZU1hbmFnZXIuYWRkTm90ZShmb3JtTmFtZS52YWx1ZSk7XG4gICAgICBmb3JtLnJlbW92ZSgpO1xuICAgIH1cbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbm90ZVN1Ym1pdCgpO1xuICAgIH0pO1xuICAgIGZvcm1OYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICAgIGlmIChldi5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgbm90ZVN1Ym1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG4iLCJjb25zdCBkb21NYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGRlbGV0ZUVsZW1lbnQgPSAoZGVsZXRlVGFyZ2V0LCBkZWxldGVBbGwpID0+IHtcbiAgICAgICAgaWYoZGVsZXRlQWxsID09IHVuZGVmaW5lZCB8fCB0eXBlb2YoZGVsZXRlQWxsKSAhPSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIiBkb21NYW5hZ2VyOiBkZWxldGVFbGVtZW50OiBkZWxldGVBbGwgaXMgbm90IGEgQk9PTCB0eXBlXCIpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgICBpZihkZWxldGVBbGwgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYodHlwZW9mIGRlbGV0ZVRhcmdldCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2RlbGV0ZVRhcmdldH1gKTtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50VG9SZW1vdmUpe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9SZW1vdmUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBkb21NYW5hZ2VyLmRlbGV0ZUVsZW1lbnQ6IERpZG4ndCBmaW5kIFwiLiR7ZGVsZXRlVGFyZ2V0fVwiIGNsYXNzLmApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYGRvbU1hbmFnZXIuZGVsZXRlRWxlbWVudDogQ2FuIG9ubHkgZGVsZXRlIG11bHRpcGxlIGVsZW1lbnRzIHdoZW4gdXNpbmcgY2xhc3Mgc2VsZWN0b3JgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodHlwZW9mIGRlbGV0ZVRhcmdldCA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGVsZXRlVGFyZ2V0fWApO1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRUb1JlbW92ZSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYGRvbU1hbmFnZXIuZGVsZXRlRWxlbWVudDogRGlkbid0IGZpbmQgXCIuJHtkZWxldGVUYXJnZXR9XCIgY2xhc3MuYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRE9NKGRlbGV0ZVRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgZG9tTWFuYWdlci5kZWxldGVFbGVtZW50OiBkZWxldGVUYXJnZXQgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3JgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RE9NKGVsZW1lbnRTdHlsZSl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRTdHlsZSk7XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZWxlbWVudERPTS5jbGFzc0xpc3QuYWRkKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRET007XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNoZWNrSWZEcmF3bihzZWFyY2hDbGFzcywgc2VhcmNoTG9jYXRpb24pe1xuICAgICAgICBpZihzZWFyY2hMb2NhdGlvbil7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc2VhcmNoTG9jYXRpb24ucXVlcnlTZWxlY3RvcihgLiR7c2VhcmNoQ2xhc3N9YClcbiAgICAgICAgICAgIGxldCBpc0RyYXduID0gZmFsc2U7XG4gICAgICAgICAgICBpZihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXNEcmF3biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNEcmF3bjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRE9NKE9iaikge1xuICAgICAgICAgICAgICBcbiAgICAgICAgLy8gRnVuY3Rpb24gdGhhdCBjaGVja3Mgd2hldGhlciBcbiAgICAgICAgLy8gb2JqZWN0IGlzIG9mIHR5cGUgRWxlbWVudFxuICAgICAgIHJldHVybiBPYmogaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgfVxuICAgZnVuY3Rpb24gbWFrZVZhbGlkU2VsZWN0b3Ioc3RyaW5nKXtcbiAgICAgICBjb25zdCBWQUxJRFNFTEVDVElPTiA9IFtcbiAgICAgICAgICAgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLCAnbicsICdvJywgJ3AnLCAncScsICdyJywgJ3MnLCAndCcsICd1JywgJ3YnLCAndycsICd4JywgJ3knLCAneicsIFxuICAgICAgICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJywgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onLCBcbiAgICAgICAnLScsICdfJ107XG4gICAgICAgY29uc3QgVkFMSUROVU1CRVIgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXVxuICAgXG4gICAgICAgbGV0IHZhbGlkU3RyaW5nID0gJyc7XG4gICBcbiAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgIGlmKGkgPT0gMCl7XG4gICAgICAgICAgICAgICBpZihWQUxJRFNFTEVDVElPTi5pbmNsdWRlcyhzdHJpbmcuc3Vic3RyKGksIDEpKSkge1xuICAgICAgICAgICAgICAgICAgIHZhbGlkU3RyaW5nICs9KHN0cmluZy5zdWJzdHIoaSwgMSkpICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgfSBlbHNlIGlmKFZBTElETlVNQkVSLmluY2x1ZGVzKHN0cmluZy5zdWJzdHIoaSwgMSkpKXtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRTdHJpbmcgKz0gJ18nO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZFN0cmluZyArPSAoc3RyaW5nLnN1YnN0cihpKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgaWYoVkFMSURTRUxFQ1RJT04uaW5jbHVkZXMoc3RyaW5nLnN1YnN0cihpLCAxKSkgfHwgVkFMSUROVU1CRVIuaW5jbHVkZXMoc3RyaW5nLnN1YnN0cihpLCAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICB2YWxpZFN0cmluZyArPShzdHJpbmcuc3Vic3RyKGksIDEpKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHZhbGlkU3RyaW5nO1xuICAgfVxuICAgIFxuICAgIHJldHVybntcbiAgICAgICAgZGVsZXRlRWxlbWVudCxcbiAgICAgICAgY3JlYXRlRWxlbWVudERPTSxcbiAgICAgICAgY2hlY2tJZkRyYXduLFxuICAgICAgICBtYWtlVmFsaWRTZWxlY3RvclxuICAgIH1cbn0pKCk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBkb21NYW5hZ2VyO1xuXG4iLCJpbXBvcnQgJy4vbm90ZS5jc3MnO1xuaW1wb3J0IGRvbU1hbmFnZXIgZnJvbSAnLi9kb21NYW5hZ2VyLmpzJztcblxuY29uc3Qgbm90ZU1hbmFnZXIgPSAoKCkgPT4ge1xuICBsZXQgbm90ZUxpc3QgPSB7fTtcblxuICBjb25zdCBhZGROb3RlID0gKG5vdGVOYW1lLCBub3RlKSA9PiB7XG4gICAgaWYgKG5vdGVOYW1lICE9ICcnICYmIHR5cGVvZiBub3RlTmFtZSA9PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG5vdGVDbGFzcyA9IGRvbU1hbmFnZXIubWFrZVZhbGlkU2VsZWN0b3Iobm90ZU5hbWUpO1xuICAgICAgbGV0IG5ld05vdGUgPSB7XG4gICAgICAgIG5hbWU6IGAke25vdGVOYW1lfWAsXG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgY2FyZExpc3Q6IHt9LFxuICAgICAgICBub3RlRm9sZGVyOiB7fSxcbiAgICAgIH07XG4gICAgICBhZGRDYXJkKG5ld05vdGUsICdEZWZhdWx0Jyk7XG4gICAgICBpZiAodHlwZW9mIG5vdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgbm90ZUNsYXNzID0gYWRkRHVwbGljYXRlTnVtYmVyKG5vdGVDbGFzcywgbm90ZS5ub3RlRm9sZGVyKTtcbiAgICAgICAgbmV3Tm90ZS5pZCA9IGAke25vdGUuaWR9LSR7bm90ZUNsYXNzfWA7XG4gICAgICAgIG5vdGUubm90ZUZvbGRlcltub3RlQ2xhc3NdID0gbmV3Tm90ZTtcbiAgICAgICAgbm90ZURvbS5hZGREaXJlY3Rvcnkobm90ZS5ub3RlRm9sZGVyW25vdGVDbGFzc10sIG5vdGUuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90ZUNsYXNzID0gYWRkRHVwbGljYXRlTnVtYmVyKG5vdGVDbGFzcywgbm90ZUxpc3QpO1xuICAgICAgICBuZXdOb3RlLmlkID0gbm90ZUNsYXNzO1xuICAgICAgICBub3RlTGlzdFtub3RlQ2xhc3NdID0gbmV3Tm90ZTtcbiAgICAgICAgbm90ZURvbS5hZGREaXJlY3Rvcnkobm90ZUxpc3Rbbm90ZUNsYXNzXSwgJ3Jvb3QnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignbm90ZU1hbmFnZXIuYWRkTm90ZTogSW5jb3JyZWN0IHR5cGUnKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZU5vdGUgPSAobm90ZSkgPT4ge1xuICAgIGRlbGV0ZSBub3RlTGlzdFtub3RlLmlkXTtcbiAgfTtcblxuICBjb25zdCBhZGRDYXJkID0gKG5vdGUsIGNhcmROYW1lKSA9PiB7XG4gICAgbGV0IGNhcmRJRCA9IGNhcmROYW1lLnJlcGxhY2VBbGwoJyAnLCAnJyk7XG4gICAgY2FyZElEID0gYWRkRHVwbGljYXRlTnVtYmVyKGNhcmRJRCwgbm90ZS5jYXJkTGlzdCk7XG4gICAgbm90ZS5jYXJkTGlzdFtjYXJkSURdID0ge1xuICAgICAgbmFtZTogY2FyZE5hbWUsXG4gICAgICBpZDogY2FyZElELFxuICAgICAgbG9jYXRpb246IFs2MDAsIDMwMF0sXG4gICAgICBjb250ZW50OiB7IHRleHRCb3g6ICcnIH0sXG4gICAgfTtcbiAgICByZXR1cm4gY2FyZElEO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbE5vdGVzID0gKGxpc3QpID0+IHtcbiAgICBsZXQgYWxsTm90ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBub3RlIGluIGxpc3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke09iamVjdC5rZXlzKGxpc3Rbbm90ZV0ubm90ZUZvbGRlcikubGVuZ3RofWApO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGxpc3Rbbm90ZV0ubm90ZUZvbGRlcikubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgYW5vdGhlckxpc3QgPSBnZXRBbGxOb3RlcyhsaXN0W25vdGVdLm5vdGVGb2xkZXIpO1xuICAgICAgICBmb3IgKGxldCBhbm90aGVyTm90ZSBpbiBhbm90aGVyTGlzdCkge1xuICAgICAgICAgIGFsbE5vdGVzLnB1c2goYW5vdGhlckxpc3RbYW5vdGhlck5vdGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWxsTm90ZXMucHVzaChsaXN0W25vdGVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbE5vdGVzO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU5vdGVOYW1lID0gKG5vdGUsIG5hbWUpID0+IHtcbiAgICBub3RlLm5hbWUgPSBuYW1lO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkTm90ZSxcbiAgICByZW1vdmVOb3RlLFxuICAgIGFkZENhcmQsXG4gICAgZ2V0QWxsTm90ZXMsXG4gICAgdXBkYXRlTm90ZU5hbWUsXG4gIH07XG59KSgpO1xuXG5jb25zdCBub3RlRG9tID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gY3JlYXRlVG9vbE1lbnUobG9jYXRpb24sIG5vdGUpIHtcbiAgICBjb25zdCBub3RlVG9vbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVUb29sQm94LmNsYXNzTGlzdC5hZGQoJ25vdGVUb29sQm94Jyk7XG5cbiAgICBjb25zdCBub3RlVG9vbE1lbnUgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oXG4gICAgICAnZGl2JyxcbiAgICAgICdub3RlVG9vbE1lbnUnLFxuICAgICAgJ25vdGVUb29sJ1xuICAgICk7XG4gICAgbm90ZVRvb2xNZW51LnRleHRDb250ZW50ID0gJ00nO1xuICAgIG5vdGVUb29sTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG5vdGVUb29sSGlkZSA9IG5vdGVUb29sQm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlVG9vbEhpZGUnKTtcbiAgICAgIG5vdGVUb29sSGlkZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub3RlVG9vbERlbGV0ZSA9IGRvbU1hbmFnZXIuY3JlYXRlRWxlbWVudERPTShcbiAgICAgICdkaXYnLFxuICAgICAgJ25vdGVUb29sRGVsZXRlJyxcbiAgICAgICdub3RlVG9vbEhpZGUnLFxuICAgICAgJ25vdGVUb29sJyxcbiAgICAgICdoaWRlJ1xuICAgICk7XG4gICAgbm90ZVRvb2xEZWxldGUudGV4dENvbnRlbnQgPSAnRCc7XG4gICAgbm90ZVRvb2xEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBub3RlTWFuYWdlci5yZW1vdmVOb3RlKG5vdGUpO1xuICAgICAgZG9tTWFuYWdlci5kZWxldGVFbGVtZW50KG5vdGUuaWQsIHRydWUpO1xuICAgICAgZG9tTWFuYWdlci5kZWxldGVFbGVtZW50KGxvY2F0aW9uLmNsYXNzTGlzdFswXSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub3RlVG9vbEFkZENhcmQgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oXG4gICAgICAnZGl2JyxcbiAgICAgICdub3RlVG9vbEFkZENhcmQnLFxuICAgICAgJ25vdGVUb29sJyxcbiAgICAgICdub3RlVG9vbEhpZGUnLFxuICAgICAgJ2hpZGUnXG4gICAgKTtcbiAgICBub3RlVG9vbEFkZENhcmQudGV4dENvbnRlbnQgPSAnQSc7XG4gICAgbm90ZVRvb2xBZGRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBub3RlRG9tLmFkZEZvcm0oZSk7XG4gICAgICBjb25zdCBmb3JtQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybUJ1dHRvbicpO1xuICAgICAgY29uc3QgZm9ybU5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtTmFtZScpO1xuICAgICAgZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbm90ZVN1Ym1pdCgpO1xuICAgICAgfSk7XG4gICAgICBmb3JtTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgbm90ZVN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZ1bmN0aW9uIG5vdGVTdWJtaXQoKSB7XG4gICAgICAgIGFkZENhcmRET00oXG4gICAgICAgICAgbm90ZSxcbiAgICAgICAgICBub3RlTWFuYWdlci5hZGRDYXJkKG5vdGUsIGZvcm1OYW1lLnZhbHVlLCAndGV4dEJveCcpLFxuICAgICAgICAgIGxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlQ29udGVudCcpXG4gICAgICAgICk7XG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub3RlVG9vbEJveC5hcHBlbmRDaGlsZChub3RlVG9vbE1lbnUpO1xuICAgIG5vdGVUb29sQm94LmFwcGVuZENoaWxkKG5vdGVUb29sRGVsZXRlKTtcbiAgICBub3RlVG9vbEJveC5hcHBlbmRDaGlsZChub3RlVG9vbEFkZENhcmQpO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKG5vdGVUb29sQm94KTtcbiAgfVxuXG4gIGNvbnN0IGFkZERpcmVjdG9yeSA9IChub3RlLCBsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG5vdGVNYWluID0gZG9tTWFuYWdlci5jcmVhdGVFbGVtZW50RE9NKFxuICAgICAgJ2RpdicsXG4gICAgICBub3RlLmlkLFxuICAgICAgJ2RpcmVjdG9yeU5vdGUnXG4gICAgKTtcbiAgICBjb25zdCBub3RlSGVhZCA9IGRvbU1hbmFnZXIuY3JlYXRlRWxlbWVudERPTSgnZGl2JywgJ25vdGVIZWFkJyk7XG4gICAgY29uc3Qgbm90ZUZvb3QgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oJ2RpdicsICdub3RlRm9vdCcpO1xuICAgIGNvbnN0IG5vdGVOYW1lID0gZG9tTWFuYWdlci5jcmVhdGVFbGVtZW50RE9NKCdkaXYnLCAnbm90ZU5hbWUnKTtcbiAgICBjb25zdCBub3RlQWRkID0gZG9tTWFuYWdlci5jcmVhdGVFbGVtZW50RE9NKCdkaXYnLCAnbm90ZUFkZCcpO1xuXG4gICAgbm90ZUhlYWQuYXBwZW5kQ2hpbGQobm90ZU5hbWUpO1xuICAgIG5vdGVIZWFkLmFwcGVuZENoaWxkKG5vdGVBZGQpO1xuICAgIG5vdGVNYWluLmFwcGVuZENoaWxkKG5vdGVIZWFkKTtcbiAgICBub3RlTWFpbi5hcHBlbmRDaGlsZChub3RlRm9vdCk7XG4gICAgbm90ZU5hbWUudGV4dENvbnRlbnQgPSBub3RlLm5hbWU7XG4gICAgbm90ZUFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgICBub3RlTWFpbi5zZXRBdHRyaWJ1dGUoJ25vdGUnLCBub3RlLmlkKTtcbiAgICBpZiAobG9jYXRpb24gPT0gJ3Jvb3QnKSB7XG4gICAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVNYWluKTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uICE9IG51bGwgJiYgbG9jYXRpb24gIT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uICE9ICcnKSB7XG4gICAgICBjb25zdCBub3RlTG9jYXRpb24gPSBub3RlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC4ke2xvY2F0aW9ufWApO1xuICAgICAgY29uc3QgZm9vdGVyID0gbm90ZUxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5ub3RlRm9vdCcpO1xuICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKG5vdGVNYWluKTtcbiAgICB9XG5cbiAgICBub3RlQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBub3RlRG9tLmFkZEZvcm0oZSk7XG4gICAgICBjb25zdCBmb3JtQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybUJ1dHRvbicpO1xuICAgICAgY29uc3QgZm9ybU5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtTmFtZScpO1xuICAgICAgZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbm90ZVN1Ym1pdCgpO1xuICAgICAgfSk7XG4gICAgICBmb3JtTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgbm90ZVN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZ1bmN0aW9uIG5vdGVTdWJtaXQoKSB7XG4gICAgICAgIG5vdGVNYW5hZ2VyLmFkZE5vdGUoZm9ybU5hbWUudmFsdWUsIG5vdGUpO1xuICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbm90ZU5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaXRlbSkgPT4ge1xuICAgICAgaWYgKG5vdGVOYW1lLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPSAndHJ1ZScpIHtcbiAgICAgICAgdXBkYXRlTm90ZUNvbnRlbnQobm90ZSwgbm90ZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG5vdGVOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpID0+IHtcbiAgICAgIG5vdGVOYW1lLnNldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICAgIG5vdGVOYW1lLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBub3RlTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChub3RlTmFtZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScpKSB7XG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgY29uc29sZS50YWJsZShub3RlKTtcbiAgICAgICAgICBub3RlTmFtZS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsICdmYWxzZScpO1xuICAgICAgICAgIG5vdGVNYW5hZ2VyLnVwZGF0ZU5vdGVOYW1lKG5vdGUsIG5vdGVOYW1lLnRleHRDb250ZW50KTtcbiAgICAgICAgICBjb25zb2xlLnRhYmxlKG5vdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlTm90ZUNvbnRlbnQobm90ZSwgbm90ZU5hbWUpIHtcbiAgICAvL1RFU1RcbiAgICBkb21NYW5hZ2VyLmRlbGV0ZUVsZW1lbnQoJ25vdGVDYXJkcycsIHRydWUpO1xuICAgIGNvbnN0IG5vdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVCb2R5Jyk7XG4gICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oJ2RpdicsICdub3RlQ29udGVudCcpO1xuICAgIGNvbnN0IG5vdGVDYXJkcyA9IGRvbU1hbmFnZXIuY3JlYXRlRWxlbWVudERPTSgnZGl2JywgJ25vdGVDYXJkcycpO1xuICAgIG5vdGVCb2R5LmFwcGVuZENoaWxkKG5vdGVDYXJkcyk7XG5cbiAgICBjcmVhdGVUb29sTWVudShub3RlQ2FyZHMsIG5vdGUpO1xuICAgIG5vdGVDYXJkcy5hcHBlbmRDaGlsZChub3RlQ29udGVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGVOYW1lJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd1bmRlcmxpbmVkJyk7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICB9KTtcbiAgICBub3RlTmFtZS5jbGFzc0xpc3QuYWRkKCd1bmRlcmxpbmVkJyk7XG4gICAgbm90ZU5hbWUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgZm9yIChsZXQgY2FyZCBpbiBub3RlLmNhcmRMaXN0KSB7XG4gICAgICBhZGRDYXJkRE9NKG5vdGUsIGNhcmQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlQ29udGVudCcpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYWRkQ2FyZERPTSA9IChub3RlLCBjYXJkLCBkb21Mb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGNhcmRET00gPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oJ2RpdicsICdjYXJkJywgY2FyZCk7XG4gICAgZG9tTG9jYXRpb24uYXBwZW5kQ2hpbGQoY2FyZERPTSk7XG4gICAgY2FyZERPTS5zdHlsZS53aWR0aCA9ICczMDBweCc7XG4gICAgY2FyZERPTS5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xuICAgIGNvbnNvbGUubG9nKG5vdGVbJ2NhcmRMaXN0J11bY2FyZF0ubG9jYXRpb25bMF0pO1xuICAgIGNhcmRET00uc3R5bGUubGVmdCA9IGAke25vdGUuY2FyZExpc3RbY2FyZF0ubG9jYXRpb25bMF19cHhgO1xuICAgIGNhcmRET00uc3R5bGUudG9wID0gYCR7bm90ZS5jYXJkTGlzdFtjYXJkXS5sb2NhdGlvblsxXX1weGA7XG4gICAgY29uc3QgaGVhZGVyID0gZG9tTWFuYWdlci5jcmVhdGVFbGVtZW50RE9NKCdkaXYnLCAnY2FyZEhlYWRlcicpO1xuICAgIGNhcmRET00uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNhcmRET00uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gZG9tTG9jYXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBkb21Mb2NhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgZG9tTG9jYXRpb24ub25kcm9wID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgY2FyZFggPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdjYXJkWCcpO1xuICAgICAgY29uc3QgY2FyZFkgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdjYXJkWScpO1xuICAgICAgY29uc3QgY2FyZFRhcmdldCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2NhcmRET00nKTtcbiAgICAgIGNvbnNvbGUubG9nKGNhcmRUYXJnZXQpO1xuICAgICAgY29uc3QgY2FyZExpc3QgPSBkb21Mb2NhdGlvbi5xdWVyeVNlbGVjdG9yQWxsKGAuY2FyZC4ke2NhcmRUYXJnZXR9YCk7XG4gICAgICBjb25zdCB0YXJnZXRET00gPSBjYXJkTGlzdFswXTtcbiAgICAgIG5vdGUuY2FyZExpc3RbY2FyZFRhcmdldF0ubG9jYXRpb25bMF0gPSBlLnggLSBib3VuZGluZ1JlY3QueCAtIGNhcmRYO1xuICAgICAgbm90ZS5jYXJkTGlzdFtjYXJkVGFyZ2V0XS5sb2NhdGlvblsxXSA9IGUueSAtIGJvdW5kaW5nUmVjdC55IC0gY2FyZFk7XG4gICAgICBjb25zb2xlLnRhYmxlKHsgQ2FyZDogY2FyZCwgTG9jYXRpb246IG5vdGUuY2FyZExpc3RbY2FyZF0ubG9jYXRpb24gfSk7XG4gICAgICB0YXJnZXRET00uc3R5bGUubGVmdCA9IGAke25vdGUuY2FyZExpc3RbY2FyZFRhcmdldF0ubG9jYXRpb25bMF19cHhgO1xuICAgICAgdGFyZ2V0RE9NLnN0eWxlLnRvcCA9IGAke25vdGUuY2FyZExpc3RbY2FyZFRhcmdldF0ubG9jYXRpb25bMV19cHhgO1xuICAgIH07XG4gICAgY2FyZERPTS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgYm91bmRpbmdDYXJkUmVjdCA9IGNhcmRET00uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgY2FyZFggPSBlLnggLSBib3VuZGluZ0NhcmRSZWN0Lng7XG4gICAgICBsZXQgY2FyZFkgPSBlLnkgLSBib3VuZGluZ0NhcmRSZWN0Lnk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdjYXJkWCcsIGNhcmRYKTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2NhcmRZJywgY2FyZFkpO1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnY2FyZERPTScsIGUudGFyZ2V0LmNsYXNzTGlzdFsxXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oJ2RpdicsICdjYXJkRm9vdGVyJyk7XG4gICAgY2FyZERPTS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgYWRkQ2FyZFRpdGxlKG5vdGUuY2FyZExpc3RbY2FyZF0sIGhlYWRlciwgY2FyZCk7XG4gICAgYWRkQ2FyZFRleHRib3gobm90ZS5jYXJkTGlzdFtjYXJkXSwgZm9vdGVyLCAnVGVzdCcpO1xuICB9O1xuICBjb25zdCBhZGRDYXJkVGl0bGUgPSAoY2FyZCwgbG9jYXRpb24sIHRleHQpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvbU1hbmFnZXIuY3JlYXRlRWxlbWVudERPTSgnZGl2JywgJ2NhcmRUaXRsZScpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLmNhcmRMaXN0W2NhcmRdLm5hbWU7XG4gIH07XG4gIGNvbnN0IGFkZENhcmRUZXh0Ym94ID0gKGNhcmQsIGxvY2F0aW9uLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgdGV4dEJveCA9IGRvbU1hbmFnZXIuY3JlYXRlRWxlbWVudERPTSgndGV4dGFyZWEnLCAnY2FyZFRleHRCb3gnKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZCh0ZXh0Qm94KTtcbiAgICB0ZXh0Qm94LmlubmVySFRNTCA9IGNhcmQuY29udGVudFtgdGV4dEJveGBdO1xuXG4gICAgdGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBjYXJkLmNvbnRlbnQudGV4dEJveCA9IHRleHRCb3gudmFsdWU7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGFkZEZvcm0gPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oJ2RpdicsICdmb3JtQ29udGFpbmVyJyk7XG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlQm9keScpLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGNvbnN0IGZvcm1OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnTmFtZScpO1xuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybU5hbWVMYWJlbCk7XG4gICAgY29uc3QgZm9ybU5hbWUgPSBkb21NYW5hZ2VyLmNyZWF0ZUVsZW1lbnRET00oJ2lucHV0JywgJ2Zvcm1OYW1lJyk7XG4gICAgZm9ybU5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBmb3JtTmFtZS5jbGFzc0xpc3QuYWRkKCdOYW1lJyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1OYW1lKTtcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9tTWFuYWdlci5jcmVhdGVFbGVtZW50RE9NKCdpbnB1dCcsICdmb3JtQnV0dG9uJyk7XG5cbiAgICBmb3JtQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBmb3JtQnV0dG9uLnZhbHVlID0gJ1N1Ym1pdCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcblxuICAgIGZvcm1OYW1lLmZvY3VzKCk7XG4gICAgZm9ybU5hbWUuc2VsZWN0KCk7XG5cbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDkwMHB4KScpO1xuICAgIGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHNpdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVCb2R5Jyk7XG4gICAgICBpZiAoc2l0ZUJvZHkub2Zmc2V0V2lkdGggLSBmb3JtQ29udGFpbmVyLm9mZnNldFdpZHRoID4gZS54KSB7XG4gICAgICAgIC8vIExlZnQgc2lkZSBvZiBXaW5kb3dcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtlLnl9cHhgO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlLnh9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmlnaHQgc2lkZSBvZiB3aW5kb3dcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtlLnl9cHhgO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlLnggLSBmb3JtQ29udGFpbmVyLm9mZnNldFdpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYDBweGA7XG4gICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnRvcCA9IGAwcHhgO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGFkZERpcmVjdG9yeSxcbiAgICBhZGRDYXJkRE9NLFxuICAgIGFkZEZvcm0sXG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBhZGREdXBsaWNhdGVOdW1iZXIoc3RyaW5nSXRlbSwgaXRlbUxpc3QpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgbGV0IGNvdW50U3RhcnQgPSAwO1xuICBsZXQgY2hlY2tOb01hdGNoID0gMDtcbiAgd2hpbGUgKCFjaGVja05vTWF0Y2gpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGl0ZW1MaXN0KS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC5rZXlzKGl0ZW1MaXN0KVtpXTtcbiAgICAgIGlmIChpdGVtID09PSBzdHJpbmdJdGVtKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIGlmICghY291bnRTdGFydCkge1xuICAgICAgICAgIHN0cmluZ0l0ZW0gKz0gJzAnO1xuICAgICAgICAgIHN0cmluZ0l0ZW0gKz0gY291bnQ7XG4gICAgICAgICAgY291bnRTdGFydCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyaW5nSXRlbSA9IHN0cmluZ0l0ZW0uc3Vic3RyaW5nKDAsIHN0cmluZ0l0ZW0ubGFzdEluZGV4T2YoJzAnKSArIDEpO1xuICAgICAgICAgIHN0cmluZ0l0ZW0gKz0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tOb01hdGNoID0gMTtcbiAgICBmb3IgKGxldCBpdGVtIGluIGl0ZW1MaXN0KSB7XG4gICAgICBpZiAoaXRlbSA9PSBzdHJpbmdJdGVtKSB7XG4gICAgICAgIGNoZWNrTm9NYXRjaCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHJpbmdJdGVtO1xufVxuXG5leHBvcnQgeyBub3RlTWFuYWdlciwgbm90ZURvbSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluIGZyb20gJy4vYmFzZVNpdGUuanMnXG5pbXBvcnQge25vdGVNYW5hZ2VyfSBmcm9tICcuL25vdGUuanMnXG5pbXBvcnQgZG9tTWFuYWdlciBmcm9tICcuL2RvbU1hbmFnZXInXG5cbm1haW4oKTtcblxubm90ZU1hbmFnZXIuYWRkTm90ZSgnRGVmYXVsdCcsICdyb290JylcblxuXG5cblxuXG5mdW5jdGlvbiBsb2dBbGwoaXRlbXMpe1xuICAgIGZvcihsZXQgYXJnIGluIGFyZ3VtZW50cyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50c1thcmddKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=