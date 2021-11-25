import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Notepad from '../public/Images/notes.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta charset="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description"
          content="Just with a few and simple clicks you can easily add notes and save them." />
        <meta name="keywords"
          content="consulting,finance,advisor,consultant,business,service,insurance,agency" />
        <meta name="Notepad Application" content="Notepad Application" />
        <title>NotePad</title>
         </Head>

      <main className={styles.main}>
        <div>
          <h1 id={styles.note}>EasyNote</h1>
        </div>
        <div className={styles.notepad}>
          {/* <p>notepad icon</p> */}
          {/* <Image src={Notepad} alt="An icon of a man with a notepad" /> */}
        </div>
        <div className={styles.text}>
          <p>A simple and fast way to keep important ideas in one place</p>
        </div>
        <div className={styles.btn}>
          <Link href="/Add-note/add">
          <a>
          <button>Get Started</button>
          </a>
          </Link>
        </div>
      </main>

     
    </div>
  )
}
