# RECOCO. React Collapsible Container

**recoco** is a reusable and customizable *React Collapsible Container*, that you can use to easily create collapsible containers in your *React* projects without worrying about binding events, transitions and element sizes.

It automatically expands to the width of its parent element, so you can control its size by simply creating a container around it and expecify a desired width, or just let it expand.

You can visit the [recoco website](https://fidelve.github.io/recoco) to see live examples of **recoco**.

## Installing

To use *recoco* you can either install it as a dependency into your project with npm, Or simply copy the distribution file from the github repo.

```bash
>npm install recoco
```

## How to use

Using *recoco* is pretty simple, just import it into your *React* component, and then use it anywhere you like:

```jsx
import React from "react";
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
```

### Known issues

If you are using your own *webpack+babel* configuration, *recoco* will work perfectly, but currently it doesn't work with *React* projects created using the *create-react-app* tool, I'm aware of it and will fix it when I have the chance, but in the meantime if you want to collaborate you can open a pull request to fix it!

## Props

*recoco* can be customize by passing values to its *props*. Here's a list of all the props that can be passed:

* headerText:
  - Default type: string.
  - Default value: "default header text"
  - Description: Content to be displayed in the header. Is a *p* element wrapped inside a *div*.
* styledBorder:
  - Default type: boolean.
  - Default value: true
  - Description: true will display a colored top-border
* borderColor:
  - Default type: CSS compatible color input.
  - Default value: "#000"
  - Description: If styledBorder=true, passing a color here will change the default color of the top-border for the value you pass.
* large:
  - Default type: boolean.
  - Default value: true
  - Description: true will render the default version, if false is passed it will render a smaller version which is roughly half the size.
* headerInlineStyle:
  - Default type: object.
  - Default value: Empty object
  - Description: You can pass a camelCase style object of css values. This values will be inyected as inline styles into the header element.
* contentInlineStyle:
  - Default type: object.
  - Default value: Empty object
  - Description: You can pass a camelCase style object of css values. This values will be inyected as inline styles into the content element.
* mainInlineStyle:
  - Default type: object.
  - Default value: Empty object
  - Description: You can pass a camelCase style object of css values. This values will be inyected as inline styles into the main element that wraps around both the header and content elements.
* mainElementId:
  - Default type: string.
  - Default value: "recoco-main-id"
  - Description: This is the id html tag for the main element, you can use the default one or modify it. You can use this value to define CSS properties in an external css file or target the element in the DOM.
* headerElementId:
  - Default type: string.
  - Default value: "recoco-header-id"
  - Description: This is the id html tag for the main element, you can use the default one or modify it. You can use this value to define CSS properties in an external css file or target the element in the DOM.
* contentElementId:
  - Default type: string.
  - Default value: "recoco-content-id"
  - Description: This is the id html tag for the content element, you can use the default one or modify it. You can use this value to define CSS properties in an external css file or target the element in the DOM.

## Built With

* [React](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [Babeljs](https://babeljs.io/)

## Authors

* Fidel Sanchez-Bueno - [FidelVe](https://github.com/FidelVe)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Initial README.md file template by [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
