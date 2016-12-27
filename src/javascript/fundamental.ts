/* fundamentals for typescipt */
var human = {
	name: 'sharath',
	id : 'human',
	age: calculating(1993),
	speak : function(){
		console.log('hi');
	}
}

//data type infringing
function calculating(birthyear: number){
	return Date.now() - birthyear;
}

function total( x :any[], y:string ): number{
	var total: number= x.length + y.length;
	return total;
}
