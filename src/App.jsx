import { useState, useEffect } from 'react'

import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
	useFeatherIcons()

	return <main>
		<NavBar />
	</main>
}

export default App
