import React from "react";
import ReactDOM from "react-dom";

// Import compoments
import CollapseContainer from "../lib/Recoco";
import Header from "./components/Header/Header";
import PrismWrapper from "./components/PrismWrapper/PrismWrapper";

// Import styles
import "./styles.css";
import styles from "./index.module.css";

// Code blocks
const codeExamples = {
  one: `>npm install recoco`,
  two: `import React from "react";
import CollapseContainer from "recoco";

const RecocoExample = () => {
  return (
    <div>
      <h1>Recoco</h1>
      <p>This is paragraph</p>
      <CollapseContainer
        headerText="This is the header"
      >
        <p>This is the content</p>
      </CollapseContainer>
    </div>
  )
}`
};

// recoco cammelCase inline style object
const recocoInlineStyles = {
  header: {},
  header: {},
  content: {}
};

const WebPage = () => {
  return (
    <main className={styles["main"]}>
      <Header />
      <section className={styles["section"]} id="about">
        <h1>recoco</h1>
        <p>
          <i>recoco</i> is a reusable and customizable React Collapsible
          Container, that you can use to easily create collapsible containers in
          your <i>React</i> projects without worrying about binding events,
          transitions and element sizes.
        </p>
        <p>
          It automatically expands to the width of its parent element, so you
          can control its size by simply creating a container around it and
          expecify a desired width, or just let it expand.
        </p>
        <p>
          I'm currently working on adding content to this page to explain in
          details how to use <i>recoco</i>, so far this is a quick overview
        </p>
      </section>
      <section className={styles["section"]} id="examples">
        <h3>Examples</h3>
        <p>
          This is the default style of <i>recoco</i>
        </p>
        <div className={styles["example-1"]}>
          <CollapseContainer headerText="Header Text">
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <p>
          <i>more examples coming soon..</i>
        </p>
      </section>
      <section className={styles["section"]} id="installation">
        <h2>Installation</h2>
        <p>
          To use <i>recoco</i> you can either install it as a dependency into
          your project with <i>npm</i>, Or simply copy the distribution file
          from the github repo.
        </p>
        <PrismWrapper lang="shell">{codeExamples.one}</PrismWrapper>
        <h3>How to use</h3>
        <p>
          Using <i>recoco</i> is pretty simple, just import it into your{" "}
          <i>React</i> component, and then use it anywhere you like:
        </p>
        <PrismWrapper>{codeExamples.two}</PrismWrapper>
        <p>The above example will output the following component</p>
        <CollapseContainer headerText="This is the header">
          <p>This is the content</p>
        </CollapseContainer>
        <h3>Known issues</h3>
        <p>
          If you are using your own <i>webpack+babel</i> configuration,{" "}
          <i>recoco</i> will work perfectly, but currently <i>recoco</i> doesn't
          work with <i>React</i> projects created using the{" "}
          <i>create-react-app</i> tool, am aware of it and will fix it when I
          have the chance, but in the meantime if you want to collaborate you
          can open a pull request to fix it!
        </p>
      </section>
      <section className={styles["section"]} id="props">
        <h2>Props</h2>
        <p>
          <i>recoco</i> can be customize by passing values to its <i>props</i>.
          The default values are as follow:
        </p>
        <ul>
          <li>headerText</li>
          <li>styledBorder</li>
          <li>borderColor</li>
          <li>large</li>
          <li>headerInlineStyle</li>
          <li>contentInlineStyle</li>
          <li>mainInlineStyle</li>
        </ul>
      </section>
    </main>
  );
};

const wrapper = document.querySelector("#root");
wrapper ? ReactDOM.render(<WebPage />, wrapper) : false;
