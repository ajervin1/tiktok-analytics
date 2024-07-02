import './index.css'
import './typography.css'
import './grid.css'
import './components.css';
import './utilities.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import {useEffect} from "react";
import DetailsPage from "./pages/DetailsPage.jsx";

function App() {
	useEffect(() => {
		feather.replace();
	}, [])
	return (
		<Router>
			<NavBar/>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/search" element={<SearchResultsPage/>}/>
				<Route path={"/user/:userId"} element={<DetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App
