import logo from '../assets/ice.svg'
import styles from '../styles/home.module.css'

function Home () {
    return (
        <div data-testid="home">
        <h2>HOME</h2>
        <img src={logo} alt="" className='logo'/>
        <p className={styles.txt}>Welcome to the smallest E-Commerce Website on the Web.</p>
        <p className={styles.txt}>We have 20 ITEMS! and 20 ITEMS only. But u can infinitely buy them</p>
        </div>
    )
}

export default Home;