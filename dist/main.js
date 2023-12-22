/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #22303c;
    color: white;
    font-size: 2.5rem;
    padding: 15px 20px;
    border-bottom: 3px solid green;
}

.menu {
    cursor: pointer;
}

.icon {
    width: 2rem;
}

.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
    min-height: 85vh;
    min-width: 100vw;
}


.content .left {
    background-color: #15202b;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    color: white
}

.home {
    padding: 30px 20px 0px 20px;
}

.home h2 {
    border-bottom: 3px solid white;
}

.home .line {
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    margin: 20px 0;
    gap: 10px;
}

.home .line:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
}

.home .line.active{
    background-color: rgba(31, 141, 77, 0.5);
    border-left: 3px solid green;
}

.home .line .icon {
    width: 2rem;
}

.body {
    padding: 60px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    color: black;
}

.wrapper {
    background: #22303c;
}

.wrapper header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 25px;
    background: rgba(31, 141, 77, 0.75);
    color: white;
}

header p {
    font-size: 1.25rem;
    font-weight: bold;
}

header .icons span {
    height: 38px;
    width: 38px;
    margin: 0 1px;
    text-align: center;
    cursor: pointer;
    line-height: 38px;
    border-radius: 50%;
    color: white;
    font-size: 1.3rem;
}

header .icons span:hover{
    background: #f2f2f2;
}

header .icons span:last-child{
    margin-right: -10px;
}

.calender {
    padding-top: 5px;
    text-align: center;
    color: white;
}

.calender ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
}

.calender .days {
    margin-bottom: 20px;
}

.calender .weeks li{
    font-weight: 550;
}

.calender .days li{
    cursor: pointer;
    margin-top: 20px;
    border-radius: 10px;
}

.calender ul li{
    position: relative;
    width: calc(100%/7);
}

.days li.inactive{
    color: #aaa;
}

.days li.active{
    background: rgba(31, 141, 77, 1);
    color: white
}


.hidden {
    display: none;
}

.content .right {
    background: #192734;
    grid-column: 2 / 6;
    grid-row: 1 / 2;
    flex-grow: 1;
    color: white;
}

.right h2 {
    margin: 2rem 3rem;
    padding: 25px;
    font-size: 2rem;
    background-color: rgba(31, 141, 77, 1);
    border-radius: 0.5rem;
}

.right #panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    height: 80vh;
}

.right #panel #left-panel {
    border-right: 3px solid white;
}

.right #panel form {
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #15202b;
    gap: 5px;
    font-size: 1rem;
}

.right #panel form.hidden {
    display: none;
}

.right #panel form #button {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.right #panel form #button input[type=submit]{
    padding: 5px 20px;
    background:rgba(31, 141, 77, 1);
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}

.right #panel form #button input[type=button]{
    padding: 5px 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}

.right .add button {
    background-color: #192734;
    color: white;
    border: none;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    margin: 2rem 3rem;
    padding: 5px;
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 33vw;
}

.right .add button:hover {
    background-color: #15202b ; 
}

.right .add button img {
    width: 33px;
}

.right #listTask {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.right .item {
    display: flex;
    align-items: center;
    margin: 0 3rem;
    gap: 10px;
    padding: 5px;
    border: 1px solid white;
    background-color: #15202b;
}

.right .item input[type="checkbox"] {
    width: 20rem;
    height: 1.5rem;
}

.right .item #text {
    margin: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    width: 1000%;
}

.right .star {
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
}

.right .star label{
    color: white;
    width: 30px;
    height: 48px;
}

.right .star input {
    display: none;
}

.right .star label:before {
    content: "\\2605";
    font-size: 35px;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}

.right .star label:after {
    content: "\\2605";
    font-size: 35px;
    color: yellow;
    display: inline-block;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
}

.right .star input:checked ~ label:after {
    opacity: 1;
}

#vert {
    font-size: 35px;
    cursor: pointer;
}

.item #combo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
}

.item .listOption {
    display: none;
}

.item .listOption button {
    color: white;
    border: 1px solid white;
    background:#192734;
    font-size: 1rem;
    padding: 5px;
}

.item .listOption.active {
    display: flex;
    flex-direction: column;
    right: 0;
}

.footer {
    background: #22303c;
    padding: 0.95rem;
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.footer img {
    width: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #22303c;\n    color: white;\n    font-size: 2.5rem;\n    padding: 15px 20px;\n    border-bottom: 3px solid green;\n}\n\n.menu {\n    cursor: pointer;\n}\n\n.icon {\n    width: 2rem;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));\n    min-height: 85vh;\n    min-width: 100vw;\n}\n\n\n.content .left {\n    background-color: #15202b;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    color: white\n}\n\n.home {\n    padding: 30px 20px 0px 20px;\n}\n\n.home h2 {\n    border-bottom: 3px solid white;\n}\n\n.home .line {\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    padding: 10px 30px;\n    margin: 20px 0;\n    gap: 10px;\n}\n\n.home .line:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.home .line.active{\n    background-color: rgba(31, 141, 77, 0.5);\n    border-left: 3px solid green;\n}\n\n.home .line .icon {\n    width: 2rem;\n}\n\n.body {\n    padding: 60px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px solid white;\n    color: black;\n}\n\n.wrapper {\n    background: #22303c;\n}\n\n.wrapper header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px 15px 25px;\n    background: rgba(31, 141, 77, 0.75);\n    color: white;\n}\n\nheader p {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\nheader .icons span {\n    height: 38px;\n    width: 38px;\n    margin: 0 1px;\n    text-align: center;\n    cursor: pointer;\n    line-height: 38px;\n    border-radius: 50%;\n    color: white;\n    font-size: 1.3rem;\n}\n\nheader .icons span:hover{\n    background: #f2f2f2;\n}\n\nheader .icons span:last-child{\n    margin-right: -10px;\n}\n\n.calender {\n    padding-top: 5px;\n    text-align: center;\n    color: white;\n}\n\n.calender ul {\n    display: flex;\n    list-style: none;\n    flex-wrap: wrap;\n}\n\n.calender .days {\n    margin-bottom: 20px;\n}\n\n.calender .weeks li{\n    font-weight: 550;\n}\n\n.calender .days li{\n    cursor: pointer;\n    margin-top: 20px;\n    border-radius: 10px;\n}\n\n.calender ul li{\n    position: relative;\n    width: calc(100%/7);\n}\n\n.days li.inactive{\n    color: #aaa;\n}\n\n.days li.active{\n    background: rgba(31, 141, 77, 1);\n    color: white\n}\n\n\n.hidden {\n    display: none;\n}\n\n.content .right {\n    background: #192734;\n    grid-column: 2 / 6;\n    grid-row: 1 / 2;\n    flex-grow: 1;\n    color: white;\n}\n\n.right h2 {\n    margin: 2rem 3rem;\n    padding: 25px;\n    font-size: 2rem;\n    background-color: rgba(31, 141, 77, 1);\n    border-radius: 0.5rem;\n}\n\n.right #panel {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));\n    height: 80vh;\n}\n\n.right #panel #left-panel {\n    border-right: 3px solid white;\n}\n\n.right #panel form {\n    margin: 0 3rem;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    background: #15202b;\n    gap: 5px;\n    font-size: 1rem;\n}\n\n.right #panel form.hidden {\n    display: none;\n}\n\n.right #panel form #button {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 10px;\n}\n\n.right #panel form #button input[type=submit]{\n    padding: 5px 20px;\n    background:rgba(31, 141, 77, 1);\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n.right #panel form #button input[type=button]{\n    padding: 5px 20px;\n    background-color: red;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-weight: bold;\n}\n\n.right .add button {\n    background-color: #192734;\n    color: white;\n    border: none;\n    display: flex;\n    justify-content: flex-start;\n    text-align: center;\n    margin: 2rem 3rem;\n    padding: 5px;\n    gap: 1rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    width: 33vw;\n}\n\n.right .add button:hover {\n    background-color: #15202b ; \n}\n\n.right .add button img {\n    width: 33px;\n}\n\n.right #listTask {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.right .item {\n    display: flex;\n    align-items: center;\n    margin: 0 3rem;\n    gap: 10px;\n    padding: 5px;\n    border: 1px solid white;\n    background-color: #15202b;\n}\n\n.right .item input[type=\"checkbox\"] {\n    width: 20rem;\n    height: 1.5rem;\n}\n\n.right .item #text {\n    margin: 0 0 0 10px;\n    display: flex;\n    flex-direction: column;\n    width: 1000%;\n}\n\n.right .star {\n    display: flex;\n    position: relative;\n    text-align: center;\n    align-items: center;\n}\n\n.right .star label{\n    color: white;\n    width: 30px;\n    height: 48px;\n}\n\n.right .star input {\n    display: none;\n}\n\n.right .star label:before {\n    content: \"\\2605\";\n    font-size: 35px;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.right .star label:after {\n    content: \"\\2605\";\n    font-size: 35px;\n    color: yellow;\n    display: inline-block;\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n}\n\n.right .star input:checked ~ label:after {\n    opacity: 1;\n}\n\n#vert {\n    font-size: 35px;\n    cursor: pointer;\n}\n\n.item #combo {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 50%;\n}\n\n.item .listOption {\n    display: none;\n}\n\n.item .listOption button {\n    color: white;\n    border: 1px solid white;\n    background:#192734;\n    font-size: 1rem;\n    padding: 5px;\n}\n\n.item .listOption.active {\n    display: flex;\n    flex-direction: column;\n    right: 0;\n}\n\n.footer {\n    background: #22303c;\n    padding: 0.95rem;\n    bottom: 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.footer img {\n    width: 30px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Idea: () => (/* binding */ Idea),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_alltask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/alltask */ "./src/page/alltask.js");
/* harmony import */ var _page_allIdea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/allIdea */ "./src/page/allIdea.js");
/* harmony import */ var _page_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/important */ "./src/page/important.js");
/* harmony import */ var _page_today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/today */ "./src/page/today.js");
/* harmony import */ var _page_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/date */ "./src/page/date.js");







