import React, { CSSProperties } from "react";
import PropTypes from 'prop-types';
import { TabProvider, TabConsumer } from "./TabsContext";
import TabItem, {TabInputs} from "./Tab";

const ListTabs = ({ children, className = null, style = {}}) => (
  <ul style={{
    paddingLeft: 0,
    listStyle: "none",
    margin: 0,
    ...style
  }} className={className}>{ children }</ul>
);

const TabTitleItem = ({ children, innerRef, ...restProps }) => (
  <li 
  ref={innerRef}
  style={{
    display: "inline-block",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  }} { ...restProps }>{ children }</li>
);

const ActiveTabBorder = ({ activeTabElement, ...restProps }) => {
  const style: CSSProperties = {
    height: "4px",
    backgroundColor: "#0088dd",
    position: "absolute",
    bottom: "0",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    willChange: "left, width"
  };

  if (activeTabElement) {
    style.width = activeTabElement.offsetWidth;
    style.left = activeTabElement.offsetLeft;
  }

  return (
    <div style={style} { ...restProps } />
  )
};

const TabAnchorItem = ({ isActiveTab, children, tabIndex, ...restProps}) => {
  const style: CSSProperties & any = {
    textTransform: "capitalize",
    color: "#000000",
    fontWeight: 600,
    padding: "16px 30px",
    cursor: "pointer",
    opacity: "0.4",
    display: "block",
    textDecoration: "none",
    backgroundColor: "transparent",
    outline: "none",
    border: 0,
    ":hover": {
      opacity: 1
    }
  }

  if (isActiveTab) {
    style.transition = "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";
    style.cursor = "default";
    style.opacity = 1;
  }

  return (
    <button style={style} tabIndex={tabIndex} {...restProps}>{ children }</button>
  );
};


const TabsContainer = ({ children, ...restProps }) => (
  <div style={{
    position: "relative",
    borderBottom: "1px solid #dfdfdf"
  }}
  { ...restProps }>
    { children }
  </div>
);

const ReactTabs = ({ children, ...restProps }) => (
  <div style={{ position: "relative" }} { ...restProps }>
    { children }
  </div>
);

class Tabs extends React.Component {
  static Tab = TabItem;

  static propTypes: {
    activeTab: {
      id: React.Validator<string>;
    };
    children: React.Validator<React.ReactNode[]>;
    tabsProps: {
      style?: React.Validator<Object>;
      className?: React.Validator<string>;
    }
  };

  props: {
    activeTab: TabInputs;
    children: React.ReactDOM;
    tabsProps?: {
      style?: CSSProperties;
      className?: string;
    }
  };

  state = {
    tabsElements: []
  };

  updateDimensions() {
    this.setState({ ...this.state });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const tabsProps = this.props.tabsProps || {};

    return (
      <TabProvider activeTab={this.props.activeTab}>
        <TabConsumer>
          {value => (
            <ReactTabs>
              <TabsContainer>
                <ListTabs className={tabsProps.className} style={tabsProps.style}>
                  {value.context.tabs.map((tab, index) => (
                    <TabTitleItem
                      key={index}
                      id={tab.id}
                      innerRef={tabElement => {
                        if (!this.state.tabsElements[tab.id]) {
                          this.setState((prevState: { tabsElements: any[] }, props) => {
                            const tabsElements = prevState.tabsElements;
                            tabsElements[tab.id] = tabElement;

                            return {
                              tabsElements
                            };
                          });
                        }
                      }}
                    >
                      <TabAnchorItem
                        isActiveTab={value.context.activeTab.id === tab.id}
                        onClick={value.context.onClick(tab)}
                        tabIndex={tab.tabIndex || index}
                        onKeyPress={event => {
                          const code = event.keyCode || event.which;

                          if (code === 13) {
                            value.context.onClick(tab)(event);
                          }
                        }}
                      >
                        {tab.title}
                      </TabAnchorItem>
                    </TabTitleItem>
                  ))}
                </ListTabs>

                <ActiveTabBorder
                  activeTabElement={
                    this.state.tabsElements[value.context.activeTab.id]
                  }
                />
              </TabsContainer>

              {this.props.children}
            </ReactTabs>
          )}
        </TabConsumer>
      </TabProvider>
    );
  }
}

Tabs.propTypes = {
  activeTab: {
    id: PropTypes.string.isRequired,
  },
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  tabsProps: {
    style: PropTypes.object,
    className: PropTypes.string
  }
};

export default Tabs;
