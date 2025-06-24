const ContactForm = () => {
    return (
        <div>
            <form action="submit">
                <input type="text" placeholder="Name" />
                <br />
                <input type="text" placeholder="Email" />
                <br />
                <textarea placeholder="Message"></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
