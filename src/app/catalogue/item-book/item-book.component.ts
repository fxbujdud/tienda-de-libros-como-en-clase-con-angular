import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../../interfaces/books/book.interface';

@Component({
  selector: 'app-item-book',
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.css']
})
export class ItemBookComponent implements OnInit {

  @Input() data: IBook;

  constructor() { }

  ngOnInit() {
  }

}