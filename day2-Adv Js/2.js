var trendRate = -0;
trendRate === -0; //

trendRate.toString();
trendRate === 0; //
trendRate < 0;
trendRate > 0;

Object.is(trendRate, -0);

Object.is(trendRate, 0);

//*************** */
Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(0); // 0
Math.sign(-0); /// wt?

//***************************** */
function sign(v) {
	return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}
sign(-0);

//****************************** */

function formatTrend(trendRate) {
	var direction = trendRate < 0 || Object.is(trendRate, -0) ? 'down' : 'up';
	return `${direction} ${Math.abs(trendRate)}`;
}
