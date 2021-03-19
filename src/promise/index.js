const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!');
        } else {
            reject('Oops!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout( () => {resolve('True');},3000);
        } else {
            const error = new Error('Oops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Aray of results: ', response)
})
.catch(err => console.error(err))