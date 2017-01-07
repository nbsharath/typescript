class TodoStateChanger {
    constructor( private newstate: todoState){
    }

    canChangeState(todo: Todo): boolean{
        return !!todo;
    }

    changeState(todo: Todo): Todo{
        if(canChangeState(todo)){
            todo.state = this.newstate;
        }
        return todo;
    }

}
