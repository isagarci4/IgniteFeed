import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
              className={styles.cover} 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
              <img className={styles.avatar} src="https://github.com/isagarci4.png" />

              <strong>Isadora Garcia</strong>
              <span>Web Developer</span>
            </div>

            <footer>
              <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
              </a>
            </footer>
        </aside>
    )
}