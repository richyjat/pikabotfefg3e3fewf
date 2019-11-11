const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = (client, message, args) =>{
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.RichEmbed()
        .setColor("#9400D3")
        .setAuthor(`FantasyBot`, client.user.displayAvatarURL)
        .addField(`Version`,`1.5`, true)
        .addField(`Library`,`Discord.js` , true)
        .addField(`Creator`,`Volt#9462&PIKACHUᶠᵃⁿᵗᵃˢʸ ˡᵃᵇˢ#5686`, true)
        .addField(`Servers`, `${client.guilds.size}`, true)
        .addField(`Users`, `${client.users.size}`, true)
        .addField(`Invite`, `[Invite FantasyBot](https://discordapp.com/oauth2/authorize?client_id=605328816402857985&scope=bot&permissions=2146958847)`, true)
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);    

}
