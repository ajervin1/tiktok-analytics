import AreaChart from "../components/Charts/AreaChart.jsx";
import DateStringChart from "../components/Charts/DateStringChart.jsx";
import BarChart from "../components/Charts/BarChart.jsx";
import UserBanner from "../components/UserBanner/UserBanner.jsx";
import PostList from "../components/PostList/PostList.jsx";
import DataCard from "../components/DataCard/DataCard.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { postsResults } from "../../data/mock_data.js";

export default function DetailsPage() {
	const [ posts, setPosts ] = useState([])
	const location = useLocation();
	const user = location.state.user;
	// Get Users Posts
	useEffect(() => {
		setPosts(postsResults)
	}, [])
	return <main className="details-page container pt-1">
		<section className="user-banner-section mb-2">
			<UserBanner user={ user }/>
		</section>
		<section className="data-cards mb-2">
			<h5 className={ 'font-bold mb-2' }>User Stats</h5>
			<DataCard user={ user }/>
		</section>
		{/*<section className={ 'chart-section mb-2' }>*/}
		{/*	<h5 className={ 'font-bold mb-2' }>User Analytics</h5>*/}
		{/*	<div className="row">*/}
		{/*		<div className="col-6 mb-1">*/}
		{/*			<DateStringChart/>*/}
		{/*		</div>*/}
		{/*		<div className="col-6">*/}
		{/*			<BarChart/>*/}
		{/*		</div>*/}
		{/*		<div className="col-6">*/}
		{/*			<AreaChart/>*/}
		{/*		</div>*/}
		{/*	</div>*/}
		{/*</section>*/}
		<section className="post-list">
			<h5 className={ 'font-bold mb-2' }>Top Posts</h5>
			<PostList posts={posts}/>
		</section>
	</main>
}