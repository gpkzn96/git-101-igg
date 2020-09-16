const { resolve } = require("dns")

myFristAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Success');
        }, 250);
    })
}
msg = async() => {
    const successMassage = await myFristAsync();
    console.log('Yay!', successMassage);
}
msg();