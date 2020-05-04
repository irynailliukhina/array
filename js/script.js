// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество
// и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в 
// существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный

// function arrSort(arr) {
//     for (let i of arr) {
//         if (i.bought == false) {
//             console.log(i);
//         }
//     }
//     for (let i of arr) {
//         if (i.bought == true) {
//             console.log(i);
//         }
//     }
// }

// arrSort(listToBuy)

// function addItem(name, amount, bought) {

//     for (i of listToBuy) {
//         if (name === i.name) {
//             i.amount += amount;
//             let popped = listToBuy.pop(-1, 0);
//         }
//         else {
//             let newListToBuy = listToBuy.push({
//                 name: name,
//                 amount: amount,
//                 bought: bought,
//             });

//         }
//     }
//     console.log(listToBuy);
// }

// addItem('beer', 2, false);
// addItem('orange', 2, true);

// function buyItem(arr, name) {
//     for (i of arr) {
//         if (name == i.name) {
//             i.bought = true;
//         }
//     }
//     console.log(arr)
// }

// buyItem(listToBuy, 'beer')

//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
//Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

// let list = [
//     {
//         name: 'bananas',
//         amount: 3,
//         price: 5,
//     },
//     {
//         name: 'oil',
//         amount: 1,
//         price: 75,
//     },
//     {
//         name: 'choco',
//         amount: 2,
//         price: 35,
//     },
// ]

// function print(arr) {
//     for (i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// print(list);

// function sum(arr) {
//     let result = 0;
//     for (i of arr) {
//         result += (i.price * i.amount);
//     }
//     console.log(result);
// }

// sum(list);

// function theMostexpencive(arr) {
//     let result = 0;
//     for (i of arr) {
//         if (i.price > result) {
//             result = i.price;
//         }
//     }
//     console.log(result);
// }
// theMostexpencive(list);

// function averagePrice(arr) {
//     let average;
//     let result = 0;
//     for (i of arr) {
//         result += i.price;
//     }
//     average = result / (+arr.length);
//     console.log(average);
// }
// averagePrice(list)

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// let arr = [
//     {
//         name: 'color',
//         value: 'red',
//     },
//     {
//         name: 'font-size',
//         value: '24px',
//     },
//     {
//         name: 'text-decoration',
//         value: 'underline',
//     },
// ]


// function styleText(style, text) {
//     let result = ``;
//     for (let i of style) {
//         result += `${i.name}:${i.value};`
//     }
//     document.write(`<p style="${result} "> ${text}</p> `);
// }
// styleText(arr, 'Lorem weifeufhiue ewiufiuweg wefiwef iegfiwgef')


// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) 
// и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let classes = [
    {
        name: 'Math class',
        places: 10,
        faculty: 'Math'
    },
    {
        name: 'Historical class',
        places: 20,
        faculty: 'History'
    },
    {
        name: 'Biological class',
        places: 15,
        faculty: 'Biology'
    },
]

let groups = [
    {
        name: 'Math students',
        amount: 9,
        faculty: 'Math',
    },
    {
        name: 'History students',
        amount: 19,
        faculty: 'History',
    },
    {
        name: 'Biology students',
        amount: 13,
        faculty: 'Biology',
    },
]

// function print(arr) {
//     let result = ``;
//     for (let i of arr) {
//         result += `${i.name} has ${i.places} plases for students from ${i.faculty} faculty. <br>`
//     }
//     document.write(`<p> ${result}</p> `);
// }
// print(classes);

// function classForFaculty(arr, faculty) {
//     let result = ``;
//     for (let i of arr) {
//         if (faculty === i.faculty) {
//             result += `${i.name} if for this faculty. <br>`
//         }
//     }
//     document.write(`<p> ${result}</p> `);
// }

// classForFaculty(classes, 'Math');

// function classForGroup(students, classesForThem) {
//     let result = "";
//     for (let i of students) {
//         for (let j of classesForThem) {
//             if (i.faculty === j.faculty && i.amount <= j.places) {
//                 result += `${j.name} fits for ${i.name} group. <br>`
//             }
//         }
//     }
//     document.write(`<p> ${result}</p> `);
// }
// classForGroup(groups, classes);


// function sort(a, b) {
//     return a.places - b.places;
// }

// classes.sort(function (a, b) {
//     a = +a.places;
//     b = +b.places;
//     return a - b;
// })

// console.log(classes)

//ERROR
// classes.sort(function (a, b) {
//     a = a.name;
//     b = b.name;
//     return a - b;
// })

// console.log(classes)