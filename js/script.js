//1. Создать страницу, которая выводит нумерованный список песен:

// var playList = [
//     {
//         author: "LED ZEPPELIN",
//         song: "STAIRWAY TO HEAVEN"
//     },
//     {
//         author: "QUEEN",
//         song: "BOHEMIAN RHAPSODY"
//     },
//     {
//         author: "LYNYRD SKYNYRD",
//         song: "FREE BIRD"
//     },
//     {
//         author: "DEEP PURPLE",
//         song: "SMOKE ON THE WATER"
//     },
//     {
//         author: "JIMI HENDRIX",
//         song: "ALL ALONG THE WATCHTOWER"
//     },
//     {
//         author: "AC/DC",
//         song: "BACK IN BLACK"
//     },
//     {
//         author: "QUEEN",
//         song: "WE WILL ROCK YOU"
//     },
//     {
//         author: "METALLICA",
//         song: "ENTER SANDMAN"
//     }
// ];

// let result = "";
// result += "<ol>"
// for (i of playList) {
//     result += `<li>${i.author} - ${i.song}</li>`
// }
// result += '</ol>'
// document.write(result)

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

// let modal = document.getElementById("my_modal");
// let open_btn = document.getElementById("btn_modal_window");
// let close_btn = document.getElementsByClassName("close_modal_window")[0];

// open_btn.onclick = function () {
//     modal.style.display = "block";
// }

// close_btn.onclick = function () {
//     modal.style.display = "none";
// }

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

// let color = document.querySelector('.color');
// let btn_color = document.getElementsByClassName('btn_color');
// let i = 0;

// btn_color = function () {
//     if (i === 0) {
//         color.style.backgroundColor = "red";
//         i++
//     } else if (i === 1) {
//         color.style.backgroundColor = "yellow";
//         i++
//     } else if (i === 2) {
//         color.style.backgroundColor = "green";
//         i = 0;
//     }
// }