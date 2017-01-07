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
