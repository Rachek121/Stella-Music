const { QueueRepeatMode } = require('discord-player');

module.exports = async ({ inter, queue }) => {
    const methods = ['disabled', 'track', 'queue'];
    if (!queue?.isPlaying()) return inter.editReply({ content: `No music currently playing... try again ? ❌` });

    if (queue.repeatMode === 0) queue.setRepeatMode(QueueRepeatMode.OFF)
    else queue.setRepeatMode(queue.repeatMode + 1)

    return inter.editReply({ content: `Loop made has been set to **${methods[queue.repeatMode]}**.✅` });
}