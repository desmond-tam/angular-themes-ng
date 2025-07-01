import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IToDo } from 'src/app/models/activities';
import { ActivitiesService } from '../../../services/activities-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  form;
  todoArray:IToDo[];
  interval: any;

  constructor(fb: FormBuilder,private service:ActivitiesService) {

    this.form = fb.group({
      todoitem : ['', Validators.required]
    });

  }

  ngOnInit() {
    this.service.onReceivingToDoResult()
      .subscribe(data => {
        this.todoArray = data;
      });
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    },60000);
  }

  refreshData() {
    console.log('refresh data');
    this.service.getToDos();
  }

  addTodo() {
    let newTodoList = { "task": '' , "completed": false } as IToDo;
    newTodoList.task= this.form.value.todoitem;
    this.todoArray.push(newTodoList);
    this.form.reset();
  }
  removeTodoItem(item) {
   for(let i=0; i<=this.todoArray.length; i++) {
     if(item === this.todoArray[i]) {
       this.todoArray.splice(i, 1);
     }
   }
  }
  changeTodoStatus(event,index) {
    if(event.target.checked) {
    this.todoArray[index]['completed'] = true;
    } else {
      this.todoArray[index]['completed'] = false;
    }
  }

}
