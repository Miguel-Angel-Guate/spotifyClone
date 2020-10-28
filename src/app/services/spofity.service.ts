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
        'Bearer BQBTV3aAxS8BEx_hgGyypRKJgF40U5x4mMqRr_H3EvYeIYwvPnsbz2nqFavr614Xjw3c__Pvb1cZNTipmoc',
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
    responseType: 'text' as 'json';

    //this is an observable
    // return this.http
    //   .get('https://api.spotify.com/v1/browse/new-releases?limit=10', {
    //     headers,
    //   })
  }
  getArtist(findAnything: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBTV3aAxS8BEx_hgGyypRKJgF40U5x4mMqRr_H3EvYeIYwvPnsbz2nqFavr614Xjw3c__Pvb1cZNTipmoc',
      'Content-Type': 'text/plain; charset=utf-8',
    });
    responseType: 'text' as 'json';
    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${findAnything}&type=artist&limit=10`,
        {
          headers,
        }
      )
      .pipe(map((searchResultData) => searchResultData['artists'].items));
  }
}
