import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nike Ghost</title>
        <meta name="Nike Ghost" content="Nike Ghost" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
