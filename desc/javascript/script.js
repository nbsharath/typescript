//anonymous interface
var Haveto;
//equal is there then it is taken as object declaration.
//Haveto={ age: 41}; will produce error because the age property is not there in the interface.
//Haveto={ name: 43}; because of the type
Haveto = {
    name: 'sharath'
};
function totalLenght(x, y) {
    var total = x.length + y.length;
    return total;
}
/* classses related */
var TodoServices = (function () {
    function TodoServices(todo) {
        this.todo = todo;
    }
    TodoServices.prototype.getAll = function () {
    };
    return TodoServices;
}());
/* Desctructing the array into variables */
var array = [123, 'shrath', true];
var id1 = array[0], name1 = array[1], completed1 = array[2];
var a = 1;
var b = 2;
var c = 3;
_a = [b, a, c], a = _a[0], b = _a[1], c = _a[2];
_b = [b, a], a = _b[0], b = _b[1];
//object part
var todo = {
    id: 123,
    name2: 'sharath',
    completed: true
};
var RoleNumber = todo.id, completed = todo.completed, name2 = todo.name2;
var _a, _b;
//function parameter destucturing
/*function counter( {id,name2, completed, completed: current}){

}*/
//counter(todo);
var todoState;
(function (todoState) {
    todoState[todoState["Active"] = 1] = "Active";
    todoState[todoState["Completed"] = 2] = "Completed";
    todoState[todoState["New"] = 3] = "New";
    todoState[todoState["Deleted"] = 4] = "Deleted";
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
/* fundamentals for typescipt */
var human = {
    name: 'sharath',
    id: 'human',
    age: calculating(1993),
    speak: function () {
        console.log('hi');
    }
};
//data type infringing
function calculating(birthyear) {
    return Date.now() - birthyear;
}
function total(x, y) {
    var total = x.length + y.length;
    return total;
}
var todoser = {
    name: 'sharath'
};
/* interface function function without name */
var container = document.getElementById('changeMe');
container.innerHTML = 'first change';
var $ = function (selector) {
    //Find DOM element
    return document.getElementById(selector);
};
var $ = function (name) {
    return 'your an animal';
};
var element = $('changeMe');
element.innerHTML = 'shrath';
var secondOne = $('ConfigurMe');
secondOne.innerHTML = $(1) + 'fdmfl';
//Prototypical inheritence
// Javascript: You can't create class that can be used to create objects with same behaviour.But
//you can use functions toachieve that like this.
function Player(n, s) {
    this.name = n;
    this.score = s;
}
Player.prototype.getAll = function () {
    console.log('the name is = ' + this.name);
};
Player.prototype.increment = function () {
    this.score++;
    console.log('the name is = ' + this.score);
};
var sharath = new Player('sharath', 23);
sharath.getAll();
sharath.increment();
//the best part
var shru = new Player('shru', 22);
shru.getAll();
shru.increment();
/* First script */
var container = document.getElementById('container');
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
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
