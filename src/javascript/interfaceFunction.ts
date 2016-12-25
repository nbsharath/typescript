/* interface function function without name */
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
