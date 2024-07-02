import UserBanner from "../components/UserBanner/UserBanner.jsx";
import DataCard from "../components/DataCard/DataCard.jsx";
import PostList from "../components/PostList/PostList.jsx";
import TikTokLineChart from "../components/Charts/TikTokLineChart.jsx";
import ApexBarChart from "../components/Charts/ApexBarChart.jsx";
import TimeStampChart from "../components/Charts/TimeStampChart.jsx";
import DateStringChart from "../components/Charts/DateStringChart.jsx";

export default function DetailsPage() {
	return <main className="details-page container pt-1">
		<div className="row">
			<div className="col-6">
				<ApexBarChart/>
			</div>
			<div className="col-6">
				<ApexBarChart/>
			</div>
		</div>
	</main>
}