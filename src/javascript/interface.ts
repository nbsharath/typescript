/* interface */
interface Todo{
	name:string;
	completed ?: boolean;
    state ?: todoState;

}

var todoser: Todo= {
	name: 'sharath',
};

interface todoService{
	add(todo: Todo): Todo;
	delete(todoId: number):void;
	getAll():Todo[];

}
