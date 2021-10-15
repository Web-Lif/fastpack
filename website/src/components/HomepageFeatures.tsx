import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '上手简单',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        FastPack 内置了 React-Router-DOM, Babel 等等, 无需 Webpack 的复杂配置
        开箱即用 
      </>
    ),
  },
  {
    title: '可扩展',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        可通过插件扩展整个 FastPack 的内容, FastPack 的其他内容也是基于插件来扩展内容的
      </>
    ),
  },
  {
    title: '面向未来',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我们不会停止对新的技术的探索，同时我们也拥抱改变。包括默认使用 Webpack 5等等 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
