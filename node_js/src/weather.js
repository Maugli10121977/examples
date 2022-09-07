let now_weather = 'солнечно';

switch (now_weather) {
  case "дождь":
    console.log("Не забудьте взять зонтик.");
    break;
  case "солнечно":
    console.log("Одевайтесь легко.");
  case "облачно":
    console.log("Идите гулять.");
    break;
  default:
    console.log("Непонятная погода!");
    break;
}
