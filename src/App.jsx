

import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";


function App() {
	useFeatherIcons()

	return <main>
		<SearchResults />
	</main>
}

export default App
