import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading" data-aos='zoom-in'>
                <h1>What do you need help with?</h1>
                <p>Please choose from an option below</p>
            </section>

            <Link to='/new-ticket' className='btn btn-reverse btn-block' data-aos='fade-up'>
                <FaQuestionCircle /> Create New Ticket
            </Link>

            <Link to='/tickets' className='btn btn-block' data-aos='fade-up'>
                <FaTicketAlt />View my Tickets
            </Link>
        </>
    )
}

export default Home