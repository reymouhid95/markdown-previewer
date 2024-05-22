import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const defaultMarkdown = `
  # Heading 1
  ## Heading 2
  [A link](https://www.freecodecamp.org)
  \`inline code\`
  \`\`\`
  // code block
  function helloWorld() {
    console.log("Hello, world!");
  }
  \`\`\`
  - List item
  > Blockquote
  ![Image](https://via.placeholder.com/150)
  **Bold text**
`;

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Editor markdown={markdown} handleChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;
