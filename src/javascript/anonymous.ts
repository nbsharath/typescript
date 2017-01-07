/*//anonymous interface

var Haveto:{ name: string};
//equal is there then it is taken as object declaration.

//Haveto={ age: 41}; will produce error because the age property is not there in the interface.
//Haveto={ name: 43}; because of the type

Haveto= {
	name: 'sharath'
}

function totalLenght( x:{length : number},y: {length: number}){
	var total: number = x.length + y.length;
	return total;
}
*/
