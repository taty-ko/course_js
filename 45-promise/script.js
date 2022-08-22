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

  

const delay = ms => {
 return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, ms);
 }) 
} 
  
  delay(3000)
  .then(() => console.log('выполнилось через 3 секунды'));
  


  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));


//


  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });


  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }
  