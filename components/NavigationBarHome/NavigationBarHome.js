import styles from "../../styles/NavigationBarHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Logo from '../../public/comute_logo.png'
import {IoMdExit} from 'react-icons/io'

const NavigationBarHome = () => {
    const { data: session } = useSession()
    if (session) {
    return(
        <div className={styles.Container}>

            <div className={styles.body}>
            <Link href="/">
                <Image
                src={Logo}
                alt="logo"
                width={50}
                height={50}
                className={styles.logo}/>
            </Link>
            <div className={styles.userprofile}>
                <Link href="/">
                <Image
                src={session.user.image}
                alt="logo"
                width={40}
                height={40}
                className={styles.picha}/>
                </Link>
            </div>
            </div>
        </div>
    )
    }
    return(
        <div className={styles.Container}>
            <div className={styles.body}>
                <Link href="/">
                    <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className={styles.logo}/>
                </Link>
                <div className={styles.list}>
                    <button className={styles.btn} onClick={() => signIn()}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default NavigationBarHome

// <Logo width={70} className={styles.logo}/>