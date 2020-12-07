// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// function startday(paste){
//     console.log('Треба почистити зуби!')
//     setTimeout(()=>{
//         if (!paste){
//             console.log('Закінчилась паста')
//             return
//             }
//             console.log('Done')
//         }
//     ,500)
// }
// startday(true)
//
//
// function eat(food){
//     setTimeout(()=>{
//             console.log('Make some food')
//         if (!food){
//             console.log('Go buy some food')
//             return
//         }
//             console.log('Done')
//         }
//     ,1000)
// }
// eat(false)
//
// function videos(youtube){
//     setTimeout(()=>{
//         console.log('Watch a few videos')
//         if (!youtube){
//             console.log('Ok watch tv')
//             return
//         }
//             console.log('Done')
//
//     },1500)
// }
//
// function work(js){
//     setTimeout(()=>{
//         console.log('Go work')
//         if (!js){
//             console.log('LOL not js what a problem?')
//             return
//         }
//             console.log('Ok lets make some work!')
//
//     },2000)
// }
//
// function relax(play){
//     setTimeout(()=>{
//         console.log('i need to relax')
//         if (!play){
//             console.log('Go to walk')
//             return
//         }
//            console.log('Done')
//     },2500)
//     }
//
//     function watch(tutorials){
//         setTimeout(()=>{
//             console.log('i need to study')
//             if (!tutorials){
//                console.log('Ok again work...')
//                 return
//             }
//                 console.log('Done')
//
//         },3000)
//     }
//
//     function eatagain(food){
//         setTimeout(()=>{
//             console.log('i need to eat')
//             if (!food){
//                 console.log('Go to buy some food')
//                 return
//             }
//                 console.log('Done')
//
//         },3500)
//     }
//
//
// videos(true)
// work(true)
// relax(false)
// watch(true)
// eatagain(false)


function startday(paste) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Треба почистити зуби!')
            if (!paste) {
                reject('Закінчилась паста!')
            } else {
                resolve('Done!')
            }
        }, 500)
    })
}

function eat(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Make some food')
            if (!food) {
                reject('Go buy some food')
            } else {
                resolve('Done')
            }
        }, 1000)
    })

}


function videos(youtube) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Watch a few videos')
            if (!youtube) {
                reject('Ok watch tv')
            } else {
                resolve('Done')
            }
        }, 1500)
    })
}


function work(js) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Go work')
            if (!js) {
                reject('LOL not js what problem?')
            } else {
                resolve('Ok lets make some work!')
            }
        }, 2000)
    })
}


function relax(play) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i need to relax')
            if (!play) {
                reject('Go to walk')
            } else {
                resolve('Done')
            }
        }, 2500)
    })
}


function watch(tutorials) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i need to study')
            if (!tutorials) {
                reject('Ok again work...')
            } else {
                resolve('Done')
            }
        }, 3000)
    })
}


function eatagain(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('i need to eat')
            if (!food) {
                reject('Go  buy some food')
            } else {
                resolve('Done')
            }
        }, 3500)
    })
}

//
//
// startday(true).then(
//     result=>console.log("Fulfilled " + result),
//     eror=>console.log("Rejected "+eror)
// )
//
// eat(false).then(
//     result=>console.log("Fulfilled "+result),
//     eror=>console.log("Rejected "+eror)
// )
//
// videos(true).then(
//     result=>console.log("Fulfilled "+result),
//     eror=>console.log("Rejected "+eror)
// )
//
// work(false).then(
//     result=>console.log("Fulfilled "+result),
//     eror=>console.log("Rejected "+eror)
// )
//
// relax(false).then(
//     result=>console.log("Fulfilled "+result),
//     eror=>console.log("Rejected "+eror)
// )
//
// watch(true).then(
//     result=>console.log("Fulfilled "+result),
//     eror=>console.log("Rejected "+eror)
// )
//
// eatagain(false).then(
//     result=>console.log("Fulfilled "+result),
//     eror=>console.log("Rejected "+eror)
// ).catch(eror=>{
//     console.log(eror)
// // })

// Promise.allSettled([startday(true), eat(false), videos(true), work(false), relax(false), watch(true), eatagain(false)])
//     .then(value =>
//         console.log(value)
//     )

// async function result(){
//     try {
//         let start = await startday(true)
//         console.log(start)
//         let eat = await eat(false)
//         console.log(eat)
//         let videos = await videos(true)
//         console.log(videos)
//         let work = await work(false)
//         console.log(work)
//         let relax = await relax(false)
//         console.log(relax)
//         let watch = await watch(true)
//         console.log(watch)
//         let eatagain = await eatagain(false)
//         console.log(eatagain)
//     }catch (reason){
// console.log(reason)
//     }
// }
// result()