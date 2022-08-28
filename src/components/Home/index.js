import { Link } from 'react-router-dom'
import MyName from '../../assets/images/sandisz_t4x.png'
import './index.scss';
import Star from './Star';
import Loader from 'react-loaders';

const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        Hi, I'm
                        <br />
                        <br />
                        <img src={MyName} alt="developer" />
                    </h1>
                    <h2>Backend Developer | Problem Solver | Clothing Designer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Star />
            </div>
            <Loader type="ball-scale-multiple" />
        </>

    )
}

export default Home