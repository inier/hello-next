"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _index = require("next\\dist\\lib\\router\\index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\workspace\\hello-next\\pages\\useRouter.js?entry";


var handler = function handler() {
  return _index2.default.push({
    pathname: "/about",
    query: { name: "Zeit" }
  });
};

exports.default = function () {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Use Router:"), _react2.default.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "With Link:"), "Click", " ", _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "about"), " ", "to read more.", _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "With URL object:"), "Click", " ", _react2.default.createElement(_link2.default, { href: { pathname: "/about", query: { name: "Zeit" } }, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "about"), " ", "to read more.", _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Replace instead of push url:"), "Click", " ", _react2.default.createElement(_link2.default, { href: "/about", replace: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "about"), " ", "to read more.", _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Using a component that support onClick:"), "Click ", _react2.default.createElement("span", { onClick: function onClick() {
      return _index2.default.push("/about");
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "about"), " to read more.", _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Imperatively:"), "Click ", _react2.default.createElement("span", { onClick: handler, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "about"), " to read more.", _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Router Events:"), _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "routeChangeStart(url) - Fires when a route starts to change"), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "routeChangeComplete(url) - Fires when a route changed completely"), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "routeChangeError(err, url) - Fires when there's an error when changing routes"), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "beforeHistoryChange(url) - Fires just before changing the browser's history"), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "appUpdated(nextRoute) - Fires when switching pages and there's a new version of the app")));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx1c2VSb3V0ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiUm91dGVyIiwiaGFuZGxlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFVBQVUsU0FBVixBQUFVLFVBQUE7eUJBQ2QsQUFBTztjQUFLLEFBQ0EsQUFDVjtXQUFPLEVBQUUsTUFIRyxBQUNkLEFBQVksQUFFSCxBQUFRO0FBRkwsQUFDVixHQURGO0FBREYsQUFNQTs7a0JBQWUsWUFBQTt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQTs7Z0JBQUE7a0JBRkYsQUFFRSxBQUVBO0FBRkE7QUFBQSxzQkFFQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FKRixBQUlFLGVBQ00sU0FMUixBQU1FLHFCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBO0FBQUE7S0FORixBQU1FLEFBRVEsVUFSVixLQVdFLGlDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVhGLEFBV0UscUJBQ00sU0FaUixBQWFFLHFCQUFBLEFBQUMsZ0NBQUssTUFBTSxFQUFFLFVBQUYsQUFBWSxVQUFVLE9BQU8sRUFBRSxNQUEzQyxBQUFZLEFBQTZCLEFBQVE7Z0JBQWpEO2tCQUFBO0FBQUE7S0FiRixBQWFFLEFBRVEsVUFmVixLQWtCRSxpQ0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FsQkYsQUFrQkUsaUNBQ00sU0FuQlIsQUFvQkUscUJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsVUFBUyxTQUFwQjtnQkFBQTtrQkFBQTtBQUFBO0tBcEJGLEFBb0JFLEFBRVEsVUF0QlYsS0F5QkUsaUNBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBekJGLEFBeUJFLDRDQUNNLDBCQUFBLGNBQUEsVUFBTSxTQUFTLG1CQUFBO2FBQU0sZ0JBQUEsQUFBTyxLQUFiLEFBQU0sQUFBWTtBQUFqQztnQkFBQTtrQkFBQTtBQUFBO0tBMUJSLEFBMEJRLFVBRU4sa0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBNUJGLEFBNEJFLGtCQUNNLDBCQUFBLGNBQUEsVUFBTSxTQUFOLEFBQWU7Z0JBQWY7a0JBQUE7QUFBQTtLQTdCUixBQTZCUSxVQUVOLGtDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQS9CRixBQStCRSxBQUNBLG1DQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxnRkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EscUZBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSEYsQUFHRSxBQUdBLGtHQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQU5GLEFBTUUsQUFHQSxnR0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0ExQ1MsQUFDYixBQWdDRSxBQVNFO0FBMUNOIiwiZmlsZSI6InVzZVJvdXRlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJGOi93b3Jrc3BhY2UvaGVsbG8tbmV4dCJ9