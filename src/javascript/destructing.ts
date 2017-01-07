/* Desctructing the array into variables
var array =[123,'shrath',true];
var [id1, name1 ,completed1] = array;

var a = 1;
var b= 2;
var c = 3;
[a,b,c]=[b,a,c];
[a,b]=[b,a];

//interface
interface TodoInterface{
    id: number,
    name2: string,
    completed: boolean
}

//object part
var todo: TodoInterface ={
	id: 123,
	name2: 'sharath',
	completed : true,
};
var {id: RoleNumber,completed,name2} = todo;

//function parameter destucturing
/*function counter( {id,name2, completed, completed: current}){

}*/
//counter(todo);
