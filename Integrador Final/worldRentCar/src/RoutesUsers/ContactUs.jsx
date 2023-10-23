function ContactUs(){
    return(
        <>
            <h2>Contactate con nosotros</h2>
            <form action="/contacto" method="post">
                <input type="text" name="nombre" placeholder="Nombre" /> <br />
                <input type="email" name="email" placeholder="Correo electrónico" /> <br />
                <input type="text" name="asunto" placeholder="Asunto" /> <br />
                <textarea name="mensaje" placeholder="Mensaje"></textarea> <br />
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}
export default ContactUs