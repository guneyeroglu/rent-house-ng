import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import dbData from '../../../db.json';
import { IHouse } from '../../global/interfaces';
import { HouseListItemComponent } from '../../components/house-list-item/house-list-item.component';

@Component({
  selector: 'hr-home',
  standalone: true,
  imports: [HouseListItemComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data: IHouse[] = [];
  filteredData: IHouse[] = [];
  constructor() {
    this.data = dbData;
    this.filteredData = this.data;
  }

  onClickToFilterHouse(e: string) {
    if (!e) {
      this.filteredData = this.data;
      return;
    }

    this.filteredData = this.data.filter(
      (house: IHouse) =>
        house.city.toLowerCase().includes(e.toLowerCase()) ||
        house.state.toLowerCase().includes(e.toLowerCase())
    );
  }
}
