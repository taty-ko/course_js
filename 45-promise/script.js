'use strict';
//Promise

const test = time => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            
            resolve();
        }, time)
    })
};
/* 
test(1000).then(() => {
    console.log('hi через 1000 ms');
}); 

test(3000).then(() => {
    console.log('hi через 3000 ms');
});  */

Promise.all([test(1000), test(2000), test(3000), test(4000)]).then(() => {
    console.log('All');
});

Promise.race([test(1000), test(2000), test(3000), test(4000)]).then(() => {
    console.log('Race');
});


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        name: 'Taty'
    }),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json));

  
