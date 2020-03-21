import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'menucommunautaire',
  templateUrl: './menucommunautaire.component.html',
  styleUrls: ['./menucommunautaire.component.scss']
})
export class MenucommunautaireComponent implements OnInit {

  constructor() { }
  
  faSearch = faSearch;
  faSignOutAlt = faSignOutAlt;
  ngOnInit() {
  }

}
