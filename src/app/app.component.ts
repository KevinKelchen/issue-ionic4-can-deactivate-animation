import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home (NavController.back)',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List (Router.navigate)',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Bonus (Router.navigate)',
      url: '/bonus',
      icon: 'star'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onClick(page: any) {
    if (page.url === '/home') {
      this.navController.back();
    } else if (page.url === '/list') {
      this.router.navigate([page.url]);
    } else if (page.url === '/bonus') {
      this.router.navigate([page.url]);
    }
  }
}
