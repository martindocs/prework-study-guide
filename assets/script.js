
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopics = topics[Math.floor(Math.random() * topics.length)];

function selectTopic(){
  if(randomTopics === "HTML"){
    console.log("let's study HTML!")
  }else if(randomTopics === "CSS"){
    console.log("let's study CSS!")  
  }else if(randomTopics === "Git"){
    console.log("let's study Git!")  
  }else if(randomTopics === "Javascipt"){
    console.log("let's study Javascrpt!")  
  }else {
    console.log("Please try again!");
  }
}

function listTopics() {

  for(let i = 0; i < topics.length; i++){
    console.log(topics[i]);
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();
