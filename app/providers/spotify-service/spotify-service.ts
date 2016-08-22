import { Injectable } from '@angular/core';
import { Http, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  static get parameters() {
       return [[Http]];
   }
  constructor(private http: Http) {}
//This is where the api call takes place and then is imported to pages/spotify/spotify-api.ts
console.time('Function #1');
  searchArtist(artist) {
    var url = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist&limit=50';
    var response = this.http.get(url).map(res => res.json());
    return response;
  };
  console.timeEnd('Function #1')
}
