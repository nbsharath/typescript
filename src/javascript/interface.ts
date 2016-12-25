/* interface */
interface Todo{
	name:string;
	completed ?: boolean;

}

var todo: Todo= {
	name: 'sharath',
};

interface todoService{
	add(todo: Todo): Todo;
	delete(todoId: number):void;
	getAll():Todo[];

}
