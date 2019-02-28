import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainService } from '../services/main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Suscription Type
  AnualSubcs: boolean = true;

  // Packages Premium
  FlexTotal: boolean = false
  FlexDesarrollo: boolean = false;
  FlexDesmpeno: boolean = false;
  FlexEngagement: boolean = false;

  // Individual Modules
  Metas: boolean = false;
  Competencias: boolean = false;
  Pid: boolean = false;
  Reconocimiento: boolean = false;
  PlanSucesion: boolean = false;

  // Number of employes
  NumEmployees: number = 20;
  Range: any;
  PackagesSelc: any = {};

  // Config Slider
  max = 5000;
  min = 20;
  showTicks = false;
  step = 1;
  thumbLabel = true;

  constructor(private _formBuilder: FormBuilder,
              private mainService: MainService) {}

  ngOnInit() {
    this.Range = this.mainService.getRange(this.NumEmployees);
    console.log(this.Range);

    const price = this.mainService.getPrice('usd', 1, 1, 0);
    console.log(price);

  }

  changeSubcs() {
    this.AnualSubcs = !this.AnualSubcs;
    console.log(this.AnualSubcs);
  }

  UpdateRange() {
    this.Range = this.mainService.getRange(this.NumEmployees);
    console.log(this.Range);
  }

  selectPackage(val) {
    
  }

  MainValidator() {
    // Validate Flex Total

    if (this.FlexTotal || this.FlexDesarrollo && this.FlexDesmpeno && this.FlexEngagement) {
      // Activate All Packages
      this.FlexTotal = true;
      this.FlexDesarrollo = true;
      this.FlexDesmpeno = true;
      this.FlexEngagement = true;

      // Activate Modules
      this.Metas = true;
      this.Competencias = true;
      this.Pid = true;
      this.Reconocimiento = true;
      this.PlanSucesion = true;
    }

    // Validate Flex Desarrollo

    if (!this.FlexTotal && this.FlexDesarrollo) {
      this.Pid = true;
      this.PlanSucesion = true;
    }

    // Validate Flex Desempeño
    if (!this.FlexTotal && this.FlexDesmpeno) {
      this.Metas = true;
      this.Competencias = true;
    }

    // Validate Flex Engagement
    if (!this.FlexTotal && this.FlexEngagement){
      this.Reconocimiento = true;
    }
  }

}
