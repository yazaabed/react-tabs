# React Tabs
Simple React Tabs using the new react ContextAPI to manage changes active tabs or not. And there is no need to add tabs container you just add a tab component.

[![npm](https://img.shields.io/npm/v/@feuer/react-tabs.svg?style=flat-square)](https://www.npmjs.com/package/@feuer/react-tabs)
[![npm License](https://img.shields.io/npm/l/@feuer/react-tabs.svg?style=flat-square)](https://github.com/yazaabed/react-tabs)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

[![GitHub contributors](https://img.shields.io/github/contributors/yazaabed/react-tabs.svg?style=flat-square)](https://github.com/yazaabed/react-tabs)
[![GitHub stars](https://img.shields.io/github/stars/ng-packagr/ng-packagr.svg?label=GitHub%20Stars&style=flat-square)](https://github.com/celonis/widget-devkit)
[![npm Downloads](https://img.shields.io/npm/dw/@feuer/react-tabs.svg?style=flat-square)](https://www.npmjs.com/package/@feuer/react-tabs)

# Demo
- For quick demo please checkout this [storybook](https://feuer-ui.netlify.app/).
- For quick code usage pelase checkout this [codesandbox](https://codesandbox.io/s/frosty-pond-etcqj?file=/src/App.js)

## Introduction
This project done using ReactJS and normal styling to add a small react-tabs component to your project without a huge library.

## Installation
This module is distributed via npm which is bundled with node and should be installed as one of your project's dependencies:

### Yarn
```
yarn add @feuer/react-tabs
```

### Npm
```
npm install @feuer/react-tabs
```

This package also depends on `react`, `tslib` only esm for umd its already included, `react-dom`, `prop-types`. Please make sure you have it installed as well.

## Usage

### [Try it out in the browser](https://codesandbox.io/s/frosty-pond-etcqj?file=/src/App.js)

```jsx
import React from "react";
import { Tabs } from "@feuer/react-tabs";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const LeftTabs = () => (
  <div style={styles}>
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Tab 1">
        <div style={{ padding: 10 }}>
          This is tab 1
        </div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Tab 2">
        <div style={{ padding: 10 }}>
          This is tab 2
        </div>
      </Tabs.Tab>
    </Tabs>
  </div>
);
```

## Basic Props
This is the list of props that you should probably know about when using react-tabs.

### Tabs Component Props

```javascript
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
```

### Tab Component Props

```javascript
Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tabIndex: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Yazan Aabed**
* See also the list of [contributors](https://github.com/yazaabed/react-tabs/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
