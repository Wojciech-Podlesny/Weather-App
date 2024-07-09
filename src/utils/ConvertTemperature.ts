export const convertTemperature = (temperature: number, celcius: boolean) => {
	return celcius ? temperature : (temperature * 9) / 5 + 32
}
