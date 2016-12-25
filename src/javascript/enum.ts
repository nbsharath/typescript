interface MyTodoList{
	name: string,
	state : todoState,
}


enum todoState{
	Active =  1,
	Completed,
	New,
	Deleted,
};
var mytodo: MyTodoList={
	name:"charile",
	state : todoState.Active
};
function deleteTodo( mytodo: MyTodoList){
	if(mytodo.state != todoState.New){

	}
}
