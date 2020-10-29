import { Component } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { SpofityService } from 'src/app/services/spofity.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpofityService) {
    this.router.params.subscribe((params) => {
      // console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((artist) => {
      this.artist = artist;
    });
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
      console.log(topTracks);
    });
  }
}
