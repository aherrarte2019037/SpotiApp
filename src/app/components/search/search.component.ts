import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: [] = [];
  matches: boolean = true;
  loaded: boolean = true;
  errorMessage: any = null;

  constructor( private spotifyservice: SpotifyService ) { }


  ngOnInit(): void { }


  search( texto: string ){
    if(texto){
      this.loaded = false;
      this.spotifyservice.getArtistsByName(texto).subscribe( (data: any) => {
        this.results = data;
        this.matches = this.results.length === 0?  false : true;
        this.loaded = true;
      },
      err => {
        this.errorMessage = err.error.error;
        console.log(this.errorMessage);
        
      });

    }else{
      this.results = [];
    }
    
  }



}
