import { Router, Route } from "react-router-dom";
import AppNavigator from "./components/Layout/AppNavigator";
import homepage from "./containers/homepage";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<AppNavigator />
				<Route path="/" exact component={homepage}>
					Home
				</Route>
			</div>
		</div>
	);
}

export default App;
