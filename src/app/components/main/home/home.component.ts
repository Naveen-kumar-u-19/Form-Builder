import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';
import { MainConstant, SideMenu } from '../../../constants/main.constant';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, FlexLayoutDirective, CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constantDetails!: MainConstant;
  selectedMenu!: SideMenu;
  constructor(private router: Router) {
    this.constantDetails = new MainConstant();
  }
  ngOnInit() {
    let findMenu = this.constantDetails.sideMenuList.find((menu: SideMenu) => menu.link === this.router.url);
    if (findMenu?.link) {
      this.selectedMenu = findMenu;
    }
    else
      this.selectedMenu = this.constantDetails.sideMenuList?.[0];
    this.router.navigate([this.selectedMenu.link]);
  }

  navigateTo(menu: SideMenu): void {
    this.selectedMenu = menu;
    this.router.navigate([this.selectedMenu.link]);
  }

}
