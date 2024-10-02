import Link from 'next/link';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image';
export default function HeaderMain(){


    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt=" a plate with food on it">
        </Image>
nextlevel food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href='/community'> Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}