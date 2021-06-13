module.exports = async (client) => {
  client.Ready = true, 
  const statusArray = ['Music, LISTENING', 'Billie Eilish, LISTENING', 'Marvel, WATCHING', 'Music commands, LISTENING'];

    setInterval(() => {
      client.user.setStatus('dnd');
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })

    }, 3000)
});
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};

