import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <button (click)="test()">test</button>
  `,
})
export class App {
  readonly #http = inject(HttpClient);

  test(): void {
    this.#http.get('/api/messages').subscribe(console.log);
  }
}
