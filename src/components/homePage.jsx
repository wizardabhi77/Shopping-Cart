import logo from '../assets/ice.svg'

function Home () {
    return (
        <div data-testid="home">
        <h2>HOME</h2>
        <img src={logo} alt="" />
        <p>Welcome to the smallest E-Commerce Website on the Web.</p>
        <p>We have 20 ITEMS! and 20 ITEMS only. But u can infinitely buy them</p>
        </div>
    )
}

export default Home;