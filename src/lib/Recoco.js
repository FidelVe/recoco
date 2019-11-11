import React from "react";
import HeaderContainer from "./component/Header/Header";
import styles from "./Recoco.module.css";

// constant declarations
const LARGE_HEIGHT = "58px";
const LARGE_FONT = "20px";
const SMALL_HEIGHT = "34px";
const SMALL_FONT = "15px";

class CollapseContainer extends React.Component {
  /*
   * Props available for this component:
   *  - headerText: 'default value for the header text',
   *  - styledBorder: true,
   *  - borderColor: '#000',
   *  - large: true,
   *  - headerInlineStyle: {}
   *  - contentInlineStyle: {}
   *  - mainInlineStyle: {},
   *  - mainElementId = 'recoco-main-id',
   *  - headerElementId = 'recoco-header-id',
   *  - contentElementId = 'recoco-content-id'
   *
   *
   */
  constructor(props) {
    super(props);
    // create ref for <section />
    this.componentRef = React.createRef();

    // Initial React component state
    this.state = {
      isOpen: false
    };

    this.baseParams = this.createBaseParams(props);
  }

  createBaseParams = props => {
    let params = {
      initialRender: true,
      maxHeightWhenCollapsed: "",
      maxHeightWhenExpanded: props.large ? LARGE_HEIGHT : SMALL_HEIGHT
    };

    params.maxHeightWhenCollapsed =
      props.large === true ? LARGE_HEIGHT : SMALL_HEIGHT;

    return params;
  };

  onHeaderClick = () => {
    // State change
    this.setState({ isOpen: !this.state.isOpen });
  };

  calculateInitialInlineStyles = () => {};

  getInlineStyle = () => {
    // Initializing 'inlineStyles' object
    let inlineStyles = {
      mainStyle: {
        // maxHeight
        // borderColor
        // borderTop
      },
      headerStyle: {
        maxHeight: this.baseParams.maxHeightWhenCollapsed
      },
      headerText: {
        // fontSize
      },
      headerIcon: {
        // width
        // height
        // background-size
      },
      contentStyle: {}
    };

    // ********************
    // these only need to be calculated once, before the first render
    // TODO: optimize the code, put the calculations in another function and
    // only do them once
    // Border Style preferences
    if (!this.props.styledBorder) {
      inlineStyles.mainStyle.border = "none";
    } else {
      inlineStyles.mainStyle.borderTop = `solid 5px ${this.props.borderColor}`;
    }

    // Header img size calculations
    let headerImgSize = parseInt(this.baseParams.maxHeightWhenCollapsed) - 4;

    inlineStyles.headerIcon = {
      width: `${headerImgSize - 8}px`,
      height: `${headerImgSize - 8}px`,
      backgroundSize: `${headerImgSize}px ${headerImgSize}px`
    };

    // Header label calculations
    inlineStyles.headerText.fontSize =
      this.props.large === true ? LARGE_FONT : SMALL_FONT;

    // Set the maxHeight depending on the state (collapsed/uncollapsed)
    inlineStyles.mainStyle.maxHeight = this.state.isOpen
      ? this.baseParams.maxHeightWhenExpanded
      : this.baseParams.maxHeightWhenCollapsed;

    return inlineStyles;
  };

  componentDidUpdate() {}
  componentDidMount() {
    // Get the elements from the DOM
    let contentEl = this.componentRef.current.children[1];

    // Get the computed style of element after being mounted in DOM
    let computedContentStyle = getComputedStyle(contentEl);

    // This is the maximum height for the collapse container, it will depend
    // on the content of itself + and extra margin for handling browser
    // resize.
    this.baseParams.maxHeightWhenExpanded =
      parseInt(contentEl.offsetHeight) >
      parseInt(this.baseParams.maxHeightWhenExpanded)
        ? parseInt(contentEl.offsetHeight) * 2
        : this.baseParams.maxHeightWhenExpanded;
  }

  render() {
    // Get inline styles for the elements
    const {
      headerStyle,
      contentStyle,
      headerIcon,
      headerText,
      mainStyle
    } = this.getInlineStyle();

    // Get calculated inline styles for the header and content styles, and
    // override with custom values passed as props (if any is passed)
    const contentInlineStyle = {
      ...contentStyle,
      ...this.props.contentInlineStyle
    };
    const headerInlineStyle = {
      ...headerStyle,
      ...this.props.headerInlineStyle
    };
    const mainInlineStyle = {
      ...mainStyle,
      ...this.props.mainInlineStyle
    };

    return (
      <>
        <section
          ref={this.componentRef}
          className={styles["collapse-container"]}
          style={mainInlineStyle}
          id={this.props.mainElementId}
        >
          <HeaderContainer
            headerStyle={headerInlineStyle}
            headerTextStyle={headerText}
            headerIconStyle={headerIcon}
            onHeaderClick={this.onHeaderClick}
            headerText={this.props.headerText}
            headerIconIsOpen={this.state.isOpen}
            id={this.props.headerElementId}
          />
          <article
            style={contentInlineStyle}
            className={styles["collapse-content"]}
            id={this.props.contentElementId}
          >
            {this.props.children}
          </article>
        </section>
      </>
    );
  }
}

CollapseContainer.defaultProps = {
  headerText: "default header text",
  styledBorder: true,
  borderColor: "#000",
  large: true,
  headerInlineStyle: {},
  contentInlineStyle: {},
  mainInlineStyle: {},
  mainElementId: "recoco-main-id",
  headerElementId: "recoco-header-id",
  contentElementId: "recoco-content-id"
};

export default CollapseContainer;
