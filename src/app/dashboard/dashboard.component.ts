import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../services/excel.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any = [{
  eid: 'e101',
  ename: 'ravi',
  esal: 1000
  },{
  eid: 'e102',
  ename: 'ram',
  esal: 2000
  },{
  eid: 'e103',
  ename: 'rajesh',
  esal: 3000
  }];
  public captureScreen(){
    var data = document.getElementById('contentToConvert');
      html2canvas(data).then(canvas => {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.setTextColor(50, 50, 50);
        pdf.text(50,59, "Capacitaciones sobre la plataforma");
        pdf.save('MYPdf.pdf'); // Generated PDF
      });
  }
  constructor(private excelService:ExcelService) { }

  exportAsXLSX():void {
     this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  ngOnInit() {
  }

}
