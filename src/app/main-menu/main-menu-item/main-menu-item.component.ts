import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MainMenuService } from '../main-menu.service';
import { MainMenuRadio } from '../main-menu.radio';

@Component({
  selector: 'main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnChanges, OnInit {

  @Input()
  public menuItem: any = {};

  @Output()
  public onDestroy = new EventEmitter();

  public isNestedBranchesDisplayed: boolean = true;
  public isRoot: boolean = false;
  public formIsOpened: boolean = false;


  constructor (
    private mainMenuService: MainMenuService,
    private mainMenuRadio: MainMenuRadio
  ) {}

  ngOnInit () {
    this.listenToFormEvents();
  }

  toggleNestedBranches() {
    this.isNestedBranchesDisplayed = !this.isNestedBranchesDisplayed;
  }

  ngOnChanges() {
    this.checkForRoot();
  }

  checkForRoot () {
    this.isRoot = this.menuItem && !this.menuItem.name;
  }

  listenToFormEvents () {
    this.mainMenuRadio.closeAllForms$.subscribe(() => {
      this.closeForm();
    });
  }

  openForm () {
    this.mainMenuRadio.closeAllForms();
    this.formIsOpened = true;
  }

  closeForm () {
    this.formIsOpened = false;
  }

  onBranchAdd (branch) {
    if (!this.menuItem.children) {
      this.menuItem.children = [];
    }
    this.menuItem.children.push(branch);
  }

  prepareForbiddenValues () {
    const branchNode = this.menuItem.children || [];
    return this.mainMenuService.extractBranchNames(branchNode);
  }

  destroyNestedBranch (nestedBranchName) {
    this.mainMenuService.destroyBranch(this.menuItem.children, nestedBranchName);
  }

  destroyBranch () {
    this.onDestroy.emit(this.menuItem.name);
  }

  hasNestedBranches() {
    return this.menuItem && this.menuItem.children && this.menuItem.children.length !== 0;
  }

}
