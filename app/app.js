/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename ,createHashHistory} from 'history'
import { Router,Route } from 'react-router'
import stubbedCourses from './mock/COURSES'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import App from './containers/App'
import todoApp from './reducers'


let store = createStore(todoApp);

const history = useBasename(createHashHistory)({
  basename: '/',
	queryKey: '_key'
});

/*
const Message = React.createClass({
	render() {
		return <h3>Message</h3>
	}
});
*/

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    //component:App,
		childRoutes: [
			require('./routes/Test'),
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  } ]
}

/*
render((
	<Router>
		<Route path="/" component={require('./components/App')}>
			<Route path="calender" component={require('./routes/Calendar')} />
			<Route path="course" component={Message} />
			<Route path="grades" component={Message} />
			<Route path="messages" component={Message} />
			<Route path="profile" component={Message} />
		</Route>
	</Router>
),document.getElementById('example'))
*/


render(
	<Provider store={store}>
		<Router history={history} routes={rootRoute} />
	</Provider>,
  document.getElementById('example')
)

