const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stat_check')
        .setDescription('Does a stat check of 1d100 + your stat')
    .addIntegerOption(option => 
        option.setName('stat')
            .setDescription('Your stat number used for')
            .setRequired(true)),
    async execute(interaction) {
        //var setup
        const stat = interaction.options.getInteger('stat');
        let roll, totalroll = 0;

        // rolls the dice
        roll = Math.floor(Math.random() * (100-1) + 1);

        //addes the roll with stat
        totalroll = roll + stat;

        await interaction.reply("You have a Stat check of " + totalroll + "\n" + "Natural roll is " + roll);
    }
}