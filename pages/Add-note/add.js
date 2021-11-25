import styles from '../../styles/Add.module.css'
import Link from 'next/link'
// import Image from 'next/image'
// import Icon from '../../public/Images/beach.jpg'

export default function Add() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.icon}>
          {/* <Image src={Icon} alt="An icon of a lady at a beach" /> */}
        </div>
        <div className={styles.text}>
          <p>Sit back, relax and use the blue button below to add a simple note.</p>
        </div>
        <div className={styles.btn}>
          <Link href="/Save/save">
            <a>
              <button>
                <span className={styles.adds}>&#43;</span>
              </button>
            </a>
          </Link>
        </div>
      </main>

    </div>
  )
}