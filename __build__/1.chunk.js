webpackJsonp([1,15],{

/***/ 235:
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
	
	var _reactRedux = __webpack_require__(220);
	
	var _actions = __webpack_require__(236);
	
	var _componentsAddTodo = __webpack_require__(237);
	
	var _componentsAddTodo2 = _interopRequireDefault(_componentsAddTodo);
	
	var _componentsTodoList = __webpack_require__(238);
	
	var _componentsTodoList2 = _interopRequireDefault(_componentsTodoList);
	
	var _componentsFooter = __webpack_require__(240);
	
	var _componentsFooter2 = _interopRequireDefault(_componentsFooter);
	
	var App = (function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      // Injected by connect() call:
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var visibleTodos = _props.visibleTodos;
	      var visibilityFilter = _props.visibilityFilter;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_componentsAddTodo2['default'], {
	          onAddClick: function (text) {
	            return dispatch((0, _actions.addTodo)(text));
	          } }),
	        _react2['default'].createElement(_componentsTodoList2['default'], {
	          todos: visibleTodos,
	          onTodoClick: function (index) {
	            return dispatch((0, _actions.completeTodo)(index));
	          } }),
	        _react2['default'].createElement(_componentsFooter2['default'], {
	          filter: visibilityFilter,
	          onFilterChange: function (nextFilter) {
	            return dispatch((0, _actions.setVisibilityFilter)(nextFilter));
	          } })
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	App.propTypes = {
	  visibleTodos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    text: _react.PropTypes.string.isRequired,
	    completed: _react.PropTypes.bool.isRequired
	  }).isRequired).isRequired,
	  visibilityFilter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
	};
	
	function selectTodos(todos, filter) {
	  switch (filter) {
	    case _actions.VisibilityFilters.SHOW_ALL:
	      return todos;
	    case _actions.VisibilityFilters.SHOW_COMPLETED:
	      return todos.filter(function (todo) {
	        return todo.completed;
	      });
	    case _actions.VisibilityFilters.SHOW_ACTIVE:
	      return todos.filter(function (todo) {
	        return !todo.completed;
	      });
	  }
	}
	
	// Which props do we want to inject, given the global state?
	// Note: use https://github.com/faassen/reselect for better performance.
	function select(state) {
	  return {
	    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
	    visibilityFilter: state.visibilityFilter
	  };
	}
	
	// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
	exports['default'] = (0, _reactRedux.connect)(select)(App);
	module.exports = exports['default'];

/***/ },

/***/ 236:
/***/ function(module, exports) {

	/*
	 * action 类型
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.addTodo = addTodo;
	exports.completeTodo = completeTodo;
	exports.setVisibilityFilter = setVisibilityFilter;
	var ADD_TODO = 'ADD_TODO';
	exports.ADD_TODO = ADD_TODO;
	var COMPLETE_TODO = 'COMPLETE_TODO';
	exports.COMPLETE_TODO = COMPLETE_TODO;
	var SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
	
	exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
	/*
	 * 其它的常量
	 */
	
	var VisibilityFilters = {
	  SHOW_ALL: 'SHOW_ALL',
	  SHOW_COMPLETED: 'SHOW_COMPLETED',
	  SHOW_ACTIVE: 'SHOW_ACTIVE'
	};
	
	exports.VisibilityFilters = VisibilityFilters;
	/*
	 * action 创建函数
	 */
	
	function addTodo(text) {
	  return { type: ADD_TODO, text: text };
	}
	
	function completeTodo(index) {
	  return { type: COMPLETE_TODO, index: index };
	}
	
	function setVisibilityFilter(filter) {
	  return { type: SET_VISIBILITY_FILTER, filter: filter };
	}

/***/ },

