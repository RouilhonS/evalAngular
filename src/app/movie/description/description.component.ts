import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearcherService} from '../../_service/searcher.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private searcher: SearcherService
  ) {
  }

  async ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    try {
      const req: any = await this.searcher.getMovie(this.activatedRoute.snapshot.params.id);
      console.log(req);
    } catch (e) {
      console.log('error : ', e);
    }
  }

}
