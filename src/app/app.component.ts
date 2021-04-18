import { Component } from '@angular/core';
import { task } from './task';

import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePL);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName = '';
  taskDate = '';
  zmienna = 0;
  title = 'apk-web';
  editMode = false;

  getFooter(): string {
    if (this.zmienna == 1) { return "Zmienna jest " + this.zmienna }
    else
    return "Tekst , który wyświetli się w stopce";
  }

  add() {
    this.zmienna++;
  }
 
  getDate(): Date{
    return new Date;
  }
  
  tasks: task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-03-02',
      done: false,
    },
    {
      name: 'nauka Angulara',
      deadline: '2020-03-03',
      done: true,
    },
    {
      name: 'Robienie obiadu',
      deadline: '2020-04-24',
      done: false,
    },
  ];

  clearTask() {
    this.tasks = [];
  }


  createTask() {
    const task: task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }
  switchEditMode() {
    this.editMode = !this.editMode
  }

  markTaskAsDone(task: task) {
    task.done = true;
  }

  deleteTask(task: task) {
    this.tasks = this.tasks.filter(e => e !== task);//Przefiltrowanie listy bez elementu do usuniecia
  }

}
