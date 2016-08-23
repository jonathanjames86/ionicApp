import {Component, ViewChild, enableProdMode} from '@angular/core';
import {ionicBootstrap, App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ReactIonic} from './pages/hello-ionic/hello-ionic';
import {TestInfo} from './pages/list/list';


enableProdMode();


@Component({
  templateUrl: 'build/app.html'
})
export default class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = ReactIonic;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'My First List', component: TestInfo },
      { title: 'Test Home', component: ReactIonic },
      { title: 'Test Intro', component: TestInfo },
      { title: 'My First List', component: TestInfo },


    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  // openPage(page) {
  //   // close the menu when clicking a link from the menu
  //   this.menu.close();
  //   // navigate to the new page if it is not the current page
  //   this.nav.setRoot(page.component);
  // }
}

ionicBootstrap(MyApp);
