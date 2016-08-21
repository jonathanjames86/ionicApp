import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {Spotify} from '../spotify/spotify-api';

@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class TestInfo {
      spotify = Spotify;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  //   this.selectedItem = navParams.get('item');
  //
  //   this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  //   'american-football', 'boat', 'bluetooth', 'build'];
  //
  //   this.items = [];
  //   for(let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
