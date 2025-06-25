import { Link, useLoaderData } from 'react-router-dom'
import './jobs.css'

const Jobs = () => {
    const jobsData = useLoaderData()

    return (
        <div className="jobs">
            {jobsData.map(({ title, location, salary }) => (
                <Link>
                    <h3>{title}</h3>
                    <h4>{location}</h4>
                    <p>{salary}</p>
                </Link>
            ))}
        </div>
    )
}

export default Jobs

export const jobsLoader = async () => {
    const res = await fetch('http://localhost:5000/jobs')
    return res
}
