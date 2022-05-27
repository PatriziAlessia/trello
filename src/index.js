


const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
     (box.style.visibility === 'hidden') ?
         box.style.visibility = 'visible' :   box.style.visibility = 'hidden';
});

btn.addEventListener('click', async() =>{
     try{
          const data = await fetch()
          return data
     }catch (e) {
          console.log('error')
     }
});

const boxSignUp = document.getElementById('boxSignUp');
const buttonSignUp = document.getElementById('buttonSignUp');

buttonSignUp. addEventListener('click', function signUpClick() {
     (boxSignUp.style.visibility === 'hidden') ?
     boxSignUp.style.visibility = 'visible' : boxSignUp.style.visibility = 'hidden';
});

