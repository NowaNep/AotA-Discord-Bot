const { SlashCommandBuilder } = require('@discordjs/builders');
const catFacts  = require('cat-facts');
// roll for random fact that isnt even a cat fact (2%)
// roll for a useless cat fact (1%)
module.exports = {
    data: new SlashCommandBuilder()
        .setName('catfact')
        .setDescription('Gives a random cat fact!'),
    async execute(interaction) {
        let catfact = "";

        // rolls if it is a cat fact or a shitter
        roll = Math.ceil(Math.random() * 100);

        if(roll<98){ //useless fact
            
        }
        // to do (make it an embed)
        await interaction.reply(catFacts.random());

        // settng up random json for other stff
        // var catFacts = require('./cat-facts.json');
        // code uniqueRandomArray(catFacts);
    }
}