import context from "../../context"

function ViewInfoPlus({ onReturned }) {
    const handleLogout = () => {
        onReturned()
    }
    return <div className="moreinfo">

        <div id = "hablemos"><h3 className="title" >Hablemos acerca de;</h3></div>
        <div id = "aplicacion"><h4 className="aplicacion-creada"> Esta aplicación ha sido creada en honor a mi padre,
            que desde que se jubiló se ha dedicado al reciclaje y
            restauración de muebles de madera, montándose un 
            pequeño taller muy especial.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/reparar-mueble-antiguo-Zaragoza.jpg"></img>
            </div></div>
        <div id = "ambiente"><h4 className="medio-ambiente"> Reciclar muebles sirve para reducir la cantidad de basura que producimos,
            ayudando así al mantenimiento del medio ambiente. </h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/Ideas para hacer mesas con palets - La cartera rota.png"></img>
            </div></div>
        <div id ="sostenible"><h4 className="futuro-sostenible">Este material es el perfecto aliado para dirigirnos hacia un futuro sostenible.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/Taller-de-restauracion-de-muebles-caballero-restauracion.jpg"></img>
            </div></div>
        <div id="haptica"><h4 className="cualidad-haptica"> Gracias a su cualidad háptica, nuestro cerebro sentirá sensaciones que asociará con estar al aire libre.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/furniture-617_1280.jpg"></img>
            </div></div>
        <div id = "confort"><h4 className="sensacion-confort"> Proporciona también una sensación de confort al estar en contacto con el medio natural.
            Además, es un material con funcionalidad de aislante térmico y acústico.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/tia.png"></img>
            </div></div>
        <div id = "estres"><h4 className="reduce-estres"> El contacto con la madera reduce el nivel de estrés, la presión sanguínea y ritmo cardiaco.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/vino.jpg"></img>
            </div></div>
        <div id = "arte"><h4 className="reciclaje-arte"> El reciclaje se convierte en arte.</h4></div>
        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" src="../../public/TOCADORES MADERA.png"></img>
            </div></div>

        <div class="container">
            <div class="image-container">
                <img className="moreinfo-image" width="500" src="../../public/mac.JPG"></img>
            </div></div>
            <div id = "agradecimiento"> <h4 className="gracias-equipo">  GRACIAS EQUIPO por vuestro apoyo</h4> </div>


        <button className="button" type="button" onClick={handleLogout}>Exit</button>
    </div>
}

export default ViewInfoPlus
