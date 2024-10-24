import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FlexLayoutDirective } from '../../../directives/attribute-directives/flex-layout.directive';
import { MainConstant, SideMenu } from '../../../constants/main.constant';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';
@Component({
  selector: 'app-home-menu-drawer',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, FlexLayoutDirective, CommonModule, MatIconModule],
  templateUrl: './home-menu-drawer.component.html',
  styleUrl: './home-menu-drawer.component.scss'
})
export class HomeMenuDrawerComponent implements OnInit {
  /**
   * Variable which holds main constant details
   */
  constantDetails!: MainConstant;
  /**
   * Variable which holds selected menu details
   */
  selectedMenu!: SideMenu;
  /**
   * It is used to initialize other services
   * @param router used for navigation
   */
  constructor(private router: Router) {
    this.constantDetails = new MainConstant();
  }
  /**
   * Angular life cycle hooks
   */
  ngOnInit() {
    const findMenu = this.constantDetails.sideMenuList.find((menu: SideMenu) => menu.link === this.router.url);
    if (findMenu?.link) {
      this.selectedMenu = findMenu;
    }
    else
      this.selectedMenu = this.constantDetails.sideMenuList?.[0];
    this.router.navigate([this.selectedMenu.link]);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentRoute = event.urlAfterRedirects;
      this.navigateTo(currentRoute);
    });
  }
  /**
   * Function used to navigate to menu
   * @param menuLink contains menu link to navigate
   */
  navigateTo(menuLink: string): void {
    const findMenu = this.constantDetails.sideMenuList.find((menu: SideMenu) => menu.link === menuLink);
    if (findMenu) {
      this.selectedMenu = findMenu;
      this.router.navigate([this.selectedMenu.link]);
    }
  }

}