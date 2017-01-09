class TodoStateChanger {
    constructor( private newstate: todoState){
    }

    canChangeState(todo: Todo): boolean{
        return !!todo;
    }

    changeState(todo: Todo): Todo{
        if(this.canChangeState(todo)){
            todo.state = this.newstate;
        }
        return todo;
    }

}

//extender
class CompleteTodoStateChanger extends TodoStateChanger{
    constructor(){
    super(todoState.Completed);
    }
}

