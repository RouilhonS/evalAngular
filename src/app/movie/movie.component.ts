import {Component, OnInit} from '@angular/core';
import {SearcherService} from '../_service/searcher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private searcher: SearcherService) {
  }

  movies: any[] = [];

  ngOnInit(): void {
  }

  async onMovieSelected(movie: string) {
    if (movie.length <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No movie wanted',
        text: 'Please write a movie in the search bar',
        footer: 'The name of the movie must be well written'
      });
    } else {
      try {
        const req: any = await this.searcher.getMovies(movie, 'movie');
        if (req.Response === 'True') {
          this.movies = req.Search;
        } else {
          Swal.fire({
            icon: 'error',
            title: req.Error,
            footer: 'The name of the movie must be well written'
          });
        }
      } catch (e) {
        console.log('error : ', e);
      }
    }
  }
}
