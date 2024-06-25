import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";
import UserBanner from "./components/UserBanner/UserBanner.jsx";


function App() {

	useFeatherIcons()

	return <main>
		<NavBar/>
		<div className="page-container container">
			<UserBanner />
		</div>
	</main>
}

export default App
