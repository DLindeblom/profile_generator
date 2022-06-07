const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  console.log(`Nice to meet you, ${answer}!`);

  rl.question(`What's an activity you like doing? `, (answer) => {
    console.log(`${answer} sounds like a good time!`);
    
    rl.question(`What do you listen to while doing that? `, (answer) => {
      console.log(`${answer} is good listening!`);
    
      rl.question(`Which meal is your favorite (eg: dinner, brunch, etc)? `, (answer) => {
        console.log(`${answer} is an excellent choice.`);
      
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          console.log(`${answer} is super tasty!`);
        
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            console.log(`Nice! ${answer} is so exciting to watch!`);
          
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              console.log(`That is a very unique skillset!`);
            
              r1.close();

            });

          });

        });

      });
      
    });

  });
  
});










