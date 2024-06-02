import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  public books: Book[];

  public filterBooks : string =  '';
  
  constructor(private booksService: BooksService){}


  deleteBook(book:Book):void{
   //this.books = this.books.filter(b => b !== book);
   this.booksService.delete(book.id_book);
   this.books = this.booksService.getAll();
  }

  ngOnInit(): void{
    this.books = this.booksService.getAll();
    
  }
}