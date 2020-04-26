const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA0MDgyMjI4NDUxMjEzNDEy.XqX9vQ.42aCppsHZzL1llmM0fnSV4Caz90';

bot.login(token);
bot.on('ready', () => {
    console.log('im ready');
})

bot.on('message', msg => {
    console.log(msg.author.username);
    if(msg.content.indexOf("-a") != -1){
        const value = msg.content.substring(3,5)
        const result = Math.floor(Math.random() * (12) + 1);
        if(value > 0){
            if (result == 12){
                msg.reply('Erro crítico');
            }
            else if(result == 1){
                if(msg.author.username == "Tony Rodrigues"){
                    if(result > value){
                        msg.reply( result + '! ' + ' (+'+ (result - value)+')');
                    }else if(result < value){
                        msg.reply( result + '! ' + ' (-'+ (value - result)+')');
                    }else{
                        msg.reply( result + '! ');
                    }
                }else{
                    msg.reply( result + '! ' + ' (-'+ ((value - result)+10)+')');
                }
            }else{
                if(result > value){
                    msg.reply( result + '! ' + ' (+'+ (result - value)+')');
                }else if(result < value){
                    msg.reply( result + '! ' + ' (-'+ (value - result)+')');
                }else{
                    msg.reply( result + '! ');
                }
            }
        }
    }
})