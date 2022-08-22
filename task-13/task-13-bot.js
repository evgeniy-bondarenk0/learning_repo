const { Telegraf } = require('telegraf');
require('dotenv').config();
const process = require('process');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) =>
    ctx.reply(`
    Hello, it's the telegram bot about me for the mentoring course in FoxmindEd programming school.

    Command list: 
    /about – information about me.
    /links - list of my social links.
    /help - list of bot commands.
`)
);

bot.help((ctx) =>
    ctx.reply(`
    Command list: 
    /about – information about me.
    /links - list of my social links.
    /help - list of bot commands.
`)
);

bot.command('about', (ctx) =>
    ctx.reply(`
Information about me:

Hi. I'm Yevhenii Bondarenko. I'm 24.  I live in Boryspil.
I have a master's degree in process automation and computer technologies.
Now, I'm learning Node.js in FoxmindEd programming school.
In the near future, I want to work as a backend developer.
`)
);

bot.command('links', (ctx) =>
    ctx.replyWithMarkdown(`
My social media:
[Linkedin](https://www.linkedin.com/in/evhenii-bondarenko-7426121b9/)
[GitHub](https://github.com/evgeniy-bondarenk0)
[Fasebook](https://www.facebook.com/profile.php?id=100004274507881)
`)
);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
