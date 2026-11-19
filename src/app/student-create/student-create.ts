import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../services/student';

@Component({
  selector: 'app-student-create',
  imports: [ReactiveFormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate {
  studentForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: Student
  ) {
    this.studentForm = this.fb.group({
      name: '',
      email: '',
      mssv: ''
    });
  }
  async onSubmit() {
    await this.studentService.createStudent(this.studentForm.value).subscribe();
  }
}
