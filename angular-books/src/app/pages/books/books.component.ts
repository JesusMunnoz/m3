import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[];

  constructor(){
    //this.books = [];
    this.books = [
      new Book("El capitán Alatriste", "Blada", "Arturo Perez-Reverte", 10.40, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", undefined, undefined),
      new Book("La Bruja Mon", "Blada", "Pilar Mateos", 3.60, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 1, 1),
      new Book("Fray Perico y su borrico", "Blada", "Juan Muñoz Martín", 8.74, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 2, 2),
      new Book("Don Quijote de la Mancha", "Dura", "Miguel de Cervantes", 500000, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 3, 3),
      new Book("El Señor de los anillos", "Dura", "J. R. R. Tolkien", 65, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 4, 4)
    ]
  }

  insert(insrtName:string, insrtTapa:string, insrtAutor:string, insrtPrecio:number, insrtPhoto:string, insrtCode:number):void{
    let newBook = new Book( insrtName, insrtTapa, insrtAutor, insrtPrecio, insrtPhoto, insrtCode);
    this.books.push(newBook);
    console.log(newBook);
  }

  deleteBook(book:Book):void{
   this.books = this.books.filter(b => b !== book);
  }

  ngOnInit(): void{

  }
}