import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainService } from '../services/main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  AnualSubcs: boolean = true;
  NumEmployees: number = 20;
  Range: any;
  PackagesSelc: any = {};

  constructor(private _formBuilder: FormBuilder,
              private mainService: MainService) { }

  ngOnInit() {
    this.Range = this.mainService.getRange(this.NumEmployees);
    console.log(this.Range);
  }

  changeSubcs() {
    this.AnualSubcs = !this.AnualSubcs;
    console.log(this.AnualSubcs);
  }

  UpdateRange() {
    this.Range = this.mainService.getRange(this.NumEmployees);
    console.log(this.Range);
  }

}
