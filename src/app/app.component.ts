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
}
