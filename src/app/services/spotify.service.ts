import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

apiUrl: string = 'https://api.spotify.com/v1';
headers = new HttpHeaders({
  'Authorization': 'Bearer BQDb-jSQ81_xz1Rfh2lvxNW05poM1QivY0PT8EtHgoD-ebRL9zFaGv2zZ1OLNGlBj3djizzOutNRtmEPvjo'
});


  constructor( private http: HttpClient ) {}


  getNewReleases() {
    return this.http.get(`${this.apiUrl}/browse/new-releases`, { 'headers': this.headers })
        .pipe( map( data => data['albums'].items ) );
  };


  getArtistsByName( artist: string ) {
    return this.http.get(`${this.apiUrl}/search?q=${artist}&type=artist&limit=20&offset=0`, { 'headers': this.headers })
        .pipe( map( data => data['artists'].items ) );
  }


  getArtistById( id: string ) {
    return this.http.get(`${this.apiUrl}/artists/${id}`, { 'headers': this.headers })
  }


  getTopTracks( id: string ) {
    return this.http.get(`${this.apiUrl}/artists/${id}/top-tracks?market=ES`, { 'headers': this.headers })
      .pipe( map( data => data['tracks'] ) );
  } 




}