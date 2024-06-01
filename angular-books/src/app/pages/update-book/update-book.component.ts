import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit{
  public editbook: Book[];

  constructor(private booksService: BooksService, private router:Router){}

  mdfy(insrtName:string, insrtTapa:string, insrtAutor:string, insrtPrecio:number, insrtPhoto:string, insrtCode:number): void{
    let eBook = new Book(insrtName, insrtTapa, insrtAutor, insrtPrecio, insrtPhoto, insrtCode);
    this.booksService.edit(eBook);
    this.editbook = this.booksService.getAll();
    console.log(eBook);
    console.log(this.editbook);

    

    this.router.navigateByUrl("/books");
  }

  ngOnInit(): void{
    this.editbook = this.booksService.getAll();
  }
}