webpackHotUpdate("main",{

/***/ "./src/Components/Post.js":
/*!********************************!*\
  !*** ./src/Components/Post.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users */ "./src/Components/users.json");
var _users__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./users */ "./src/Components/users.json", 1);





var _jsxFileName = "/Users/vipinjoshi/Documents/Sagar Mishra/React/social-review-assignment/src/Components/Post.js";



var Post =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Post, _React$Component);

  function Post(props) {
    var _this;

    Object(_Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Post);

    _this = Object(_Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Post).call(this, props));
    _this.state = {
      userID: _this.props.userID,
      authorID: _this.props.authorID,
      authorName: _users__WEBPACK_IMPORTED_MODULE_6__[_this.props.authorID].userName,
      comments: _this.props.comment,
      description: _this.props.description,
      likes: _this.props.likes,
      share: _this.props.share,
      uploadTime: _this.props.time
    };
    return _this;
  }

  Object(_Users_vipinjoshi_Documents_Sagar_Mishra_React_social_review_assignment_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Post, [{
    key: "calculateTime",
    value: function calculateTime(millis) {
      //will be implemented later.
      var date = new Date();
      console.log(date.getTime());
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.calculateTime(12312313));
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../assets/images/avatar-1.png */ "./src/assets/images/avatar-1.png"),
        className: "img-responsive",
        alt: "Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "".concat(this.state.authorName, " posted on your timeline")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "timestamp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "50 mintues ago")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-img-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../assets/images/post-1.jpg */ "./src/assets/images/post-1.jpg"),
        className: "img-responsive",
        alt: "post image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "".concat(this.state.authorName, " posted on your timeline")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.description)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "button",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-heart",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), "Like (", "".concat(this.state.likes), ")"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "button",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-comment-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), "Comment (", "".concat(this.state.comments), ")"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "button",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-share-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), "Share (", "".concat(this.state.share), ")")));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=main.271125b3ebd6cc7dd5ba.hot-update.js.map