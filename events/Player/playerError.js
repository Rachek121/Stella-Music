const { EmbedBuilder } = require('discord.js');
const { Translate } = require("../../process_tools");

module.exports = (queue, error) => {

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate(`Bot had an unexpected error, please contact developers!`)})
        .setColor('#ed4245');

        queue.metadata.channel.send({ embeds: [embed] });

        console.log((`Error emitted from the player <${error.message}>`))
    })()
}
