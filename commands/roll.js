const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls for you, add a min and max! modifiers can be added to it as well')
    .addIntegerOption(option =>
        option.setName('min')
            .setDescription('The min value')
            .setRequired(true))
    .addIntegerOption(option =>
        option.setName('max')
            .setDescription('The max value')
            .setRequired(true))
    .addIntegerOption(option =>
        option.setName('modify')
            .setDescription('when you need to add/subtract something (AFFECTS ALL DICE)')
            .setRequired(false))
    .addIntegerOption(option => 
        option.setName('roll')
            .setDescription('how many times will you roll')
            .setRequired(false))
    .addIntegerOption(option =>
        option.setName('finalmodify')
            .setDescription('adds/subtract the TOTAL of the rolled die/dice')
            .setRequired(false)),
	async execute(interaction) {
    //var setup
		const min = interaction.options.getInteger('min');
        const max = interaction.options.getInteger('max');
        const modify = interaction.options.getInteger('modify');
        let timesrolled = interaction.options.getInteger('roll');
        let fmodify = interaction.options.getInteger('finalmodify');
        const rolls = [];
        const modrolls = [];


        //checks if the fmodify is there or not
        if (fmodify){
            totalroll = fmodify; // gives the final roll 
        } else {
            totalroll = 0; // sum roll of all rolled dice if no f modify
        }

        looproll = 0;  // currently rolled dice in case of loop roll

        if (!timesrolled){
            timesrolled = 1;
        }

        // the random first
        for (i = 0; i < timesrolled; i++) {
            looproll = Math.floor(Math.random() * (max - min) + min);

            rolls.push(looproll);
            if (modify) {
                looproll += modify;
            }
            modrolls.push(looproll);

            totalroll += looproll;
        }

        await interaction.reply("You have rolled a " + totalroll + "!\n" + "Natural rolled dice are " + rolls);
	},
};