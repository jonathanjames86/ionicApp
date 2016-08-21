import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Animation } from '../animation/animation'
/*
  Generated class for the LocalDbPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/local-db/local-db.html',
})
export class LocalDb {
  animation = Animation;
  constructor(private navCtrl: NavController) {

  }

}
