webpackJsonp([10,14],{

/***/ 229:
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
	
	var _Dashboard = __webpack_require__(230);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _Nav = __webpack_require__(231);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var styles = {};
	
	styles.sidebar = {
	  float: 'left',
	  width: 200,
	  padding: 20,
	  borderRight: '1px solid #aaa',
	  marginRight: 20
	};
	
	var Course = (function (_React$Component) {
	  _inherits(Course, _React$Component);
	
	  function Course() {
	    _classCallCheck(this, Course);
	
	    _get(Object.getPrototypeOf(Course.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Course, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var sidebar = _props.sidebar;
	      var main = _props.main;
	      var children = _props.children;
	      var params = _props.params;
	
	      var course = COURSES[params.courseId];
	
	      var content = undefined;
	      if (sidebar && main) {
	        content = _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'Sidebar', style: styles.sidebar },
	            sidebar
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'Main', style: { padding: 20 } },
	            main
	          )
	        );
	      } else if (children) {
	        content = children;
	      } else {
	        content = _react2['default'].createElement(_Dashboard2['default'], null);
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h2',
	          null,
	          course.name
	        ),
	        _react2['default'].createElement(_Nav2['default'], { course: course }),
	        content
	      );
	    }
	  }]);
	
	  return Course;
	})(_react2['default'].Component);
	
	module.exports = Course;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Dashboard = (function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard() {
	    _classCallCheck(this, Dashboard);
	
	    _get(Object.getPrototypeOf(Dashboard.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Dashboard, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h3',
	          null,
	          'Course Dashboard'
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	})(_react2['default'].Component);
	
	exports['default'] = Dashboard;
	module.exports = exports['default'];

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(186);
	
	var styles = {};
	
	styles.nav = {
	  borderBottom: '1px solid #aaa'
	};
	
	styles.link = {
	  display: 'inline-block',
	  padding: 10,
	  textDecoration: 'none'
	};
	
	styles.activeLink = _extends({}, styles.link, {
	  color: 'red'
	});
	
	var Nav = (function (_React$Component) {
	  _inherits(Nav, _React$Component);
	
	  function Nav() {
	    _classCallCheck(this, Nav);
	
	    _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Nav, [{
	    key: 'render',
	    value: function render() {
	      var course = this.props.course;
	
	      var pages = [['announcements', 'Announcements'], ['assignments', 'Assignments'], ['grades', 'Grades']];
	
	      return _react2['default'].createElement(
	        'nav',
	        { style: styles.nav },
	        pages.map(function (page, index) {
	          return _react2['default'].createElement(
	            _reactRouter.Link,
	            {
	              key: page[0],
	              activeStyle: index === 0 ? _extends({}, styles.activeLink, { paddingLeft: 0 }) : styles.activeLink,
	              style: index === 0 ? _extends({}, styles.link, { paddingLeft: 0 }) : styles.link,
	              to: '/course/' + course.id + '/' + page[0]
	            },
	            page[1]
	          );
	        })
	      );
	    }
	  }]);
	
	  return Nav;
	})(_react2['default'].Component);
	
	exports['default'] = Nav;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9jb21wb25lbnRzL0NvdXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9jb21wb25lbnRzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0NvdXJzZS9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQ2tCLENBQU87Ozs7c0NBQ0gsR0FBYTs7OztnQ0FDbkIsR0FBTzs7OztBQUV2QixLQUFNLE1BQU0sR0FBRyxFQUFFOztBQUVqQixPQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsUUFBSyxFQUFFLE1BQU07QUFDYixRQUFLLEVBQUUsR0FBRztBQUNWLFVBQU8sRUFBRSxFQUFFO0FBQ1gsY0FBVyxFQUFFLGdCQUFnQjtBQUM3QixjQUFXLEVBQUUsRUFBRTtFQUNoQjs7S0FFSyxNQUFNO2FBQU4sTUFBTTs7WUFBTixNQUFNOzJCQUFOLE1BQU07O2dDQUFOLE1BQU07OztnQkFBTixNQUFNOztZQUNKLGtCQUFHO29CQUNtQyxJQUFJLENBQUMsS0FBSztXQUE5QyxPQUFPLFVBQVAsT0FBTztXQUFFLElBQUksVUFBSixJQUFJO1dBQUUsUUFBUSxVQUFSLFFBQVE7V0FBRSxNQUFNLFVBQU4sTUFBTTs7QUFDckMsV0FBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0FBRXJDLFdBQUksT0FBTztBQUNYLFdBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUNuQixnQkFBTyxHQUNMOzs7V0FDRTs7ZUFBSyxTQUFTLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBUTthQUM1QyxPQUFPO1lBQ0o7V0FDTjs7ZUFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUc7YUFDMUMsSUFBSTtZQUNEO1VBRVQ7UUFDRixNQUFNLElBQUksUUFBUSxFQUFFO0FBQ25CLGdCQUFPLEdBQUcsUUFBUTtRQUNuQixNQUFNO0FBQ0wsZ0JBQU8sR0FBRyw4REFBYTtRQUN4Qjs7QUFFRCxjQUNFOzs7U0FDRTs7O1dBQUssTUFBTSxDQUFDLElBQUk7VUFBTTtTQUN0QixxREFBSyxNQUFNLEVBQUUsTUFBTyxHQUFHO1NBQ3RCLE9BQU87UUFDSixDQUNQO01BQ0Y7OztVQTlCRyxNQUFNO0lBQVMsbUJBQU0sU0FBUzs7QUFpQ3BDLE9BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NoREwsQ0FBTzs7OztLQUVuQixTQUFTO2FBQVQsU0FBUzs7WUFBVCxTQUFTOzJCQUFULFNBQVM7O2dDQUFULFNBQVM7OztnQkFBVCxTQUFTOztZQUNQLGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7VUFBeUI7UUFDckIsQ0FDUDtNQUNGOzs7VUFQRyxTQUFTO0lBQVMsbUJBQU0sU0FBUzs7c0JBVXhCLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ1pOLENBQU87Ozs7d0NBQ0osR0FBYzs7QUFFbkMsS0FBTSxNQUFNLEdBQUcsRUFBRTs7QUFFakIsT0FBTSxDQUFDLEdBQUcsR0FBRztBQUNYLGVBQVksRUFBRSxnQkFBZ0I7RUFDL0I7O0FBRUQsT0FBTSxDQUFDLElBQUksR0FBRztBQUNaLFVBQU8sRUFBRSxjQUFjO0FBQ3ZCLFVBQU8sRUFBRSxFQUFFO0FBQ1gsaUJBQWMsRUFBRSxNQUFNO0VBQ3ZCOztBQUVELE9BQU0sQ0FBQyxVQUFVLGdCQUNaLE1BQU0sQ0FBQyxJQUFJO0FBQ2QsUUFBSyxFQUFFLEtBQUs7R0FDYjs7S0FFSyxHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OztnQkFBSCxHQUFHOztZQUNELGtCQUFHO1dBQ0MsTUFBTSxHQUFLLElBQUksQ0FBQyxLQUFLLENBQXJCLE1BQU07O0FBQ2QsV0FBTSxLQUFLLEdBQUcsQ0FDWixDQUFFLGVBQWUsRUFBRSxlQUFlLENBQUUsRUFDcEMsQ0FBRSxhQUFhLEVBQUUsYUFBYSxDQUFFLEVBQ2hDLENBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBRSxDQUN2Qjs7QUFFRCxjQUNFOztXQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBSTtTQUNwQixLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7a0JBQ3JCOzs7QUFDRSxrQkFBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUU7QUFDYiwwQkFBVyxFQUFFLEtBQUssS0FBSyxDQUFDLGdCQUFRLE1BQU0sQ0FBQyxVQUFVLElBQUUsV0FBVyxFQUFFLENBQUMsTUFBSyxNQUFNLENBQUMsVUFBVztBQUN4RixvQkFBSyxFQUFFLEtBQUssS0FBSyxDQUFDLGdCQUFRLE1BQU0sQ0FBQyxJQUFJLElBQUUsV0FBVyxFQUFFLENBQUMsTUFBSyxNQUFNLENBQUMsSUFBSztBQUN0RSxpQkFBRSxlQUFhLE1BQU0sQ0FBQyxFQUFFLFNBQUksSUFBSSxDQUFDLENBQUMsQ0FBSTs7YUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUFRO1VBQ2xCLENBQUM7UUFDRSxDQUNQO01BQ0Y7OztVQXJCRyxHQUFHO0lBQVMsbUJBQU0sU0FBUzs7c0JBd0JsQixHQUFHIiwiZmlsZSI6IjEwLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWxzIENPVVJTRVM6dHJ1ZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL0Rhc2hib2FyZCdcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXG5cbmNvbnN0IHN0eWxlcyA9IHt9XG5cbnN0eWxlcy5zaWRlYmFyID0ge1xuICBmbG9hdDogJ2xlZnQnLFxuICB3aWR0aDogMjAwLFxuICBwYWRkaW5nOiAyMCxcbiAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgI2FhYScsXG4gIG1hcmdpblJpZ2h0OiAyMFxufVxuXG5jbGFzcyBDb3Vyc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgc2lkZWJhciwgbWFpbiwgY2hpbGRyZW4sIHBhcmFtcyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBjb3Vyc2UgPSBDT1VSU0VTW3BhcmFtcy5jb3Vyc2VJZF1cblxuICAgIGxldCBjb250ZW50XG4gICAgaWYgKHNpZGViYXIgJiYgbWFpbikge1xuICAgICAgY29udGVudCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZGViYXJcIiBzdHlsZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgICAgICAge3NpZGViYXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYWluXCIgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XG4gICAgICAgICAgICB7bWFpbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgY29udGVudCA9IGNoaWxkcmVuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSA8RGFzaGJvYXJkIC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57Y291cnNlLm5hbWV9PC9oMj5cbiAgICAgICAgPE5hdiBjb3Vyc2U9e2NvdXJzZX0gLz5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb3Vyc2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3JvdXRlcy9Db3Vyc2UvY29tcG9uZW50cy9Db3Vyc2UuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkNvdXJzZSBEYXNoYm9hcmQ8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzL0NvdXJzZS9jb21wb25lbnRzL0Rhc2hib2FyZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNvbnN0IHN0eWxlcyA9IHt9XG5cbnN0eWxlcy5uYXYgPSB7XG4gIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjYWFhJ1xufVxuXG5zdHlsZXMubGluayA9IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHBhZGRpbmc6IDEwLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59XG5cbnN0eWxlcy5hY3RpdmVMaW5rID0ge1xuICAuLi5zdHlsZXMubGluayxcbiAgY29sb3I6ICdyZWQnXG59XG5cbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvdXJzZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBhZ2VzID0gW1xuICAgICAgWyAnYW5ub3VuY2VtZW50cycsICdBbm5vdW5jZW1lbnRzJyBdLFxuICAgICAgWyAnYXNzaWdubWVudHMnLCAnQXNzaWdubWVudHMnIF0sXG4gICAgICBbICdncmFkZXMnLCAnR3JhZGVzJyBdXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgc3R5bGU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICB7cGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e3BhZ2VbMF19XG4gICAgICAgICAgICBhY3RpdmVTdHlsZT17aW5kZXggPT09IDAgPyB7IC4uLnN0eWxlcy5hY3RpdmVMaW5rLCBwYWRkaW5nTGVmdDogMCB9IDogc3R5bGVzLmFjdGl2ZUxpbmt9XG4gICAgICAgICAgICBzdHlsZT17aW5kZXggPT09IDAgPyB7IC4uLnN0eWxlcy5saW5rLCBwYWRkaW5nTGVmdDogMCB9IDogc3R5bGVzLmxpbmt9XG4gICAgICAgICAgICB0bz17YC9jb3Vyc2UvJHtjb3Vyc2UuaWR9LyR7cGFnZVswXX1gfVxuICAgICAgICAgID57cGFnZVsxXX08L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzL0NvdXJzZS9jb21wb25lbnRzL05hdi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=