/***/ 237:
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
	
	var AddTodo = (function (_Component) {
	  _inherits(AddTodo, _Component);
	
	  function AddTodo() {
	    _classCallCheck(this, AddTodo);
	
	    _get(Object.getPrototypeOf(AddTodo.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(AddTodo, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement('input', { type: 'text', ref: 'input' }),
	        _react2['default'].createElement(
	          'button',
	          { onClick: function (e) {
	              return _this.handleClick(e);
	            } },
	          'Add'
	        )
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var node = this.refs.input;
	      var text = node.value.trim();
	      this.props.onAddClick(text);
	      node.value = '';
	    }
	  }]);
	
	  return AddTodo;
	})(_react.Component);
	
	exports['default'] = AddTodo;
	
	AddTodo.propTypes = {
	  onAddClick: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Todo = __webpack_require__(239);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var TodoList = (function (_Component) {
	  _inherits(TodoList, _Component);
	
	  function TodoList() {
	    _classCallCheck(this, TodoList);
	
	    _get(Object.getPrototypeOf(TodoList.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(TodoList, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'ul',
	        null,
	        this.props.todos.map(function (todo, index) {
	          return _react2['default'].createElement(_Todo2['default'], _extends({}, todo, {
	            key: index,
	            onClick: function () {
	              return _this.props.onTodoClick(index);
	            } }));
	        })
	      );
	    }
	  }]);
	
	  return TodoList;
	})(_react.Component);
	
	exports['default'] = TodoList;
	
	TodoList.propTypes = {
	  onTodoClick: _react.PropTypes.func.isRequired,
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    text: _react.PropTypes.string.isRequired,
	    completed: _react.PropTypes.bool.isRequired
	  }).isRequired).isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 239:
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
	
	var Todo = (function (_Component) {
	  _inherits(Todo, _Component);
	
	  function Todo() {
	    _classCallCheck(this, Todo);
	
	    _get(Object.getPrototypeOf(Todo.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Todo, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'li',
	        {
	          onClick: this.props.onClick,
	          style: {
	            textDecoration: this.props.completed ? 'line-through' : 'none',
	            cursor: this.props.completed ? 'default' : 'pointer'
	          } },
	        this.props.text
	      );
	    }
	  }]);
	
	  return Todo;
	})(_react.Component);
	
	exports['default'] = Todo;
	
	Todo.propTypes = {
	  onClick: _react.PropTypes.func.isRequired,
	  text: _react.PropTypes.string.isRequired,
	  completed: _react.PropTypes.bool.isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 240:
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
	
	var Footer = (function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Footer, [{
	    key: 'renderFilter',
	    value: function renderFilter(filter, name) {
	      var _this = this;
	
	      if (filter === this.props.filter) {
	        return name;
	      }
	
	      return _react2['default'].createElement(
	        'a',
	        { href: '#', onClick: function (e) {
	            e.preventDefault();
	            _this.props.onFilterChange(filter);
	          } },
	        name
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'p',
	        null,
	        'Show:',
	        ' ',
	        this.renderFilter('SHOW_ALL', 'All'),
	        ', ',
	        this.renderFilter('SHOW_COMPLETED', 'Completed'),
	        ', ',
	        this.renderFilter('SHOW_ACTIVE', 'Active'),
	        '.'
	      );
	    }
	  }]);
	
	  return Footer;
	})(_react.Component);
	
	exports['default'] = Footer;
	
	Footer.propTypes = {
	  onFilterChange: _react.PropTypes.func.isRequired,
	  filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
	};
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL1Rlc3QvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy9UZXN0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQWRkVG9kby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQTRDLENBQU87Ozs7dUNBQzNCLEdBQWE7O29DQUN5QyxHQUFZOzs4Q0FDdEUsR0FBNkI7Ozs7K0NBQzVCLEdBQThCOzs7OzZDQUNoQyxHQUE0Qjs7OztLQUV6QyxHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OztnQkFBSCxHQUFHOztZQUNELGtCQUFHOztvQkFFOEMsSUFBSSxDQUFDLEtBQUs7V0FBdkQsUUFBUSxVQUFSLFFBQVE7V0FBRSxZQUFZLFVBQVosWUFBWTtXQUFFLGdCQUFnQixVQUFoQixnQkFBZ0I7O0FBQ2hELGNBQ0U7OztTQUNFO0FBQ0UscUJBQVUsRUFBRSxjQUFJO29CQUNkLFFBQVEsQ0FBQyxzQkFBUSxJQUFJLENBQUMsQ0FBQztZQUN4QixHQUFHO1NBQ047QUFDRSxnQkFBSyxFQUFFLFlBQWE7QUFDcEIsc0JBQVcsRUFBRSxlQUFLO29CQUNoQixRQUFRLENBQUMsMkJBQWEsS0FBSyxDQUFDLENBQUM7WUFDOUIsR0FBRztTQUNOO0FBQ0UsaUJBQU0sRUFBRSxnQkFBaUI7QUFDekIseUJBQWMsRUFBRSxvQkFBVTtvQkFDeEIsUUFBUSxDQUFDLGtDQUFvQixVQUFVLENBQUMsQ0FBQztZQUMxQyxHQUFHO1FBQ0YsQ0FDUDtNQUNGOzs7VUF0QkcsR0FBRzs7O0FBeUJU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U0FBUyxHQUFHO0FBQ2pCLGlCQUFjLEVBQUUsaUJBQVUsSUFBSSxDQUFDLFVBQVU7QUFDekMsU0FBTSxFQUFFLGlCQUFVLEtBQUssQ0FBQyxDQUN0QixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLGFBQWEsQ0FDZCxDQUFDLENBQUMsVUFBVTtFQUNkIiwiZmlsZSI6IjEuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFRvZG8sIGNvbXBsZXRlVG9kbywgc2V0VmlzaWJpbGl0eUZpbHRlciwgVmlzaWJpbGl0eUZpbHRlcnMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IEFkZFRvZG8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BZGRUb2RvJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgLy8gSW5qZWN0ZWQgYnkgY29ubmVjdCgpIGNhbGw6XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgdmlzaWJsZVRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvXG4gICAgICAgICAgb25BZGRDbGljaz17dGV4dCA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkVG9kbyh0ZXh0KSlcbiAgICAgICAgICB9IC8+XG4gICAgICAgIDxUb2RvTGlzdFxuICAgICAgICAgIHRvZG9zPXt2aXNpYmxlVG9kb3N9XG4gICAgICAgICAgb25Ub2RvQ2xpY2s9e2luZGV4ID0+XG4gICAgICAgICAgICBkaXNwYXRjaChjb21wbGV0ZVRvZG8oaW5kZXgpKVxuICAgICAgICAgIH0gLz5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIGZpbHRlcj17dmlzaWJpbGl0eUZpbHRlcn1cbiAgICAgICAgICBvbkZpbHRlckNoYW5nZT17bmV4dEZpbHRlciA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VmlzaWJpbGl0eUZpbHRlcihuZXh0RmlsdGVyKSlcbiAgICAgICAgICB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgdmlzaWJsZVRvZG9zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcbiAgdmlzaWJpbGl0eUZpbHRlcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnU0hPV19BTEwnLFxuICAgICdTSE9XX0NPTVBMRVRFRCcsXG4gICAgJ1NIT1dfQUNUSVZFJ1xuICBdKS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIHNlbGVjdFRvZG9zKHRvZG9zLCBmaWx0ZXIpIHtcbiAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICBjYXNlIFZpc2liaWxpdHlGaWx0ZXJzLlNIT1dfQUxMOlxuICAgICAgcmV0dXJuIHRvZG9zXG4gICAgY2FzZSBWaXNpYmlsaXR5RmlsdGVycy5TSE9XX0NPTVBMRVRFRDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZClcbiAgICBjYXNlIFZpc2liaWxpdHlGaWx0ZXJzLlNIT1dfQUNUSVZFOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZClcbiAgfVxufVxuXG4vLyBXaGljaCBwcm9wcyBkbyB3ZSB3YW50IHRvIGluamVjdCwgZ2l2ZW4gdGhlIGdsb2JhbCBzdGF0ZT9cbi8vIE5vdGU6IHVzZSBodHRwczovL2dpdGh1Yi5jb20vZmFhc3Nlbi9yZXNlbGVjdCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuZnVuY3Rpb24gc2VsZWN0KHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdmlzaWJsZVRvZG9zOiBzZWxlY3RUb2RvcyhzdGF0ZS50b2Rvcywgc3RhdGUudmlzaWJpbGl0eUZpbHRlciksXG4gICAgdmlzaWJpbGl0eUZpbHRlcjogc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICB9XG59XG5cbi8vIOWMheijhSBjb21wb25lbnQg77yM5rOo5YWlIGRpc3BhdGNoIOWSjCBzdGF0ZSDliLDlhbbpu5jorqTnmoQgY29ubmVjdChzZWxlY3QpKEFwcCkg5Lit77ybXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoQXBwKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzL1Rlc3QvY29tcG9uZW50cy9BcHAuanNcbiAqKi8iLCIvKlxuICogYWN0aW9uIOexu+Wei1xuICovXG5cbmV4cG9ydCBjb25zdCBBRERfVE9ETyA9ICdBRERfVE9ETyc7XG5leHBvcnQgY29uc3QgQ09NUExFVEVfVE9ETyA9ICdDT01QTEVURV9UT0RPJztcbmV4cG9ydCBjb25zdCBTRVRfVklTSUJJTElUWV9GSUxURVIgPSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJ1xuXG4vKlxuICog5YW25a6D55qE5bi46YePXG4gKi9cblxuZXhwb3J0IGNvbnN0IFZpc2liaWxpdHlGaWx0ZXJzID0ge1xuICBTSE9XX0FMTDogJ1NIT1dfQUxMJyxcbiAgU0hPV19DT01QTEVURUQ6ICdTSE9XX0NPTVBMRVRFRCcsXG4gIFNIT1dfQUNUSVZFOiAnU0hPV19BQ1RJVkUnXG59O1xuXG4vKlxuICogYWN0aW9uIOWIm+W7uuWHveaVsFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRleHQpIHtcbiAgcmV0dXJuIHsgdHlwZTogQUREX1RPRE8sIHRleHQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVUb2RvKGluZGV4KSB7XG4gIHJldHVybiB7IHR5cGU6IENPTVBMRVRFX1RPRE8sIGluZGV4IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpc2liaWxpdHlGaWx0ZXIoZmlsdGVyKSB7XG4gIHJldHVybiB7IHR5cGU6IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiwgZmlsdGVyIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9yb3V0ZXMvVGVzdC9hY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9J2lucHV0JyAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfT5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucmVmcy5pbnB1dFxuICAgIGNvbnN0IHRleHQgPSBub2RlLnZhbHVlLnRyaW0oKVxuICAgIHRoaXMucHJvcHMub25BZGRDbGljayh0ZXh0KVxuICAgIG5vZGUudmFsdWUgPSAnJ1xuICB9XG59XG5cbkFkZFRvZG8ucHJvcFR5cGVzID0ge1xuICBvbkFkZENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FkZFRvZG8uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge3RoaXMucHJvcHMudG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT5cbiAgICAgICAgICA8VG9kbyB7Li4udG9kb31cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25Ub2RvQ2xpY2soaW5kZXgpfSAvPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cbn1cblxuVG9kb0xpc3QucHJvcFR5cGVzID0ge1xuICBvblRvZG9DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9kb3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGlcbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0aGlzLnByb3BzLmNvbXBsZXRlZCA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnLFxuICAgICAgICAgIGN1cnNvcjogdGhpcy5wcm9wcy5jb21wbGV0ZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcidcbiAgICAgICAgfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuXG5Ub2RvLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL1RvZG8uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyRmlsdGVyKGZpbHRlciwgbmFtZSkge1xuICAgIGlmIChmaWx0ZXIgPT09IHRoaXMucHJvcHMuZmlsdGVyKSB7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVyKVxuICAgICAgfX0+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHA+XG4gICAgICAgIFNob3c6XG4gICAgICAgIHsnICd9XG4gICAgICAgIHt0aGlzLnJlbmRlckZpbHRlcignU0hPV19BTEwnLCAnQWxsJyl9XG4gICAgICAgIHsnLCAnfVxuICAgICAgICB7dGhpcy5yZW5kZXJGaWx0ZXIoJ1NIT1dfQ09NUExFVEVEJywgJ0NvbXBsZXRlZCcpfVxuICAgICAgICB7JywgJ31cbiAgICAgICAge3RoaXMucmVuZGVyRmlsdGVyKCdTSE9XX0FDVElWRScsICdBY3RpdmUnKX1cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdTSE9XX0FMTCcsXG4gICAgJ1NIT1dfQ09NUExFVEVEJyxcbiAgICAnU0hPV19BQ1RJVkUnXG4gIF0pLmlzUmVxdWlyZWRcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=