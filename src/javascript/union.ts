/* union parameter */
function totalCalculating( x : (string | any[]),y: (string | any[])):number {
	var total :number = x.length+y.length;

	x.slice(1);
	if(x instanceof Array){
		x.push('abc');
	}
	if(x instanceof String){
		x.substr(1);
	}
}
