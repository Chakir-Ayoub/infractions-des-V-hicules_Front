import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit  {
  constructor(private elementRef: ElementRef) {}



  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.ownerDocument
    // .body.style.backgroundColor = ' #467686';
    }

}
