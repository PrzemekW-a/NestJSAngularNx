import {
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-home-finance',
  imports: [CommonModule],
  templateUrl: './home-finance.html',
  styleUrl: './home-finance.css',
})
export class HomeFinance {
  @ViewChild('csvUploader')
  csvUploader!: ElementRef;

  file: WritableSignal<File | null> = signal(null);

  readonly #http = inject(HttpClient);

  constructor() {
    effect(() => {
      if (this.file() === null && this.csvUploader) {
        this.csvUploader.nativeElement.value = '';
      }
    });
  }

  submitCsv() {
    const file = this.file();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    this.#http
      .post('/api/csv-upload', formData)
      .pipe(take(1))
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  fileChange(inputData?: Event) {
    const inputFile: File | undefined = (inputData?.target as HTMLInputElement)
      .files?.[0];

    if (inputFile) {
      this.file.set(inputFile);
    }
  }

  reset() {
    this.file.set(null);
  }
}
