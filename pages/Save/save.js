import styles from '../../styles/Save.module.css'
import Link from 'next/link'
// import Image from 'next/image'
// import Icon from '../../public/Images/beach.jpg'

export default function Save() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <div className={styles.buttons}>
                    <div className={styles.back}>
                       <Link href="/Add-note/add">
                       <a>
                       <button>
                            <span className={styles.adds}>&#8592;</span>
                        </button>
                       </a>
                       </Link>
                    </div>
                    <div className={styles.continue}>
                    <Link href="/Search/search">
                       <a>
                        <button>Save</button>
                        </a>
                       </Link>
                    </div>
                </div>
                <div className={styles.pagination}>
                   <div className={styles.butn}><button></button></div>
                   <div className={styles.pages}><button></button></div>
                    <div className={styles.click}><button></button></div>
                    <div className={styles.page}><button></button></div>
                    <div className={styles.btn}><button></button></div>
                </div>
                <div className={styles.comment}>
                <h3 className={styles.title}>Title</h3>
                <div>
                    <textarea className={styles.textarea}>
                        Go ahead and type something...
                    </textarea>
                    </div>

            </div>
            </main>

        </div>
    )
}