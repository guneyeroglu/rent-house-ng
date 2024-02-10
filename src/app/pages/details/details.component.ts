import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IHouse } from '../../global/interfaces';
import dbData from '../../../db.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hr-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  data: IHouse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  index!: number;

  constructor() {
    this.index = +this.route.snapshot.params['id'];
    this.data = dbData.find((house: IHouse) => house.id === this.index - 1); // index'i +1 olarak gönderdiğim için burada eşitliyorum.
    console.log(this.data);
  }
}
