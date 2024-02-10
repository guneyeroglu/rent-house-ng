import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hr-house-list-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './house-list-item.component.html',
  styleUrl: './house-list-item.component.scss',
})
export class HouseListItemComponent {
  @Input() id!: number;
  @Input() src!: string;
  @Input() alt!: string;
  @Input() location!: string;
  @Input() estateName!: string;
}
