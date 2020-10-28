import { Component } from '@angular/core';
import { SpofityService } from 'src/app/services/spofity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private spotify: SpofityService) {}
  searchArtists: any[] = [];
  searching(findAnything: string) {
    console.log(findAnything);
    this.spotify.getArtist(findAnything).subscribe((searchResultData: any) => {
      this.searchArtists = searchResultData;
    });
  }
}
