import _classCallCheck from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import * as TabsContext from "./TabsContext";

var Tab =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement(TabsContext.TabConsumer, null, function (value) {
        value.context.addTab({
          id: _this.props.id,
          title: _this.props.title
        });
        return value.context.activeTab.id === _this.props.id && _this.props.children;
      });
    }
  }]);

  return Tab;
}(Component);

export default Tab;