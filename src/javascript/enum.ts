interface MyTodoList{
	name: string,
	state : todoState,
}


enum todoState{
    New =  1,
    Active,
    Deleted,
	Completed,
};
var mytodo: MyTodoList={
	name:"charile",
	state : todoState.Active
};
function deleteTodo( mytodo: MyTodoList){
	if(mytodo.state != todoState.New){

	}
}
