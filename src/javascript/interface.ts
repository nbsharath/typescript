/* interface */
interface Todo{
	name:string;
	completed ?: boolean;

}

var todoser: Todo= {
	name: 'sharath',
};

interface todoService{
	add(todo: Todo): Todo;
	delete(todoId: number):void;
	getAll():Todo[];

}
