import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  form: FormBuilder;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
  }
}
