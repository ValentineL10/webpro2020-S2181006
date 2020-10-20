//Asynchronous//
//Contoh Async method//

//Contoh Synchronous
// const second = () => {
//     console.log('Second')
//     }
//     const first = () => {
//     console.log('First');
//     second();
//     console.log('The End')
//     }
//     first();


// //Contoh Asynchronous //Timeout
// const second = () => {
//     setTimeout(() => {
//     console.log('Second Async')
//     }, 3000)
// }
// const first = () => {
//     console.log('First');
//     second();
//     console.log('The End')
//     }
//     first();

    //Contoh callback Hell
    const second = () => {
        setTimeout(() => {
        console.log('Async 1')
        const numbers = [1, 2, 3];
        setTimeout(id => {
        console.log('Async 2')
        console.log(id)
        setTimeout(() => {
        console.log('Async 3')
        }, 2000)
        }, 2000, numbers[1])
        }, 2000)
    }
    //Membuat Promise
    const getId = new Promise((resolve, reject) => {
        const numbers = [1, 2, 3];
        setTimeout(() => {
        //If Success
        resolve(numbers)
        //Else
        // reject('Error');
        }, 2000)
        });
        getId
        .then(numbers => {
        console.log(numbers)
        })
            .catch(error => {
        console.log(error);
})
//Chaining
const getId = new Promise((resolve, reject) => {
    const numbers = [1, 2, 3];
    setTimeout(() => {
    resolve(numbers[2])
    }, 2000)
    });
    const getNameById = id => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const name = 'John Doe'
    resolve(`${id}: ${name}`);
    }, 2000, id)
    })
    }
    // getId
    // .then(id => {
    // console.log(id)
    // return getNameById(id);
    // })
    // .then(name => {
    // console.log(name)
    // })
    // .catch(error => {
    // console.log(error);
    // })

    //Aysnc dan Await
    // async function getNameByIdAW() {
    //     const id = await getId;
    //     const name = await getNameById(id);
    //     console.log(name);
    //     }
    async function getNameByIdAW() { //Menggunakan return
        const id = await getId;
        const name = await getNameById(id);
        return name;
        }
        getNameByIdAW().then(name => { console.log(name) })
        console.log('End');