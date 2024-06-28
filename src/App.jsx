import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";
import PostList from "./components/PostList/PostList.jsx";
import TikTokLineChart from "./components/Charts/LineChart.jsx";


function App() {

	useFeatherIcons()

	return <main>
		<NavBar/>
		<div className="page-container container">
			<TikTokLineChart />
		</div>
	</main>
}

export default App
