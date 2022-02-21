import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PersonalSlogan from '../components/PersonalSlogan'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Data Scientist Ratneswaran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="font-Poppins">

      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12"> 
         <div className="py-1"><Image src="/logo-bookmark.svg" alt="mylogo" width={420} height={110}/> </div>
         <ul className = "hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
           <li className="cursor-pointer">Features</li>
           <li className="cursor-pointer">Pricing</li>
           <li className="cursor-pointer">Contact</li>
           <button type="button" className="bg-red-500 text-white rounded-full px-7 py-3 uppercase">Login</button>
         </ul>
         <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars"></i>
        </div>
        </nav>
      </header>

      <main className={styles.main}>
        <PersonalSlogan />
        <h2>-Dr.Andrew Mcaffee</h2>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://localhost:3000/datascience"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Science  
        </a>
        <a
          href="http://localhost:3000/typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          Type Script
        </a>
        <a
          href="http://localhost:3000/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Me
        </a>
      </footer>
      </body>
    </div>
  )
}

export default Home
