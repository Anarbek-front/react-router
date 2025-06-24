import { useNavigate } from 'react-router-dom'
import './contact.css'

const Contact = () => {
    const navigate = useNavigate()

    const navigateContactInfo = () => {
        navigate('info')
    }

    const navigateContactForm = () => {
        navigate('form')
    }

    return (
        <div>
            <h2>Contact page</h2>
            <div className="contact_buttons">
                <button onClick={navigateContactInfo}>Contact Info</button>
                <button onClick={navigateContactForm}>Contact Form</button>
            </div>
        </div>
    )
}

export default Contact
