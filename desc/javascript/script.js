/* getter and setter function */
var accessors = {
    name: 'sharath',
    get state() {
        return this._state;
    },
    set state(newState) {
        if (newState == todoState.Completed) {
            var canBeCompleted = newState == todoState.Active || newState == todoState.Deleted;
        }
        if (!canBeCompleted) {
            throw ('The todo can onlt be moed to complted if it is in active or deleted state');
        }
        this._state = newState;
    }
};
accessors.state = todoState.Active;
/* getter and setter syntax for the class */
var smartTodo = (function () {
    function smartTodo() {
    }
    Object.defineProperty(smartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == todoState.Completed) {
                var canBeCompleted = newState == todoState.Active || newState == todoState.Deleted;
            }
            if (!canBeCompleted) {
                throw ('The todo can onlt be moed to complted if it is in active or deleted state');
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return smartTodo;
}());
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
    completed: true,
};
var RoleNumber = todo.id, completed = todo.completed, name2 = todo.name2;
var _a, _b;
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
    name: 'sharath',
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
/* static variable in the class */
//previous methods object typescipt member type
function todoMethod() {
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
}*/
//now the rocking way to achiev this in ES6
var staticTodoService = (function () {
    function staticTodoService(name) {
        this.name = name;
    }
    staticTodoService.prototype.getAll = function () {
    };
    staticTodoService.display = function () {
    };
    return staticTodoService;
}());
staticTodoService.todoId = 0;
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
