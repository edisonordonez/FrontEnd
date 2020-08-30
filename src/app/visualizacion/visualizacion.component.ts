import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';

//import { ItemsService, ProductsService, AlertsService } from '../../services';
//import { multi } from './data';

import { Node, Options } from 'ng-material-treetable';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.scss']
})
export class VisualizacionComponent implements OnInit {

 // Current date
 year: any = new Date().getFullYear();

 items: Object[];
 Balanzas: Balanza[];
 show: Boolean = false;
 showCCO: Boolean = false;
 isLoading: Boolean = false;

 id: number;
 Nombre: string;

 balanzas = new FormControl();

 balanzaList: string[] = ['Balanza IMC', 'Balanza OCC'];

 treeOptions: Options<Task> = {
   capitalisedHeader: true,
   customColumnOrder: [
     'Nombre', 'valor1', 'valor2', 'valor3', 'valor4', 'valor5'
   ],
   verticalSeparator: true,
   elevation: 5
 };
 
 constructor(private _titleService: Title,
             private _loadingService: TdLoadingService
             ) {
 }

 ngOnInit(): void {
   this._titleService.setTitle( 'Visualización de Estructuras' );
   this._loadingService.register('Balanzas');
 }

 loadBalanza(){
   (this.id==1) ? this.show = true: this.show = false;
   (this.id==2) ? this.showCCO = true: this.showCCO = false;
 }

 balanzasLoad(){
   this.Balanzas = [{
                     "id": 1,
                     "Nombre": 'Prueba 1'
                     }, 
                     {
                       "id": 2,
                       "Nombre":'Balanza CCO'
                     }
                   ];
 }


 arrayOfNodesTree: Node<Task>[] = [
   {
     value: {
         //id_nodo: 1,
         Nombre: '0001-I. CUENTA CORRIENTE',
         valor1: '116594690,63',
         valor2: '324869745,39',
         valor3: '103877550,37',
         valor4: '119496895,03',
         valor5: '76988188,2'
       },
       children: [
         {
           value: {
             //id_nodo: 2,
             Nombre: '0002-A. INGRESOS CORRIENTES.',
             valor1: '138759482,72',
             valor2: '350974071,68',
             valor3: '137723384,58',
             valor4: '146162582,03',
             valor5: '112458176,02'
           },
           children: [
             {
               value: {
                 //id_nodo: 3,
                 Nombre: '0003-1. REINTEGRO DE DIVISAS POR EXPORTACION DE BIENES',
                 valor1: '46612010,55',
                 valor2: '27068281,7',
                 valor3: '26901371,72',
                 valor4: '32677120,02',
                 valor5: '34601261,27'
                 },
                 children: [
                   {
                     value: {
                       //id_nodo: 4,
                       Nombre: '0004-A. CAFE',
                       valor1: '251513,46',
                       valor2: '536739,36',
                       valor3: '582681,16',
                       valor4: '692720,47',
                       valor5: '230067,17'
                       },
                       children: [
                         {
                           value: {
                             //id_nodo: 285,
                             Nombre: 'I) ANTICIPO POR EXPORTACIONES DE CAFE',
                             valor1: '75342,05',
                             valor2: '52174,7',
                             valor3: '182885,02',
                             valor4: '87121,22',
                             valor5: '210424,37'
                             },
                             children: [
                               
                             ]
                         },
                         {
                           value: {
                             //id_nodo: 286,
                             Nombre: '0006-II) CAFE DEFINITIVO',
                             valor1: '176171,41',
                             valor2: '484564,66',
                             valor3: '399796,14',
                             valor4: '605599,25',
                             valor5: '19642,8'
                             },
                             children: [
                               
                             ]
                         },
                         {
                           value: {
                             //id_nodo: 287,
                             Nombre: '0007-III) PREFINANCIACIONES DE CAFE',
                             valor1: '0',
                             valor2: '0',
                             valor3: '0',
                             valor4: '0',
                             valor5: '0'
                             },
                             children: [
                               
                             ]
                         }
                       ],
                   },
                   {
                     value: {
                       //id_nodo: 5,
                       Nombre: '0008-B. PRODUCTOS DIFERENTES AL CAFE',
                       valor1: '46360497,09',
                       valor2: '26531542,34',
                       valor3: '26318690,56',
                       valor4: '31984399,55',
                       valor5: '34371194,1'
                       },
                       children: [

                       ] 
                   }
                 ]
             },
             {
               value: {
                 //id_nodo: 14,
                 Nombre: '0019-2. ORO.',
                 valor1: '0',
                 valor2: '0',
                 valor3: '0',
                 valor4: '0',
                 valor5: '0'
               },
               children: [
               ]
             },
             {
               value: {
                 //id_nodo: 22,
                 Nombre: '0022-3.  EXPORTACION DE SERVICIOS.',
                 valor1: '40646124,05',
                 valor2: '276433728,95',
                 valor3: '49156819,84',
                 valor4: '47294929,7',
                 valor5: '40786429,76'
               },
               children: [
               ]
             }
           ]
         },
         {
           value: {
             //id_nodo: 47,
             Nombre: '0089-B. EGRESOS CORRIENTES.',
             valor1: '22164792,09',
             valor2: '26104326,29',
             valor3: '33845834,21',
             valor4: '26665687',
             valor5: '35469987,82'
           },
           children: [
           ]
         }
       ]
   }
 ]

