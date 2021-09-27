import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ColumnMenu,
  ColumnMenuService,
  ContextMenuService,
  EditService,
  ExcelExportService,
  FilterService,
  PdfExportService,
  ReorderService,
  ResizeService,
  SortService,
  TreeGridModule,
} from '@syncfusion/ej2-angular-treegrid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule],
  providers: [
    ResizeService,
    ContextMenuService,
    SortService,
    ExcelExportService,
    PdfExportService,
    EditService,
    ReorderService,
    ColumnMenuService,
    FilterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
