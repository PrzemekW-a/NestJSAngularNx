import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  imports: [MatTabGroup, MatTab],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
