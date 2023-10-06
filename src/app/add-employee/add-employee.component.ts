import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  taskArray = [{taskName: 'Do Some Coding',isCompleted: false}];

  constructor(){ }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    console.log(form);

    this.taskArray.push({
      taskName:form.controls['task'].value,
      isCompleted:false
    })
    form.reset();
  }

}
