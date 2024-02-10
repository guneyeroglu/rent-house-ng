import { Component } from '@angular/core';
import { HomeIconComponent } from '../../../assets/svgs';

@Component({
  selector: 'hr-header',
  standalone: true,
  imports: [HomeIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
