const doSomethingAync = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'), 3000)
        : reject(new Error('test error')) 
    })
}

const doSomething = async () => {
    const something = await doSomethingAync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunc = async () => {
    try{
        const something = await doSomethingAync()
        console.log(something)
    }
    catch(error){
        console.log(error)
    }
}

console.log('another Before')
anotherFunc()
console.log('another After')