import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ShoppingList } from './pages/ShoppingList';

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/list" component={ShoppingList} />
				<Route exact path="/" component={Home} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}
