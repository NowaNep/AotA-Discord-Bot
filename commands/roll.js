const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls for you, add a min and max! modifiers can be added to it as well')
    .addIntegerOption(option =>
        option.setName('min')
            .setDescription('The min value of the die')
            .setRequired(true))
    .addIntegerOption(option =>
        option.setName('max')
            .setDescription('The max value of the die')
            .setRequired(true))
    .addIntegerOption(option =>
        option.setName('modify')
            .setDescription('When you need to add/subtract all the die/dice')
            .setRequired(false))
    .addIntegerOption(option => 
        option.setName('roll')
            .setDescription('How many times will you roll')
            .setRequired(false))
    .addIntegerOption(option =>
        option.setName('final_modify')
            .setDescription('Adds/subtracts the TOTAL of the rolled die/dice')
            .setRequired(false)),
	async execute(interaction) {
    //var setup
		const min = interaction.options.getInteger('min');
        const max = interaction.options.getInteger('max');
        const modify = interaction.options.getInteger('modify');
        let timesrolled = interaction.options.getInteger('roll');
        let fmodify = interaction.options.getInteger('final_modify');
        const rolls = [];
        const modrolls = [];

        if (fmodify){ //checks if the fmodify is there or not
            totalroll = fmodify; // gives the final roll 
        } else {
            totalroll = 0; // sum roll of all rolled dice if no f modify
        };

        looproll = 0;  // currently rolled dice in case of loop roll

        if (!timesrolled){
            timesrolled = 1;
        };

        // the random first
        for (let i = 0; i < timesrolled; i++) {
            looproll = Math.floor(Math.random() * (max - min + 1) + min);

            rolls.push(looproll);
            if (modify) {
                looproll += modify;
                if (looproll <= 0) {
                    looproll = 1;
                };
            };
            modrolls.push(looproll);

            totalroll += looproll;
        };

        if (totalroll <= 0){
            totalroll = 1;
        };

        await interaction.reply("You have rolled a " + totalroll + "\n" + "Natural rolled dice are " + rolls);
	},
};