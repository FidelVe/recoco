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
import ReactDOM from "react-dom";
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
}

ReactDOM.render(<RecocoExample />, YourAppRootId) : false;
`,
  three: `styledBorder={false}`,
  four: `large={false}`
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
          <i>recoco</i> exposes various <i>props</i> (listed{" "}
          <a href="#props">here</a>) to make it easy to customize. By default it
          will display as follow:
        </p>
        <div className={styles["example-1"]}>
          <CollapseContainer headerText="Header Text">
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <p>
          Theres a smaller version also that you can use by passing{" "}
          <code className="language-javascript">{codeExamples.four}</code> as a
          prop.
        </p>
        <div className={styles["example-1"]}>
          <CollapseContainer headerText="Header Text" large={false}>
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <p>
          If you want to change the color of the top-border, just pass a css
          compatible color value to the "borderColor" prop.
        </p>
        <p>
          Here's an example passing{" "}
          <code className="language-javascript">borderColor="red"</code>.
        </p>
        <div className={styles["example-1"]}>
          <CollapseContainer headerText="Header Text" borderColor="red">
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <div className={styles["example-1"]}>
          <CollapseContainer
            headerText="Header Text"
            borderColor="red"
            large={false}
          >
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <p>
          If you simple don't want the styled border, pass the following as a
          prop <code className="language-javascript">{codeExamples.three}</code>
          .
        </p>
        <div className={styles["example-1"]}>
          <CollapseContainer headerText="Header Text" styledBorder={false}>
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <div className={styles["example-1"]}>
          <CollapseContainer
            headerText="Header Text"
            styledBorder={false}
            large={false}
          >
            <p>Text inside the content</p>
          </CollapseContainer>
        </div>
        <p>
          There's many othe ways you can customize <i>recoco</i>, by using the
          various props listed <a href="#props">here</a>.
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
          Here's a list of all the props that can be passed:
        </p>
        <ul>
          <li>
            headerText:
            <ul>
              <li>Default type: string.</li>
              <li>Default value: "default header text"</li>
              <li>
                Description: Content to be displayed in the header. Is a{" "}
                <i>p</i> element wrapped inside a <i>div</i>
              </li>
            </ul>
          </li>
          <li>
            styledBorder:
            <ul>
              <li>Default type: boolean.</li>
              <li>Default value: true</li>
              <li>Description: true will display a colored top-border</li>
            </ul>
          </li>
          <li>
            borderColor:
            <ul>
              <li>Default type: CSS compatible color input.</li>
              <li>Default value: "#000"</li>
              <li>
                Description: If styledBorder=true, passing a color here will
                change the default color of the top-border for the value you
                pass
              </li>
            </ul>
          </li>
          <li>
            large:
            <ul>
              <li>Default type: boolean.</li>
              <li>Default value: true</li>
              <li>
                Description: true will render the default version, if false is
                passed it will render a smaller version which is roughly half
                the size
              </li>
            </ul>
          </li>

          <li>
            headerInlineStyle:
            <ul>
              <li>Default type: object.</li>
              <li>Default value: Empty object</li>
              <li>
                Description: You can pass a camelCase style object of css
                values. This values will be inyected as inline styles into the
                header element
              </li>
            </ul>
          </li>

          <li>
            contentInlineStyle:
            <ul>
              <li>Default type: object.</li>
              <li>Default value: Empty object</li>
              <li>
                Description: You can pass a camelCase style object of css
                values. This values will be inyected as inline styles into the
                content element
              </li>
            </ul>
          </li>

          <li>
            mainInlineStyle:
            <ul>
              <li>Default type: object.</li>
              <li>Default value: Empty object</li>
              <li>
                Description: You can pass a camelCase style object of css
                values. This values will be inyected as inline styles into the
                main element that wraps around both the header and content
                elements
              </li>
            </ul>
          </li>
          <li>
            mainElementId:
            <ul>
              <li>Default type: string.</li>
              <li>Default value: "recoco-main-id"</li>
              <li>
                Description: This is the id html tag for the main element, you
                can use the default one or modify it. You can use this value to
                define CSS properties in an external css file or target the
                element in the DOM.
              </li>
            </ul>
          </li>
          <li>
            headerElementId:
            <ul>
              <li>Default type: string.</li>
              <li>Default value: "recoco-header-id"</li>
              <li>
                Description: This is the id html tag for the main element, you
                can use the default one or modify it. You can use this value to
                define CSS properties in an external css file or target the
                element in the DOM.
              </li>
            </ul>
          </li>
          <li>
            contentElementId:
            <ul>
              <li>Default type: string.</li>
              <li>Default value: "recoco-content-id"</li>
              <li>
                Description: This is the id html tag for the content element,
                you can use the default one or modify it. You can use this value
                to define CSS properties in an external css file or target the
                element in the DOM.
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};

const wrapper = document.querySelector("#root");
wrapper ? ReactDOM.render(<WebPage />, wrapper) : false;
