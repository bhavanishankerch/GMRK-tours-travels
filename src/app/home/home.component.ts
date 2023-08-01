import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('aboutSectionRef', { static: false }) aboutSectionRef!: ElementRef;

  constructor() {}
 
  ngAfterViewInit() {}

  // Function to handle the scroll behavior when clicking the "about-section" button
  scrollToAboutSection() {
    if (this.aboutSectionRef) {
      this.aboutSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
