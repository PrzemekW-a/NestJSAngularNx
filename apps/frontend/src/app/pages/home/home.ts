import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AiChat } from '../ai-chat/ai-chat';
import { HomeFinance } from '../home-finance/home-finance';

@Component({
  selector: 'app-home',
  imports: [MatTabGroup, MatTab, AiChat, HomeFinance],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
