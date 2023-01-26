export const toCelsius = (temp: number) => Math.round(temp - 273.15);
export const toFahrenheit = (temp: number) => Math.round(1.8 * (temp - 273.15) + 32);
export const colPressure = (pressure: number) => Math.round(pressure * 0.750064);
