import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p><Link to='/'>Home </Link></p>
        </div>
    )
}

export default PageNotFound;