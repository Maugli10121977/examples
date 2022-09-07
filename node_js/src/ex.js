"use strict";

let login = prompt("Логин")
let result = (login == "Сотрудник") ? "Привет!" : 
  (login == "Директор") ? "Здравствуйте!" : 
  (login == "") ? "Нет логина" : 
  "Что присходит?";

document.write(result)
