import _objectSpread from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/yazanharri/WebstormProjects/react-tabs/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
var TabsContext = React.createContext({
  prevActiveTab: {},
  activeTab: {}
});

var TabProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabProvider, _React$Component);

  function TabProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      tabs: [],
      prevActiveTab: {},
      activeTab: _this.props.activeTab
    };

    _this.addTab = function (newTab) {
      var isNewTabFound;

      for (var i in _this.state.tabs) {
        var tab = _this.state.tabs[i];

        if (tab.id === newTab.id) {
          isNewTabFound = true;
          break;
        }
      }

      if (!isNewTabFound) {
        _this.setState(function (prevState, props) {
          return {
            tabs: prevState.tabs.concat(newTab)
          };
        });
      }
    };

    _this.removeTab = function (tabId) {
      _this.setState(function (prevState, props) {
        return {
          tabs: prevState.tabs.filter(function (tab) {
            return tab.id !== tabId;
          })
        };
      });
    };

    _this.onClick = function (tab) {
      return function (event) {
        _this.setState(function (prevState, props) {
          return {
            prevActiveTab: prevState.activeTab,
            activeTab: tab
          };
        });
      };
    };

    return _this;
  }

  _createClass(TabProvider, [{
    key: "render",
    value: function render() {
      return React.createElement(TabsContext.Provider, {
        value: {
          context: _objectSpread({}, this.state, {
            addTab: this.addTab,
            removeTab: this.removeTab,
            onClick: this.onClick
          })
        }
      }, this.props.children);
    }
  }]);

  return TabProvider;
}(React.Component);

var TabConsumer = TabsContext.Consumer;
export { TabProvider, TabConsumer };