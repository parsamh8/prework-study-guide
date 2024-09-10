const topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topic[Math.floor(Math.random() * topic.length)];

function listTopics() {
    for (let x = 0; x < topic.length; x++) {
    console.log(topic[x]);
    }
}

function selectTopics() {

 if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') { 
  console.log("Let's study CSS!");
    } else if (randomTopic === 'GitBash') {
  console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
    } else {
  console.log('Please try again!');
    }
    
}
console.log("Here are the topics I study during pre-work:")
listTopics();
console.log("Which topics should I study now?")
selectTopics();