import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  imports: [FormsModule, ReactiveFormsModule],
})
export class MessageComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      licensePlate: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(400)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.messageForm.valid) {
      console.log(this.messageForm.value);
    }
  }
}
