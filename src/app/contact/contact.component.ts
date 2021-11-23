import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    massage: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  checkdata() {
    const formdata = JSON.stringify(this.contactForm.value);
    console.log(formdata);
  }
}
