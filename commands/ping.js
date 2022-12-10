const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Checks if the bot is alive'),
	async execute(interaction) {
		await interaction.reply('Nep is awake!');
	},
};