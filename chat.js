const {PubSub} = require('@google-cloud/pubsub');
const readline = require('readline');
const user = process.argv[2];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `> `
});

// Creates a client
const pubsub = new PubSub();

const topicName = 'capchat'
const subscriptionName = `capchat-${user}`

// References an existing subscription
const subscription = pubsub.subscription(subscriptionName);

const messageHandler = message => {
  // TODO
  // store buffer text in closure
  // clear line
  // log message
  // reprint buffer
  console.log()
  console.log(`\t${message.data}`);
  message.ack();
  rl.prompt(true)
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);

rl.prompt();

rl.on('line', (line) => {
  let dataBuffer = Buffer.from(`${user}: ${line}`)
  pubsub.topic(topicName).publish(dataBuffer)
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  subscription.removeListener('message', messageHandler);
  process.exit(0);
});
