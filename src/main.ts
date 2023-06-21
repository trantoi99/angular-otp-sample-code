import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { OtpInputComponent } from './app/otp-input/otp-input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, OtpInputComponent],
  template: `
    <app-otp-input #input="ngModel" [(ngModel)]="data"/>
    <b>Entered value:</b> {{data}}
    <br>
    <b>Input valid:</b> {{input.valid}}
  `,
  styles: [
    `app-otp-input {
      margin-bottom: 24px;
    }`,
  ],
})
export class App {
  data = '';
}

bootstrapApplication(App);
