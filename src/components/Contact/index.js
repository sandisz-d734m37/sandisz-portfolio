import { useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_79pgkqk',
                form.current,
                'user2otcKN1DmNeKWbQ6U'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, please try again.')
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra molestie metus sit amet efficitur. Sed id placerat lorem. Vestibulum hendrerit vehicula tellus non ultrices. Phasellus congue at ligula at consequat. Donec non risus eget dui pulvinar viverra. Donec sit amet urna quis massa gravida rutrum. Nulla pulvinar accumsan risus.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required>
                                        
                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

            <Loader type="ball-scale-multiple" />
        </>
    )
}

export default Contact