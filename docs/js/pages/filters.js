window.onload = function () {
	const examples = [
		new Example(
			'Contexts',
			'descrip',
			`{title}`,
			`{"title": '"All is <Fair> in Love & War"'}`
		),
		new Example(
			'Contexts',
			'descrip',
			`{title|s}`,
			`{"title": '"All is <Fair> in Love & War"'}`
		),
		new Example(
			'Contexts',
			'descrip',
			`{title|js|s}`,
			`{"title": '"All is <Fair> in Love & War"'}`
		),
	];
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
