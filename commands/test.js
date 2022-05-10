const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Testing things with nep nep! please dont touch them'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
          // sets up the custom id to set as equals to
					.setCustomId('multiRoll')
          // it is what it says
					.setPlaceholder('Nothing selected neppu :(')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	},
};