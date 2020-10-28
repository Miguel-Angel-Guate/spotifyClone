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
        'Bearer BQA9hWlvr8wruCxDlWh99NRBUUPvsV2S1BapXdL7Mqko9cXWhP-Rg1Cy0Dt6yxdqQWKPCK3TOH_gWr7VKYg',
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
  getArtist(findAnything: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA9hWlvr8wruCxDlWh99NRBUUPvsV2S1BapXdL7Mqko9cXWhP-Rg1Cy0Dt6yxdqQWKPCK3TOH_gWr7VKYg',
      'Content-Type': 'text/plain; charset=utf-8',
    });
    responseType: 'text' as 'json';
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${findAnything}&type=artist&limit=10`,
      {
        headers,
      }
    );
  }
}
