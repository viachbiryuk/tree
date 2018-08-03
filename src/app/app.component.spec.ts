import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {MainMenuItemComponent} from './main-menu/main-menu-item/main-menu-item.component';
import {MainMenuFormComponent} from './main-menu/main-menu-form/main-menu-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MainMenuService} from './main-menu/main-menu.service';
import {MainMenuRadio} from './main-menu/main-menu.radio';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainMenuComponent,
        MainMenuItemComponent,
        MainMenuFormComponent
      ],
      providers: [
        MainMenuService,
        MainMenuRadio
      ],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
      ]

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
