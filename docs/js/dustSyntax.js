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
	  "Reference",
	  "descrip",
	  `{name} is a valid Dust reference.<br/>\n`+
		`0name is not a valid Dust reference.<br/>\n`+
		`{.name} is a valid Dust reference.<br/>\n`+
		`{.} is a valid dust reference.<br/>\n`+
		`{markup|s}: The |s filter does not escape HTML.<br/>\n`+
		`{markup}: HTML is escaped by default.`,
		`{\n`+
		`	"name": "name",\n`+
		`	"0name": "0name",\n`+
		`	"markup": '<span class=\"highlight\">Markup allowed</span>'\n`+
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
  