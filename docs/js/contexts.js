class Example {
	constructor(title, description, template, data) {
	  (this.title = title), (this.description = description);
	  this.template = template;
	  this.data = data;
	}
  }
  
	// need to look at it, it seem to not work.

  const examples = [
	new Example(
	  "Contexts",
	  "descrip",
	  `Parent: {firstName} {lastName}<br/>\n`+
		`Children: {#children}{firstName} {lastName} {/children}`,
	  `{\n`+
		`	"firstName": "John",\n`+
		`	"lastName": "Smith",\n`+
		`	"children": [\n`+
		`		{ "firstName": "Alice" },\n`+
		`		{ "firstName": "Bobby" },\n`+
		`		{ "firstName": "Charlie" }\n`+
		`	]\n`+
		`}`
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
  