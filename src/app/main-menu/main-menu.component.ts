import { Component, OnInit } from '@angular/core';
import { MainMenuService } from './main-menu.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public menuItems;

  constructor (
    private mainMenuService: MainMenuService,
  ) {}

  ngOnInit () {
    this.fetchItems();
  }

  fetchItems () {
    this.mainMenuService.fetchItems()
      .subscribe((res) => {
        this.menuItems = res;
      });
  }

}
