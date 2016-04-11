webpackJsonp([10,15],{

/***/ 255:
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
	
	var Grades = (function (_React$Component) {
	  _inherits(Grades, _React$Component);
	
	  function Grades() {
	    _classCallCheck(this, Grades);
	
	    _get(Object.getPrototypeOf(Grades.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Grades, [{
	    key: 'render',
	    value: function render() {
	      var assignments = COURSES[this.props.params.courseId].assignments;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Grades'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          null,
	          assignments.map(function (assignment) {
	            return _react2['default'].createElement(
	              'li',
	              { key: assignment.id },
	              assignment.grade,
	              ' - ',
	              assignment.title
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Grades;
	})(_react2['default'].Component);
	
	module.exports = Grades;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvR3JhZGVzL2NvbXBvbmVudHMvR3JhZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDa0IsQ0FBTzs7OztLQUVuQixNQUFNO2FBQU4sTUFBTTs7WUFBTixNQUFNOzJCQUFOLE1BQU07O2dDQUFOLE1BQU07OztnQkFBTixNQUFNOztZQUNKLGtCQUFHO1dBQ0QsV0FBVyxHQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBbkQsV0FBVzs7QUFFakIsY0FDRTs7O1NBQ0U7Ozs7VUFBZTtTQUNmOzs7V0FDRyxXQUFXLENBQUMsR0FBRyxDQUFDLG9CQUFVO29CQUN6Qjs7aUJBQUksR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFHO2VBQUUsVUFBVSxDQUFDLEtBQUs7O2VBQUssVUFBVSxDQUFDLEtBQUs7Y0FBTTtZQUNyRSxDQUFDO1VBQ0M7UUFDRCxDQUNQO01BQ0Y7OztVQWRHLE1BQU07SUFBUyxtQkFBTSxTQUFTOztBQWlCcEMsT0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLEMiLCJmaWxlIjoiMTAuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbHMgQ09VUlNFUzp0cnVlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEdyYWRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBhc3NpZ25tZW50cyB9ID0gQ09VUlNFU1t0aGlzLnByb3BzLnBhcmFtcy5jb3Vyc2VJZF1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+R3JhZGVzPC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthc3NpZ25tZW50cy5tYXAoYXNzaWdubWVudCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXthc3NpZ25tZW50LmlkfT57YXNzaWdubWVudC5ncmFkZX0gLSB7YXNzaWdubWVudC50aXRsZX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhZGVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9yb3V0ZXMvQ291cnNlL3JvdXRlcy9HcmFkZXMvY29tcG9uZW50cy9HcmFkZXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9