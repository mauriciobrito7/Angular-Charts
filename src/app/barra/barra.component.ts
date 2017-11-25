import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-barra",
  templateUrl: "./barra.component.html",
  styleUrls: ["./barra.component.scss"]
})
export class BarraComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [4, 7, 20, 11, 15, 20, 30, 12, 15, 25, 34, 40], label: "Número de telefonos vendidos" }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
      50,
      50,
      50,
      50,
      50
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
