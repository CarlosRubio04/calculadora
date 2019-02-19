import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  AnualSubcs: boolean = true;
  NumEmployees: number = 20;
  PackagesSelc: any = {};

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  changeSubcs() {
    this.AnualSubcs = !this.AnualSubcs;
    console.log(this.AnualSubcs);
  }

}
