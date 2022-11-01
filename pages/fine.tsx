import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Fine() {
    return (
        <div className={styles.container}>
        <Head>
            <title>website - fine</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Right website thats it." />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                fine
            </h1>

            <p className={styles.description}>
                you asked for it and here it is.
            </p>
        </main>

        <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.title}>
                I hope your disapointed smh u-u
            </h1>

          <p className={styles.description}>
            This is what you asked for btw
          </p>

          <span className={styles.logo}>
            <Image src="/fine.png" alt="your welcome" width={360} height={360} />
          </span>
        </main>
        </div>

        <footer className={styles.footer}>
            <a href="404" target="_blank" rel="noopener noreferrer">
            Right still powered by {' '}
          <span className={styles.logo}>
        <Image src="/favicon.ico" alt="website logo" width={1} height={1} />
          </span>
        </a>
        </footer>
        </div>
    )
}