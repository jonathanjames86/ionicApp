import {Component} from '@angular/core';
import MyApp from '../../app.ts';
import {NavController} from 'ionic-angular';
import {TestInfo} from '../list/list';
import {SpotifyService} from '../../providers/spotify-service/spotify-service.ts';


@Component({
  templateUrl: 'build/pages/spotify/spotify-api.html',
  providers: [SpotifyService]
})
export class Spotify{
  public spotify: any;

  constructor(public spotifyService: SpotifyService){
    this.loadArtist()
  }
  loadArtist(){
    this.spotifyService.load().
    then(data => {
      this.spotify = data;
    })
  }

}
