"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #book = [];
  constructor(listBook = []) {
    this.#book = listBook;
  }

  get allBooks() {
    return this.#book;
  }

  addBook(title) {
    for (let index = 0; index < this.#book.length; index++) {
      if (this.#book[index] === title) {
        throw new Error("Книга с таким названием уже существует в списке");
      }
    }
    return this.#book.push(title);
  }

  hasBook(title) {
    for (let index = 0; index < this.#book.length; index++) {
      if (this.#book[index] === title) {
        return console.log("Книга есть в списке");
      }
    }
    return console.log("Книги нет в списке");
  }

  removeBook(title) {
    for (let index = 0; index < this.#book.length; index++) {
      if (this.#book[index] === title) {
        let index = this.#book.indexOf(title);
        console.log("Книга удалена");
        return this.#book.splice(index, 1);
      }
    }
    return console.log("Книги нет в списке");
  }
}

const one = new Library(["Книга 1", "Книга 2", "Книга 3"]);

// console.log(one.allBooks);

one.removeBook("Книга 4");

console.log(one.allBooks);
