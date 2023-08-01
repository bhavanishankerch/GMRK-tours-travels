import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
    isNavOpen = false; // Indicates whether the side navigation is open or not
  
    // Function to toggle the side navigation
    toggleSideNav() {
      this.isNavOpen = !this.isNavOpen;
    }

}
