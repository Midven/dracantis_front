import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit {

  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

}
