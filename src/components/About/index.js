import postgresql from '../../assets/images/postgresql@4x.png'
import postman from '../../assets/images/postman@4x.png'
import rails from '../../assets/images/rails@4x.png'
import ruby from '../../assets/images/ruby@4x.png'
import rspec from '../../assets/images/rspec@4x.png'
import illustrator from '../../assets/images/illustrator@4x.png'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        About me
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra molestie metus sit amet efficitur. Sed id placerat lorem. Vestibulum hendrerit vehicula tellus non ultrices. Phasellus congue at ligula at consequat. Donec non risus eget dui pulvinar viverra. Donec sit amet urna quis massa gravida rutrum. Nulla pulvinar accumsan risus.
                    </p>
                    <p>
                        Etiam eu eros eleifend, rhoncus nisl a, blandit magna. Vestibulum pulvinar orci at ante cursus fringilla. Nullam leo ligula, venenatis sit amet posuere id, faucibus at erat. Aenean ac consectetur lectus. Aenean bibendum orci sit amet arcu laoreet efficitur. Integer nisl lectus, lobortis a mollis eu, gravida in eros. Praesent varius faucibus dolor a laoreet. Fusce sagittis ullamcorper velit sit amet convallis. Praesent eleifend eu ex sed dapibus. Nulla pellentesque interdum lacus ut malesuada. Pellentesque lacinia purus non enim porttitor finibus sit amet maximus odio. Aenean bibendum sit amet ex id condimentum. Etiam sed lorem luctus sem pulvinar luctus. Pellentesque tincidunt sed justo ac fringilla. Vivamus semper elit metus, a sollicitudin leo laoreet non. Fusce aliquam risus eget mauris venenatis, id tempus ligula pretium.
                    </p>
                    <p>
                        Vestibulum nec varius turpis. Cras fermentum arcu id ex maximus, ut tincidunt ante ultrices. Vestibulum sit amet enim nec nunc facilisis porta nec vel nunc. Vestibulum iaculis, mi sed placerat gravida, erat felis faucibus lectus, a tempus sapien justo in ipsum. Nam vestibulum erat ultricies lacus facilisis, in aliquet mi vulputate. Nunc sed metus lectus. Vivamus sit amet risus condimentum, dignissim felis vitae, efficitur dolor. Aenean fermentum ac tortor sed tempor. Quisque aliquam lacinia turpis vel sagittis. Quisque fermentum mi sodales mollis pretium. Praesent ut nibh in urna vehicula elementum eget non nisl. Sed dignissim auctor mauris, in consequat mi tempor ut.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <img src={rspec} alt='RSpec' />
                        </div>
                        <div className='face2'>
                            <img src={rails} alt='Ruby on Rails' />
                        </div>
                        <div className='face3'>
                            <img src={ruby} alt='Ruby' />
                        </div>
                        <div className='face4'>
                            <img src={postgresql} alt='PostgresQL' />
                        </div>
                        <div className='face5'>
                            <img src={postman} alt='PostMan' />
                        </div>
                        <div className='face6'>
                            <img src={illustrator} alt='Adobe Illustrator' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default About