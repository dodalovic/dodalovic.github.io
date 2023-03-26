import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
const FeatureList = [
  {
    title: 'About me',
    Svg: require('@site/static/img/undraw_profile.svg').default,
    description: (
      <>
        My name is Dusan Odalovic. I live in Berlin, Germany.<br/>
        I like software engineering, clean code, and designing backends targeting cloud. <br/>
        Read my <u><Link to="/blog">Blog</Link></u>
      </>
    ),
  },
  {
    title: 'How can I help you?',
    Svg: require('@site/static/img/undraw_resume.svg').default,
    description: (
      <>
        I've been working for 13 years in software engineering. I've been busy with Kotlin, Java, PostgreSQL, GitHub Actions, Golang, and more.<br/>
          Download my <u><Link target="_blank" to="/resume-dusan-odalovic.pdf">CV</Link></u>
      </>
    ),
  },
  {
    title: 'How to get in touch?',
    Svg: require('@site/static/img/undraw_mailbox.svg').default,
    description: (
      <>
        dodalovic@gmail.com
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
