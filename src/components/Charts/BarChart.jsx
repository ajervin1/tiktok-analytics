import Chart from "react-apexcharts";

export default function BarChart() {
	let options = {
		chart: {
			id: "basic-bar",
			toolbar: { show: false },
			fontFamily: "Inter",
		},
		colors: [ '#7367f0' ],
		dataLabels: {
			enabled: true,
			position: top,
			offsetY: -20,
			style: {
				fontSize: '12px',
				colors: ["#304758"]
			}
		},
		plotOptions: {
			bar: {

				borderRadius: 4,
				dataLabels: {
					position: 'top', // top, center, bottom
				},
			}
		},
		xaxis: {
			categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			position: 'bottom',
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		grid: {
			show: true,
			borderColor: '#ccc',
			strokeDashArray: 3,
		},
		yaxis: {
			lines: {
				show: true
			},
			stepSize: 50,
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
		},
	}
	let series = [
		{
			name: "series-1",
			data: [ 30, 40, 45, 50, 49, 60, 70, 91, 200, 30, 50, 60 ]
		}
	]
	return <div className="card chart-item">
		<h6 className={ "font-semi-bold" }>Following</h6>
		<Chart
			options={ options }
			series={series }
			type="bar"
			width="100%"
			height={300}
		/>
	</div>
}