webpackJsonp([7,14],{

/***/ 224:
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
	
	var Assignment = (function (_React$Component) {
	  _inherits(Assignment, _React$Component);
	
	  function Assignment() {
	    _classCallCheck(this, Assignment);
	
	    _get(Object.getPrototypeOf(Assignment.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Assignment, [{
	    key: 'render',
	    value: function render() {
	      var _props$params = this.props.params;
	      var courseId = _props$params.courseId;
	      var assignmentId = _props$params.assignmentId;
	      var _COURSES$courseId$assignments$assignmentId = COURSES[courseId].assignments[assignmentId];
	      var title = _COURSES$courseId$assignments$assignmentId.title;
	      var body = _COURSES$courseId$assignments$assignmentId.body;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h4',
	          null,
	          title
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          body
	        )
	      );
	    }
	  }]);
	
	  return Assignment;
	})(_react2['default'].Component);
	
	module.exports = Assignment;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvQXNzaWdubWVudHMvcm91dGVzL0Fzc2lnbm1lbnQvY29tcG9uZW50cy9Bc3NpZ25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDa0IsQ0FBTzs7OztLQUVuQixVQUFVO2FBQVYsVUFBVTs7WUFBVixVQUFVOzJCQUFWLFVBQVU7O2dDQUFWLFVBQVU7OztnQkFBVixVQUFVOztZQUNSLGtCQUFHOzJCQUMwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07V0FBNUMsUUFBUSxpQkFBUixRQUFRO1dBQUUsWUFBWSxpQkFBWixZQUFZO3dEQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1dBQTNELEtBQUssOENBQUwsS0FBSztXQUFFLElBQUksOENBQUosSUFBSTs7QUFFakIsY0FDRTs7O1NBQ0U7OztXQUFLLEtBQUs7VUFBTTtTQUNoQjs7O1dBQUksSUFBSTtVQUFLO1FBQ1QsQ0FDUDtNQUNGOzs7VUFYRyxVQUFVO0lBQVMsbUJBQU0sU0FBUzs7QUFjeEMsT0FBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEMiLCJmaWxlIjoiNy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFscyBDT1VSU0VTOnRydWUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQXNzaWdubWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjb3Vyc2VJZCwgYXNzaWdubWVudElkIH0gPSB0aGlzLnByb3BzLnBhcmFtc1xuICAgIGxldCB7IHRpdGxlLCBib2R5IH0gPSBDT1VSU0VTW2NvdXJzZUlkXS5hc3NpZ25tZW50c1thc3NpZ25tZW50SWRdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICA8cD57Ym9keX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBc3NpZ25tZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9yb3V0ZXMvQ291cnNlL3JvdXRlcy9Bc3NpZ25tZW50cy9yb3V0ZXMvQXNzaWdubWVudC9jb21wb25lbnRzL0Fzc2lnbm1lbnQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9