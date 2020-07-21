const assert    = require('assert');

const Renderer  = require('../../src/render/Renderer');

describe('Render Includes & Layouts', () => {

  it('should render include with param', () => {
    const template  = 'Hello {> "./templates/_world_ref" world="World" /}';
    const r         = new Renderer().render(template);
    assert.equal(r, 'Hello World!');
  });

  it('should render include with reference param', () => {
    const template  = 'Hello {> "./templates/_world_ref" world=w /}';
    const r         = new Renderer().render(template, {w: 'World'});
    assert.equal(r, 'Hello World!');
  });

  it('should render include with nested reference param', () => {
    const template  = 'Hello {> "./templates/_world_ref" world=test.w /}';
    const r         = new Renderer().render(template, {test: {w: 'World'}});
    assert.equal(r, 'Hello World!');
  });

  it('should render layout with content', () => {
    const template  = '{> "./templates/layout" /} {<content}{test.w}{/content}';
    const r         = new Renderer().render(template, {test: {w: 'World'}});
    assert.equal(r, 'Hello World! ');
  });

  it('should not crash if no content', () => {
    const template  = '{> "./templates/layout" /}';
    const r         = new Renderer().render(template, {test: {w: 'World'}});
    assert.equal(r, 'Hello !');
  });

  it('should render dynamic include', () => {
    const template  = 'Hello {> "./templates/{file}" /}';
    const r         = new Renderer().render(template, {file: '_world_ref', world: 'World'});
    assert.equal(r, 'Hello World!');
  });

  it('should render layout with content and loop', () => {
    const template  = '{> "./templates/layout" /} {<content}{#company}{.name}{/company}{/content}';
    const r         = new Renderer().render(template, {company: { name: 'World' }});
    assert.equal(r, 'Hello World! ');
  });
});
