import { useNavigate } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/', { replace: true })
    }
    return (
        <div className="not_found_container">
            <h2>404 | Page not found</h2>
            <button className="go_back_btn" onClick={goToHome}>
                Go to home
            </button>
        </div>
    )
}

export default NotFound
