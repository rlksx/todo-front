import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
  public form: FormGroup;

  /* métodos e funções */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    // this.todos.push(new Todo(1, 'Arrumar o quarto', false))
    // this.todos.push(new Todo(2, 'Estudar angular', false))
    // this.todos.push(new Todo(3, 'Ir para faculdade', true))
  }

  add() {
    const title = this.form.controls['title'].value; // valor inserido no campo de pesquisa
    const id = this.todos.length+1;
    this.todos.push(new Todo(id, title, false))

    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if(index !== -1) this.todos.splice(index, 1);
  }

  MarkAsDone(todo:Todo) {
    todo.done = true;
  }

  MarkAsUndone(todo: Todo) {
    todo.done = false;
  }
}
