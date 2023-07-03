import { Component, ViewChild } from '@angular/core';
import { accordianService } from '../shared/Detail.service';
import { Data } from '../shared/Data.model';

@Component({
  selector: 'app-accordian-form',
  templateUrl: './accordian-form.component.html',
  styleUrls: ['./accordian-form.component.css']
})
export class AccordianFormComponent {

  @ViewChild('form') formobj:any;
  constructor(private dataserv : accordianService){}


  onSubmit(){
    console.log(this.formobj)
    let newPost = new Data(this.formobj.value.accotitle,this.formobj.value.accoDesc)
    this.dataserv.addNewObj(newPost);
    this.formobj.reset()

  }

}
