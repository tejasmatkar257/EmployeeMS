import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
  @ViewChild('tempButton') buttontemp:any;
  title='EmployeeCRUD';

  educationOptions=[
    'Graduate','Post Graduate','PhD',
  ];
  employeeForm: FormGroup ;

  constructor(private fb:FormBuilder){
    this.employeeForm= this.fb.group({})
  }

  ngOnInit(): void {
    this.employeeForm= this.fb.group({
      firstname:this.fb.control(''),
      lastname:this.fb.control(''),
      birthday:this.fb.control(''),
      gender:this.fb.control(''),
      education:this.fb.control(''),
      company:this.fb.control(''),
      jobExperiance:this.fb.control(''),
      domain:this.fb.control(''),
    });
  }

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }
  

}
