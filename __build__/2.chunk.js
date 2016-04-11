webpackJsonp([2,15],{

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar() {
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Calendar, [{
	    key: 'render',
	    value: function render() {
	      var events = [{ id: 0, title: '标题' }];
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'Calendar'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          null,
	          events.map(function (event) {
	            return _react2['default'].createElement(
	              'li',
	              { key: event.id },
	              event.title
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Calendar;
	})(_react2['default'].Component);
	
	module.exports = Calendar;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NhbGVuZGFyL2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQWtCLENBQU87Ozs7S0FFbkIsUUFBUTthQUFSLFFBQVE7O1lBQVIsUUFBUTsyQkFBUixRQUFROztnQ0FBUixRQUFROzs7Z0JBQVIsUUFBUTs7WUFDTixrQkFBRztBQUNQLFdBQU0sTUFBTSxHQUFHLENBQ2IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FDdkI7O0FBRUQsY0FDRTs7O1NBQ0U7Ozs7VUFBaUI7U0FDakI7OztXQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBSztvQkFDZjs7aUJBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFHO2VBQUUsS0FBSyxDQUFDLEtBQUs7Y0FBTTtZQUN0QyxDQUFDO1VBQ0M7UUFDRCxDQUNQO01BQ0Y7OztVQWhCRyxRQUFRO0lBQVMsbUJBQU0sU0FBUzs7QUFtQnRDLE9BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDIiwiZmlsZSI6IjIuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IFtcbiAgICAgIHsgaWQ6IDAsIHRpdGxlOiAn5qCH6aKYJyB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5DYWxlbmRhcjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZXZlbnRzLm1hcChldmVudCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtldmVudC5pZH0+e2V2ZW50LnRpdGxlfTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYWxlbmRhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzL0NhbGVuZGFyL2NvbXBvbmVudHMvQ2FsZW5kYXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9