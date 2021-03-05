import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any = [];
  loaded: boolean = false;
  errorMessage: any = null;

  constructor( private spotifyService: SpotifyService ) {}


  ngOnInit(): void {
    this.spotifyService.getNewReleases()
      .subscribe( data => {
        this.newReleases = data
        this.loaded = true;
      },
      err => {
        this.errorMessage = err.error.error;
      });

  }




}
