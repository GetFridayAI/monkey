import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MenuSection, MenuItem } from './side-panel-navigation.model';

@Component({
  selector: 'side-panel-navigation',
  templateUrl: './side-panel-navigation.component.html',
  styleUrls: ['./side-panel-navigation.component.css']
})

export class SidePanelNavigationComponent implements OnInit {

  menu: Array<MenuSection> = [
    {
      title: "Menu",
      menuItems: [
        {
          title: "Home",
          hasIcon: false,
          isActive: true,
          link: "home"
        } as MenuItem,
        {
          title: "Transactions",
          hasIcon: false,
          isActive: false,
          link: "transactions"
        } as MenuItem,
        {
          title: "Cards Center",
          hasIcon: false,
          isActive: false,
          link: "cards"
        } as MenuItem,
        {
          title: "Accounts Center",
          hasIcon: false,
          isActive: false,
          link: "accounts"
        } as MenuItem
      ] as Array<MenuItem>
    } as MenuSection,
    {
      title: "Other Options",
      menuItems: [
        {
          title: "Settings",
          hasIcon: false,
          isActive: false,
          link: "settings"
        } as MenuItem,
        {
          title: "Logout",
          hasIcon: false,
          isActive: false,
          link: "logout"
        } as MenuItem
      ] as Array<MenuItem>
    } as MenuSection
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resetActiveMenu(): void {
    this.menu.map((section) => {
      section.menuItems.map((item) => {
        if (item.isActive) item.isActive = false;
      })
    })
  }

  navigateToPage(page: string, menuSectionIndex: number, menuItemIndex: number): void {
    this.router.navigate(["/" + page]);
    this.resetActiveMenu();
    this.menu[menuSectionIndex].menuItems[menuItemIndex].isActive = true;
  }

}
