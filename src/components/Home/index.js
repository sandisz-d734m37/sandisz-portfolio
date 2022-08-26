import { Link } from 'react-router-dom'
import MyName from '../../assets/images/sandisz_t4x.png'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, I'm
                    <br />
                    <br />
                    <img src={MyName} alt="developer" />
                </h1>
                <h2>Backend Developer | Builder of This Website | Super Fun Guy</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home