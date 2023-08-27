const EventEmitter =require('events');
// const calci= require('./calciAdd');
// const fs= require('fs');
console.log('hello all from nodejs');  
const eventEmitter =new EventEmitter();
eventEmitter.on('calciAdd',(a,g)=>{
    console.log(a+g);
    console.log('event emitter driven addition done '+ a+g + ' ');
});
 const readline=require('readline');
  const rl=readline.createInterface({input:process.stdin/*object*/,
       output:process.stdout});
       let r=Math.floor((Math.random()*10)+1);
       let r2=Math.floor((Math.random()*10)+1);
       let ans=r+r2;
       rl.question(`what is ${r} + ${r2}\n`,(userInput)=>{
        if(userInput.trim()== ans){
            rl.close(); //used to close the readline and also the application
        }
        else{
            rl.setPrompt('enter correctly the ans with in given time');
            rl.prompt();
            r/*line event listner r*/
            rl.on('line',(userInput)=>{
               if(userInput.trim()== ans){
                rl.close();
               }
               else{
                rl.setPrompt(` You lose Your ans of ${userInput} is incorrect try again\n`);
                rl.prompt();
               }
            });
        }
                //  console.log(userInput);
       });
  rl.on('close',()=>{ //call back function
        console.log(' hey you are  correct!!!!');
     });
