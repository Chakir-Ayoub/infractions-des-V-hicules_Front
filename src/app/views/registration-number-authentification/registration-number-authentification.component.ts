import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registration-number-authentification',
  templateUrl: './registration-number-authentification.component.html',
  styleUrls: ['./registration-number-authentification.component.css']
})
export class RegistrationNumberAuthentificationComponent {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundImage = 'url("https://png.pngtree.com/thumb_back/fh260/back_pic/03/80/06/3757c30a762387b.jpg")';
}

}
