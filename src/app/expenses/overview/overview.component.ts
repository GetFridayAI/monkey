import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router";
import Chart from 'chart.js/auto';

@Component({
  selector: 'expenses-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ExpensesOverviewComponent implements OnInit, AfterViewInit {
  @ViewChild("chartContainer") chartContainer!: ElementRef;
  spendLimit: number = 50000;
  currentSpend: number = 30000;

  data = {
    labels: [
      "Expenses Incurred",
      "Monthly Budget"
    ],
    datasets: [{
      label: 'Expenses Overview',
      data: [this.currentSpend, this.spendLimit],
      backgroundColor: [
        'rgb(175, 0, 36)',
        'rgb(8, 115, 97)'
      ],
      borderColor: [
        'rgb(175, 0, 36)',
        'rgb(8, 115, 97)'
      ],
      hoverOffset: 4
    }]
  };
  config = {
    type: 'doughnut',
    data: this.data
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    new Chart(
      this.chartContainer.nativeElement,
      {
        type: 'doughnut',
        data: this.data
      }
    );
  }

  routeTo(route: string): void {
    this.router.navigate([route]);
  }

}
