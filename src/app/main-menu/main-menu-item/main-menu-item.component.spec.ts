import { MainMenuRadio } from '../main-menu.radio';
import { MainMenuService } from '../main-menu.service';
import { TestBed } from '@angular/core/testing';
import { MainMenuItemComponent } from './main-menu-item.component';


describe('MainMenuItemComponent', () => {

  let stubMainMenuService;
  let stubMainMenuRadio;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainMenuItemComponent
      ],
      providers: [
        MainMenuService,
        MainMenuRadio
      ]
    });
  });

  it('', () => {

  });


});
