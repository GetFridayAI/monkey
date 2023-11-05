import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data!: Array<any>;
  @Input() headers!: Array<string>;

  keys!: Array<string>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.headers);
    if(this.data && this.data.length > 0) {
      this.keys = Object.keys(this.data[0]);
    }
  }
}
