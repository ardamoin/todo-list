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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: Raleway;\n  display: flex;\n  flex: 1 1 none;\n  min-width: calc(100vw + 17px);\n  overflow-x: scroll;\n  flex-direction: column;\n}\n\n\n\n.header {\n  height: 60px;\n  margin: 0;\n  background-color: #d49d6b;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\n.navbar-toggler {\n  margin-left: 15px;\n  border-width: 0;\n  border-radius: 7%;\n  --bs-navbar-toggler-border-radius: 0;\n  --bs-navbar-toggler-focus-width: 0;\n  transition: 0.25s;\n}\n\n.navbar-toggler:hover,\n.test:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.home-button {\n  font-size: 1.5em;\n  color: rgba(0, 0, 0, 0.55);\n  height: 38px;\n  width: 54px;\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 7%;\n  transition: 0.25s;\n}\n\n.home-button:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.content {\n  display: flex;\n  height: 100%;\n  padding-top: 60px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  background-color: #f9fafb;\n  overflow: hidden;\n  transition: 0.5s;\n  width: 200px;\n  min-width: 200px;\n}\n\n.sidebar > div {\n  margin: 0 30px;\n  min-width: 140px;\n  border-radius: 3px;\n  padding-left: 15px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  transition: 0.25s;\n}\n\n.sidebar > div:hover {\n  background-color: rgba(128, 128, 128, 0.1);\n  cursor: pointer;\n}\n\nhr {\n  border-top: 1px solid #191919;\n  width: 120px;\n  margin: -15px 30px;\n}\n\n.main-content,\n.sidebar {\n  padding-top: 30px;\n  color: #1f2937;\n}\n\n.main-content {\n  display: flex;\n  flex: 1 1 none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-width: 1070px;\n  margin-left: 30px;\n}\n\n.todo {\n  display: flex;\n  flex: 1 1 none;\n  align-items: center;\n  width: 1100px;\n  background-color: #eee;\n  margin-bottom: 20px;\n  transition: 0.2s;\n}\n\n.todo > *:not(.priority-strip) {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.todo:hover {\n    transform:scale(1.005);\n    -webkit-box-shadow: 7px 7px 10px -6px rgba(0,0,0,0.4);\n}\n\n.priority-strip {\n    min-width: 4px;\n    height: 100%;\n    margin-right: 0.75rem;\n}\n\n.priority-low {\n    background-color: green;\n}\n\n.priority-medium {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin-right: 0.75rem;\n  background-color: transparent;\n  border: 2px solid #3ba395;\n  border-radius: 5px;\n  min-height: 20px;\n  min-width: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  position: relative;\n}\n\n.todo-checkbox:checked {\n  background-color: #3ba395;\n}\n\n.todo-checkbox:checked::before {\n  content: \"✔\";\n  font-size: 12px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.todo-title {\n  margin-right: 3rem;\n  font-size: 18px;\n  width: 42rem;\n  overflow-x: scroll;\n}\n\n.todo-details,\n.todo-date {\n  margin-right: 2rem;\n}\n\n.todo-date {\n  color: #793d05;\n  font-size: 14px;\n}\n\n.todo-details {\n  color: #3ba395;\n  border-color: #3ba395;\n  background-color: transparent;\n  border: solid 1px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  transition: 0.2s;\n  padding: 3px 15px;\n}\n\n.todo-details:hover {\n  color: white;\n  background-color: #3ba395;\n  border-color: #3ba395;\n}\n\n.todo-edit,\n.todo-delete {\n  border-width: 0;\n  color: #793d05;\n  transition: 0.1s;\n}\n\n.todo-edit:hover,\n.todo-delete:hover {\n  cursor: pointer;\n  color: #0f766e;\n}\n\n.add-task {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n  bottom: 100px;\n  right: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 0;\n  border-radius: 50%;\n  background-color: #0f766e;\n  font-size: 36px;\n  color: #f9fafb;\n}\n\n.form {\n  z-index: 1;\n  box-shadow: 0px 0px 15px -1px #000000;\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 65%;\n  min-width: 480px;\n}\n\n.form-header {\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  font-weight: bold;\n  background-color: #d49d6b;\n  height: 55px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.form-body {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 40px;\n}\n\n.form-title,\n.form-details {\n  resize: none;\n  outline: none;\n  border-width: 0;\n}\n\n.form-title {\n  font-size: 20px;\n  height: 40px;\n}\n\n.form-details {\n  height: 200px;\n  margin-top: -30px;\n  font-size: 16px;\n}\n\n.form-priority {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.add-button {\n  margin-left: auto;\n}\n\n.checked {\n  opacity: 0.3;\n}\n\n.checked.todo-title {\n  text-decoration: line-through;\n}\n\n.details-form {\n    background-color: rgba(128, 128, 128, 0.3);\n    color: #793d05;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 640px;\n    min-width: 500px;\n    position: relative;\n    border-radius: 3px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.details-close {\n    position: absolute;\n    right: 25px;\n    top: 10px;\n    font-size: 24px;\n    font-weight: bolder;\n}\n\n.details-close:hover {\n    color: goldenrod;\n    cursor: pointer;\n}\n\n.details-project {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-priority {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-date {\n    margin-right: 2rem;\n    font-weight: 700;\n}\n\n.details-description {\n    margin-right: 1.1rem;\n    font-weight: 700;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    mix-blend-mode: multiply;\n    background-repeat: repeat;\n    pointer-events: none;\n}\n\n.overlay.enabled{\n  min-width: calc(100vw + 17px);\n  backdrop-filter: blur(6px);\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  font-size: 20px;\n  color: #191919;\n  background-color: #f9fafb;\n}\n\n.fa-github {\n  color: #191919;\n  /* color: #f9fafb; */\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 100%;\n  margin: 0;\n  font-family: Raleway;\n  display: flex;\n  flex: 1 1 none;\n  min-width: calc(100vw + 17px);\n  overflow-x: scroll;\n  flex-direction: column;\n}\n\n\n\n.header {\n  height: 60px;\n  margin: 0;\n  background-color: #d49d6b;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\n.navbar-toggler {\n  margin-left: 15px;\n  border-width: 0;\n  border-radius: 7%;\n  --bs-navbar-toggler-border-radius: 0;\n  --bs-navbar-toggler-focus-width: 0;\n  transition: 0.25s;\n}\n\n.navbar-toggler:hover,\n.test:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.home-button {\n  font-size: 1.5em;\n  color: rgba(0, 0, 0, 0.55);\n  height: 38px;\n  width: 54px;\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 7%;\n  transition: 0.25s;\n}\n\n.home-button:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.content {\n  display: flex;\n  height: 100%;\n  padding-top: 60px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  background-color: #f9fafb;\n  overflow: hidden;\n  transition: 0.5s;\n  width: 200px;\n  min-width: 200px;\n}\n\n.sidebar > div {\n  margin: 0 30px;\n  min-width: 140px;\n  border-radius: 3px;\n  padding-left: 15px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  transition: 0.25s;\n}\n\n.sidebar > div:hover {\n  background-color: rgba(128, 128, 128, 0.1);\n  cursor: pointer;\n}\n\nhr {\n  border-top: 1px solid #191919;\n  width: 120px;\n  margin: -15px 30px;\n}\n\n.main-content,\n.sidebar {\n  padding-top: 30px;\n  color: #1f2937;\n}\n\n.main-content {\n  display: flex;\n  flex: 1 1 none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-width: 1070px;\n  margin-left: 30px;\n}\n\n.todo {\n  display: flex;\n  flex: 1 1 none;\n  align-items: center;\n  width: 1100px;\n  background-color: #eee;\n  margin-bottom: 20px;\n  transition: 0.2s;\n}\n\n.todo > *:not(.priority-strip) {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.todo:hover {\n    transform:scale(1.005);\n    -webkit-box-shadow: 7px 7px 10px -6px rgba(0,0,0,0.4);\n}\n\n.priority-strip {\n    min-width: 4px;\n    height: 100%;\n    margin-right: 0.75rem;\n}\n\n.priority-low {\n    background-color: green;\n}\n\n.priority-medium {\n    background-color: orange;\n}\n\n.priority-high {\n    background-color: red;\n}\n\n.todo-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin-right: 0.75rem;\n  background-color: transparent;\n  border: 2px solid #3ba395;\n  border-radius: 5px;\n  min-height: 20px;\n  min-width: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  position: relative;\n}\n\n.todo-checkbox:checked {\n  background-color: #3ba395;\n}\n\n.todo-checkbox:checked::before {\n  content: \"✔\";\n  font-size: 12px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.todo-title {\n  margin-right: 3rem;\n  font-size: 18px;\n  width: 42rem;\n  overflow-x: scroll;\n}\n\n.todo-details,\n.todo-date {\n  margin-right: 2rem;\n}\n\n.todo-date {\n  color: #793d05;\n  font-size: 14px;\n}\n\n.todo-details {\n  color: #3ba395;\n  border-color: #3ba395;\n  background-color: transparent;\n  border: solid 1px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  transition: 0.2s;\n  padding: 3px 15px;\n}\n\n.todo-details:hover {\n  color: white;\n  background-color: #3ba395;\n  border-color: #3ba395;\n}\n\n.todo-edit,\n.todo-delete {\n  border-width: 0;\n  color: #793d05;\n  transition: 0.1s;\n}\n\n.todo-edit:hover,\n.todo-delete:hover {\n  cursor: pointer;\n  color: #0f766e;\n}\n\n.add-task {\n  height: 60px;\n  width: 60px;\n  position: fixed;\n  bottom: 100px;\n  right: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 0;\n  border-radius: 50%;\n  background-color: #0f766e;\n  font-size: 36px;\n  color: #f9fafb;\n}\n\n.form {\n  z-index: 1;\n  box-shadow: 0px 0px 15px -1px #000000;\n  border-radius: 5px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 65%;\n  min-width: 480px;\n}\n\n.form-header {\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  font-weight: bold;\n  background-color: #d49d6b;\n  height: 55px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.form-body {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 40px;\n}\n\n.form-title,\n.form-details {\n  resize: none;\n  outline: none;\n  border-width: 0;\n}\n\n.form-title {\n  font-size: 20px;\n  height: 40px;\n}\n\n.form-details {\n  height: 200px;\n  margin-top: -30px;\n  font-size: 16px;\n}\n\n.form-priority {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.add-button {\n  margin-left: auto;\n}\n\n.checked {\n  opacity: 0.3;\n}\n\n.checked.todo-title {\n  text-decoration: line-through;\n}\n\n.details-form {\n    background-color: rgba(128, 128, 128, 0.3);\n    color: #793d05;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 640px;\n    min-width: 500px;\n    position: relative;\n    border-radius: 3px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.details-close {\n    position: absolute;\n    right: 25px;\n    top: 10px;\n    font-size: 24px;\n    font-weight: bolder;\n}\n\n.details-close:hover {\n    color: goldenrod;\n    cursor: pointer;\n}\n\n.details-project {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-priority {\n    margin-right: 3.1rem;\n    font-weight: 700;\n}\n\n.details-date {\n    margin-right: 2rem;\n    font-weight: 700;\n}\n\n.details-description {\n    margin-right: 1.1rem;\n    font-weight: 700;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    mix-blend-mode: multiply;\n    background-repeat: repeat;\n    pointer-events: none;\n}\n\n.overlay.enabled{\n  min-width: calc(100vw + 17px);\n  backdrop-filter: blur(6px);\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  font-size: 20px;\n  color: #191919;\n  background-color: #f9fafb;\n}\n\n.fa-github {\n  color: #191919;\n  /* color: #f9fafb; */\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n"],"sourceRoot":""}]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebarToggler)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const sidebar = document.querySelector(".sidebar");

function hideSidebar() {
  sidebar.style.minWidth = "0";
  sidebar.style.width = "0";
  sidebar.classList.add("hidden");
}

function showSidebar() {
  sidebar.style.minWidth = "200px";
  sidebar.style.width = "200px";
  sidebar.classList.remove("hidden");
}

//Determines whether to hide or show sidebar.
function sidebarToggler() {
  if (sidebar.classList.contains("hidden")) {
    showSidebar();
  } else {
    hideSidebar();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxX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akY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogUmFsZXdheTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgbm9uZTtcXG4gIG1pbi13aWR0aDogY2FsYygxMDB2dyArIDE3cHgpO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ5ZDZiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNyU7XFxuICAtLWJzLW5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6IDA7XFxuICAtLWJzLW5hdmJhci10b2dnbGVyLWZvY3VzLXdpZHRoOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5uYXZiYXItdG9nZ2xlcjpob3ZlcixcXG4udGVzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbn1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgd2lkdGg6IDU0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDclO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5ob21lLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNpZGViYXIgPiBkaXYge1xcbiAgbWFyZ2luOiAwIDMwcHg7XFxuICBtaW4td2lkdGg6IDE0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLnNpZGViYXIgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE5MTkxOTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIG1hcmdpbjogLTE1cHggMzBweDtcXG59XFxuXFxuLm1haW4tY29udGVudCxcXG4uc2lkZWJhciB7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGNvbG9yOiAjMWYyOTM3O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwNzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDExMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRvZG8gPiAqOm5vdCgucHJpb3JpdHktc3RyaXApIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wMDUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCA3cHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuLnByaW9yaXR5LXN0cmlwIHtcXG4gICAgbWluLXdpZHRoOiA0cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2JhMzk1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIG1pbi13aWR0aDogMjBweDtcXG4gIG1heC1oZWlnaHQ6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWNoZWNrYm94OmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJRcXFwiO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDQycmVtO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLFxcbi50b2RvLWRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gIGNvbG9yOiAjNzkzZDA1O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIGNvbG9yOiAjM2JhMzk1O1xcbiAgYm9yZGVyLWNvbG9yOiAjM2JhMzk1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYmEzOTU7XFxuICBib3JkZXItY29sb3I6ICMzYmEzOTU7XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGNvbG9yOiAjNzkzZDA1O1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuLnRvZG8tZWRpdDpob3ZlcixcXG4udG9kby1kZWxldGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMwZjc2NmU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTAwcHg7XFxuICByaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3NjZlO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgY29sb3I6ICNmOWZhZmI7XFxufVxcblxcbi5mb3JtIHtcXG4gIHotaW5kZXg6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTFweCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDY1JTtcXG4gIG1pbi13aWR0aDogNDgwcHg7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0OWQ2YjtcXG4gIGhlaWdodDogNTVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtLWJvZHkge1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmZvcm0tdGl0bGUsXFxuLmZvcm0tZGV0YWlscyB7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5mb3JtLWRldGFpbHMge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZm9ybS1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmNoZWNrZWQudG9kby10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRldGFpbHMtZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcXG4gICAgY29sb3I6ICM3OTNkMDU7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDY0MHB4O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmRldGFpbHMtY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmRldGFpbHMtY2xvc2U6aG92ZXIge1xcbiAgICBjb2xvcjogZ29sZGVucm9kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXRhaWxzLXByb2plY3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRldGFpbHMtcHJpb3JpdHkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRldGFpbHMtZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRldGFpbHMtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm92ZXJsYXkuZW5hYmxlZHtcXG4gIG1pbi13aWR0aDogY2FsYygxMDB2dyArIDE3cHgpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgY29sb3I6ICMxOTE5MTk7XFxuICAvKiBjb2xvcjogI2Y5ZmFmYjsgKi9cXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOzs7O0FBSUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07QUFDUjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VB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Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBub25lO1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3ICsgMTdweCk7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDlkNmI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ubmF2YmFyLXRvZ2dsZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItcmFkaXVzOiA3JTtcXG4gIC0tYnMtbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogMDtcXG4gIC0tYnMtbmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGg6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyOmhvdmVyLFxcbi50ZXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxufVxcblxcbi5ob21lLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICB3aWR0aDogNTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNyU7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmhvbWUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdiB7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIG1pbi13aWR0aDogMTQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uc2lkZWJhciA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTkxOTE5O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgbWFyZ2luOiAtMTVweCAzMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LFxcbi5zaWRlYmFyIHtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgY29sb3I6ICMxZjI5Mzc7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTA3MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udG9kbyA+ICo6bm90KC5wcmlvcml0eS1zdHJpcCkge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjAwNSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogN3B4IDdweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG4ucHJpb3JpdHktc3RyaXAge1xcbiAgICBtaW4td2lkdGg6IDRweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzYmEzOTU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgbWluLXdpZHRoOiAyMHB4O1xcbiAgbWF4LWhlaWdodDogMjBweDtcXG4gIG1heC13aWR0aDogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3g6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JhMzk1O1xcbn1cXG5cXG4udG9kby1jaGVja2JveDpjaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKclFxcXCI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogNDJyZW07XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi50b2RvLWRldGFpbHMsXFxuLnRvZG8tZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgY29sb3I6ICM3OTNkMDU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgY29sb3I6ICMzYmEzOTU7XFxuICBib3JkZXItY29sb3I6ICMzYmEzOTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgcGFkZGluZzogM3B4IDE1cHg7XFxufVxcblxcbi50b2RvLWRldGFpbHM6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiYTM5NTtcXG4gIGJvcmRlci1jb2xvcjogIzNiYTM5NTtcXG59XFxuXFxuLnRvZG8tZWRpdCxcXG4udG9kby1kZWxldGUge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgY29sb3I6ICM3OTNkMDU7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4udG9kby1lZGl0OmhvdmVyLFxcbi50b2RvLWRlbGV0ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzBmNzY2ZTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMDBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjc2NmU7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogI2Y5ZmFmYjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtMXB4ICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1heC13aWR0aDogNjUlO1xcbiAgbWluLXdpZHRoOiA0ODBweDtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ5ZDZiO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvcm0tYm9keSB7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uZm9ybS10aXRsZSxcXG4uZm9ybS1kZXRhaWxzIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmZvcm0tZGV0YWlscyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uY2hlY2tlZC50b2RvLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZGV0YWlscy1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xcbiAgICBjb2xvcjogIzc5M2QwNTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogNjQwcHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZGV0YWlscy1jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uZGV0YWlscy1jbG9zZTpob3ZlciB7XFxuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldGFpbHMtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMy4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1wcmlvcml0eSB7XFxuICAgIG1hcmdpbi1yaWdodDogMy4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheS5lbmFibGVke1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3ICsgMTdweCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjMTkxOTE5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBjb2xvcjogIzE5MTkxOTtcXG4gIC8qIGNvbG9yOiAjZjlmYWZiOyAqL1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuXG5mdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcbiAgc2lkZWJhci5zdHlsZS5taW5XaWR0aCA9IFwiMFwiO1xuICBzaWRlYmFyLnN0eWxlLndpZHRoID0gXCIwXCI7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NpZGViYXIoKSB7XG4gIHNpZGViYXIuc3R5bGUubWluV2lkdGggPSBcIjIwMHB4XCI7XG4gIHNpZGViYXIuc3R5bGUud2lkdGggPSBcIjIwMHB4XCI7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cblxuLy9EZXRlcm1pbmVzIHdoZXRoZXIgdG8gaGlkZSBvciBzaG93IHNpZGViYXIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyVG9nZ2xlcigpIHtcbiAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgc2hvd1NpZGViYXIoKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlU2lkZWJhcigpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=