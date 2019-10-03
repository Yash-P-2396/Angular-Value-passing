import { Component,ViewChild } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evnt1:string;
  evnt2:string;
  loadComponent:boolean;
  @ViewChild('child',{static: false}) child: Comp1Component ; 
  @ViewChild('child1',{static: false}) child1: Comp2Component ;

  tile1(){
    this.evnt1 = 'button1';
  }
  tile2(){
    this.evnt1 = 'button2';
  }
  health(){
    this.child.getEvnt(this.evnt1);
  }
  enviornment(){
    this.child1.getEvnt(this.evnt1);
  }
}
