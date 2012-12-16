(function(){
	'use strict';
	
	var ENTER_KEY = 13;
	
	// New todo input
	var newTodoField = F.$('new-todo');
	var newTodoText = F.$B(newTodoField);
	var newTodos = F.extractEventE(newTodoField, 'keydown')
		.filterE(function(e){ return e.keyCode == ENTER_KEY; })
		.snapshotE(newTodoText)
		.mapE(function(txt){ return txt.trim(); })
		.filterE(function(txt){ return txt.length > 0; })
		.mapE(addTodo);
		
	F.insertDomE(newTodos, 'todo-list', 'end');
		
	/**
	 * Creates a todo element
	 *
	 * @param {!string} txt
	 * @returns {!HTMLElement} element
	 */
	function addTodo(txt){
		return F.elt('li', { }, txt);
	}
	/*
	<li>
			<div class='view'>
				<input class='toggle' type='checkbox'>
				<label>stuff</label>
				<button class='destroy'></button>
			</div>
			<input class='edit' value='stuff'>
		</li>
	*/
	
})();