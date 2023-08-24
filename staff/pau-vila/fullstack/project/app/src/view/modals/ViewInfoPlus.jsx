import context from "../../context"

function ViewInfoPlus({ onReturned }) {
    const handleLogout = () => {
        onReturned()
    }
    return <div className="moreinfo">

        <h3 className="title" >MY PROJECT</h3>
        <p> He escogido este proyecto en honor a mi padre,
            que desde que se jubiló se ha dedicado al reciclaje y
            restauración de pequeños muebles de madera,
            montándose un taller muy especial ubicado en Barcelona.</p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/reparar-mueble-antiguo-Zaragoza.jpg"></img>
            </div></div>
        <p> Reciclar muebles sirve para reducir la cantidad de basura que producimos,
            ayudando así al mantenimiento del medio ambiente. </p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="200" src="../../public/Ideas para hacer mesas con palets - La cartera rota.png"></img>
            </div></div>
        <p>Este material es el perfecto aliado para dirigirnos hacia un futuro sostenible.</p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/Taller-de-restauracion-de-muebles-caballero-restauracion.jpg"></img>
            </div></div>
        <p> Gracias a su cualidad háptica, nuestro cerebro sentirá sensaciones que asociará con estar al aire libre.</p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/furniture-617_1280.jpg"></img>
            </div></div>
        <p> Proporciona también una sensación de confort al estar en contacto con el medio natural.
            Además, es un material con funcionalidad de aislante térmico y acústico.</p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="600" src="../../public/tia.png"></img>
            </div></div>
        <p> El contacto con la madera reduce el nivel de estrés, la presión sanguínea y ritmo cardiaco.</p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/vino.jpg"></img>
            </div></div>
        <p> El reciclaje se convierte en arte.</p>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/TOCADORES MADERA.png"></img>
            </div></div>

        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/mac.JPG"></img>
            </div></div>
        <p> GRACIAS: 
            MANUEL, IGNACIO, MARIO, PAULA, CRIS, BERMY, JOAN, MANUELDA 
            Y AL EQUIPO DE EUROFIRMS.</p>








        <button className="button" type="button" onClick={handleLogout}>Exit</button>
    </div>
}

export default ViewInfoPlus
