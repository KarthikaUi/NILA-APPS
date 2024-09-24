import { Component } from '@angular/core';
import  Chart from 'chart.js/auto'; 
import { CommonserviceService } from '../commonservice.service';


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent {
  data:any;
  dataamount:any[]=[];
  datayear:any[]=[];
  datacolor:any[]=[];
  databorder:any[]=[];


constructor(private _commonservice:CommonserviceService){

}
  ngOnInit(){
    
    this._commonservice.showdata().subscribe(res=>{
  this.data =res;

  if(this.data!=null){
    for(let  i=0; i<this.data.length; i++){
      this.datayear.push(this.data[i].year);
      this.dataamount.push(this.data[i].amount);
      this.datacolor.push(this.data[i].color);
      this.databorder.push(this.data[i].bordercolor);
    }
  }
  this.showchartdata(this.datayear,this.dataamount,this.datacolor,this.databorder);

});
}

showchartdata(datayear:any,dataamount:any,datacolor:any,databorder:any){
  console.log(datayear);
  new Chart("mychart", {
    type: 'bar',
    data: {
      labels: datayear,
      datasets: [{
        label: 'pending',
        data: dataamount,
        borderWidth: 1,
        backgroundColor:'lightgrey',
      borderColor:databorder
      },
      {
        label: 'completed',
        data: dataamount,
        borderWidth: 1,
        backgroundColor:'green',
      borderColor:databorder
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

}
