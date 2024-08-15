export const convertTemperature = (temperature: number, celcius: boolean) => {
	return celcius ? temperature : (temperature * 9) / 5 + 32
}

export const convertPressure = (milibar: number) => {
	const pascals = milibar * 100
	const scaledPascals = pascals / 100
	return Math.round(scaledPascals)
}
