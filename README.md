# HomeWork_1

## Перша програма, яка переслідує ціль засвоєння першої теми, а саме: "Базові типи данних". 

### ___Запускаємо програму!___
Зпускаємо програму через консоль браузеру __Google__, щоб мати можливість вводити данні за допомогою спливаючого вікна:

![](https://github.com/Eduard-Babchuk/HomeWork_1/blob/main/Photo/1.png)

Це стає можливим звдяки використанню методу __prompt__:

```JavaScript
let User_Name = prompt("Введіть своє ім'я: ");
```

![](https://github.com/Eduard-Babchuk/HomeWork_1/blob/main/Photo/3.png)

Це вікно спонукає користувача до участі в математичній грі, а саме визначення дня народження за допомогою кількох математичних дій.

### ___Вікно для початку обчислення___

Так як у користувача немає вибору і він погоджується, зявляється наступне вікно:

![](https://github.com/Eduard-Babchuk/HomeWork_1/blob/main/Photo/4.png)

Користувача просять провести певне обчислення __(d - День дня народження, m - Місяць дня народження. Наприклад для 09.06.1999: d = 9, m = 6)__, далі все обчислюється за формулою:

$$ 
((((b*2)+5)*50)+m)-250
$$

```JavaScript
let bd_User = prompt("Число дня твого народження необхідно помножити на 2. " +
                     "\nПотім до результату обчислень додати 5. " +
                     "\nПісля цього отриману суму помножити на 50 " +
                     "та до результату додати число місяця народження. Впишіть результат обчислень");
let bdr_User = bd_User - 250
```
Після обчислення користувач вводить дані в поле вводу:

![](https://github.com/Eduard-Babchuk/HomeWork_1/blob/main/Photo/5.png)

### ___Завершальне вікно___

![](https://github.com/Eduard-Babchuk/HomeWork_1/blob/main/Photo/6.png)

Це повідомлення є результатом:

```JavaScript
let day_bd;
if (bd_arr.length === 3){
    day_bd = bd_arr[0].toString();
}
else if (bd_arr.length === 4){
    let d_num1 = bd_arr[0].toString();
    let d_num2 = bd_arr[1].toString();
    day_bd = d_num1 + d_num2;
}

let m_num1 = bd_arr[bd_arr.length - 2].toString();
let m_num2 = bd_arr[bd_arr.length - 1].toString();
let mon_bd = m_num1 + m_num2;

switch (mon_bd) {
    case "01": mon_bd = "січеня"; break;
    case "02": mon_bd = "лютого"; break;
    case "03": mon_bd = "березеня"; break;
    case "04": mon_bd = "квітня"; break;
    case "05": mon_bd = "травня"; break;
    case "06": mon_bd = "червня"; break;
    case "07": mon_bd = "липня"; break;
    case "08": mon_bd = "серпня"; break;
    case "09": mon_bd = "вересня"; break;
    case "10": mon_bd = "жовтня"; break;
    case "11": mon_bd = "листопада"; break;
    case "12": mon_bd = "грудня"; break;
}

alert("Вітаю! Твій ДН: " + day_bd + "-го " + mon_bd); 
```
_Дякую! Щиро ваш, Бабчук Едуард (ІПЗс-23-1)_
