import { Component } from '@angular/core';
import { SpofityService } from 'src/app/services/spofity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private spotify: SpofityService) {}
  artistss: any[] = [];
  searching(findanything: string) {
    console.log(findanything);
    this.spotify.getArtist(findanything).subscribe((answer: any) => {
      console.log('the answer', answer.artists.items);
      this.artistss = answer.artists.items;
    });
  }
}
