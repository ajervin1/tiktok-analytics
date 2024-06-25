

import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";
import HeroContent from "./components/HeroContent/HeroContent.jsx";


function App() {
	useFeatherIcons()

	return <main>
		<NavBar />
		<HeroContent />

	</main>
}

export default App
