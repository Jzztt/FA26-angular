import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "http://localhost:3000/";

interface IStudent {
  name: string;
  email: string;
  mssv: string;
}

@Injectable({
  providedIn: 'root',
})
export class Student {
  constructor( private http: HttpClient) {}

  createStudent(student: IStudent) {
    return this.http.post(`${API}students`, student);
  }

}
