import Image from 'next/image'
import ButtonSignInGithub from './components/ButtonSignInGitHub'
import SessionDate from './components/SessionDate'

export default function Home() {



  return (
    <main>
      <ButtonSignInGithub />
      
      <SessionDate />
    </main>
  )
}
