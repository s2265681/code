
<p align="center">
  <a href="https://ant.design">
    <img width="400" src="https://img-blog.csdnimg.cn/202005272236562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE2MDM4NQ==,size_16,color_FFFFFF,t_70">
  </a>
</p>

<h1 align="center">RockUI</h1>

English | [Português](./README-pt_BR.md) | [简体中文](./README-zh_CN.md)

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## 📦 Install

```bash
npm install rockui
```

```bash
yarn add rockui
```

## 🔨 Usage

```jsx
import { Button, Icon } from 'rockui';

const App = () => (
  <>
        <Button
            size={ButtonSize.Small}
            autoFocus
            onClick={(e) => {
              e.preventDefault();
              // alert("123");
            }}
            className="tok"
          >
            hello
          </Button>
    <Icon icon='coffee' theme="warning" size="2x"/>
  </>
);
```

And import style manually:

```jsx
import 'rockui/dist/rockui.css'; // or 'rockui/dist/rockui.less'
```

### TypeScript

`rockui` is written in TypeScript with complete definitions, check [Use in TypeScript](https://ant.design/docs/react/use-in-typescript) to getting started.

## 🌍 Internationalization

Dozens of languages supported in `rockui`, see [i18n](https://ant.design/docs/react/i18n).

## 🔗 Links

- [Home page](https://ant.design/)
- [Components](https://ant.design/components/button/)
- [Ant Design Pro](http://pro.ant.design/)
- [Change Log](CHANGELOG.en-US.md)
- [rc-components](http://react-component.github.io/)
- [Mobile UI](http://mobile.ant.design)
- [Ant Design Icons](https://github.com/ant-design/ant-design-icons)
- [Ant Design Colors](https://github.com/ant-design/ant-design-colors)
- [Ant Design Pro Layout](https://github.com/ant-design/ant-design-pro-layout)
- [Ant Design Pro Blocks](https://github.com/ant-design/pro-blocks)
- [Dark Theme](https://github.com/ant-design/ant-design-dark-theme)
- [Landing Pages](https://landing.ant.design)
- [Motion](https://motion.ant.design)
- [Scaffold Market](http://scaffold.ant.design)
- [Developer Instruction](https://github.com/ant-design/ant-design/wiki/Development)
- [Versioning Release Note](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [FAQ](https://ant.design/docs/react/faq)
- [CodeSandbox Template](https://u.ant.design/codesandbox-repro) for bug reports
- [Awesome Ant Design](https://github.com/websemantics/awesome-ant-design)
- [Customize Theme](https://ant.design/docs/react/customize-theme)
- [How to Apply for Being A Collaborator](https://github.com/ant-design/ant-design/wiki/Collaborators#how-to-apply-for-being-a-collaborator)

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ant-design/ant-design)

Or clone locally:

```bash
$ git clone git@github.com:ant-design/ant-design.git
$ cd ant-design
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:8001 , see more at [Development](https://github.com/ant-design/ant-design/wiki/Development).

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide](https://ant.design/docs/react/contributing) and let's build a better rockui together.

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/ant-design/ant-design/pulls) or as [GitHub issues](https://github.com/ant-design/ant-design/issues). If you'd like to improve code, check out the [Development Instructions](https://github.com/ant-design/ant-design/wiki/Development) and have a good time! :)

If you are a collaborator, please follow our [Pull Request principle](https://github.com/ant-design/ant-design/wiki/PR-principle) to create a Pull Request by [collaborator template](https://github.com/ant-design/ant-design/compare?expand=1&template=collaborator.md).

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/repos/34526884)

## ❤️ Sponsors and Backers [![](https://opencollective.com/ant-design/tiers/sponsors/badge.svg?label=Sponsors&color=brightgreen)](https://opencollective.com/ant-design#support) [![](https://opencollective.com/ant-design/tiers/backers/badge.svg?label=Backers&color=brightgreen)](https://opencollective.com/ant-design#support)

[![](https://opencollective.com/ant-design/tiers/sponsors.svg?avatarHeight=36)](https://opencollective.com/ant-design#support)

[![](https://opencollective.com/ant-design/tiers/backers.svg?avatarHeight=36)](https://opencollective.com/ant-design#support)
