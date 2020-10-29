import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//map operator
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpofityService {
  constructor(private http: HttpClient) {}
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD7b4DIaxJE8UbtmWIhskdvzoXVDl42ckBsyLd3baI0p9aFRQ2OGZd9MppGehwRRyni-NTCv6lgs8mTiig',
      'Content-Type': 'text/plain; charset=utf-8',
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=10').pipe(
      map((response) => {
        return response['albums'].items;
      })
    );
  }
  getArtists(findAnything: string) {
    return this.getQuery(`search?q=${findAnything}&type=artist&limit=10`).pipe(
      map((searchResultData) => searchResultData['artists'].items)
    );
  }
  getArtist(id: string) {
    return this.getQuery(
      `https://api.spotify.com/v1/search?q=${id}&type=artist&limit=10`
    ).pipe(map((searchResultData) => searchResultData['artists'].items));
  }
}
