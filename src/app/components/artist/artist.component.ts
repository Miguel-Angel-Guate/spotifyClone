import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { SpofityService } from 'src/app/services/spofity.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  constructor(private router: ActivatedRoute, private spotify: SpofityService) {
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtist(params['id']);
    });
  }
  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
    });
  }

  ngOnInit(): void {}
}
