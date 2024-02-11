import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HomeIconComponent,
  HamburgerIconComponent,
} from '../../../assets/svgs';
import { NavComponent } from '../nav/nav.component';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'hr-header',
  standalone: true,
  imports: [
    HomeIconComponent,
    HamburgerIconComponent,
    NavComponent,
    DrawerComponent,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDrawerOpen: boolean = false;

  handleOpenDrawer() {
    this.isDrawerOpen = true;
  }

  handleCloseDrawer() {
    this.isDrawerOpen = false;
  }
}
