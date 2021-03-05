import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('hoverEffect', [
      state('hover', style({ 
        filter: 'blur(4px)' +  ' ' + 'brightness(0.2)'
       })),
       state('out', style({ 
        filter: 'blur(0)' +  ' ' + 'brightness(1)'
       }))
    ])
  ]
})
export class CardComponent implements OnInit {

@Input() items: any[] = [];
isHover:boolean = false;

  constructor( private router: Router) { }


  ngOnInit(): void { }


  goArtist( item: any ) {
    if( item.type === "album" ){
      this.router.navigate(['/artist', item.artists[0].id]);
      
    } else {
      this.router.navigate(['/artist', item.id]);
    }
    
  }



}
