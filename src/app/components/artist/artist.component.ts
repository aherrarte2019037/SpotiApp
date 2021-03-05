import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  topTracks: any;
  hasImage: boolean = false;
  loaded: boolean = false;
  urlWidget: string = 'https://open.spotify.com/embed?uri=';

  constructor( private router: ActivatedRoute, private spotifyService: SpotifyService, private location: Location ) { }


  ngOnInit(): void {
    this.router.params.subscribe( params => {
      this.setArtista(params.id);
      this.setTopTracks(params.id);
    });
  }


  setArtista( id: string ) {
    this.spotifyService.getArtistById( id ).subscribe( data => {
      this.artist = data;
      this.hasImage = this.artist.images.length > 0? true : false;
      this.loaded = true; 
    });
  }


  setTopTracks( id: string ){
    this.spotifyService.getTopTracks( id ).subscribe( data => {
      this.topTracks = data;
    });
  }


  goBack() {
    this.location.back();
  }



}
