const promArr = [];
let timeIncrement = 100;

const makeProm = (promName) => {
    let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(promName);
            }, timeIncrement += 100); //Math.random()*10000
        })
        .then(response => {
            console.log(`${response} is finished`);
        })
        .catch((error) => {
            console.log(error);
        })

    promArr.push(promise);
}


for (let i = 1; i < 101; i++) {
    let currentPromise = `Promise ${i}`
    makeProm(currentPromise);
}


const allPromResolved = () => {
    console.log("ALL PROMISES RESOLVED");
}

const notAllPromResolved = () => {
    console.log("NOT ALL PROMISES ARE RESOLVED");
}


Promise.all(promArr)
    .then(allPromResolved)
    .catch(notAllPromResolved)