import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-information1',
  templateUrl: './information1.component.html',
  styleUrls: ['./information1.component.css']
})
export class Information1Component {
  isDesktopView = true; // Initially set to desktop view

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Update isDesktopView based on screen width
    this.isDesktopView = window.innerWidth > 756; 
  }
}