 arrayOfNodesTree2: Node<Task>[] = [
   {
     value: {
         //id_nodo: 1,
         Nombre: '0001-I. CUENTA CORRIENTE',
         valor1: '116594690,63',
         valor2: '324869745,39',
         valor3: '103877550,37',
         valor4: '119496895,03',
         valor5: '76988188,2'
       },
       children: [
         {
           value: {
             //id_nodo: 2,
             Nombre: '0002-A. INGRESOS CORRIENTES',
             valor1: '138759482,72',
             valor2: '350974071,68',
             valor3: '137723384,58',
             valor4: '146162582,03',
             valor5: '112458176,02'
           },
           children: [
             {
               value: {
                 //id_nodo: 3,
                 Nombre: '0003-1. REINTEGRO DE DIVISAS POR EXPORTACION DE BIENES',
                 valor1: '46612010,55',
                 valor2: '27068281,7',
                 valor3: '26901371,72',
                 valor4: '32677120,02',
                 valor5: '34601261,27'
                 },
                 children: [
                   {
                     value: {
                       //id_nodo: 4,
                       Nombre: '0004-A. CAFE',
                       valor1: '251513,46',
                       valor2: '536739,36',
                       valor3: '582681,16',
                       valor4: '692720,47',
                       valor5: '230067,17'
                       },
                       children: [
                         {
                           value: {
                             //id_nodo: 285,
                             Nombre: 'I) ANTICIPO POR EXPORTACIONES DE CAFE',
                             valor1: '75342,05',
                             valor2: '52174,7',
                             valor3: '182885,02',
                             valor4: '87121,22',
                             valor5: '210424,37'
                             },
                             children: [
                               
                             ]
                         },
                         {
                           value: {
                             //id_nodo: 286,
                             Nombre: '0006-II) CAFE DEFINITIVO',
                             valor1: '176171,41',
                             valor2: '484564,66',
                             valor3: '399796,14',
                             valor4: '605599,25',
                             valor5: '19642,8'
                             },
                             children: [
                               
                             ]
                         },
                         {
                           value: {
                             //id_nodo: 287,
                             Nombre: '0007-III) PREFINANCIACIONES DE CAFE',
                             valor1: '0',
                             valor2: '0',
                             valor3: '0',
                             valor4: '0',
                             valor5: '0'
                             },
                             children: [
                               
                             ]
                         }
                       ],
                   },
                   {
                     value: {
                       //id_nodo: 5,
                       Nombre: '0008-B. PRODUCTOS DIFERENTES AL CAFE',
                       valor1: '46360497,09',
                       valor2: '26531542,34',
                       valor3: '26318690,56',
                       valor4: '31984399,55',
                       valor5: '34371194,1'
                       },
                       children: [

                       ] 
                   }
                 ]
             },
             {
               value: {
                 //id_nodo: 14,
                 Nombre: '0019-2. ORO.',
                 valor1: '0',
                 valor2: '0',
                 valor3: '0',
                 valor4: '0',
                 valor5: '0'
               },
               children: [
               ]
             },
             {
               value: {
                 //id_nodo: 22,
                 Nombre: '0022-3.  EXPORTACION DE SERVICIOS.',
                 valor1: '40646124,05',
                 valor2: '276433728,95',
                 valor3: '49156819,84',
                 valor4: '47294929,7',
                 valor5: '40786429,76'
               },
               children: [
               ]
             }
           ]
         },
         {
           value: {
             //id_nodo: 47,
             Nombre: '0089-B. EGRESOS CORRIENTES',
             valor1: '22164792,09',
             valor2: '26104326,29',
             valor3: '33845834,21',
             valor4: '26665687',
             valor5: '35469987,82'
           },
           children: [
             {
               value: {
                 //id_nodo: 48,
                 Nombre: '0090-1. IMPORTACION DE BIENES',
                 valor1: '8002368,21',
                 valor2: '10268530,1',
                 valor3: '14492245,31',
                 valor4: '8986650,59',
                 valor5: '14427785,81'
                 },
                 children: [
                   {
                     value: {
                       //id_nodo: 471,
                       Nombre: '0091-A.  IMPORTACIONES YA EMBARCADAS',
                       valor1: '4629071,7',
                       valor2: '6273312,91',
                       valor3: '9558511,51',
                       valor4: '6395797,25',
                       valor5: '10984613,37'
                       },
                       children: [
                       ]
                   }
                 ]
             }
           ]
         }
       ]
   }
 ]

 logNode(node: Node<Task>) {
   console.log(node);
   node.value.Nombre
 }

}

export interface Task {
 //id_nodo: number;
 Nombre: string;
 valor1: string;
 valor2: string;
 valor3: string;
 valor4: string;
 valor5: string;
}

export interface Balanza {
 id: number;
 Nombre: string;
}
