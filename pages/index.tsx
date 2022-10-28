import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="website thats it." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          website
        </h1>

        <p className={styles.description}>
          <a href="/about">
          thats it.
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="404" target="_blank" rel="noopener noreferrer">
        Powered by {' '}
          <span className={styles.logo}>
        <Image src="/favicon.ico" alt="website logo" width={33} height={33} />
          </span>
        </a>
      </footer>
    </div>
  )
}
