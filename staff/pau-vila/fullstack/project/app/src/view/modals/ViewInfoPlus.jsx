import context from "../../context"

function ViewInfoPlus({ onReturned }) {
    const handleLogout = () => {
        onReturned()
    }
    return <div className="moreinfo">

        <div className="title"><h3  >Hablemos acerca de:</h3></div>
        <div className="about"><h4> Esta aplicación ha sido creada en honor a mi padre,
            que desde que se jubiló se ha dedicado al reciclaje y
            restauración de muebles de madera, montándose un 
            pequeño taller muy especial.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/reparar-mueble-antiguo-Zaragoza.jpg"></img>
            </div></div>
        <div className="about"><h4> Reciclar muebles sirve para reducir la cantidad de basura que producimos,
            ayudando así al mantenimiento del medio ambiente. </h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/Ideas para hacer mesas con palets - La cartera rota.png"></img>
            </div></div>
        <div className="about"><h4>Este material es el perfecto aliado para dirigirnos hacia un futuro sostenible.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/Taller-de-restauracion-de-muebles-caballero-restauracion.jpg"></img>
            </div></div>
        <div className="about"><h4 > Gracias a su cualidad háptica, nuestro cerebro sentirá sensaciones que asociará con estar al aire libre.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/furniture-617_1280.jpg"></img>
            </div></div>
        <div className="about"><h4> Proporciona también una sensación de confort al estar en contacto con el medio natural.
            Además, es un material con funcionalidad de aislante térmico y acústico.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/tia.png"></img>
            </div></div>
        <div className="about"><h4> El contacto con la madera reduce el nivel de estrés, la presión sanguínea y ritmo cardiaco.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/vino.jpg"></img>
            </div></div>
        <div className="about"><h4> El reciclaje se convierte en arte.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/TOCADORES MADERA.png"></img>
            </div></div>

        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/mac.JPG"></img>
            </div></div>
            <div className="about"> <h4 >  GRACIAS EQUIPO por vuestro apoyo</h4> </div>


        <button className="button" type="button" onClick={handleLogout}>Exit</button>
    </div>
}

export default ViewInfoPlus
