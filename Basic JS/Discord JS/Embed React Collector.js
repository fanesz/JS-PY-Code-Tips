const sentMessage = await msg.channel.send('React to this!');
await sentMessage.react('👍');
const filter = (reaction, user) => reaction.emoji.name === '👍' && !user.bot;
const collector = sentMessage.createReactionCollector({
  filter,
  max: 5,
});
collector.on('collect', (reaction) => {
  console.log(`Collected a new ${reaction.emoji.name} reaction`);
});
