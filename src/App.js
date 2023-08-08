import { useRef, useEffect } from "react";
import { marked } from "marked";

marked.use({
  breaks: true,
  mangle: false,
  headerIds: false,
});


const App = () => {

  const inputText = useRef('');
  const initialValue = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(initialValue);
  }, []);
  
  const handleInputChange = () => {
    const rawMarkup = marked.parse(inputText.current.value);
    document.getElementById("preview").innerHTML = rawMarkup;
  };

  return (
    <div className="contenedor d-flex flex-row justify-content-center align-items-stretch gap-4 flex-wrap">
      <div className="panel editor">
        <header className="title">
          <i className="fa fa-free-code-camp"></i> Editor
        </header>
        <textarea
          id="editor"
          className="form-control p-4"
          ref={inputText}
          autoFocus
          onChange={handleInputChange}
        >
        {initialValue}
        </textarea>
      </div>
      <div className="panel previewer">
        <header className="title">
          <i className="fa fa-free-code-camp"></i> Previewer
        </header>
        <div id="preview" className="form-control"></div>
      </div>
    </div>
  );
};

export default App;
