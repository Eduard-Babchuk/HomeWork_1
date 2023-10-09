let User_Name = prompt("Введіть своє ім'я: ");
alert("Вітаю, " + User_Name + "\nЯкого числа твоє день народження, хочаааа... ні! Не кажи давай я спробую вгадати ;)");

let bd_User = prompt("Число дня твого народження необхідно помножити на 2. " +
                     "\nПотім до результату обчислень додати 5. " +
                     "\nПісля цього отриману суму помножити на 50 " +
                     "та до результату додати число місяця народження. Впишіть результат обчислень");
let bdr_User = bd_User - 250

let bd_arr = [];
let numberToString = bdr_User.toString(); 

for (let digit of numberToString) {
    bd_arr.push(parseInt(digit)); 
}

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