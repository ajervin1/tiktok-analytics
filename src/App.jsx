import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";


function App() {
	console.log("hello")
	useFeatherIcons()

	return <main>
		<NavBar/>
		<div className="page-container">
			<SearchResults />
		</div>
	</main>
}

export default App
