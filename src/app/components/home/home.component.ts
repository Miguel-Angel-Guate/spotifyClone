import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpofityService } from 'src/app/services/spofity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // countries: any[] = [];

  THETOP: any[] = [];
  constructor(private spotify: SpofityService, private router: Router) {
    this.spotify.getNewReleases().subscribe((response: any) => {
      this.THETOP = response;
    });
    // this.http
    //   .get('https://restcountries.eu/rest/v2/lang/en')
    //   .subscribe((response: any) => {
    //     console.log(response);
    //     this.countries = response;
    //   });
  }
}
