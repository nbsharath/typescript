/* getter and setter function */
var accessors = {
    name: 'sharath',
    get state(){
        return this._state;
    },
    set state(newState){
        if( newState == todoState.Completed){
            var canBeCompleted = newState == todoState.Active || newState == todoState.Deleted;
        }
        if(!canBeCompleted){
            throw('The todo can onlt be moed to complted if it is in active or deleted state');
        }
        this._state= newState;
    }
}
accessors.state = todoState.Active;

/* getter and setter syntax for the class */
class smartTodo {
    _state : todoState;
    get state(){
        return this._state;
    }
    set state(newState: todoState){
        if( newState == todoState.Completed){
            var canBeCompleted = newState == todoState.Active || newState == todoState.Deleted;
        }
        if(!canBeCompleted){
            throw('The todo can onlt be moed to complted if it is in active or deleted state');
        }
        this._state= newState;
    }

}
