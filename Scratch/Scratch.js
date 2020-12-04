// let string='hello';
// let site='owu';
// let domen='com';
// let country='ua';
// let num=1;
// let num1=10;
// let num2=-999;
// let num3=123;
// let num4=3.14;
// let num5=2.7;
// let num6=16;
// let bollean=true;
// let bolean=false;
// alert(string)

// let name=prompt('Name:')
// let surname=prompt('Surname:')
// let fathername=prompt('Fathers Name:')
// let person=name+' '+surname+' '+fathername;
// console.log(person)

// let name=+prompt('Name:')
// let surname=+prompt('Surname:')
// let fathername=+prompt('Fathers Name:')
// let result=name+surname+fathername
// console.log(result)
// при помощи prompt()  получить 3 числа с плавающей точекой.Округлить
// их
// при
// помощи
// Math.round
// Сложить
// их
// между
// собой
// записав
// результат
// в
// переменную
// и
// вывести
// в
// консоль
// браузера

//  let name=Math.round(+prompt('Name:'))
// let surname=Math.round(+prompt('Surname:'))
// let fathername=Math.round(+prompt('Fathers Name:'))
// let result=name+surname+fathername;
// console.log(result)
// -при
// помощи
// prompt()
// получить
// 2
// целых
// числа.Привести
// их
// к
// целочисленному
// типу.Первое
// число - это
// число
// которое
// будут
// возводить
// в
// степень.Второе
// число - это
// число
// которое
// является
// степенью.При
// помощи
// Math.pow
// возвести
// первое
// число
// в
// степень
// второго
// числа.

// let name=Math.round(+prompt('Number:'))
// let surname=Math.round(+prompt('Pow:'))
// let result=Math.pow(name,surname)
// console.log(result)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let mas=[];
// mas[0]=3;
// mas[1]=4;
// mas[2]=4;
// mas[3]=5;
// console.log(mas)

// / - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i=0;i<100;i++){
//     if (i%2===0){
//         console.log(i)
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (h=0;h<=2;h++){
//     for (m=0;m<=20;m++){
//         for (s=0;s<60;s++){
// document.write(h+'hours'+m+'minutes'+s+'seconds')
//         }
//     }
// }

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let number=[Math.round(Math.random()*100)];
// numbers=[];
// for (i=0;i<1;i++){
//     numbers=numbers+number*5
// }
// console.log(numbers)

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let random=[1,2,3,'i','we',true,false];
// let randoms=[];
// for (i=0;i<7;i++){
//     if (typeof random[i] === "number"){
// randoms=randoms+random[i]
//     }
// }
// console.log(ranms)

// замінити кожне число кратне 3 на слово "okten"

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// for (i=0;i<numbers.length;i++){
//     if (numbers[i]%3===0){
//        numbers[i]='okten';
//         console.log(numbers[i])
//     }
//
// }
// console.log(numbers)

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
//
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// for (i=2;i<numbers.length;i+=3){
//     if (numbers[i]%2===0){
//         console.log(numbers[i])
//     }
//
// }

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let num=[]
// for (i=2;i<numbers.length;i+=3){
//     if (numbers[i]%2===0){
//         num=numbers[i]
//     }
// }
// console.log(num)

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let weed=[1,2,3,4,5,6,7,8,9,10]
// for (i=0;i<weed.length;i++){
//     if (weed[i]%2!==0 && weed[i+1]%2===0){
//         console.log(weed[i])
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let numbers=[100,250,50,168,120,345,188]
// let num=0
// for (i=0;i<numbers.length;i++){
//      num+=numbers[i]
// }
// let result=num/numbers.length
// console.log(result)

// let time1=30
// let time2=2
// for (i=0;i<1;i++){
//     if (time1[i]===30 && time2[i]===2){
//         }
//// let numbers=[[Math.round(Math.random()*10)]]
// // let newnum=[]
// // for (i=0;i<numbers.length;i++){
// //      newnum=newnum+numbers*5
// // }
// //
// // console.log(newnum)
//     console.log("Time is"+time2+'hours and '+time1+'minutes')}

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let something=[1,2,3,'i','we','they',false,true]
// let news=[]
// for (i=0;i<something.length;i++){
//      if (typeof something[i] ==='number'){
//          news=something[i]
//           console.log(news)
//      }
//
// }
// for (h=0;h<2;h++){
//     for(m=0;m<60;m++){
//         for (s=0;s<60;s++){
// console.log(h+'hours'+m+'minutes'+s+'seconds')
//         }
//     }
// }