import AreaChart from "../components/Charts/AreaChart.jsx";
import DateStringChart from "../components/Charts/DateStringChart.jsx";
import BarChart from "../components/Charts/BarChart.jsx";

export default function DetailsPage() {
	return <main className="details-page container pt-1">
		<div className="row">
			<div className="col-6">
				<DateStringChart />
			</div>
			<div className="col-6">
				<BarChart />
			</div>
		</div>
	</main>
}