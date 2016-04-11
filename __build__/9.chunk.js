webpackJsonp([9,15],{

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	/*globals COURSES:true */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(186);
	
	var Sidebar = (function (_React$Component) {
	  _inherits(Sidebar, _React$Component);
	
	  function Sidebar() {
	    _classCallCheck(this, Sidebar);
	
	    _get(Object.getPrototypeOf(Sidebar.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Sidebar, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var assignments = COURSES[this.props.params.courseId].assignments;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Sidebar Assignments'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          null,
	          assignments.map(function (assignment) {
	            return _react2['default'].createElement(
	              'li',
	              { key: assignment.id },
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/course/' + _this.props.params.courseId + '/assignments/' + assignment.id },
	                assignment.title
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Sidebar;
	})(_react2['default'].Component);
	
	module.exports = Sidebar;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Assignments = (function (_React$Component) {
	  _inherits(Assignments, _React$Component);
	
	  function Assignments() {
	    _classCallCheck(this, Assignments);
	
	    _get(Object.getPrototypeOf(Assignments.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Assignments, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Assignments'
	        ),
	        this.props.children || _react2['default'].createElement(
	          'p',
	          null,
	          'Choose an assignment from the sidebar.'
	        )
	      );
	    }
	  }]);
	
	  return Assignments;
	})(_react2['default'].Component);
	
	module.exports = Assignments;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvQXNzaWdubWVudHMvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMvQ291cnNlL3JvdXRlcy9Bc3NpZ25tZW50cy9jb21wb25lbnRzL0Fzc2lnbm1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDa0IsQ0FBTzs7Ozt3Q0FDSixHQUFjOztLQUU3QixPQUFPO2FBQVAsT0FBTzs7WUFBUCxPQUFPOzJCQUFQLE9BQU87O2dDQUFQLE9BQU87OztnQkFBUCxPQUFPOztZQUNMLGtCQUFHOzs7V0FDRCxXQUFXLEdBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFuRCxXQUFXOztBQUVqQixjQUNFOzs7U0FDRTs7OztVQUE0QjtTQUM1Qjs7O1dBQ0csV0FBVyxDQUFDLEdBQUcsQ0FBQyxvQkFBVTtvQkFDekI7O2lCQUFJLEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBRztlQUNyQjs7bUJBQU0sRUFBRSxlQUFhLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHFCQUFnQixVQUFVLENBQUMsRUFBSztpQkFDNUUsVUFBVSxDQUFDLEtBQUs7Z0JBQ1o7Y0FDSjtZQUNOLENBQUM7VUFDQztRQUNELENBQ1A7TUFDRjs7O1VBbEJHLE9BQU87SUFBUyxtQkFBTSxTQUFTOztBQXFCckMsT0FBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDekJOLENBQU87Ozs7S0FFbkIsV0FBVzthQUFYLFdBQVc7O1lBQVgsV0FBVzsyQkFBWCxXQUFXOztnQ0FBWCxXQUFXOzs7Z0JBQVgsV0FBVzs7WUFDVCxrQkFBRztBQUNQLGNBQ0U7OztTQUNFOzs7O1VBQW9CO1NBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJOzs7O1VBQTZDO1FBQ2pFLENBQ1A7TUFDRjs7O1VBUkcsV0FBVztJQUFTLG1CQUFNLFNBQVM7O0FBV3pDLE9BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDIiwiZmlsZSI6IjkuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbHMgQ09VUlNFUzp0cnVlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFzc2lnbm1lbnRzIH0gPSBDT1VSU0VTW3RoaXMucHJvcHMucGFyYW1zLmNvdXJzZUlkXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TaWRlYmFyIEFzc2lnbm1lbnRzPC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthc3NpZ25tZW50cy5tYXAoYXNzaWdubWVudCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXthc3NpZ25tZW50LmlkfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvY291cnNlLyR7dGhpcy5wcm9wcy5wYXJhbXMuY291cnNlSWR9L2Fzc2lnbm1lbnRzLyR7YXNzaWdubWVudC5pZH1gfT5cbiAgICAgICAgICAgICAgICB7YXNzaWdubWVudC50aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGViYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3JvdXRlcy9Db3Vyc2Uvcm91dGVzL0Fzc2lnbm1lbnRzL2NvbXBvbmVudHMvU2lkZWJhci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQXNzaWdubWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5Bc3NpZ25tZW50czwvaDM+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxwPkNob29zZSBhbiBhc3NpZ25tZW50IGZyb20gdGhlIHNpZGViYXIuPC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2lnbm1lbnRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9yb3V0ZXMvQ291cnNlL3JvdXRlcy9Bc3NpZ25tZW50cy9jb21wb25lbnRzL0Fzc2lnbm1lbnRzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==