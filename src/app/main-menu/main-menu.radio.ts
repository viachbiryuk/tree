import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';


@Injectable()
export class MainMenuRadio {

  private branchFormSource = new Subject();

  public closeAllForms$ = this.branchFormSource.asObservable();

  public closeAllForms () {
    this.branchFormSource.next();
  }

}
