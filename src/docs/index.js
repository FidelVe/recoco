import React from "react";
import ReactDOM from "react-dom";

// Import compoments
import CollapseContainer from "../lib/Recoco";
import Header from "./components/Header/Header";

// Import styles
import "./styles.css";
import styles from "./index.module.css";

const WebPage = () => {
  return (
    <main id="main">
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
      </section>
      <section className={styles["section"]} id="examples">
        <h2>Examples</h2>
        <p>
          <i>coming soon..</i>
        </p>
      </section>
      <section className={styles["section"]} id="installation">
        <h2>Installation</h2>
        <p>
          To use <i>recoco</i> you can either install it as a dependency into
          your project with <i>npm</i>, Or simply copy the distribution file
          from the github repo.
        </p>
        <pre>
          <code>&gt;npm install recoco</code>
        </pre>
        <h3>How to use</h3>
        <p>
          Using <i>recoco</i> is pretty simple, just import it into your{" "}
          <i>React</i> component, and then use it anywhere you like:
        </p>
        <pre>
          <code>
            import React from "react"; import CollapseContainer from "recoco";
            const App = () => return ( &lt;div&gt; &lt;h1&gt;Recoco&lt;/h1&gt;
            &lt;p&gt;This is paragraph&lt;/p&gt; &lt;CollapseContainer /&gt;
            &lt;/div&gt; ) }
          </code>
        </pre>
      </section>
      <CollapseContainer>
        <p>Text inside the content</p>
      </CollapseContainer>
    </main>
  );
};

const wrapper = document.querySelector("#root");
wrapper ? ReactDOM.render(<WebPage />, wrapper) : false;
