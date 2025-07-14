import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ai-chat',
  imports: [
    CommonModule,
    MatFormField,
    MatLabel,
    MatFormField,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    FormsModule,
    MatButton,
    MatIcon,
    ReactiveFormsModule,
  ],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.scss',
})
export class AiChat {
  form: FormGroup = new FormGroup({
    userMsg: new FormControl<string>(''),
  });

  sendMsg(): void {
    // TODO
    this.form.reset();
  }
}
