import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordianpanel',
  templateUrl: './accordianpanel.component.html',
  styleUrls: ['./accordianpanel.component.css']
})
export class AccordianpanelComponent {
  @Input()   accoobj : any;
 

}
