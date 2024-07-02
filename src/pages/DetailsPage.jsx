import UserBanner from "../components/UserBanner/UserBanner.jsx";
import DataCard from "../components/DataCard/DataCard.jsx";
import PostList from "../components/PostList/PostList.jsx";
import TikTokLineChart from "../components/Charts/TikTokLineChart.jsx";

export default function DetailsPage() {
	return <main className="details-page container pt-1">
		<div className="row">
			<div className="col-6">
					<TikTokLineChart />
			</div>
				<div className="col-6">
					<TikTokLineChart />
			</div>
		</div>
	</main>
}