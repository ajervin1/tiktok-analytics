import Chart from "react-apexcharts";
import './chart.css'

export default function AreaChart() {
	let options = {
		chart: {
			id: "basic-bar",
			toolbar: { show: false },
			fontFamily: "Inter",

		},
		dataLabels: {
			enabled: false
		},
		colors: [ '#7367f0', ], // Add your custom colors here
		xaxis: {
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
			tickAmount: 10,
			categories: [ 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999 ]
		},
		yaxis: {
			min: 0,
			max: 100,
			tickAmount: 5,
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
		},

	}
	let series = [
		{
			name: "Followers",
			data: [ 30, 40, 45, 50, 49, 60, 70, 91 ]
		}
	]

	return <div className="card chart-item">
		<h6 className={ "font-semi-bold" }>Following</h6>
		<Chart options={ options } series={ series } type={ 'area' } width="100%" height={ 300 }/>
	</div>
}