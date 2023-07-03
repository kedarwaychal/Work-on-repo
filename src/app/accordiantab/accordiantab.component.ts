import { Component, OnInit } from '@angular/core';
import { accordianService } from '../shared/Detail.service';

@Component({
  selector: 'app-accordiantab',
  templateUrl: './accordiantab.component.html',
  styleUrls: ['./accordiantab.component.css']
})
export class AccordiantabComponent implements OnInit{

  detailList : [] = [];



  constructor(private detailserve : accordianService){}

  ngOnInit() : void{
    this.detailserve.dataSub.subscribe((param)=>{
      this.detailList = param;
    })
  }



}
