// const stars = 7
// let price

// if (stars === 1) {
//     price = "20$";
// } else if (stars === 2) {
//     price = "30$"
// } else {
//     console.log(`otletay`);
// }

// -----or------
// switch(stars) {
//     case 1:
//     case 2:
//         price = 20
//         break;
//     case 3:
//     case 4:    
//         price = 30
//         break;
//     case 5:
//         price = 1488
//         break;
//     default:
//         console.log('bruh chel');    
// }
// console.log(price);


// const option = 5
// let message = ''
//     switch (option) {
//         case 1:
//             message = 'Заберете завтра с 12'
//             break;
//         case 2:
//             message = 'Курьер доставит завтра'
//             break;
//         case 3:
//             message = 'Сегодня жди'
//             break;
            
//         default:
//             console.log('наберемся');
//     }
//     console.log(message);


//  for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
//  }
//     console.log('kek');




// const minSalary = 500
// const maxSalary = 5000
// const employees = 4
// let totalSalary = 0

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//     console.log(`ЗП работника номер ${i}, приколи - ${salary}`);
//     totalSalary += salary
// }
// console.log(`totalSalary: `, totalSalary);


// const min = 0
// const max = 5
// let total = 0

// for (let i = min; i<= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(`не четное`, i);
//         continue;
//     }
//         console.log(`четное`, i);
//         total += i;
// }
// console.log(`total: `, total);


// let balance =  25000
// const payment = 2000

// console.log(`сумма заказа ${payment}. ща чекним не ссы`);

// if (balance >= payment) {
//     console.log(`ok, на счету ${balance}`);
//     balance -= payment;
//     console.log(balance);
// } else  {
//     console.log(`бля чел ты не поверишь не хвататет, у тебя ${balance} сабжей`);
// }


// const totalSpent = 2000
// let payment = 500
// let discount = 0

// if (totalSpent >= 100 && totalSpent <1000) {
//     console.log(`2%`);
//     discount = 0.02;
// } else if (totalSpent >=1000 && totalSpent < 5000) {
//     console.log(`5`);
//     discount = 0.05;
// }else {
//     console.log(`10`);
//     discount = 0.01;
// }
// console.log(`оформляем лошка ${payment} и прилетает скидыч ${discount * 100}%`);

// const btnAdd = document.querySelector('button')

// btnAdd.addEventListener ('click', function () {
//     console.log('hehehe');
// })