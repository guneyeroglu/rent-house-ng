import { Component } from '@angular/core';
import { HouseListContainerComponent } from '../house-list-container/house-list-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseListContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
