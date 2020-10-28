import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpofityService {
  constructor(private http: HttpClient) {}
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAAzI871IbAd4sF_hBbMHlAaNvk-LzRC6kKsygD_alBu6fcyiYqQuP33lwm3ouabxT9Re5PPq8oHdDUM7k',
      'Content-Type': 'text/plain; charset=utf-8',
    });
    responseType: 'text' as 'json';
    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=10',
      {
        headers,
      }
    );
  }
}
