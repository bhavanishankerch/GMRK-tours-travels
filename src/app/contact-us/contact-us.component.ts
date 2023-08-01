import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {
   // Use ViewChild to access the template reference variable
   @ViewChild('contactSection', { static: false }) contactSection!: ElementRef;

   constructor() {}
 
   ngAfterViewInit() {}
 
   // Function to handle the scroll behavior when clicking the "Get In Touch" button
   scrollToContactSection() {
     if (this.contactSection) {
       this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
     }
   }

}
