

import './index.css'
import useFeatherIcons from "./hooks/useFeatherIcons.jsx";
import TikTokLineChart from "./components/Charts/LineChart.jsx";


function App() {
	useFeatherIcons()

	return <main>
		<TikTokLineChart />
	</main>
}

export default App
