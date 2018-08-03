import { MainMenuService } from './main-menu.service';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { of } from 'rxjs';

const mainMenuData = require('../../assets/main-menu.data.json');


describe('MainMenuService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let mainMenuService: MainMenuService;
  let data;
  let testBranch;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    mainMenuService = new MainMenuService(<any> httpClientSpy);
    testBranch = 'Бестселлеры';
    data = _.clone(mainMenuData);
  });

  it('should delete branch node', () => {
    const branchNamesBefore = mainMenuService.extractBranchNames(data.children);
    mainMenuService.destroyBranch(data.children, testBranch);
    const branchNamesAfter = mainMenuService.extractBranchNames(data.children);

    // make sure that branch name is gone
    expect(branchNamesBefore).toContain(testBranch.toLowerCase());
    expect(branchNamesAfter).not.toContain(testBranch.toLowerCase());
    // make sure that array became shorter by exactly 1 element
    expect(branchNamesBefore.length).toEqual(branchNamesAfter.length + 1);
  });

  it('should raise an error if the branchNode is an empty array', () => {
    spyOn(mainMenuService, 'destroyBranch').and.callThrough();
    mainMenuService.destroyBranch([], testBranch);
    expect(mainMenuService.destroyBranch).toThrow();
  });

  it('#fetchItems() should fetch main-menu data', () => {
    httpClientSpy.get.and.returnValues(of(data));

    mainMenuService.fetchItems().subscribe((menuItems) => {
      expect(<any>menuItems).toEqual(data);
    });

  });

});
