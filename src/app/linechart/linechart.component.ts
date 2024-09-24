import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  lineChart: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchLineChartData();
  }
  fetchLineChartData() {
    this.http.get<any[]>('assets/linechart-data.json').subscribe(data => {
      this.createLineChart(data);
    });
  }

  createLineChart(jsonData: any[]) {
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: jsonData.map(data => data.label),
        datasets: [{
          label: 'Attendance',
          data: jsonData.map(data => data.value),
          borderColor: 'purple',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}