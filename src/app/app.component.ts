import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { RetrieveBooksData } from './redux/catalogue/catalogue.redux';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  constructor(
    public store: Store,
  ) { }

  ngOnInit() {
    this.initValues();
  }

  async initValues() {
    this.store.dispatch(new RetrieveBooksData()).toPromise();
  }

}
