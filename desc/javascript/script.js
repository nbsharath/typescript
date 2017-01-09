var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* getter and setter function
var accessors = {
    name: 'sharath',
    get state(){
        return this._state;
    },
    set state(newState){
        if( newState == todoState.Completed){
            var canBeCompleted = (newState == todoState.Active || newState == todoState.Deleted) ;
        }
        if(!canBeCompleted){
            throw('The todo can onlt be moed to complted if it is in active or deleted state');
        }
        this._state= newState;
    }
}
accessors.state = todoState.Active;

/* getter and setter syntax for the class
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
*/
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
/* classses related

interface Todos{
    name: string;
}

class TodoServices{
    constructor(private todo : Todos[]){
    }
    getAll(){

    }
}
*/
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
var todoState;
(function (todoState) {
    todoState[todoState["New"] = 1] = "New";
    todoState[todoState["Active"] = 2] = "Active";
    todoState[todoState["Deleted"] = 3] = "Deleted";
    todoState[todoState["Completed"] = 4] = "Completed";
})(todoState || (todoState = {}));
;
var mytodo = {
    name: "charile",
    state: todoState.Active
};
function deleteTodo(mytodo) {
    if (mytodo.state != todoState.New) {
    }
}
/* fundamentals for typescipt
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
*/
var TodoStateChanger = (function () {
    function TodoStateChanger(newstate) {
        this.newstate = newstate;
    }
    TodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo;
    };
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newstate;
        }
        return todo;
    };
    return TodoStateChanger;
}());
//extender
var CompleteTodoStateChanger = (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    function CompleteTodoStateChanger() {
        return _super.apply(this, arguments) || this;
    }
    return CompleteTodoStateChanger;
}(TodoStateChanger));
var todoser = {
    name: 'sharath',
};
/* interface function function without name
var container =  document.getElementById('changeMe');
container.innerHTML='first change';
interface Jquery{
    (selector :string) : HTMLElement,
    version : number,
    (name:number): string
}
var $ = <Jquery> function(selector: string){
    //Find DOM element
    return document.getElementById(selector);
};
var $ = <Jquery> function(name :number){
    return 'your an animal';
};
var element = $('changeMe');
element.innerHTML= 'shrath';
var secondOne= $('ConfigurMe');
secondOne.innerHTML= $(1)+'fdmfl';
*/
/*//Prototypical inheritence
// Javascript: You can't create class that can be used to create objects with same behaviour.But
//you can use functions toachieve that like this.

function Player(n:string,s: number){
    this.name= n;
    this.score= s;
}
Player.prototype.getAll = function (){
    console.log( 'the name is = '+ this.name);
}
Player.prototype.increment = function (){
    this.score++;
    console.log( 'the name is = '+ this.score);
}
var sharath = new Player('sharath',23);
sharath.getAll();
sharath.increment();

//the best part
var shru = new Player('shru',22);
shru.getAll();
shru.increment();
*/
/* First script
var container = document.getElementById('container');

function Counter(el: any){
    this.count= 0;
    el.innerHTML=this.count;
    el.addEventListener('click',()=>{
        this.count += 1;
        el.innerHTML=this.count;
    })
}
new Counter(container);
 */
/* static variable in the class
//previous methods object typescipt member type
 function todoMethod(){

 }
//static variable
/*todoMethod.todoId= 0;
//static method
todoMethod.staticMethod= function(){
    console.log('somthing static');
}
todoMethod.prototype.add = function(){
    var current = todoMethod.todoId+1;
    todoMethod.staticMethod();
}

//now the rocking way to achiev this in ES6

class staticTodoService{
    static todoId :number =0;
    constructor(private name: string){

    }
    getAll(){

    }
    static display(){

    }
}
*/
/* union parameter */
function totalCalculating(x, y) {
    var total = x.length + y.length;
    x.slice(1);
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return null;
}
