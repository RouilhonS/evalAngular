import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() {
  }

  @Output() movieSelected = new EventEmitter<string>();
  @Input() placeholder: string;
  searchMovie = '';

  ngOnInit(): void {
  }

  selectedMovie() {
    this.movieSelected.emit(this.searchMovie);
  }

}
