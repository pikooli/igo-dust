class Example {
  constructor(title, description, template, data){
    this.title = title,
    this.description  = description;
    this.template = template;
    this.data = data;
  }
};

const examples = [
  new Example(
    "Contexts", 
    "description",
    `Hello, {w}!`, 
    `{"w": "world"}`,),
  new Example(
    "If Else statement", 
    "description",
    `Have banana ? {?banana } yeah {:else} no {/banana}`,
    `{banana : true}`,),
  new Example(
    "test", 
    "description",
    `Hello {w}! 
    <br/><br/>
    My friends are {#friends}{@last} and {/last}{.}{@sep}, {/sep}{/friends}.
    <br/>
    {?hasFriends}Yay friends!{/hasFriends}`,
    `{"w": "World","friends": ["Alice", "Bob", "Charlie"],"hasFriends": function(p, l) {return p.friends;}}`),
]

window.onload = function () {
  examples.forEach((example, index ) => {
    init(example.title, example.description, example.template, example.data, window.document, `Example${index + 1}`);
  })
  return;
};