// make the left panel disappear and appear
const leftPanel = document.querySelector('.left');
const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    if (leftPanel.classList == "left") {
        leftPanel.classList.add('hidden')
    } else {
        leftPanel.classList.remove('hidden')
    }
})
// make the calender in the bottom of left panel
const currentDate = document.querySelector('.current-date');
const dateTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span')

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let now = new Date().toLocaleDateString('en-GB')

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December']
 
const renderCalendar = () => {
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(); // get first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getinng last date of previous month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofLastMonth).getDay(); //getting last day of month
    let liTag = "";

    for ( let i = firstDateofMonth; i > 0 ; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for ( let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                            && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class ="${isToday}">${i}</li>`
    }

    for ( let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li id="last" class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerHTML = `${month[currMonth]} ${currYear}`
    dateTag.innerHTML = liTag
    //--------------------------------
    const wholeMonth = document.querySelector('.days').children
    let everyDay = []
    for (let i = 0 ; i < wholeMonth.length ; i++) {
        everyDay.push(wholeMonth[i])
    }
    
    everyDay.forEach((date) => {
        date.addEventListener('click', () => {
            let timing
            if(date.classList == 'inactive' && date.id == 'last') {
                timing = `${date.innerHTML}/${currMonth + 2}/${currYear}`
            } else if (date.classList == 'inactive' && !date.id) {
                timing = `${date.innerHTML}/${currMonth}/${currYear}`
            } else {
                timing = `${date.innerHTML}/${currMonth + 1}/${currYear}`
            }
            //------------
            
            if(timing == now) {
                rightBody.innerHTML = ''

                const todayTitle = document.createElement('h2')
                todayTitle.id = 'title'
                todayTitle.innerHTML = 'Today'

                rightBody.appendChild(todayTitle)

                rightBody.appendChild((0,_page_today__WEBPACK_IMPORTED_MODULE_4__.addToday)())

                today.classList.add("active")
                allTask.classList.remove("active")
                allIdea.classList.remove("active")
                important.classList.remove("active")
            } else {
                rightBody.innerHTML = ''

                const todayTitle = document.createElement('h2')
                todayTitle.id = 'title'
                todayTitle.innerHTML = timing

                rightBody.appendChild(todayTitle)

                rightBody.appendChild((0,_page_date__WEBPACK_IMPORTED_MODULE_5__.showDate)(timing))

                today.classList.remove("active")
                allTask.classList.remove("active")
                allIdea.classList.remove("active")
                important.classList.remove("active")
            }

        })
        
    })

}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar()
    })
})

class Task {
    constructor (title, describtion, done, important, date) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
        this.date = date == null ? now : date
    }

    beDone() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.done = !this.done
                myTask[i].done = !myTask[i].done
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    beImportant() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.important = !this.important
                myTask[i].important = !myTask[i].important
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    reName(newName) {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.title = newName
                myTask[i].title = newName
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    reDes(newDes) {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.describtion = newDes
                myTask[i].describtion = newDes
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    addToLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        myTask.push(task)
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    deleteFromLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                myTask.splice(i, 1)
            }
        }
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }
}

class Idea {
    constructor (title, describtion, done, important, date) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
        this.date = date == null ? now : date
    }

    beDone() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date }
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.done = !this.done
                myIdea[i].done = !myIdea[i].done
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    beImportant() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date }
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.important = !this.important
                myIdea[i].important = !myIdea[i].important
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    reName(newName) {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.title = newName
                myIdea[i].title = newName
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    reDes(newDes) {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.describtion = newDes
                myIdea[i].describtion = newDes
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    addToLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        myIdea.push(idea)
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    deleteFromLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                myIdea.splice(i, 1)
            }
        }
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }
}
//select right area
const rightBody = document.querySelector('.right')

const today = document.getElementById('Today');
today.classList.add("active")

const todayTitle = document.createElement('h2')
todayTitle.id = 'title'
todayTitle.innerHTML = 'Today'

rightBody.appendChild(todayTitle)
rightBody.appendChild((0,_page_today__WEBPACK_IMPORTED_MODULE_4__.addToday)())

today.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'Today'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_today__WEBPACK_IMPORTED_MODULE_4__.addToday)(now))

    today.classList.add("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
})

// add eventlistener to create new right panel
const allTask = document.getElementById('Task');
allTask.addEventListener('click',  () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'All Task'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_alltask__WEBPACK_IMPORTED_MODULE_1__.showAllTask)())

    today.classList.remove("active")
    allTask.classList.add("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
});

const allIdea = document.getElementById('Idea');
allIdea.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'All Idea'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_allIdea__WEBPACK_IMPORTED_MODULE_2__.showAllIdea)())
    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.add("active")
    important.classList.remove("active")
});

const important = document.getElementById('Important');
important.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'Important'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild((0,_page_important__WEBPACK_IMPORTED_MODULE_3__.showImportant)())

    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.add("active")
});



/***/ }),

/***/ "./src/page/allIdea.js":
/*!*****************************!*\
  !*** ./src/page/allIdea.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAllIdea: () => (/* binding */ showAllIdea)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function undoneTask(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)
            if (idea.done === false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, idea)
            }
        }
    }
}

function showAllIdea() {
    const content = document.createElement('div')
    content.id = 'panel'

    const listItem = document.createElement('div')
    listItem.id = 'listIdea'

    undoneTask(listItem)
    content.appendChild(listItem)

    return content
}

/***/ }),

/***/ "./src/page/alltask.js":
/*!*****************************!*\
  !*** ./src/page/alltask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAllTask: () => (/* binding */ showAllTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function undoneTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)
            if (task.done === false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, task)
            }
        }
    }
}

function showAllTask() {
    const content = document.createElement('div')
    content.id = 'panel'

    const listItem = document.createElement('div')
    listItem.id = 'listTask'

    undoneTask(listItem)
    content.appendChild(listItem)

    return content
}

/***/ }),

/***/ "./src/page/date.js":
/*!**************************!*\
  !*** ./src/page/date.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDate: () => (/* binding */ showDate)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function createLeftPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    oldTask(listTask, timing)
    content.appendChild(listTask)

    return content
}

function createRightPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    oldIdea(listTask, timing)
    content.appendChild(listTask)
    
    return content
}

function oldTask(list, timing) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if (task.date == timing && task.done == false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, task)
            } 
            
        }
    }
}

function oldIdea(list, timing) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)  
            if (idea.date == timing && idea.done == false) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, idea)
            } 
            console.log(idea.date)
            console.log(timing)
        }
    }
}

function showDate(timing) {
    const content = document.createElement('div')
    content.id = 'panel'

    const leftPanel = createLeftPanel(timing)
    content.appendChild(leftPanel)

    const rightPanel = createRightPanel(timing)
    content.appendChild(rightPanel)

    return content
}

/***/ }),

/***/ "./src/page/important.js":
/*!*******************************!*\
  !*** ./src/page/important.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showImportant: () => (/* binding */ showImportant)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/page/today.js");



function createLeftPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    importantTask(listTask)
    content.appendChild(listTask)

    return content
}

function createRightPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    importantIdea(listTask)
    content.appendChild(listTask)
    
    return content
}

function importantTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if (task.done === false && task.important === true) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, task)
            } 
            
        }
    }
}

function importantIdea(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)  
            if (idea.done === false && idea.important === true) {
                (0,_today__WEBPACK_IMPORTED_MODULE_1__.createItem)(list, idea)
            } 
            
        }
    }
}



function showImportant() {
    const content = document.createElement('div')
    content.id = 'panel'

    const leftPanel = createLeftPanel()
    content.appendChild(leftPanel)

    const rightPanel = createRightPanel()
    content.appendChild(rightPanel)

    return content
}

/***/ }),

/***/ "./src/page/today.js":
/*!***************************!*\
  !*** ./src/page/today.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToday: () => (/* binding */ addToday),
/* harmony export */   createItem: () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");

//Create Form
function createForm(type) {
    const content = document.createElement('div')
    content.classList = 'form'
    content.id = `this${type}`

    const form = document.createElement('form')
    form.id = `${type}`
    form.classList = 'hidden'

    const title = document.createElement('label')
    title.innerHTML = 'Title'
    const inputTitle = document.createElement('input')
    inputTitle.type = 'text'
    inputTitle.id = `${type}Title`
    inputTitle.placeholder = 'What you gonna do ?'
    form.appendChild(title)
    form.appendChild(inputTitle)

    const details = document.createElement('label')
    details.innerHTML = 'Details'
    const inputDetails = document.createElement('textarea')
    inputDetails.id = `${type}Details`
    inputDetails.rows = '2'
    inputDetails.cols = '50'
    inputDetails.placeholder = 'Anything that make you understand why you have to do it'
    form.appendChild(details)
    form.appendChild(inputDetails)

    const twoButton = document.createElement('div')
    twoButton.id = 'button'

    const addButton = document.createElement('input')
    addButton.type = 'submit'
    addButton.id = `${type}Submit`
    addButton.value = 'Add'



    const cancelButton = document.createElement('input')
    cancelButton.type = 'button'
    cancelButton.id = `${type}Cancel`
    cancelButton.value = 'Cancel'

    cancelButton.addEventListener('click', () => {
        form.classList.add('hidden')
    })

    twoButton.appendChild(addButton)
    twoButton.appendChild(cancelButton)

    form.appendChild(twoButton)
    content.appendChild(form)

    return content
}

function createAdd(type) {
    const content = document.createElement('div')
    content.classList = 'add'

    const button = document.createElement('button')
    button.id = `${type}Add`

    const image = document.createElement('img')
    image.src = "./images/plus.png"

    const text = document.createElement('p')
    text.innerHTML = `Add ${type}`

    button.appendChild(image)
    button.appendChild(text)

    button.addEventListener('click', () => {
        let form = document.getElementById(`${type}`)
        form.classList.remove('hidden')
    })

    content.appendChild(button)
    return content
}

function createLeftPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const form = createForm('task')
    content.appendChild(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let titleInput = document.getElementById('taskTitle') 
        let describtionInput = document.getElementById('taskDetails')

        const task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(titleInput.value, describtionInput.value, false, false)
        task.addToLocalStorage()

        createItem(listTask, task)

        titleInput.value = ""
        describtionInput.value = ""
        document.getElementById('task').classList.add("hidden")
    })

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    avaialbleTask(listTask, timing)
    content.appendChild(listTask)

    const addButton = createAdd('task')
    content.appendChild(addButton)

    return content
}

function createRightPanel(timing) {
    const content = document.createElement('div')
    content.id = 'right-panel'

    const form = createForm('idea')
    content.appendChild(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let titleInput = document.getElementById('ideaTitle') 
        let describtionInput = document.getElementById('ideaDetails')

        const idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(titleInput.value, describtionInput.value, false, false)
        idea.addToLocalStorage()

        createItem(listIdea, idea)

        titleInput.value = ""
        describtionInput.value = ""
        document.getElementById('idea').classList.add("hidden")
    })

    const listIdea = document.createElement('div')
    listIdea.id = 'listIdea' 

    availableIdea(listIdea, timing)
    content.appendChild(listIdea)

    const addButton = createAdd('idea')
    content.appendChild(addButton)

    return content
}

let newItem = (function newItem () {
    const baseID = 'item'
    let count = 0
    return function (type = 'div') {
        let item = document.createElement(type)
        item.classList = baseID
        item.id = count
        count += 1
        return item
    }
}())

function createItem(listItem, task) {


    const item = newItem('div')
    const itemID = Number(item.id)

    const done = document.createElement('input')
    done.type = "checkbox";
    done.name = "done"
    done.setAttribute('id', 'done')
    item.appendChild(done)

    done.defaultChecked = task.done == true ? true : false

    //make button done change status
    done.addEventListener('click', () => {
        task.beDone()
    })

    let text = document.createElement('div')
    text.setAttribute('id', 'text')
    let h3 = document.createElement('h3')
    h3.innerHTML = task.title
    text.appendChild(h3)
    let p = document.createElement('p')
    p.innerHTML = task.describtion
    text.appendChild(p)
    item.appendChild(text)

    let combo = document.createElement('div')
    combo.id = "combo"

    const star = document.createElement('div')
    star.classList = 'star' 
    const starBox = document.createElement('input')
    starBox.type = "checkbox"
    starBox.setAttribute('id', `important${itemID}`)
    const starLabel = document.createElement('label')
    starLabel.setAttribute('for', `important${itemID}`)
    star.appendChild(starBox)
    star.appendChild(starLabel)
    combo.appendChild(star)

    starBox.defaultChecked = task.important == true ? true : false

    starBox.addEventListener('click', () => {
        task.beImportant()
    })

    const edit = document.createElement('div')
    edit.setAttribute('id', 'editContainer')
    const editSpan = document.createElement('span')
    editSpan.setAttribute('id', 'vert')
    editSpan.classList = "material-symbols-outlined"
    editSpan.textContent = "more_vert"
    edit.appendChild(editSpan)
    combo.appendChild(edit)

    const list = document.createElement('div')
    list.classList = 'listOption'
    const buttonEdit = document.createElement('button')
    buttonEdit.classList = 'edit'
    buttonEdit.innerHTML = "Edit"
    const buttonDelete = document.createElement('button')
    buttonDelete.classList = 'detele'
    buttonDelete.innerHTML = "Delete"
    list.appendChild(buttonEdit)
    list.appendChild(buttonDelete)
    combo.appendChild(list)

    item.appendChild(combo)

    edit.addEventListener('click', () => {
    if (list.classList.contains("active")) {
        list.classList.remove('active')
    } else {
        list.classList.add("active")
    }
    })

    buttonDelete.addEventListener('click', () => {
        task.deleteFromLocalStorage();
        item.remove();
    })
    //edit button should create another kind of form
    buttonEdit.addEventListener('click', () => {
        item.style.display = "none"
        createEditForm(listItem)

        const editForm = document.getElementById('editTask')
        const cancelButton = document.getElementById('editCancel')
        cancelButton.addEventListener('click', () => {
            editForm.remove()
            item.style.display = null
            list.classList.remove('active')
        })

        const editButton = document.getElementById('edit')
        let titleInput = document.getElementById('inputEdit')
        titleInput.value = h3.innerHTML
        let describtionInput = document.getElementById('detailsEdit')
        describtionInput.value = p.innerHTML

        editButton.addEventListener('click', () => {
            h3.innerHTML = titleInput.value
            p.innerHTML = describtionInput.value
            task.reName(`${titleInput.value}`)
            task.reDes(`${describtionInput.value}`)
            editForm.remove()
            item.style.display = null
            list.classList.remove('active')
        })
    })
    listItem.appendChild(item)
}

function createEditForm(list) {

    const place = list.id === 'listIdea' ? document.getElementById('thisidea') : document.getElementById('thistask')
    
    const form = document.createElement('form')
    form.id = "editTask"

    const title = document.createElement('label')
    title.setAttribute('for', 'title')
    title.textContent = "Title:"
    form.appendChild(title)

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'title')
    input.setAttribute('placeholder', 'What you gonna do ?')
    input.id = "inputEdit"
    form.appendChild(input)

    const details = document.createElement('label')
    details.setAttribute('for', 'details')
    details.textContent = "Details:"
    form.appendChild(details)

    const textArea = document.createElement('textarea')
    textArea.setAttribute('rows', '2')
    textArea.setAttribute('cols', '50')
    textArea.setAttribute('name', 'details')
    textArea.setAttribute('placeholder', 'Anything that make you understand why you have to do it')
    textArea.id = "detailsEdit"
    form.appendChild(textArea)

    const twoButton = document.createElement('div')
    twoButton.id = "button"

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('name', 'submit')
    submit.setAttribute('value', 'Edit')
    submit.id = "edit"
    twoButton.appendChild(submit)

    const cancel = document.createElement('input')
    cancel.setAttribute('type', 'button')
    cancel.setAttribute('name', 'cancel')
    cancel.setAttribute('value', 'Cancel')
    cancel.id = "editCancel"
    twoButton.appendChild(cancel)

    form.appendChild(twoButton)
    place.appendChild(form)
}

function avaialbleTask(list, timing) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new ___WEBPACK_IMPORTED_MODULE_0__.Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if(task.date == timing) {
                createItem(list, task)
            }
        }
    }
}

function availableIdea(list, timing) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new ___WEBPACK_IMPORTED_MODULE_0__.Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)
            if(idea.date == timing) {
                createItem(list, idea)
            }
        }   
    }
}


function addToday(timing) {
    const content = document.createElement('div')
    content.id = 'panel'

    const left = createLeftPanel(timing)
    content.appendChild(left)

    const right = createRightPanel(timing)
    content.appendChild(right)

    return content
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLDJCQUEyQixtQ0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLDJCQUEyQixtQ0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O1VDeFhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS9hbGxJZGVhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlL2FsbHRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMyMjMwM2M7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XG59XG5cbi5tZW51IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHZ3LCAxZnIpKTtcbiAgICBtaW4taGVpZ2h0OiA4NXZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG59XG5cblxuLmNvbnRlbnQgLmxlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBjb2xvcjogd2hpdGVcbn1cblxuLmhvbWUge1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAwcHggMjBweDtcbn1cblxuLmhvbWUgaDIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmhvbWUgLmxpbmUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaG9tZSAubGluZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUgLmxpbmUuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDE0MSwgNzcsIDAuNSk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcbn1cblxuLmhvbWUgLmxpbmUgLmljb24ge1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4uYm9keSB7XG4gICAgcGFkZGluZzogNjBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogIzIyMzAzYztcbn1cblxuLndyYXBwZXIgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDE0MSwgNzcsIDAuNzUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaGVhZGVyIC5pY29ucyBzcGFuIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgbWFyZ2luOiAwIDFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmhlYWRlciAuaWNvbnMgc3Bhbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG5oZWFkZXIgLmljb25zIHNwYW46bGFzdC1jaGlsZHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uY2FsZW5kZXIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbGVuZGVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2FsZW5kZXIgLmRheXMge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jYWxlbmRlciAud2Vla3MgbGl7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbn1cblxuLmNhbGVuZGVyIC5kYXlzIGxpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYWxlbmRlciB1bCBsaXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJS83KTtcbn1cblxuLmRheXMgbGkuaW5hY3RpdmV7XG4gICAgY29sb3I6ICNhYWE7XG59XG5cbi5kYXlzIGxpLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAxNDEsIDc3LCAxKTtcbiAgICBjb2xvcjogd2hpdGVcbn1cblxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGVudCAucmlnaHQge1xuICAgIGJhY2tncm91bmQ6ICMxOTI3MzQ7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA2O1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmlnaHQgaDIge1xuICAgIG1hcmdpbjogMnJlbSAzcmVtO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDE0MSwgNzcsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnJpZ2h0ICNwYW5lbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwdncsIDFmcikpO1xuICAgIGhlaWdodDogODB2aDtcbn1cblxuLnJpZ2h0ICNwYW5lbCAjbGVmdC1wYW5lbCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XG59XG5cbi5yaWdodCAjcGFuZWwgZm9ybSB7XG4gICAgbWFyZ2luOiAwIDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzE1MjAyYjtcbiAgICBnYXA6IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yaWdodCAjcGFuZWwgZm9ybS5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yaWdodCAjcGFuZWwgZm9ybSAjYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmlnaHQgI3BhbmVsIGZvcm0gI2J1dHRvbiBpbnB1dFt0eXBlPXN1Ym1pdF17XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDMxLCAxNDEsIDc3LCAxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0ICNwYW5lbCBmb3JtICNidXR0b24gaW5wdXRbdHlwZT1idXR0b25de1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0IC5hZGQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbSAzcmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBnYXA6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMzN2dztcbn1cblxuLnJpZ2h0IC5hZGQgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiIDsgXG59XG5cbi5yaWdodCAuYWRkIGJ1dHRvbiBpbWcge1xuICAgIHdpZHRoOiAzM3B4O1xufVxuXG4ucmlnaHQgI2xpc3RUYXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5yaWdodCAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAzcmVtO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcbn1cblxuLnJpZ2h0IC5pdGVtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuXG4ucmlnaHQgLml0ZW0gI3RleHQge1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMDAlO1xufVxuXG4ucmlnaHQgLnN0YXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmlnaHQgLnN0YXIgbGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogNDhweDtcbn1cblxuLnJpZ2h0IC5zdGFyIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmlnaHQgLnN0YXIgbGFiZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcXFwyNjA1XCI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5yaWdodCAuc3RhciBsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogXCJcXFxcMjYwNVwiO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLnJpZ2h0IC5zdGFyIGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI3ZlcnQge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtICNjb21ibyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLml0ZW0gLmxpc3RPcHRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pdGVtIC5saXN0T3B0aW9uIGJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IzE5MjczNDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uaXRlbSAubGlzdE9wdGlvbi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByaWdodDogMDtcbn1cblxuLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzIyMzAzYztcbiAgICBwYWRkaW5nOiAwLjk1cmVtO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZm9vdGVyIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7O0FBR0E7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QXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87QUFDWDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIzMDNjO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHZ3LCAxZnIpKTtcXG4gICAgbWluLWhlaWdodDogODV2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuLmNvbnRlbnQgLmxlZnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgY29sb3I6IHdoaXRlXFxufVxcblxcbi5ob21lIHtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4uaG9tZSBoMiB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmhvbWUgLmxpbmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG9tZSAubGluZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZSAubGluZS5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDE0MSwgNzcsIDAuNSk7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5ob21lIC5saW5lIC5pY29uIHtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5ib2R5IHtcXG4gICAgcGFkZGluZzogNjBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMzAzYztcXG59XFxuXFxuLndyYXBwZXIgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMjVweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTQxLCA3NywgMC43NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oZWFkZXIgLmljb25zIHNwYW4ge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBtYXJnaW46IDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuaGVhZGVyIC5pY29ucyBzcGFuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xcbn1cXG5cXG5oZWFkZXIgLmljb25zIHNwYW46bGFzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLmNhbGVuZGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYWxlbmRlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNhbGVuZGVyIC5kYXlzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNhbGVuZGVyIC53ZWVrcyBsaXtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLmNhbGVuZGVyIC5kYXlzIGxpe1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYWxlbmRlciB1bCBsaXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzcpO1xcbn1cXG5cXG4uZGF5cyBsaS5pbmFjdGl2ZXtcXG4gICAgY29sb3I6ICNhYWE7XFxufVxcblxcbi5kYXlzIGxpLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTQxLCA3NywgMSk7XFxuICAgIGNvbG9yOiB3aGl0ZVxcbn1cXG5cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQgLnJpZ2h0IHtcXG4gICAgYmFja2dyb3VuZDogIzE5MjczNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA2O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmlnaHQgaDIge1xcbiAgICBtYXJnaW46IDJyZW0gM3JlbTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxNDEsIDc3LCAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ucmlnaHQgI3BhbmVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MHZ3LCAxZnIpKTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4ucmlnaHQgI3BhbmVsICNsZWZ0LXBhbmVsIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5yaWdodCAjcGFuZWwgZm9ybSB7XFxuICAgIG1hcmdpbjogMCAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMTUyMDJiO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucmlnaHQgI3BhbmVsIGZvcm0uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0ICNwYW5lbCBmb3JtICNidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHQgI3BhbmVsIGZvcm0gI2J1dHRvbiBpbnB1dFt0eXBlPXN1Ym1pdF17XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMzEsIDE0MSwgNzcsIDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJpZ2h0ICNwYW5lbCBmb3JtICNidXR0b24gaW5wdXRbdHlwZT1idXR0b25de1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJpZ2h0IC5hZGQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDJyZW0gM3JlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMzN2dztcXG59XFxuXFxuLnJpZ2h0IC5hZGQgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYiA7IFxcbn1cXG5cXG4ucmlnaHQgLmFkZCBidXR0b24gaW1nIHtcXG4gICAgd2lkdGg6IDMzcHg7XFxufVxcblxcbi5yaWdodCAjbGlzdFRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnJpZ2h0IC5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDNyZW07XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG59XFxuXFxuLnJpZ2h0IC5pdGVtIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ucmlnaHQgLml0ZW0gI3RleHQge1xcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAwJTtcXG59XFxuXFxuLnJpZ2h0IC5zdGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodCAuc3RhciBsYWJlbHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbn1cXG5cXG4ucmlnaHQgLnN0YXIgaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHQgLnN0YXIgbGFiZWw6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNjA1XFxcIjtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4ucmlnaHQgLnN0YXIgbGFiZWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI2MDVcXFwiO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcbi5yaWdodCAuc3RhciBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jdmVydCB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbSAjY29tYm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uaXRlbSAubGlzdE9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pdGVtIC5saXN0T3B0aW9uIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IzE5MjczNDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pdGVtIC5saXN0T3B0aW9uLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMzAzYztcXG4gICAgcGFkZGluZzogMC45NXJlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2hvd0FsbFRhc2sgfSBmcm9tICcuL3BhZ2UvYWxsdGFzayc7XG5pbXBvcnQgeyBzaG93QWxsSWRlYSB9IGZyb20gJy4vcGFnZS9hbGxJZGVhJztcbmltcG9ydCB7IHNob3dJbXBvcnRhbnQgfSBmcm9tICcuL3BhZ2UvaW1wb3J0YW50JztcbmltcG9ydCB7IGFkZFRvZGF5IH0gZnJvbSAnLi9wYWdlL3RvZGF5JztcbmltcG9ydCB7IHNob3dEYXRlIH0gZnJvbSAnLi9wYWdlL2RhdGUnO1xuXG4vLyBtYWtlIHRoZSBsZWZ0IHBhbmVsIGRpc2FwcGVhciBhbmQgYXBwZWFyXG5jb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGxlZnRQYW5lbC5jbGFzc0xpc3QgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgbGVmdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfVxufSlcbi8vIG1ha2UgdGhlIGNhbGVuZGVyIGluIHRoZSBib3R0b20gb2YgbGVmdCBwYW5lbFxuY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1kYXRlJyk7XG5jb25zdCBkYXRlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMnKTtcbmNvbnN0IHByZXZOZXh0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29ucyBzcGFuJylcblxubGV0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuY3VyclllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG5jdXJyTW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG5cbmxldCBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tR0InKVxuXG5jb25zdCBtb250aCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JyxcbiAgICAgICAgICAgICAgICAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbiBcbmNvbnN0IHJlbmRlckNhbGVuZGFyID0gKCkgPT4ge1xuICAgIGxldCBmaXJzdERhdGVvZk1vbnRoID0gbmV3IERhdGUoY3VyclllYXIsIGN1cnJNb250aCwgMSkuZ2V0RGF5KCk7IC8vIGdldCBmaXJzdCBkYXkgb2YgbW9udGhcbiAgICBsZXQgbGFzdERhdGVvZk1vbnRoID0gbmV3IERhdGUoY3VyclllYXIsIGN1cnJNb250aCArIDEsIDApLmdldERhdGUoKTsgLy8gZ2V0dGluZyBsYXN0IGRheSBvZiBtb250aFxuICAgIGxldCBsYXN0RGF0ZW9mTGFzdE1vbnRoID0gbmV3IERhdGUoY3VyclllYXIsIGN1cnJNb250aCwgMCkuZ2V0RGF0ZSgpOyAvL2dldGlubmcgbGFzdCBkYXRlIG9mIHByZXZpb3VzIG1vbnRoXG4gICAgbGV0IGxhc3REYXlvZk1vbnRoID0gbmV3IERhdGUoY3VyclllYXIsIGN1cnJNb250aCwgbGFzdERhdGVvZkxhc3RNb250aCkuZ2V0RGF5KCk7IC8vZ2V0dGluZyBsYXN0IGRheSBvZiBtb250aFxuICAgIGxldCBsaVRhZyA9IFwiXCI7XG5cbiAgICBmb3IgKCBsZXQgaSA9IGZpcnN0RGF0ZW9mTW9udGg7IGkgPiAwIDsgaS0tKSB7XG4gICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7bGFzdERhdGVvZkxhc3RNb250aCAtIGkgKyAxfTwvbGk+YFxuICAgIH1cblxuICAgIGZvciAoIGxldCBpID0gMTsgaSA8PSBsYXN0RGF0ZW9mTW9udGg7IGkrKykge1xuICAgICAgICBsZXQgaXNUb2RheSA9IGkgPT09IGRhdGUuZ2V0RGF0ZSgpICYmIGN1cnJNb250aCA9PT0gbmV3IERhdGUoKS5nZXRNb250aCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgY3VyclllYXIgPT09IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3MgPVwiJHtpc1RvZGF5fVwiPiR7aX08L2xpPmBcbiAgICB9XG5cbiAgICBmb3IgKCBsZXQgaSA9IGxhc3REYXlvZk1vbnRoOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGxpVGFnICs9IGA8bGkgaWQ9XCJsYXN0XCIgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7aSAtIGxhc3REYXlvZk1vbnRoICsgMX08L2xpPmBcbiAgICB9XG5cbiAgICBjdXJyZW50RGF0ZS5pbm5lckhUTUwgPSBgJHttb250aFtjdXJyTW9udGhdfSAke2N1cnJZZWFyfWBcbiAgICBkYXRlVGFnLmlubmVySFRNTCA9IGxpVGFnXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0IHdob2xlTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cycpLmNoaWxkcmVuXG4gICAgbGV0IGV2ZXJ5RGF5ID0gW11cbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCB3aG9sZU1vbnRoLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBldmVyeURheS5wdXNoKHdob2xlTW9udGhbaV0pXG4gICAgfVxuICAgIFxuICAgIGV2ZXJ5RGF5LmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aW1pbmdcbiAgICAgICAgICAgIGlmKGRhdGUuY2xhc3NMaXN0ID09ICdpbmFjdGl2ZScgJiYgZGF0ZS5pZCA9PSAnbGFzdCcpIHtcbiAgICAgICAgICAgICAgICB0aW1pbmcgPSBgJHtkYXRlLmlubmVySFRNTH0vJHtjdXJyTW9udGggKyAyfS8ke2N1cnJZZWFyfWBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5jbGFzc0xpc3QgPT0gJ2luYWN0aXZlJyAmJiAhZGF0ZS5pZCkge1xuICAgICAgICAgICAgICAgIHRpbWluZyA9IGAke2RhdGUuaW5uZXJIVE1MfS8ke2N1cnJNb250aH0vJHtjdXJyWWVhcn1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWluZyA9IGAke2RhdGUuaW5uZXJIVE1MfS8ke2N1cnJNb250aCArIDF9LyR7Y3VyclllYXJ9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGltaW5nID09IG5vdykge1xuICAgICAgICAgICAgICAgIHJpZ2h0Qm9keS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgICAgICAgICB0b2RheVRpdGxlLmlkID0gJ3RpdGxlJ1xuICAgICAgICAgICAgICAgIHRvZGF5VGl0bGUuaW5uZXJIVE1MID0gJ1RvZGF5J1xuXG4gICAgICAgICAgICAgICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHRvZGF5VGl0bGUpXG5cbiAgICAgICAgICAgICAgICByaWdodEJvZHkuYXBwZW5kQ2hpbGQoYWRkVG9kYXkoKSlcblxuICAgICAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBhbGxUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBhbGxJZGVhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByaWdodEJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgICAgICAgICAgdG9kYXlUaXRsZS5pZCA9ICd0aXRsZSdcbiAgICAgICAgICAgICAgICB0b2RheVRpdGxlLmlubmVySFRNTCA9IHRpbWluZ1xuXG4gICAgICAgICAgICAgICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHRvZGF5VGl0bGUpXG5cbiAgICAgICAgICAgICAgICByaWdodEJvZHkuYXBwZW5kQ2hpbGQoc2hvd0RhdGUodGltaW5nKSlcblxuICAgICAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBhbGxUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBhbGxJZGVhLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH0pXG5cbn1cblxucmVuZGVyQ2FsZW5kYXIoKTtcblxucHJldk5leHRJY29uLmZvckVhY2goaWNvbiA9PiB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3Vyck1vbnRoID0gaWNvbi5pZCA9PT0gXCJwcmV2XCIgPyBjdXJyTW9udGggLSAxIDogY3Vyck1vbnRoICsgMTtcblxuICAgICAgICBpZiAoY3Vyck1vbnRoIDwgMCB8fCBjdXJyTW9udGggPiAxMSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgpO1xuICAgICAgICAgICAgY3VyclllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjdXJyTW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJDYWxlbmRhcigpXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaWJ0aW9uLCBkb25lLCBpbXBvcnRhbnQsIGRhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpYnRpb24gPSBkZXNjcmlidGlvblxuICAgICAgICB0aGlzLmRvbmUgPSBkb25lXG4gICAgICAgIHRoaXMuaW1wb3J0YW50ID0gaW1wb3J0YW50XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUgPT0gbnVsbCA/IG5vdyA6IGRhdGVcbiAgICB9XG5cbiAgICBiZURvbmUoKSB7XG4gICAgICAgIGxldCBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSlcbiAgICAgICAgbGV0IHRhc2sgPSB7J3RpdGxlJzogdGhpcy50aXRsZSwgJ2Rlc2NyaWJ0aW9uJzogdGhpcy5kZXNjcmlidGlvbiwgJ2RvbmUnOiB0aGlzLmRvbmUsICdpbXBvcnRhbnQnOiB0aGlzLmltcG9ydGFudCwgJ2RhdGUnOiB0aGlzLmRhdGV9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShteVRhc2tbaV0pID09PSBKU09OLnN0cmluZ2lmeSh0YXNrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9ICF0aGlzLmRvbmVcbiAgICAgICAgICAgICAgICBteVRhc2tbaV0uZG9uZSA9ICFteVRhc2tbaV0uZG9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSlcbiAgICB9XG5cbiAgICBiZUltcG9ydGFudCgpIHtcbiAgICAgICAgbGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBsZXQgdGFzayA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15VGFza1tpXSkgPT09IEpTT04uc3RyaW5naWZ5KHRhc2spKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRhbnQgPSAhdGhpcy5pbXBvcnRhbnRcbiAgICAgICAgICAgICAgICBteVRhc2tbaV0uaW1wb3J0YW50ID0gIW15VGFza1tpXS5pbXBvcnRhbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIEpTT04uc3RyaW5naWZ5KG15VGFzaykpXG4gICAgfVxuXG4gICAgcmVOYW1lKG5ld05hbWUpIHtcbiAgICAgICAgbGV0IG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBsZXQgdGFzayA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15VGFza1tpXSkgPT09IEpTT04uc3RyaW5naWZ5KHRhc2spKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IG5ld05hbWVcbiAgICAgICAgICAgICAgICBteVRhc2tbaV0udGl0bGUgPSBuZXdOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBKU09OLnN0cmluZ2lmeShteVRhc2spKVxuICAgIH1cblxuICAgIHJlRGVzKG5ld0Rlcykge1xuICAgICAgICBsZXQgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGxldCB0YXNrID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobXlUYXNrW2ldKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFzaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaWJ0aW9uID0gbmV3RGVzXG4gICAgICAgICAgICAgICAgbXlUYXNrW2ldLmRlc2NyaWJ0aW9uID0gbmV3RGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBKU09OLnN0cmluZ2lmeShteVRhc2spKVxuICAgIH1cblxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsZXQgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGxldCB0YXNrID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBteVRhc2sucHVzaCh0YXNrKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgSlNPTi5zdHJpbmdpZnkobXlUYXNrKSlcbiAgICB9XG5cbiAgICBkZWxldGVGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsZXQgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGxldCB0YXNrID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobXlUYXNrW2ldKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFzaykpIHtcbiAgICAgICAgICAgICAgICBteVRhc2suc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIEpTT04uc3RyaW5naWZ5KG15VGFzaykpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWRlYSB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlidGlvbiwgZG9uZSwgaW1wb3J0YW50LCBkYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaWJ0aW9uID0gZGVzY3JpYnRpb25cbiAgICAgICAgdGhpcy5kb25lID0gZG9uZVxuICAgICAgICB0aGlzLmltcG9ydGFudCA9IGltcG9ydGFudFxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlID09IG51bGwgPyBub3cgOiBkYXRlXG4gICAgfVxuXG4gICAgYmVEb25lKCkge1xuICAgICAgICBsZXQgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGxldCBpZGVhID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15SWRlYVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KGlkZWEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZVxuICAgICAgICAgICAgICAgIG15SWRlYVtpXS5kb25lID0gIW15SWRlYVtpXS5kb25lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBKU09OLnN0cmluZ2lmeShteUlkZWEpKVxuICAgIH1cblxuICAgIGJlSW1wb3J0YW50KCkge1xuICAgICAgICBsZXQgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGxldCBpZGVhID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15SWRlYVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KGlkZWEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBvcnRhbnQgPSAhdGhpcy5pbXBvcnRhbnRcbiAgICAgICAgICAgICAgICBteUlkZWFbaV0uaW1wb3J0YW50ID0gIW15SWRlYVtpXS5pbXBvcnRhbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215SWRlYScsIEpTT04uc3RyaW5naWZ5KG15SWRlYSkpXG4gICAgfVxuXG4gICAgcmVOYW1lKG5ld05hbWUpIHtcbiAgICAgICAgbGV0IG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBsZXQgaWRlYSA9IHsndGl0bGUnOiB0aGlzLnRpdGxlLCAnZGVzY3JpYnRpb24nOiB0aGlzLmRlc2NyaWJ0aW9uLCAnZG9uZSc6IHRoaXMuZG9uZSwgJ2ltcG9ydGFudCc6IHRoaXMuaW1wb3J0YW50LCAnZGF0ZSc6IHRoaXMuZGF0ZX1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUlkZWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KG15SWRlYVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KGlkZWEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IG5ld05hbWVcbiAgICAgICAgICAgICAgICBteUlkZWFbaV0udGl0bGUgPSBuZXdOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBKU09OLnN0cmluZ2lmeShteUlkZWEpKVxuICAgIH1cblxuICAgIHJlRGVzKG5ld0Rlcykge1xuICAgICAgICBsZXQgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGxldCBpZGVhID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15SWRlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobXlJZGVhW2ldKSA9PT0gSlNPTi5zdHJpbmdpZnkoaWRlYSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaWJ0aW9uID0gbmV3RGVzXG4gICAgICAgICAgICAgICAgbXlJZGVhW2ldLmRlc2NyaWJ0aW9uID0gbmV3RGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBKU09OLnN0cmluZ2lmeShteUlkZWEpKVxuICAgIH1cblxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsZXQgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGxldCBpZGVhID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBteUlkZWEucHVzaChpZGVhKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgSlNPTi5zdHJpbmdpZnkobXlJZGVhKSlcbiAgICB9XG5cbiAgICBkZWxldGVGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBsZXQgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGxldCBpZGVhID0geyd0aXRsZSc6IHRoaXMudGl0bGUsICdkZXNjcmlidGlvbic6IHRoaXMuZGVzY3JpYnRpb24sICdkb25lJzogdGhpcy5kb25lLCAnaW1wb3J0YW50JzogdGhpcy5pbXBvcnRhbnQsICdkYXRlJzogdGhpcy5kYXRlfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15SWRlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobXlJZGVhW2ldKSA9PT0gSlNPTi5zdHJpbmdpZnkoaWRlYSkpIHtcbiAgICAgICAgICAgICAgICBteUlkZWEuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215SWRlYScsIEpTT04uc3RyaW5naWZ5KG15SWRlYSkpXG4gICAgfVxufVxuLy9zZWxlY3QgcmlnaHQgYXJlYVxuY29uc3QgcmlnaHRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0JylcblxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVG9kYXknKTtcbnRvZGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuY29uc3QgdG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRvZGF5VGl0bGUuaWQgPSAndGl0bGUnXG50b2RheVRpdGxlLmlubmVySFRNTCA9ICdUb2RheSdcblxucmlnaHRCb2R5LmFwcGVuZENoaWxkKHRvZGF5VGl0bGUpXG5yaWdodEJvZHkuYXBwZW5kQ2hpbGQoYWRkVG9kYXkoKSlcblxudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICByaWdodEJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdG9kYXlUaXRsZS5pZCA9ICd0aXRsZSdcbiAgICB0b2RheVRpdGxlLmlubmVySFRNTCA9ICdUb2RheSdcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxuXG4gICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKGFkZFRvZGF5KG5vdykpXG5cbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgYWxsVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgYWxsSWRlYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgaW1wb3J0YW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn0pXG5cbi8vIGFkZCBldmVudGxpc3RlbmVyIHRvIGNyZWF0ZSBuZXcgcmlnaHQgcGFuZWxcbmNvbnN0IGFsbFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGFzaycpO1xuYWxsVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKSA9PiB7XG5cbiAgICByaWdodEJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdG9kYXlUaXRsZS5pZCA9ICd0aXRsZSdcbiAgICB0b2RheVRpdGxlLmlubmVySFRNTCA9ICdBbGwgVGFzaydcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxuXG4gICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHNob3dBbGxUYXNrKCkpXG5cbiAgICB0b2RheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgYWxsVGFzay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgYWxsSWRlYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgaW1wb3J0YW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn0pO1xuXG5jb25zdCBhbGxJZGVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0lkZWEnKTtcbmFsbElkZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICByaWdodEJvZHkuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdG9kYXlUaXRsZS5pZCA9ICd0aXRsZSdcbiAgICB0b2RheVRpdGxlLmlubmVySFRNTCA9ICdBbGwgSWRlYSdcblxuICAgIHJpZ2h0Qm9keS5hcHBlbmRDaGlsZCh0b2RheVRpdGxlKVxuXG4gICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHNob3dBbGxJZGVhKCkpXG4gICAgdG9kYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGFsbFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGFsbElkZWEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59KTtcblxuY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ltcG9ydGFudCcpO1xuaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgcmlnaHRCb2R5LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCB0b2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvZGF5VGl0bGUuaWQgPSAndGl0bGUnXG4gICAgdG9kYXlUaXRsZS5pbm5lckhUTUwgPSAnSW1wb3J0YW50J1xuXG4gICAgcmlnaHRCb2R5LmFwcGVuZENoaWxkKHRvZGF5VGl0bGUpXG5cbiAgICByaWdodEJvZHkuYXBwZW5kQ2hpbGQoc2hvd0ltcG9ydGFudCgpKVxuXG4gICAgdG9kYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGFsbFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGFsbElkZWEuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGltcG9ydGFudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59KTtcblxuIiwiaW1wb3J0IHsgSWRlYSB9IGZyb20gXCIuLlwiXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vdG9kYXlcIlxuXG5mdW5jdGlvbiB1bmRvbmVUYXNrKGxpc3QpIHtcbiAgICBsZXQgbXlJZGVhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpXG4gICAgaWYgKG15SWRlYSA9PSBudWxsICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlJZGVhJywgXCJbXVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG15SWRlYSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215SWRlYScpKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15SWRlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGlkZWEgPSBuZXcgSWRlYShteUlkZWFbaV0udGl0bGUsIG15SWRlYVtpXS5kZXNjcmlidGlvbiwgbXlJZGVhW2ldLmRvbmUsIG15SWRlYVtpXS5pbXBvcnRhbnQsIG15SWRlYVtpXS5kYXRlKVxuICAgICAgICAgICAgaWYgKGlkZWEuZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtKGxpc3QsIGlkZWEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsSWRlYSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ3BhbmVsJ1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxpc3RJdGVtLmlkID0gJ2xpc3RJZGVhJ1xuXG4gICAgdW5kb25lVGFzayhsaXN0SXRlbSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uXCJcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi90b2RheVwiXG5cbmZ1bmN0aW9uIHVuZG9uZVRhc2sobGlzdCkge1xuICAgIGxldCBteVRhc2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJylcbiAgICBpZiAobXlUYXNrID09IG51bGwgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRhc2snLCBcIltdXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUYXNrJykpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKG15VGFza1tpXS50aXRsZSwgbXlUYXNrW2ldLmRlc2NyaWJ0aW9uLCBteVRhc2tbaV0uZG9uZSwgbXlUYXNrW2ldLmltcG9ydGFudCwgbXlUYXNrW2ldLmRhdGUpXG4gICAgICAgICAgICBpZiAodGFzay5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW0obGlzdCwgdGFzaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGxUYXNrKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAncGFuZWwnXG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdEl0ZW0uaWQgPSAnbGlzdFRhc2snXG5cbiAgICB1bmRvbmVUYXNrKGxpc3RJdGVtKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG5cbiAgICByZXR1cm4gY29udGVudFxufSIsImltcG9ydCB7IFRhc2ssIElkZWEgfSBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL3RvZGF5XCJcblxuZnVuY3Rpb24gY3JlYXRlTGVmdFBhbmVsKHRpbWluZykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAnbGVmdC1wYW5lbCdcblxuICAgIGNvbnN0IGxpc3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0VGFzay5pZCA9ICdsaXN0VGFzaycgXG5cbiAgICBvbGRUYXNrKGxpc3RUYXNrLCB0aW1pbmcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0VGFzaylcblxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0UGFuZWwodGltaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5pZCA9ICdsZWZ0LXBhbmVsJ1xuXG4gICAgY29uc3QgbGlzdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxpc3RUYXNrLmlkID0gJ2xpc3RUYXNrJyBcblxuICAgIG9sZElkZWEobGlzdFRhc2ssIHRpbWluZylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3RUYXNrKVxuICAgIFxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmZ1bmN0aW9uIG9sZFRhc2sobGlzdCwgdGltaW5nKSB7XG4gICAgbGV0IG15VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKVxuICAgIGlmIChteVRhc2sgPT0gbnVsbCApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIFwiW11cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sobXlUYXNrW2ldLnRpdGxlLCBteVRhc2tbaV0uZGVzY3JpYnRpb24sIG15VGFza1tpXS5kb25lLCBteVRhc2tbaV0uaW1wb3J0YW50LCBteVRhc2tbaV0uZGF0ZSkgIFxuICAgICAgICAgICAgaWYgKHRhc2suZGF0ZSA9PSB0aW1pbmcgJiYgdGFzay5kb25lID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbShsaXN0LCB0YXNrKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbGRJZGVhKGxpc3QsIHRpbWluZykge1xuICAgIGxldCBteUlkZWEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJylcbiAgICBpZiAobXlJZGVhID09IG51bGwgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBcIltdXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlJZGVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWRlYSA9IG5ldyBJZGVhKG15SWRlYVtpXS50aXRsZSwgbXlJZGVhW2ldLmRlc2NyaWJ0aW9uLCBteUlkZWFbaV0uZG9uZSwgbXlJZGVhW2ldLmltcG9ydGFudCwgbXlJZGVhW2ldLmRhdGUpICBcbiAgICAgICAgICAgIGlmIChpZGVhLmRhdGUgPT0gdGltaW5nICYmIGlkZWEuZG9uZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW0obGlzdCwgaWRlYSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZGVhLmRhdGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aW1pbmcpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGF0ZSh0aW1pbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ3BhbmVsJ1xuXG4gICAgY29uc3QgbGVmdFBhbmVsID0gY3JlYXRlTGVmdFBhbmVsKHRpbWluZylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxlZnRQYW5lbClcblxuICAgIGNvbnN0IHJpZ2h0UGFuZWwgPSBjcmVhdGVSaWdodFBhbmVsKHRpbWluZylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0UGFuZWwpXG5cbiAgICByZXR1cm4gY29udGVudFxufSIsImltcG9ydCB7IFRhc2ssIElkZWEgfSBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL3RvZGF5XCJcblxuZnVuY3Rpb24gY3JlYXRlTGVmdFBhbmVsKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAnbGVmdC1wYW5lbCdcblxuICAgIGNvbnN0IGxpc3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0VGFzay5pZCA9ICdsaXN0VGFzaycgXG5cbiAgICBpbXBvcnRhbnRUYXNrKGxpc3RUYXNrKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdFRhc2spXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodFBhbmVsKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAnbGVmdC1wYW5lbCdcblxuICAgIGNvbnN0IGxpc3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0VGFzay5pZCA9ICdsaXN0VGFzaycgXG5cbiAgICBpbXBvcnRhbnRJZGVhKGxpc3RUYXNrKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdFRhc2spXG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZnVuY3Rpb24gaW1wb3J0YW50VGFzayhsaXN0KSB7XG4gICAgbGV0IG15VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKVxuICAgIGlmIChteVRhc2sgPT0gbnVsbCApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VGFzaycsIFwiW11cIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBteVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRhc2snKSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sobXlUYXNrW2ldLnRpdGxlLCBteVRhc2tbaV0uZGVzY3JpYnRpb24sIG15VGFza1tpXS5kb25lLCBteVRhc2tbaV0uaW1wb3J0YW50LCBteVRhc2tbaV0uZGF0ZSkgIFxuICAgICAgICAgICAgaWYgKHRhc2suZG9uZSA9PT0gZmFsc2UgJiYgdGFzay5pbXBvcnRhbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtKGxpc3QsIHRhc2spXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGltcG9ydGFudElkZWEobGlzdCkge1xuICAgIGxldCBteUlkZWEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJylcbiAgICBpZiAobXlJZGVhID09IG51bGwgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBcIltdXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlJZGVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWRlYSA9IG5ldyBJZGVhKG15SWRlYVtpXS50aXRsZSwgbXlJZGVhW2ldLmRlc2NyaWJ0aW9uLCBteUlkZWFbaV0uZG9uZSwgbXlJZGVhW2ldLmltcG9ydGFudCwgbXlJZGVhW2ldLmRhdGUpICBcbiAgICAgICAgICAgIGlmIChpZGVhLmRvbmUgPT09IGZhbHNlICYmIGlkZWEuaW1wb3J0YW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbShsaXN0LCBpZGVhKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbXBvcnRhbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5pZCA9ICdwYW5lbCdcblxuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGNyZWF0ZUxlZnRQYW5lbCgpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpXG5cbiAgICBjb25zdCByaWdodFBhbmVsID0gY3JlYXRlUmlnaHRQYW5lbCgpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodFBhbmVsKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn0iLCJpbXBvcnQgeyBUYXNrLCBJZGVhIH0gZnJvbSBcIi4uXCJcbi8vQ3JlYXRlIEZvcm1cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0odHlwZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0ID0gJ2Zvcm0nXG4gICAgY29udGVudC5pZCA9IGB0aGlzJHt0eXBlfWBcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmlkID0gYCR7dHlwZX1gXG4gICAgZm9ybS5jbGFzc0xpc3QgPSAnaGlkZGVuJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ1RpdGxlJ1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXRUaXRsZS50eXBlID0gJ3RleHQnXG4gICAgaW5wdXRUaXRsZS5pZCA9IGAke3R5cGV9VGl0bGVgXG4gICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9ICdXaGF0IHlvdSBnb25uYSBkbyA/J1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkZXRhaWxzLmlubmVySFRNTCA9ICdEZXRhaWxzJ1xuICAgIGNvbnN0IGlucHV0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dERldGFpbHMuaWQgPSBgJHt0eXBlfURldGFpbHNgXG4gICAgaW5wdXREZXRhaWxzLnJvd3MgPSAnMidcbiAgICBpbnB1dERldGFpbHMuY29scyA9ICc1MCdcbiAgICBpbnB1dERldGFpbHMucGxhY2Vob2xkZXIgPSAnQW55dGhpbmcgdGhhdCBtYWtlIHlvdSB1bmRlcnN0YW5kIHdoeSB5b3UgaGF2ZSB0byBkbyBpdCdcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dERldGFpbHMpXG5cbiAgICBjb25zdCB0d29CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHR3b0J1dHRvbi5pZCA9ICdidXR0b24nXG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnc3VibWl0J1xuICAgIGFkZEJ1dHRvbi5pZCA9IGAke3R5cGV9U3VibWl0YFxuICAgIGFkZEJ1dHRvbi52YWx1ZSA9ICdBZGQnXG5cblxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBjYW5jZWxCdXR0b24uaWQgPSBgJHt0eXBlfUNhbmNlbGBcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSAnQ2FuY2VsJ1xuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfSlcblxuICAgIHR3b0J1dHRvbi5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gICAgdHdvQnV0dG9uLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodHdvQnV0dG9uKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZCh0eXBlKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QgPSAnYWRkJ1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uaWQgPSBgJHt0eXBlfUFkZGBcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL3BsdXMucG5nXCJcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0ZXh0LmlubmVySFRNTCA9IGBBZGQgJHt0eXBlfWBcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0eXBlfWApXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB9KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGVmdFBhbmVsKHRpbWluZykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuaWQgPSAnbGVmdC1wYW5lbCdcblxuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtKCd0YXNrJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJykgXG4gICAgICAgIGxldCBkZXNjcmlidGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXRhaWxzJylcblxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpYnRpb25JbnB1dC52YWx1ZSwgZmFsc2UsIGZhbHNlKVxuICAgICAgICB0YXNrLmFkZFRvTG9jYWxTdG9yYWdlKClcblxuICAgICAgICBjcmVhdGVJdGVtKGxpc3RUYXNrLCB0YXNrKVxuXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIGRlc2NyaWJ0aW9uSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJykuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgIH0pXG5cbiAgICBjb25zdCBsaXN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdFRhc2suaWQgPSAnbGlzdFRhc2snIFxuXG4gICAgYXZhaWFsYmxlVGFzayhsaXN0VGFzaywgdGltaW5nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdFRhc2spXG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVBZGQoJ3Rhc2snKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRQYW5lbCh0aW1pbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ3JpZ2h0LXBhbmVsJ1xuXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oJ2lkZWEnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZGVhVGl0bGUnKSBcbiAgICAgICAgbGV0IGRlc2NyaWJ0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRlYURldGFpbHMnKVxuXG4gICAgICAgIGNvbnN0IGlkZWEgPSBuZXcgSWRlYSh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlidGlvbklucHV0LnZhbHVlLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgIGlkZWEuYWRkVG9Mb2NhbFN0b3JhZ2UoKVxuXG4gICAgICAgIGNyZWF0ZUl0ZW0obGlzdElkZWEsIGlkZWEpXG5cbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgZGVzY3JpYnRpb25JbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkZWEnKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgfSlcblxuICAgIGNvbnN0IGxpc3RJZGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsaXN0SWRlYS5pZCA9ICdsaXN0SWRlYScgXG5cbiAgICBhdmFpbGFibGVJZGVhKGxpc3RJZGVhLCB0aW1pbmcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0SWRlYSlcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUFkZCgnaWRlYScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG5sZXQgbmV3SXRlbSA9IChmdW5jdGlvbiBuZXdJdGVtICgpIHtcbiAgICBjb25zdCBiYXNlSUQgPSAnaXRlbSdcbiAgICBsZXQgY291bnQgPSAwXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlID0gJ2RpdicpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gYmFzZUlEXG4gICAgICAgIGl0ZW0uaWQgPSBjb3VudFxuICAgICAgICBjb3VudCArPSAxXG4gICAgICAgIHJldHVybiBpdGVtXG4gICAgfVxufSgpKVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSXRlbShsaXN0SXRlbSwgdGFzaykge1xuXG5cbiAgICBjb25zdCBpdGVtID0gbmV3SXRlbSgnZGl2JylcbiAgICBjb25zdCBpdGVtSUQgPSBOdW1iZXIoaXRlbS5pZClcblxuICAgIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZG9uZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGRvbmUubmFtZSA9IFwiZG9uZVwiXG4gICAgZG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RvbmUnKVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9uZSlcblxuICAgIGRvbmUuZGVmYXVsdENoZWNrZWQgPSB0YXNrLmRvbmUgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZVxuXG4gICAgLy9tYWtlIGJ1dHRvbiBkb25lIGNoYW5nZSBzdGF0dXNcbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmJlRG9uZSgpXG4gICAgfSlcblxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dCcpXG4gICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGgzLmlubmVySFRNTCA9IHRhc2sudGl0bGVcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGgzKVxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaWJ0aW9uXG4gICAgdGV4dC5hcHBlbmRDaGlsZChwKVxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIGxldCBjb21ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29tYm8uaWQgPSBcImNvbWJvXCJcblxuICAgIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN0YXIuY2xhc3NMaXN0ID0gJ3N0YXInIFxuICAgIGNvbnN0IHN0YXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgc3RhckJveC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgc3RhckJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGltcG9ydGFudCR7aXRlbUlEfWApXG4gICAgY29uc3Qgc3RhckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHN0YXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBpbXBvcnRhbnQke2l0ZW1JRH1gKVxuICAgIHN0YXIuYXBwZW5kQ2hpbGQoc3RhckJveClcbiAgICBzdGFyLmFwcGVuZENoaWxkKHN0YXJMYWJlbClcbiAgICBjb21iby5hcHBlbmRDaGlsZChzdGFyKVxuXG4gICAgc3RhckJveC5kZWZhdWx0Q2hlY2tlZCA9IHRhc2suaW1wb3J0YW50ID09IHRydWUgPyB0cnVlIDogZmFsc2VcblxuICAgIHN0YXJCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2suYmVJbXBvcnRhbnQoKVxuICAgIH0pXG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlZGl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdENvbnRhaW5lcicpXG4gICAgY29uc3QgZWRpdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBlZGl0U3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZlcnQnKVxuICAgIGVkaXRTcGFuLmNsYXNzTGlzdCA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiXG4gICAgZWRpdFNwYW4udGV4dENvbnRlbnQgPSBcIm1vcmVfdmVydFwiXG4gICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0U3BhbilcbiAgICBjb21iby5hcHBlbmRDaGlsZChlZGl0KVxuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGlzdC5jbGFzc0xpc3QgPSAnbGlzdE9wdGlvbidcbiAgICBjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b25FZGl0LmNsYXNzTGlzdCA9ICdlZGl0J1xuICAgIGJ1dHRvbkVkaXQuaW5uZXJIVE1MID0gXCJFZGl0XCJcbiAgICBjb25zdCBidXR0b25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbkRlbGV0ZS5jbGFzc0xpc3QgPSAnZGV0ZWxlJ1xuICAgIGJ1dHRvbkRlbGV0ZS5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiXG4gICAgbGlzdC5hcHBlbmRDaGlsZChidXR0b25FZGl0KVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlKVxuICAgIGNvbWJvLmFwcGVuZENoaWxkKGxpc3QpXG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGNvbWJvKVxuXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH1cbiAgICB9KVxuXG4gICAgYnV0dG9uRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmRlbGV0ZUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9KVxuICAgIC8vZWRpdCBidXR0b24gc2hvdWxkIGNyZWF0ZSBhbm90aGVyIGtpbmQgb2YgZm9ybVxuICAgIGJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIGNyZWF0ZUVkaXRGb3JtKGxpc3RJdGVtKVxuXG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrJylcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRDYW5jZWwnKVxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKVxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gbnVsbFxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdCcpXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RWRpdCcpXG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBoMy5pbm5lckhUTUxcbiAgICAgICAgbGV0IGRlc2NyaWJ0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsc0VkaXQnKVxuICAgICAgICBkZXNjcmlidGlvbklucHV0LnZhbHVlID0gcC5pbm5lckhUTUxcblxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaDMuaW5uZXJIVE1MID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlidGlvbklucHV0LnZhbHVlXG4gICAgICAgICAgICB0YXNrLnJlTmFtZShgJHt0aXRsZUlucHV0LnZhbHVlfWApXG4gICAgICAgICAgICB0YXNrLnJlRGVzKGAke2Rlc2NyaWJ0aW9uSW5wdXQudmFsdWV9YClcbiAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBudWxsXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybShsaXN0KSB7XG5cbiAgICBjb25zdCBwbGFjZSA9IGxpc3QuaWQgPT09ICdsaXN0SWRlYScgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpc2lkZWEnKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzdGFzaycpXG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uaWQgPSBcImVkaXRUYXNrXCJcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0IHlvdSBnb25uYSBkbyA/JylcbiAgICBpbnB1dC5pZCA9IFwiaW5wdXRFZGl0XCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RldGFpbHMnKVxuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHM6XCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpXG5cbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMicpXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgJzUwJylcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGV0YWlscycpXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBbnl0aGluZyB0aGF0IG1ha2UgeW91IHVuZGVyc3RhbmQgd2h5IHlvdSBoYXZlIHRvIGRvIGl0JylcbiAgICB0ZXh0QXJlYS5pZCA9IFwiZGV0YWlsc0VkaXRcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dEFyZWEpXG5cbiAgICBjb25zdCB0d29CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHR3b0J1dHRvbi5pZCA9IFwiYnV0dG9uXCJcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJtaXQnKVxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0VkaXQnKVxuICAgIHN1Ym1pdC5pZCA9IFwiZWRpdFwiXG4gICAgdHdvQnV0dG9uLmFwcGVuZENoaWxkKHN1Ym1pdClcblxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjYW5jZWwnKVxuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NhbmNlbCcpXG4gICAgY2FuY2VsLmlkID0gXCJlZGl0Q2FuY2VsXCJcbiAgICB0d29CdXR0b24uYXBwZW5kQ2hpbGQoY2FuY2VsKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0d29CdXR0b24pXG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQoZm9ybSlcbn1cblxuZnVuY3Rpb24gYXZhaWFsYmxlVGFzayhsaXN0LCB0aW1pbmcpIHtcbiAgICBsZXQgbXlUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpXG4gICAgaWYgKG15VGFzayA9PSBudWxsICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUYXNrJywgXCJbXVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG15VGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VGFzaycpKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayhteVRhc2tbaV0udGl0bGUsIG15VGFza1tpXS5kZXNjcmlidGlvbiwgbXlUYXNrW2ldLmRvbmUsIG15VGFza1tpXS5pbXBvcnRhbnQsIG15VGFza1tpXS5kYXRlKSAgXG4gICAgICAgICAgICBpZih0YXNrLmRhdGUgPT0gdGltaW5nKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbShsaXN0LCB0YXNrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhdmFpbGFibGVJZGVhKGxpc3QsIHRpbWluZykge1xuICAgIGxldCBteUlkZWEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJylcbiAgICBpZiAobXlJZGVhID09IG51bGwgKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUlkZWEnLCBcIltdXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlJZGVhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlJZGVhJykpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlJZGVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWRlYSA9IG5ldyBJZGVhKG15SWRlYVtpXS50aXRsZSwgbXlJZGVhW2ldLmRlc2NyaWJ0aW9uLCBteUlkZWFbaV0uZG9uZSwgbXlJZGVhW2ldLmltcG9ydGFudCwgbXlJZGVhW2ldLmRhdGUpXG4gICAgICAgICAgICBpZihpZGVhLmRhdGUgPT0gdGltaW5nKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbShsaXN0LCBpZGVhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RheSh0aW1pbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmlkID0gJ3BhbmVsJ1xuXG4gICAgY29uc3QgbGVmdCA9IGNyZWF0ZUxlZnRQYW5lbCh0aW1pbmcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsZWZ0KVxuXG4gICAgY29uc3QgcmlnaHQgPSBjcmVhdGVSaWdodFBhbmVsKHRpbWluZylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0KVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==