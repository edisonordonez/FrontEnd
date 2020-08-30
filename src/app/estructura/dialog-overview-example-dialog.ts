import { Component, Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  cuenta: string;
  id_tipo: string;
  idnumeralsaf: string;
  idnumeralcco: string;
  childs: any;
  formulacionv: any;
}

export interface Numeral {
  idnumeral: number;
  NombreNum: string;
}

@Component({
selector: 'dialog-overview-example-dialog',
templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  
  tiposnodo: any[] = [
    {
      "tipo": "A",
      "id_tipo": 1
    },
    {
      "tipo": "B",
      "id_tipo": 2
    },
    {
      "tipo": "C",
      "id_tipo": 3
    },
    {
      "tipo": "D",
      "id_tipo": 4
    },
    {
      "tipo": "E",
      "id_tipo": 5
    },
    {
      "tipo": "F",
      "id_tipo": 6
    },
    {
      "tipo": "G",
      "id_tipo": 7
    },
    {
      "tipo": "H",
      "id_tipo": 8
    },
    {
      "tipo": "I",
      "id_tipo": 9
    },
  ];

  ArrayNumeralesSAF: Numeral[] = [
    {
      idnumeral: 1000,
      NombreNum: "REINTEGRO POR EXPORTACIONES  DE CAFÉ"
    },
    {
      idnumeral: 1010,
      NombreNum: "REINT  EXPORTACIONES DE CARBON INCLUIDOS ANTICIPOS"
    },
    {
      idnumeral: 1020,
      NombreNum: "REINT EXPORTACIONES DE FERRONIQUEL INCLUIDOS ANT"
    },
    {
      idnumeral: 1030,
      NombreNum: "REINT EXP DE PETROLEO Y SUS DER INCLUIDOS ANTICIPOS"
    },
    {
      idnumeral: 1035,
      NombreNum: "EXPORTACIONES DE ORO"
    },
    {
      idnumeral: 1040,
      NombreNum: "REINT EXP DIF CAFÉ CARBON FERRONIQUEL PET Y SUS DER"
    },
  ];

  ArrayNumeralesCCO: Numeral[] = [
    {
      idnumeral: 1000,
      NombreNum: "REINTEGRO POR EXPORTACIONES  DE CAFÉ"
    },
    {
      idnumeral: 1010,
      NombreNum: "REINT  EXPORTACIONES DE CARBON INCLUIDOS ANTICIPOS"
    },
    {
      idnumeral: 1020,
      NombreNum: "REINT EXPORTACIONES DE FERRONIQUEL INCLUIDOS ANT"
    },
    {
      idnumeral: 1030,
      NombreNum: "REINT EXP DE PETROLEO Y SUS DER INCLUIDOS ANTICIPOS"
    },
    {
      idnumeral: 1035,
      NombreNum: "EXPORTACIONES DE ORO"
    },
    {
      idnumeral: 1040,
      NombreNum: "REINT EXP DIF CAFÉ CARBON FERRONIQUEL PET Y SUS DER"
    },
  ];

  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  validarChilds(): boolean {
    if(this.data.childs){
      if(this.data.childs.length > 0){
        return true;
      }
    }
    return false;
  }

}