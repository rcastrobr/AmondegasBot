const Discord = require('discord.js');

const PREFIX = "!";

const bot = new Discord.Client();

bot.on('message', (message) => {

if (message.member.voice.channel) {
    let channel = message.guild.channels.cache.get('758917378079326249');
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'help':
            message.channel.send('! Welcome to Amondegas Bot ! \n The most crazy and no sense Brazilian bot _(o.O)/ \n\n Version 1.0 \n\n Commands: \n !mute = Mute everyone on the channel \n !open = Open every microphone on the channel \n !adm = Open every microphone unless the person who types the command \n \n Adm Commands: \n !clear <number> = Clear <number> of message on the channel ');
        break;
        case 'mute':
            for (const [memberID, member] of channel.members) {
                member.voice.setMute(true);
            }
            message.channel.send('Sh!....NINGUÉM pode falar agora!');
        break;
        case 'open':
            for (const [memberID, member] of channel.members) {
                member.voice.setMute(false);
            }
            message.channel.send('Aeee!....TODOS podem falar agora');
        break;
        case 'adm':
            if(message.member.hasPermission("ADMINISTRATOR")){
                for (const [memberID, member] of channel.members) {
                    if (member != message.member){
                        member.voice.setMute(true);
                    }
                }
                message.channel.send('o//!....Somente VOCÊ pode falar agora!');
            }else{
                message.channel.send('Você não manda nessa porra! Sai fora!');
            }
        break;
        case 'clear':
            if(!args[1]) return message.channel.send('Erro! Você precisa colocar o segundo argumento <numero de mensagens>.')
            if(message.member.hasPermission("ADMINISTRATOR")){
                message.channel.bulkDelete(args[1]);
            }else{
                message.channel.send('Você não manda nessa porra! Sai fora!');
            }
        break;        
    }
/*
    if (message.content == '!mute') {
        for (const [memberID, member] of channel.members) {
            message.reply('Sh!....NINGUÉM pode falar');
            member.voice.setMute(true);
        }
    }else if(message.content == '!open') {
        for (const [memberID, member] of channel.members) {
            message.reply('Sh!....TODOS podem falar');
            member.voice.setMute(false);
        }
    }else if(message.content == '!adm' && message.member.hasPermission("ADMINISTRATOR")) {
        for (const [memberID, member] of channel.members) {
            message.reply('Sh!....Somente VOCE pode falar');
            if (member != message.member){
                member.voice.setMute(true);
            }
        }
    }
    */
  }

   /* if (message.member.hasPermission("ADMINISTRATOR")) {
        if(message.channel.id == '758917378079326249'){
            if (message.content == '!mute') {
                const members = message.member.voice.channel.members;
                members.forEach(member => {
                  member.voice.setMute(true);
                });
            }
            if (message.content == '!open') {
                const members = message.member.voice.channel.members;
                members.forEach(member => {
                    member.voice.setMute(false);
                });
            }
        }else{
            message.reply('Aqui não rapa! Vai pro canal do Among Us!');
        }
    }else{
        message.reply('Você não manda em nada aqui fio!');
    }*/
});


bot.login('NzU4ODkxOTY3NzQwMTE3MDMz.X21jOA.EUN6J11ZUpktvYG1crmTJyoJwZE');