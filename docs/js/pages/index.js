window.onload = function () {
	const examples = [
		new Example('Contexts', 'description', `Hello, {w}!`, `{"w": "world"}`),
		new Example(
			'If Else statement',
			'description',
			`Have banana ? {?banana } yeah {:else} no {/banana}`,
			`{banana : true}`
		),
		new Example(
			'test',
			'description',
			`Hello {w}!\n` +
				`<br/><br/>\n` +
				`My friends are {#friends}{@last} and {/last}{.}{@sep}, {/sep}{/friends}.\n` +
				`<br/>\n` +
				`{?hasFriends}Yay friends!{/hasFriends}`,
			`{"w": "World","friends": ["Alice", "Bob", "Charlie"],"hasFriends": function(p, l) {return p.friends;}}`
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
