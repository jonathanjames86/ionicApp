import {Component} from '@angular/core';
import MyApp from '../../app.ts';
import {NavController} from 'ionic-angular';
import {TestInfo} from '../list/list';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class ReactIonic {
  testInfo = TestInfo;
  constructor( private nav: NavController) {

  }
}
