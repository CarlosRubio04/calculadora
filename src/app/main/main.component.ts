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

  // Data
  ProductSelect: Object = {};

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

      // Flex total Id 3
      const FlextTotalPrice = this.mainService.getPrice('usd', 1, 3, this.Range);
    }

    // Validate Flex Desarrollo

    if (!this.FlexTotal && this.FlexDesarrollo) {
      this.Pid = true;
      this.PlanSucesion = true;

      // Flex Desarrollo Id 10
      const FlextDesarrolloPrice = this.mainService.getPrice('usd', 1, 10, this.Range);
    }

    // Validate Flex Desempeño
    if (!this.FlexTotal && this.FlexDesmpeno) {
      this.Metas = true;
      this.Competencias = true;

      // Flex Desempeño Id 4
      const FlextDesempenoPrice = this.mainService.getPrice('usd', 1, 4, this.Range);
    }

    // Validate Flex Engagement
    if (!this.FlexTotal && this.FlexEngagement){
      this.Reconocimiento = true;

      // Flex Engagement Id 11
      const FlextEngagementPrice = this.mainService.getPrice('usd', 1, 11, this.Range);
    }
  }

}
