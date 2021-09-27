import { Component, OnInit } from '@angular/core';
import { EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public contextMenuItems: Object[] = [];
  public editSettings: EditSettingsModel = {};
  public filterSettings: Object = {};
  public selectionSettings: Object = {};

  title = 'treegrid-trial';

  ngOnInit() {
    this.data = sampleData;

    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Cell',
    };

    this.selectionSettings = { type: 'Multiple' };

    this.filterSettings = { type: 'Menu' };

    this.contextMenuItems = [
      'Data Type',
      'Default Value',
      'Font',
      'Color',
      'Alignment',
      'Text-wrap',
      'AutoFit',
      'AutoFitAll',
      'SortAscending',
      'SortDescending',
      'Edit',
      'Delete',
      'Save',
      'Cancel',
      'PdfExport',
      'ExcelExport',
      'CsvExport',
    ];
  }
}
