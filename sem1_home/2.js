"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  cook = new Map();
  menu = {
    Пицца: ["Маргарита", "Пепперони", "Три сыра"],
    Суши: ["Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки"],
    Десерт: ["Тирамису", "Чизкейк"],
  };
  clients = new Map();

  getOrder(clientsName) {
    if (this.clients.has(clientsName)) {
      return this.clients.get(clientsName);
    }
  }

  hasClient(clientsName) {
    return this.clients.has(clientsName);
  }

  hasSameOrder(arr, order) {
    for (const obj of arr) {
      if (obj.name === order.name) {
        return true;
      }
    }
  }

  getSameOrder(arr, order) {
    for (const obj of arr) {
      if (obj.name === order.name) {
        return obj;
      }
    }
  }

  print(clientsName) {
    if (this.hasClient(clientsName)) {
      let arr = this.getOrder(clientsName);
      console.log(`Клиент ${clientsName} заказал: `);
      for (const order of arr) {
        console.log(
          `${order.type} ${order.name} - ${
            order.quantity
          }; готовит повар ${this.cook.get(order.type)}`
        );
      }
    } else {
      console.log(`Заказов клиента ${clientsName} не найдено`);
    }
  }

  newOrder(client, ...args) {
    for (const arg of args) {
      if (!this.menu[arg.type].includes(arg.name)) {
        throw new Error(
          `${arg.type} ${arg.name} - такого блюда не существует.`
        );
      }
    }
    for (const arg of args) {
      const order = new Object();
      order.name = arg.name;
      order.type = arg.type;
      order.quantity = arg.quantity;
      let array = [];

      if (this.hasClient(client.firstname)) {
        array = this.getOrder(client.firstname);
        if (!this.hasSameOrder(array, order)) {
          this.clients.get(client.firstname).push(order);
        } else {
          const element = this.getSameOrder(array, order);
          const index = array.indexOf(element);
          order.quantity += element.quantity;
          array.splice(index, 1);
          array.push(order);
        }
      } else {
        this.clients.set(client.firstname, [order]);
      }
    }
  }
}

const manager = new Manager();

manager.cook.set("Пицца", "Олег").set("Суши", "Андрей").set("Десерт", "Анна");

manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" }
);

manager.print("Иван");
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.print("Павел");

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
