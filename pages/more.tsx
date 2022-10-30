import Head from "next/head"
import Image from "next/image"
import styles from '../styles/Home.module.scss'

export default function More() {
    return (
        <div className={styles.container}>
        <Head>
            <title>website - fine</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Btw still just website thats it." />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                you want more?
            </h1>

        <p className={styles.description}>
            <a href="/fine">
                fine have more but dont say I didnt warn you.
            </a>
        </p>

        <p className={styles.hidden}>
            I mean I didnt warn you but =P
        </p>
        </main>

        <footer className={styles.footer}>
            <a href="404" target="_blank" rel="noopener noreferrer">
            Btw still powered by {' '}
          <span className={styles.logo}>
        <Image src="/favicon.ico" alt="website logo" width={11} height={11} />
          </span>
        </a>
        </footer>
        </div>
    )
}
