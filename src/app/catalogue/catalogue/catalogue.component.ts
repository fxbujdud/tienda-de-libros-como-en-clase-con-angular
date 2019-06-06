import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { RetrieveBooksData, CatalogeState } from '../../redux/catalogue/catalogue.redux';
import { Observable } from 'rxjs';
import { IBook } from '../../interfaces/books/book.interface';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  @Select(CatalogeState.books) books$: Observable<IBook>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.initValues();
  }

  async initValues(){ 

  }
}