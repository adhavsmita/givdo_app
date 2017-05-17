import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  IonicPage,
  NavController,
  ToastController,
} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { FacebookService } from '../../app/auth/facebook.service';
import {
  State,
  getAuthError,
  getAuthSession,
  getLoginInProcess,
} from '../../app/app.reducer';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  error$: Observable<any>;
  session$: Observable<any>;
  loginInProcess$: Observable<boolean>;

  constructor(
    private store: Store<State>,
    public navCtrl: NavController,
    public facebook: FacebookService,
    public toast: ToastController,
  ) {
    this.error$ = this.store.select(getAuthError);
    this.session$ = this.store.select(getAuthSession);
    this.loginInProcess$ = this.store.select(getLoginInProcess);

    this.error$.subscribe((error) => {
      this.showError(error);
    });

    this.session$.subscribe((session) => {
      if (session)
        this.navCtrl.push(TabsPage);
    });
  }

  login() {
    this.facebook.login();
  }

  private showError(error) {
    if (!error) return;

    let toast = this.toast.create({
      message: error.error,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
