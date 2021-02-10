class Example {
  constructor(title, description, template, data) {
    (this.title = title), (this.description = description);
    this.template = template;
    this.data = data;
  }
}

const examples = [
  new Example(
    "Contexts",
    "descrip",
    `{title}`,
    `{"title": '"All is <Fair> in Love & War"'}`
  ),
  new Example(
    "Contexts",
    "descrip",
    `{title|s}`,
    `{"title": '"All is <Fair> in Love & War"'}`
  ),
  new Example(
    "Contexts",
    "descrip",
    `{title|js|s}`,
    `{"title": '"All is <Fair> in Love & War"'}`
  ),
];

window.onload = function () {
  examples.forEach((example, index) => {
    init(
      example.title,
      example.description,
      example.template,
      example.data,
      window.document,
      `Example${index + 1}`
    );
  });
  return;
};
