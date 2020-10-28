import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {
    console.log('api connected successfully');
    this.http
      .get('https://restcountries.eu/rest/v2/lang/en')
      .subscribe((countryEnglishSpeakers) => {
        console.log(countryEnglishSpeakers);
      });
  }

  ngOnInit(): void {}
}
