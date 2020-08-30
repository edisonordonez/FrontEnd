import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';

import { Title, DomSanitizer } from '@angular/platform-browser';


import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';

import { DatePipe } from '@angular/common';
import { single, multi, pie, times } from './data';


import { Node, Options } from 'ng-material-treetable';
import { FormControl } from '@angular/forms';
//import { TdLayoutManageListComponent, tdRotateAnimation } from '@covalent/core';
import { MatDialog, MatIconRegistry } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit  {
  
  data = [
    {
      'name': 'Frozen yogurt',
      'type': 'Ice cream',
      'calories': 159.0,
      'fat': 6.0,
      'carbs': 24.0,
      'protein': 4.0,
    }, {
      'name': 'Ice cream sandwich',
      'type': 'Ice cream',
      'calories': 237.0,
      'fat': 9.0,
      'carbs': 37.0,
      'protein': 4.3,
    }, {
      'name': 'Eclair',
      'type': 'Pastry',
      'calories':  262.0,
      'fat': 16.0,
      'carbs': 24.0,
      'protein':  6.0,
    }, {
      'name': 'Cupcake',
      'type': 'Pastry',
      'calories':  305.0,
      'fat': 3.7,
      'carbs': 67.0,
      'protein': 4.3,
    }, {
      'name': 'Jelly bean',
      'type': 'Candy',
      'calories':  375.0,
      'fat': 0.0,
      'carbs': 94.0,
      'protein': 0.0,
    }, {
      'name': 'Lollipop',
      'type': 'Candy',
      'calories': 392.0,
      'fat': 0.2,
      'carbs': 98.0,
      'protein': 0.0,
    }, {
      'name': 'Honeycomb',
      'type': 'Other',
      'calories': 408.0,
      'fat': 3.2,
      'carbs': 87.0,
      'protein': 6.5,
    }, {
      'name': 'Donut',
      'type': 'Pastry',
      'calories': 452.0,
      'fat': 25.0,
      'carbs': 51.0,
      'protein': 4.9,
    }, {
      'name': 'KitKat',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
    }, {
      'name': 'Chocolate',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
    }, {
      'name': 'Chamoy',
      'type': 'Candy',
      'calories': 518.0,
      'fat': 26.0,
      'carbs': 65.0,
      'protein': 7.0,
    },
  ];
  
  pie: any[];
  single: any[];
  multi: any[];
  times: any[];

  miniNav: boolean = false;
  // Current date
  year: any = new Date().getFullYear();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = ELEMENT_DATA;
  
  constructor(//public media: TdMediaService,
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
      
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
    this._domSanitizer.bypassSecurityTrustResourceUrl
('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

Object.assign(this, {pie, single, multi, times})

}



  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    //.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

 

 // NGX Charts Axis
 axisDigits(val: any): any {
  return new TdDigitsPipe().transform(val);
}

axisDate(val: string): string {
  return new DatePipe('en').transform(val, 'hh a');
}

}
