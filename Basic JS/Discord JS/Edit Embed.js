
let firstEmbed;

async function getEmbed(){
  const resultembed = new Discord.MessageEmbed()
  .setTitle('title here')
  .setDescription('blabla')
  firstEmbed = await msg.reply({embeds: [resultembed]})
  await firstEmbed.react('👍')
}

async function changeEmbed(){
  const resultembed2 = new Discord.MessageEmbed()
  .setTitle('tittle 2)
  .setDescription('blobloo')
  await firstEmbed.edit({embeds:[resultembed2]})
}
