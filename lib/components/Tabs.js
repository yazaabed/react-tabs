import _classCallCheck from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import glamorous from "glamorous";
import * as TabsContext from "./TabsContext";
import Tab from "./Tab";
var ListTabs = glamorous.ul({
  paddingLeft: 0,
  listStyle: "none",
  margin: 0
});
var TabTitleItem = glamorous.li({
  display: "inline-block",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
});
var ActiveTabBorder = glamorous.div({
  height: 4,
  backgroundColor: "#0088dd",
  position: "absolute",
  bottom: 0,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  willChange: "left, width"
}, function (props) {
  return props.activeTabElement && {
    width: props.activeTabElement.offsetWidth,
    left: props.activeTabElement.offsetLeft
  };
});
var TabAnchorItem = glamorous.a({
  textTransform: "capitalize",
  color: "#000000",
  fontWeight: 600,
  padding: "16px 30px",
  cursor: "pointer",
  opacity: "0.4",
  display: "block",
  textDecoration: "none",
  ":hover": {
    opacity: 1
  }
}, function (props) {
  return props.isActiveTab && {
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    cursor: "default",
    opacity: 1
  };
});
var TabsContainer = glamorous.div({
  position: "relative",
  borderBottom: "1px solid #dfdfdf"
});
var ReactTabs = glamorous.div({
  position: "realative"
});

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      tabsElements: []
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(TabsContext.TabProvider, {
        activeTab: this.props.activeTab
      }, React.createElement(TabsContext.TabConsumer, null, function (value) {
        return React.createElement(ReactTabs, null, React.createElement(TabsContainer, null, React.createElement(ListTabs, null, value.context.tabs.map(function (tab, index) {
          return React.createElement(TabTitleItem, {
            key: index,
            id: tab.id,
            innerRef: function innerRef(tabElement) {
              if (!_this2.state.tabsElements[tab.id]) {
                _this2.setState(function (prevState, props) {
                  var tabsElements = prevState.tabsElements;
                  tabsElements[tab.id] = tabElement;
                  return {
                    tabsElements: tabsElements
                  };
                });
              }
            }
          }, React.createElement(TabAnchorItem, {
            isActiveTab: value.context.activeTab.id === tab.id,
            href: "#",
            onClick: value.context.onClick(tab),
            onKeyPress: function onKeyPress(event) {
              var code = event.keyCode || event.which;

              if (code === 13) {
                _this2.onClick(tab)(event);
              }
            }
          }, tab.title));
        })), React.createElement(ActiveTabBorder, {
          activeTabElement: _this2.state.tabsElements[value.context.activeTab.id]
        })), _this2.props.children);
      }));
    }
  }]);

  return Tabs;
}(Component);

Tabs.Tab = Tab;
export default Tabs;