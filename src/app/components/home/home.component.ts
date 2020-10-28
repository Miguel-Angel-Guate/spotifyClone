import { Component } from '@angular/core';
import { SpofityService } from 'src/app/services/spofity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // countries: any[] = [];
  THETOP: any[] = [];
  constructor(private spotify: SpofityService) {
    this.spotify.getNewReleases().subscribe((response: any) => {
      console.log('successfully', response.albums.items);
      this.THETOP = response.albums.items;
    });
    // this.http
    //   .get('https://restcountries.eu/rest/v2/lang/en')
    //   .subscribe((response: any) => {
    //     console.log(response);
    //     this.countries = response;
    //   });
  }

  ngOnInit(): void {}
}
