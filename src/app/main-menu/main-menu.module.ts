import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainMenuService } from './main-menu.service';
import { MainMenuRadio } from './main-menu.radio';

import { MainMenuComponent } from './main-menu.component';
import { MainMenuItemComponent } from './main-menu-item/main-menu-item.component';
import { MainMenuFormComponent } from './main-menu-form/main-menu-form.component';


@NgModule({
  declarations: [
    MainMenuComponent,
    MainMenuItemComponent,
    MainMenuFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainMenuComponent,
    MainMenuItemComponent
  ],
  providers: [
    MainMenuRadio,
    MainMenuService
  ]
})
export class MainMenuModule {}
