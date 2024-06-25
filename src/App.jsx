

import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeroContent from "./components/HeroContent/HeroContent.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";

function App() {
	useFeatherIcons()

	return <main>
		<SearchForm />
	</main>
}

export default App
