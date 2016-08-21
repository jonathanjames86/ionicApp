import {Component} from '@angular/core';
import MyApp from '../../app.ts';
import {NavController} from 'ionic-angular';
import {TestInfo} from '../list/list';
import {SpotifyService} from '../../providers/spotify-service/spotify-service.ts';

// import placeholder from './reactionic.png';

@Component({
  templateUrl: 'build/pages/spotify/spotify-api.html',
  providers: [SpotifyService]
})
export class Spotify{
    public artist: Array<any>;
    public image: Array<any>;

    constructor(public spotifyService: SpotifyService){

    }

    searchArtist(event) {
        if(event.target.value.length) {
            this.spotifyService.searchArtist(event.target.value).subscribe(
                data => {
                    this.artist = data.artists.items;
                    console.log(data.artists.items);
                },
                err => {console.log(err);},
                () => console.log('Artist Search Complete')
            );
        }
    }

    // itemTapped(event, artist) {
    //     console.log(artist);
    //     this.NavController.push(TestInfo, {
    //         artist: artist
    //     });
    // }

}
