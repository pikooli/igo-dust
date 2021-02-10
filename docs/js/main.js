"use strict";

/* global IgoDust */

function init(contentTitle, contentDescrip, tpl, data, document, prefix) {
  const prefixToUse = !prefix ? "" : prefix;
  const template = document.getElementById(`${prefixToUse}template`);
  const title = document.getElementById(`${prefixToUse}title`);
  const description = document.getElementById(`${prefixToUse}description`);
  const locals = document.getElementById(`${prefixToUse}locals`);
  const button = document.getElementById(`${prefixToUse}compile`);
  const result = document.getElementById(`${prefixToUse}result`);
  template.value = tpl;
  locals.value = data;
  title.innerHTML = contentTitle;
  description.innerHTML = contentDescrip;

  button.onclick = function () {
    const compiled = IgoDust.compile(template.value);
    let data = locals.value;
    if (!data) {
      result.innerHTML = IgoDust.render(compiled);
      return;
    }

    try {
      const f = new Function("return " + data + ";");
      data = f();
      result.innerHTML = IgoDust.render(compiled, data);
    } catch (e) {
      result.innerHTML = `Error while compiling - ${e.message}`;
      console.error(e); // eslint-disable-line
    }
    return false;
  };
}
//  for autosize the textArea when input or clicked
function auto_grow(element) {
  element.style.height = "1rem";
  element.style.height = (element.scrollHeight)+"px";
}