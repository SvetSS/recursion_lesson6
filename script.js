'use strict'
function game(num){
    if(confirm('Давай сыграем в угадай число?')){
        function rec(){
            let answer = prompt('Угадай число от 1 до 100. Ответ пиши цифрами');
            //let answer = parseFloat(prompt('Угадай число. Ответ пиши цифрами'));
            console.log(answer);
            if(answer==null){
                alert('Игра окончена');
                console.log('os');
            }
            else if(isNaN(answer)|| answer==''){
                alert('Введи число!');
                rec();
            } 
            else if(answer>num){
                alert('Загаданное число меньше');
                rec();
            }            
            else if(answer<num){
                alert('Загаданное число больше');
                rec();
            }           
            else if(answer==num){
                alert('Поздравляю, Вы угадали!!!')
            }
        }
        rec();
    }
    else{alert('Всего хорошего')}
}
game(5);
