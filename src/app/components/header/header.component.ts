import { Component } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import {
  HomeIconComponent,
  HamburgerIconComponent,
} from '../../../assets/svgs';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'hr-header',
  standalone: true,
  imports: [
    HomeIconComponent,
    HamburgerIconComponent,
    NavComponent,
    DrawerComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openDrawer: boolean = false;

  handleOpenDrawer() {
    this.openDrawer = true;
  }

  handleCloseDrawer() {
    this.openDrawer = false;
  }
}
