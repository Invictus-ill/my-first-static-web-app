import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-todo',
  templateUrl: './fetch-todo.component.html',
  styleUrls: ['./fetch-todo.component.css']
})
export class FetchTodoComponent {
  todoId: number | null = null;
  todo: any = null;

  fetchTodo() {
    if (!this.todoId) {
      alert('Please enter a valid Todo ID.');
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        this.todo = json;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to fetch the Todo. Please try again.');
      });
  }
}
