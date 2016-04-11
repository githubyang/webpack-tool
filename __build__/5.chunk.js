webpackJsonp([5,15],{

/***/ 246:
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
	
	var Announcement = (function (_React$Component) {
	  _inherits(Announcement, _React$Component);
	
	  function Announcement() {
	    _classCallCheck(this, Announcement);
	
	    _get(Object.getPrototypeOf(Announcement.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Announcement, [{
	    key: 'render',
	    value: function render() {
	      var _props$params = this.props.params;
	      var courseId = _props$params.courseId;
	      var announcementId = _props$params.announcementId;
	      var _COURSES$courseId$announcements$announcementId = COURSES[courseId].announcements[announcementId];
	      var title = _COURSES$courseId$announcements$announcementId.title;
	      var body = _COURSES$courseId$announcements$announcementId.body;
	
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
	
	  return Announcement;
	})(_react2['default'].Component);
	
	module.exports = Announcement;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvQW5ub3VuY2VtZW50cy9yb3V0ZXMvQW5ub3VuY2VtZW50L2NvbXBvbmVudHMvQW5ub3VuY2VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDa0IsQ0FBTzs7OztLQUVuQixZQUFZO2FBQVosWUFBWTs7WUFBWixZQUFZOzJCQUFaLFlBQVk7O2dDQUFaLFlBQVk7OztnQkFBWixZQUFZOztZQUNWLGtCQUFHOzJCQUM0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07V0FBOUMsUUFBUSxpQkFBUixRQUFRO1dBQUUsY0FBYyxpQkFBZCxjQUFjOzREQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1dBQS9ELEtBQUssa0RBQUwsS0FBSztXQUFFLElBQUksa0RBQUosSUFBSTs7QUFFakIsY0FDRTs7O1NBQ0U7OztXQUFLLEtBQUs7VUFBTTtTQUNoQjs7O1dBQUksSUFBSTtVQUFLO1FBQ1QsQ0FDUDtNQUNGOzs7VUFYRyxZQUFZO0lBQVMsbUJBQU0sU0FBUzs7QUFjMUMsT0FBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLEMiLCJmaWxlIjoiNS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFscyBDT1VSU0VTOnRydWUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQW5ub3VuY2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNvdXJzZUlkLCBhbm5vdW5jZW1lbnRJZCB9ID0gdGhpcy5wcm9wcy5wYXJhbXNcbiAgICBsZXQgeyB0aXRsZSwgYm9keSB9ID0gQ09VUlNFU1tjb3Vyc2VJZF0uYW5ub3VuY2VtZW50c1thbm5vdW5jZW1lbnRJZF1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDxwPntib2R5fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFubm91bmNlbWVudFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvQW5ub3VuY2VtZW50cy9yb3V0ZXMvQW5ub3VuY2VtZW50L2NvbXBvbmVudHMvQW5ub3VuY2VtZW50LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==