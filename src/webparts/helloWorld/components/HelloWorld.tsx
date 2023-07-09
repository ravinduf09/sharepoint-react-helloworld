import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

const HelloWorld = (props: IHelloWorldProps) => {
  const {
    description,
    test,
    test1,
    test2,
    test3,
    context,
    isDarkTheme,
    environmentMessage,
    hasTeamsContext,
    userDisplayName
  } = props;

  return (
    <section className={`${styles.helloWorld} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
        <h2>Well done, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <div>Web part property value: <strong>{escape(description)}</strong></div>
        <div>{escape(test)}</div>
        <div>{test1 ? (<p>true</p>) : (<p>false</p>)}</div>
        <div>{escape(test2)}</div>
        <div>{test3 ? (<p>true</p>) : (<p>false</p>)}</div>
        <h3>Welcome to SharePoint Framework!</h3>
        <div>Loading from: <strong>{context.web.title}</strong></div>
      </div>
    </section>
  );
}


export default HelloWorld;

