import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  constructor(private http: HttpClient) {
  }

  private url = 'http://www.omdbapi.com/';
  private apiKey = 'b1f36987';

  getMovies(name: string, type: string) {
    const movies = this.http.get(this.url + '?apikey=' + this.apiKey + '&s=' + name + '&type=' + type).toPromise();
    return movies;
  }

  getMovie(id: string) {
    const movie = this.http.get(this.url + '?apikey=' + this.apiKey + '&i=' + id).toPromise();
    return movie;
  }
}
