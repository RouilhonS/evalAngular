import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearcherService} from '../../_service/searcher.service';
import {Description} from '../../_model/movie.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private searcher: SearcherService,
    private location: Location
  ) {
  }

  movie: Description = new Description();

  async ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    try {
      const req: any = await this.searcher.getMovie(this.activatedRoute.snapshot.params.id);
      if (req.Response === 'True') {
        console.log(req);
        this.movie = req;
      } else {

      }
    } catch (e) {
      console.log('error : ', e);
    }
  }

  backClicked() {
    this.location.back();
  }
}
