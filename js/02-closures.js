/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */


        // ЗАМЫКАНИЕ!!!!
    // const fnA = function (parameter) {
    //     const innerVariable = `значение внутренней перменной функции fnA`

    //     const innerFunction = function (){
    //         console.log(innerVariable);
    //         console.log(`Вызов innerFunction`);
    //     };
    //     return innerFunction;
    // }
        // ----------------------------------------------


    // const fnB = fnA();
    // fnB()
    // console.log(fnB);


 /*
 * Поварёнок
 */
//  const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
//  };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff= function (name){
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     }
//     return makeDish
// }

// const mango = makeSheff (`Mango`);
// mango (`чмяк`)
// const poly = makeSheff (`poly`)
// poly (`чвяк`)








// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

const rounder = function (number, places) {
    return Number(number.toFixed(places));
};

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));



/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

    // const salaryManagerFactory = function (employeeName, baseSalary) {
    //     let salary = baseSalary;

    //     const changeBy = function (amount) {
    //         salary += amount;
    //     };
    //     return {
    //         raise (amount) {
    //             changeBy(amount)
    //         }
    //         lower (amount) {
    //             changeBy(amount)
    //         }
    //         current () {
    //             return `текущая зарплата ${employeeName} - ${salary}`;
    //         },
    //     }
    // }