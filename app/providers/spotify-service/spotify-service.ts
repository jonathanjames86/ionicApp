import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpotifyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpotifyService {
  static get parameters() {
       return [[Http]];
   }
  constructor(private http: Http) {}

  searchArtist(artist) {
    var url = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
