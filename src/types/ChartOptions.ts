export type ChartOptions = {
	scales: {
		x: {
			grid: {
				display: boolean
			},
			ticks : {
				font: {
					size:number;
				}
			}
		}
		y: {
			grid: {
				display: boolean
			},
			ticks : {
				font: {
					size:number;
				}
			}
			beginAtZero: boolean
		}
	}
	plugins: {
		legend: {
			display: boolean
			position: 'top' | 'bottom' | 'left' | 'right' | 'chartArea'
			
		}
	}


}

export type ChartData = {
	labels: string[]
	datasets: {
		label: string
		data: number[]
		fill: boolean
		backgroundColor: string
		borderColor: string
		borderWidth: number
		tension: number
	}[]
}
