import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './../actions';
import { ITodo } from '../todo'; 

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id:0,
    description: '',
    responsible: '',
    completed: false,
    proprity: 'low'
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
    // this.clearForm();
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
  }

  clearForm() {
    this.model = null;
  }
}
