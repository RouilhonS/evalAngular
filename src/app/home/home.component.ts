import { Component, OnInit } from '@angular/core';
import {SearcherService} from '../_service/searcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private searcher: SearcherService) { }

  ngOnInit(): void {
  }

  async onMovieSelected(movie: string) {
    try {
      const response = await this.searcher.getMovies(movie, 'movie');
      console.log('response : ', response);
    }
    catch (e) {
      console.log('error : ', e);
    }
  }
}
