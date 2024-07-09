import AreaChart from "../components/Charts/AreaChart.jsx";
import DateStringChart from "../components/Charts/DateStringChart.jsx";
import BarChart from "../components/Charts/BarChart.jsx";
import UserBanner from "../components/UserBanner/UserBanner.jsx";
import PostList from "../components/PostList/PostList.jsx";
import DataCard from "../components/DataCard/DataCard.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { averagePlayCountResults, postsResults, totalPlayCountResults } from "../../data/mock_data.js";
import { getUserAverageMonthlyViews, getUserTikToksTop, getUserTotalMonthlyViews } from "../../api/api.js";

export default function DetailsPage() {
	const [ lineData, setLineData ] = useState([])
	const [ barData, setBarData ] = useState([])
	const [ loading, setLoading ] = useState(true)
	const [ posts, setPosts ] = useState([])
	const location = useLocation();
	const { user } = location.state;
	useEffect( () => {
		const fetchData = async () => {
			const userPosts = await getUserTikToksTop(user.uniqueId);
			const averagePlays = await getUserAverageMonthlyViews(user.uniqueId);
			const totalPlays = await getUserTotalMonthlyViews(user.uniqueId);
			const lineSeriesData = averagePlays.map(row => {
				return {
					x: row.date.split("T")[0].slice(0, 7),
					y: row.averagePlayCount,
				}
			})
			const barSeriesData = totalPlays.map(row => {
				return {
					x: new Date(row.date).toLocaleString('default', { month: "short", year: "2-digit" }),
					y: row.totalPlayCount,
				}
			})
			setLineData(lineSeriesData);
			setBarData(barSeriesData)
			setPosts(userPosts)
			setLoading(false);
		}
		fetchData()
	}, [])

	return <main className="details-page container pt-1 pb-4">
		{/* User Banner */ }
		<section className="user-banner-section mb-2">
			<UserBanner user={ user }/>
		</section>
		{/* Data Cards */ }
		<section className="data-cards mb-2">
			<h5 className={ 'font-bold mb-2' }>User Stats</h5>
			<DataCard user={ user }/>
		</section>
		{/* Chart Section */ }
		<section className={ 'chart-section mb-2' }>
			<h5 className={ 'font-bold mb-2' }>User Analytics</h5>
			{ !loading && (
				<div className="row">
					<div className="col-6 mb-1">
						<DateStringChart seriesData={ lineData } title={ 'Average Monthly Views' }
						                 seriesName={ 'Average Monthly Views' }/>
					</div>
					<div className="col-6">
						<BarChart seriesData={ barData } seriesName={ "Average Monthly Views" }
						          title={ "Average Monthly Views" }/>
					</div>
				</div>
			) }

		</section>
		{/* Posts Lists */ }
		<section className="post-list">
			<h5 className={ 'font-bold mb-2' }>Top Posts</h5>
			{ !loading && <PostList posts={ posts }/> }
		</section>
	</main>
}