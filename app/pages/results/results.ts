import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReactIonic } from '../hello-ionic/hello-ionic';

@Component({
  templateUrl: 'build/pages/results/results.html',
})
export class Results {
  home = ReactIonic;
  constructor(private navCtrl: NavController) {

  }

}
