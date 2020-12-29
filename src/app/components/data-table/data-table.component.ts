import { Component, OnInit } from '@angular/core';
import {ApiClientService} from '../../services/api-client.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public items = [];

  displayedColumns: string[] = ['key', 'value'];
  dataSource: ItemElement[] = [];

  constructor(public apiClientService: ApiClientService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.apiClientService.getCurrency('USD').pipe(take(1)).subscribe(
        res => {
          for (const [key, value] of Object.entries(res.rates)) {
            this.items.push({key, value});
          }
          this.dataSource = this.items;
        }
      );
    }, 5000);
  }

}

export interface ItemElement {
  key: string;
  value: string;
}
