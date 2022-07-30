/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */


// (пример 1)************

// const fnA = function (message, callback) {
//     console.log(message);
//     callback(13)
// }
// const fnB = function (number) {
//     console.log(`Это лох при вызове fnB`, number);
// }

// fnA('qwa', fnB)
// -----------------------------------------------


// (пример 2)************
            // const doMath = function (a,b,c, callback) {
            //     const result = callback(a,b,c);
            //     console.log(result);
            // }
            // const add = function (x, y, c) {
            //     // первый вызов
            //     return x + y + c;                           
            // }

            // const sub = function (x, y, c) {
            //     // второй вызов
            //     return x - y - c;
            // }
            // doMath(2,3,1, add)
            // doMath(10,4,2, sub)
    // литерал функции  (in-line)
        // const doMath = function (a,b,c, callback) {
        //     const result = callback(a,b,c);
        //     console.log(result);
        // }
        // doMath(2,3,1, function (x, y, c) {
        //     // первый вызов
        //     return x + y + c;
        // });
        // doMath(10,4,2, function (x, y, c) {
        //     // второй вызов
        //     return x - y - c;
        // });


/*
 * Отложенный вызов: регистрация событий
 */
        // const buttonRef = document.querySelector ('.jsbutton');
        // const handleBtnClick = function (){
        //     console.log('click');
        // }
        // buttonRef.addEventListener('click', handleBtnClick)

/*
 * Отложенный вызов: геолокация
 */

    // const onGetPosSuccess = function (position) {
    //     console.log(position);
    //     console.log('xdkek');
    // }
    // const onGetPosError = function (error) {
    //     console.log(error);
    //     console.log('bruh man');
    // };
    //     window.navigator.geolocation.getCurrentPosition(onGetPosSuccess, onGetPosError);

/*
 * Отложенный вызов: интервалы
 */     
        // const callback = function () {
        //     console.log(`Через 3 секунды внутри колбека в таймауте`);
        // }
        // console.log(`В коде перед таймаутом`);
        //     setTimeout(callback, 3000)
        // console.log(`В коде после таймаутом`);  
        
        
/* Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */ 
            // const onRequestSuccess = function (response) {
            //     console.log(`kek`);
            //     console.log(response);
            // }
            //     fetch ('https://pokeapi.co/api/v2/pokemon')
            //     .then(res => res.json())
            //     .then(onRequestSuccess)

/*
 * Фильтр
 */  



            // ФИЛЬТР!!!


// const filter = function (array, test) {
//     const filteredArray = []

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el)
//         if(passed) {
//             filteredArray.push (el)
//         }
//     }
//     return filteredArray
// }
// ------------------------------------------



// // const callback1 = function (value) {
// //     return value >= 3;
// // }
// // const r1 = filter ([1, 2, 3,4,5,6], callback1);
// // console.log(r1);
// // const r2 = filter ([1,2,3,4,5,6,7], function (value) {
// //     return value <= 4
// // });
// // console.log(r2);


// const fruits = [
//     {name: 'apples', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ];
// const getFruits = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r = filter (fruits, getFruits);
// console.log(r);