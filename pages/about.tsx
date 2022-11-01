import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function About() {
    return (
    <div className={styles.container}>
      <Head>
        <title>website - about</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="website thats it still." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          seriosuly thats it.
        </h1>

        <p className={styles.description}>
          <Link href="/more/">
          its a website what more do you want?
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <Link href="404" target="_blank" rel="noopener noreferrer">
        Still powered by {' '}
          <span className={styles.logo}>
          <Image src="/favicon.ico" alt="website logo" width={22} height={22} />
          </span>
        </Link>
      </footer>
    </div>
    )
}