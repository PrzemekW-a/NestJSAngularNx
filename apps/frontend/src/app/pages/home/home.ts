import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AiChat } from '../ai-chat/ai-chat';

@Component({
  selector: 'app-home',
  imports: [MatTabGroup, MatTab, AiChat],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
