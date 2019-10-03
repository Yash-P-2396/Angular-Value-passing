import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userTestStatus = [
    { "id": 0, "name": "INT" },
    { "id": 1, "name": "DEV" },
    { "id": 2, "name": "PROD" }
  ];

  @Input() evnt: string;
  @Input() navEvnt: string;

  public getEvnt(evnt1){
    // call based on evnt1,evnt2
    if(evnt1 == 'button1')
      this.userTestStatus.push({ "id": 3, "name": "UAT" },);
    else
      this.userTestStatus.push({ "id": 4, "name": "SIT" },);    
  }

}
