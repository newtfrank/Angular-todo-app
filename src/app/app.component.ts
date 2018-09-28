import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todoArray = []
  //add item to array
  addTodo(value) {
    this.todoArray.push(value)
    console.log(this.todoArray)
  }
 // delete item from todo
  deleteItem(todo) {
    for(let i=0; i<= this.todoArray.length ; i++) {
      if(todo == this.todoArray[i]) {
        this.todoArray.splice(i,1)
      }
    }
  }
}
