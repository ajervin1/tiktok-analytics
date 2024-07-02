import Chart from "react-apexcharts";

export default function ApexLineChart() {
	let options = {
		chart: {
			id: "basic-bar"
		},
		xaxis: {
			categories: [ 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998 ]
		}
	}
	let series = [
		{
			name: "series-1",
			data: [ 30, 40, 45, 50, 49, 60, 70, 91 ]
		}
	]
	return <div className="">
		<Chart
			options={this.state.options}
			series={this.state.series}
			type="line"
			width="500"
		/>
	</div>
}