import styles from '../../styles/Search.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.text}>
                    <h4>EasyNote</h4>
                    <p>July 30, 2020</p>
                </div>

                <form>
                    <div className={styles.locate}>
                        <FontAwesomeIcon icon={faSearch} className={styles.icon}></FontAwesomeIcon>
                        <input type="text" placeholder="find your notes" className={styles.input} />
                    </div>
                </form>
            </main>
            <div className={styles.mainBody}>
                <div className={styles.top}>
                <div className={styles.card1}>
                    <Link href="/Save/save">
                    <a>
                    <div className={styles.buton}><button></button>
                    <h5>Trash</h5>
                    </div>
                    <div className={styles.date}>
                        <h5>My First To-Do list</h5>
                        <p>July 17 2020</p>
                    </div>
                    </a>
                    </Link>
                </div>
              
                <div className={styles.card1}>
                <Link href="/Save/save">
                    <a>
                    <div className={styles.butt}><button></button>
                    <h5>Trash</h5>
                    </div>
                    <div className={styles.date}>
                        <h5>UX Design Fundamentals</h5>
                        <p>July 25 2020</p>
                    </div>
                    </a>
                    </Link>
               </div>
                </div>
               
                <div className={styles.bottom}>
                <div className={styles.card1}>
                <Link href="/Save/save">
                    <a>
                    <div className={styles.buttn}><button></button>
                    <h5>Trash</h5>
                    </div>
                    <div className={styles.date}>
                        <h5>Import Design Principles</h5>
                        <p>July 12 2020</p>
                    </div>
                    </a>
                    </Link>
               </div>
               
               <div className={styles.card1}>
               <Link href="/Save/save">
                    <a>
                    <div className={styles.bton}><button></button>
                    <h5>Trash</h5>
                    </div>
                    <div className={styles.date}>
                        <h5>Top 10 Google Serrif Fonts</h5>
                        <p>May 11 2020</p>
                    </div>
                    </a>
                    </Link>
               </div>
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
            </div>

        </div>
    )
}