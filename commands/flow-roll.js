const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flow_roll')
        .setDescription('Makes a flow roll for you.')
    .addIntegerOption(option => 
        option.setName('dice')
            .setDescription('How many dice is being rolled')
            .setRequired(true))
    .addIntegerOption(option => 
        option.setName('max')
            .setDescription('The max possible roll')
            .setRequired(true))
    .addIntegerOption(option => 
        option.setName('final_modify')
            .setDescription('What is added regardless')
            .setRequired(false)),
    async execute(interaction) {
        const max = interaction.options.getInteger('max');
        let finalmodify = interaction.options.getInteger('final_modify');
        const timesrolled = interaction.options.getInteger('dice');
        const rolls = [];
        let totalroll= 0;

        if (finalmodify) {
            totalroll = finalmodify;
        };

        for (let i = 0; i < timesrolled; i++) {
            looproll = Math.floor(Math.random() * (max - 1) + 1);
            totalroll += looproll;
            rolls.push(looproll);
        };

        await interaction.reply("You have rolled a " + totalroll + "\n" + "Natural rolled dice are " + rolls);
    }
};