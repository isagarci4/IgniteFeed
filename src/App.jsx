import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Isadora Garcia" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugiat voluptatem voluptatum, quis, consequatur odit at alias quam voluptas iure illo. Harum officia explicabo, sequi voluptatum rem beatae eveniet quasi." 
          />
          <Post 
            author="Diego Fernandes" 
            content="Um novo post muito legal" 
          />
        </main>
      </div>
    </div>
  )
}