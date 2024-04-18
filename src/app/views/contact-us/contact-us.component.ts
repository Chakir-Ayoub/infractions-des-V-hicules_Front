import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements AfterViewInit , OnInit {
  FormData: FormGroup;
  constructor(private elementRef: ElementRef,private builder: FormBuilder) {}
  ngOnInit(): void {
    this.FormData=this.builder.group({
      firstname: new FormControl('',[Validators.required]),
      from_name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.compose([Validators.required,Validators.email])]),
      subject: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required])
    })
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('https://www.ledesk.ma/wp-content/uploads/2022/07/Echangeur-Lixus.jpg')";
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";  }

  sendEmail(email){
    emailjs.init('tPm9ccHY00quuM3Af');
    emailjs.send("service_ix1rvsj","template_1piqk67",email);
    Swal.fire({
      title: "Message Well Sent!",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3545/3545759.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }
}
