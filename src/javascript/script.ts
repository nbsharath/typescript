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
