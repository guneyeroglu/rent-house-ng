import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CloseIconComponent } from '../../../assets/svgs';

@Component({
  selector: 'hr-drawer',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Output() close = new EventEmitter<void>();
}
