import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';
import { MatSelectModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatCheckboxModule, MatFormFieldModule, MatTreeModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { CovalentHttpModule, ITdHttpInterceptor } from '@covalent/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';

import { TreetableModule } from 'ng-material-treetable';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';

import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PruebatreeComponent } from './pruebatree/pruebatree.component';
import { EstructuraComponent } from './estructura/estructura.component';
import { DialogOverviewExampleDialog } from './estructura/dialog-overview-example-dialog';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';

const httpInterceptorProviders: Type<ITdHttpInterceptor>[] = [
  RequestInterceptor,
];


export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    PruebatreeComponent,
    EstructuraComponent,
    DialogOverviewExampleDialog,
    VisualizacionComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    // angular modules
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // material modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatTreeModule,
    MatCheckboxModule, 
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    SimplePdfViewerModule,
    MatSnackBarModule,
    MatTableFilterModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDialogModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentDataTableModule,
    CovalentExpansionPanelModule,
    CovalentVirtualScrollModule,
    CovalentDialogsModule,
    CovalentStepsModule,
    CovalentSearchModule,
    CovalentBreadcrumbsModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    // external modules
    NgxChartsModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    TreetableModule,
    DragDropModule,
    // routes
    appRoutes,
  ], // modules needed to run this module
  providers: [
    httpInterceptorProviders,
    Title,
  ], // additional providers needed for this module
  entryComponents: [ 
    DialogOverviewExampleDialog
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
