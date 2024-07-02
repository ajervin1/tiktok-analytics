import Chart from "react-apexcharts";

export default function DateStringChart() {
	let options = {
		chart: {
			type: "area",
			id: "date-chart",
			toolbar: { show: false },
			fontFamily: "Inter",

		},
		colors: [ '#7367f0' ],
		xaxis: {
			type: 'datetime',
			labels: {
				style: {
					colors: '#ccc', // Change the color of y-axis labels here
				},
			},
			tickAmount: 5,
			tickPlacement: 'on',
		},
		yaxis: {
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
			data: [
				{
					x: new Date("01-10-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 1200
				},
				{
					x: new Date("02-11-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 900
				},
				{
					x: new Date("03-20-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 700
				},
				{
					x: new Date("04-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 1500
				},
				{
					x: new Date("05-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 1100
				},

				{
					x: new Date("07-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 1700
				},
				{
					x: new Date("08-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 1800
				},
				{
					x: new Date("09-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 2000
				},
				{
					x: new Date("11-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 2100
				},
				{
					x: new Date("12-01-2022 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 2200
				},
				{
					x: new Date("05-01-2023 GMT").toISOString().split('T')[0].slice(0, 7),
					y: 2300
				}
			]
		}
	]
	return <div className="card chart-item">
		<h6 className={ "font-semi-bold" }>Following</h6>
		<Chart options={ options } width={ "100%" } height={ 300 } series={ series }/>
	</div>
}