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

  NEWRELEASE: any[] = [];
  constructor(private spotify: SpofityService, private router: Router) {
    this.spotify.getNewReleases().subscribe((response: any) => {
      this.NEWRELEASE = response;
    });
  }
}
