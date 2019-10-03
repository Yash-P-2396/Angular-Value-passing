import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  
  userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];
    
  constructor() { }
  ngOnInit() {
  }
  @Input() evnt: string;
  @Input() navEvnt: string;

  public getEvnt(evnt1){
    // call based on evnt1,evnt2
    if(evnt1 == 'button1')
      this.userTestStatus.push({ "id": 3, "name": "Stopped" },);
    else
      this.userTestStatus.push({ "id": 4, "name": "Running" },);    
  }
}
