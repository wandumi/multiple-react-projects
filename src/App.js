import { Routes, Route } from "react-router-dom";
import AppNavigator from "./components/Layout/AppNavigator";
import Homepage from "./containers/homepage";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<AppNavigator />
				<Routes>
					<Route path="/" exact element={<Homepage />}>
						Home
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
