webpackJsonp([5,14],{

/***/ 220:
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
	
	var AnnouncementsSidebar = (function (_React$Component) {
	  _inherits(AnnouncementsSidebar, _React$Component);
	
	  function AnnouncementsSidebar() {
	    _classCallCheck(this, AnnouncementsSidebar);
	
	    _get(Object.getPrototypeOf(AnnouncementsSidebar.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(AnnouncementsSidebar, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var announcements = COURSES[this.props.params.courseId].announcements;
	
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
	          announcements.map(function (announcement) {
	            return _react2['default'].createElement(
	              'li',
	              { key: announcement.id },
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/course/' + _this.props.params.courseId + '/announcements/' + announcement.id },
	                announcement.title
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return AnnouncementsSidebar;
	})(_react2['default'].Component);
	
	module.exports = AnnouncementsSidebar;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Announcements = (function (_React$Component) {
	  _inherits(Announcements, _React$Component);
	
	  function Announcements() {
	    _classCallCheck(this, Announcements);
	
	    _get(Object.getPrototypeOf(Announcements.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Announcements, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Announcements'
	        ),
	        this.props.children || _react2['default'].createElement(
	          'p',
	          null,
	          'Choose an announcement from the sidebar.'
	        )
	      );
	    }
	  }]);
	
	  return Announcements;
	})(_react2['default'].Component);
	
	module.exports = Announcements;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvQW5ub3VuY2VtZW50cy9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy9Db3Vyc2Uvcm91dGVzL0Fubm91bmNlbWVudHMvY29tcG9uZW50cy9Bbm5vdW5jZW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDa0IsQ0FBTzs7Ozt3Q0FDSixHQUFjOztLQUU3QixvQkFBb0I7YUFBcEIsb0JBQW9COztZQUFwQixvQkFBb0I7MkJBQXBCLG9CQUFvQjs7Z0NBQXBCLG9CQUFvQjs7O2dCQUFwQixvQkFBb0I7O1lBQ2xCLGtCQUFHOzs7V0FDRCxhQUFhLEdBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFyRCxhQUFhOztBQUVuQixjQUNFOzs7U0FDRTs7OztVQUE0QjtTQUM1Qjs7O1dBQ0csYUFBYSxDQUFDLEdBQUcsQ0FBQyxzQkFBWTtvQkFDN0I7O2lCQUFJLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRztlQUN2Qjs7bUJBQU0sRUFBRSxlQUFhLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHVCQUFrQixZQUFZLENBQUMsRUFBSztpQkFDaEYsWUFBWSxDQUFDLEtBQUs7Z0JBQ2Q7Y0FDSjtZQUNOLENBQUM7VUFDQztRQUNELENBQ1A7TUFDRjs7O1VBbEJHLG9CQUFvQjtJQUFTLG1CQUFNLFNBQVM7O0FBcUJsRCxPQUFNLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3pCbkIsQ0FBTzs7OztLQUVuQixhQUFhO2FBQWIsYUFBYTs7WUFBYixhQUFhOzJCQUFiLGFBQWE7O2dDQUFiLGFBQWE7OztnQkFBYixhQUFhOztZQUNYLGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7VUFBc0I7U0FDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUk7Ozs7VUFBK0M7UUFDbkUsQ0FDUDtNQUNGOzs7VUFSRyxhQUFhO0lBQVMsbUJBQU0sU0FBUzs7QUFXM0MsT0FBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLEMiLCJmaWxlIjoiNS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFscyBDT1VSU0VTOnRydWUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIEFubm91bmNlbWVudHNTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFubm91bmNlbWVudHMgfSA9IENPVVJTRVNbdGhpcy5wcm9wcy5wYXJhbXMuY291cnNlSWRdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlNpZGViYXIgQXNzaWdubWVudHM8L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2Fubm91bmNlbWVudHMubWFwKGFubm91bmNlbWVudCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXthbm5vdW5jZW1lbnQuaWR9PlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9jb3Vyc2UvJHt0aGlzLnByb3BzLnBhcmFtcy5jb3Vyc2VJZH0vYW5ub3VuY2VtZW50cy8ke2Fubm91bmNlbWVudC5pZH1gfT5cbiAgICAgICAgICAgICAgICB7YW5ub3VuY2VtZW50LnRpdGxlfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQW5ub3VuY2VtZW50c1NpZGViYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3JvdXRlcy9Db3Vyc2Uvcm91dGVzL0Fubm91bmNlbWVudHMvY29tcG9uZW50cy9TaWRlYmFyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBBbm5vdW5jZW1lbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+QW5ub3VuY2VtZW50czwvaDM+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxwPkNob29zZSBhbiBhbm5vdW5jZW1lbnQgZnJvbSB0aGUgc2lkZWJhci48L3A+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQW5ub3VuY2VtZW50c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzL0NvdXJzZS9yb3V0ZXMvQW5ub3VuY2VtZW50cy9jb21wb25lbnRzL0Fubm91bmNlbWVudHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9