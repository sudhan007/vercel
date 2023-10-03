import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-information2',
  templateUrl: './information2.component.html',
  styleUrls: ['./information2.component.css']
})
export class Information2Component {

  displayh1=true

  @HostListener ('window:resize',['$event'])
  onResize(event:Event):void
  {
    this.update();
  }

  constructor(){
    this.update();
  }

  update(){
    this.displayh1=window.innerWidth <756;
  }

}
