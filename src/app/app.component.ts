import { Component } from '@angular/core';
import { Todo } from 'src/models/todos.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* classe publica */
export class AppComponent {
  /* propriedades e variaveis */
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  /* métodos e funções */
  constructor() {
    this.todos.push(new Todo(1, 'Arrumar o quarto', false))
    this.todos.push(new Todo(1, 'Estudar angular', false))
    this.todos.push(new Todo(1, 'Ir para faculdade', true))
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if(index !== -1) this.todos.splice(index, 1);

  }
  MarkAsDone() {

  }
  MarkAsUndone() {

  }
}
