import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class MainMenuService {

  constructor (
    private http: HttpClient
  ) {}

  destroyBranch (branches, branchName) {
    branches.find((branch, index) => {
      if (branch && branch.name === branchName) {
        branches.splice(index, 1);
      }
    });
  }

  extractBranchNames (branchNode) {
    return branchNode.map((branch) => {
      return branch.name.toLowerCase();
    });
  };

  fetchItems () {
    return this.http.get('/assets/main-menu.data.json');
  }




}
