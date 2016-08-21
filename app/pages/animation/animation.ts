import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Results } from '../results/results';


@Component({
  templateUrl: 'build/pages/animation/animation.html',
})
export class Animation {
  results = Results;
  constructor(private navCtrl: NavController) {

  }

}
