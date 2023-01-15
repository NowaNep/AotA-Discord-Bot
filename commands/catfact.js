const { SlashCommandBuilder } = require('@discordjs/builders');
const catfact  = require('cat-facts');
// roll for random fact that isnt even a cat fact (2%)
// roll for a useless cat fact (1%)
module.exports = {
    data: new SlashCommandBuilder()
        .setName('catfact')
        .setDescription('Gives a random cat fact!'),
    async execute(interaction) {
        await interaction.reply(catfact.random());
    }
}