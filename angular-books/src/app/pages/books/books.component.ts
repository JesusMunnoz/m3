import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

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
      new Book(undefined, undefined, "El capitán Alatriste", "Blada", "Arturo Perez-Reverte", 10.40, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg"),
      new Book(1, 1, "La Bruja Mon", "Blada", "Pilar Mateos", 3.60, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg"),
      new Book(2, 2, "Fray Perico y su borrico", "Blada", "Juan Muñoz Martín", 8.74, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg"),
      new Book(3, 3, "Don Quijote de la Mancha", "Dura", "Miguel de Cervantes", 500000, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg"),
      new Book(3, 3, "El Señor de los anillos", "Dura", "J. R. R. Tolkien", 65, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg")
    ]
  }

  insert(insrtName:string, insrtTapa:string, insrtAutor:string, insrtPrecio:number, insrtPhoto:string, insrtCode:number):void{
    let newBook = new Book( insrtCode, 0, insrtName, insrtTapa, insrtAutor, insrtPrecio, insrtPhoto);

    this.books.push(newBook);

    console.log(newBook);
    
  }



  ngOnInit(): void{

  }
}