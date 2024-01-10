<script>
    export default {
        name: 'Landing'
    }
</script>

<template>
    <div>
    <b-container fluid>
        <b-row >
            <b-col sm="6">
            <div class="container sm-8" align-self="stretch" name="intoduction">
                <div class="container mt-5 about-text">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3 align-self="start">
                                Hotel Technikum
                            </h3>
                            <p align-self="center">
                                Willkommen im Boutique Hotel Technikum, dem Herzstück urbaner Eleganz und Innovation!
                                Wir bieten eine erholsame und ruhige Zuflucht im Herzen der Stadt Wien, wo wir trotz
                                unserer zentralen Lage eines der idyllischsten Hotels Österreichs repräsentieren.
                                Hier bei uns haben Sie die Finger nicht nur am Puls der Stadt, sondern können Ihre Zeit
                                zwischen den täglichen Ereignissen, Veranstaltungen und Sehenswürdigkeiten Wiens
                                auch ganz stressfrei bei uns im Hotel verbringen.
                            </p>
                        </div>
                    </div> 
                </div>
                <b-button to="/zimmer" blue>Jetzt Buchen!</b-button>
            </div>
            <div class="container sm-8" align-self="stretch" name="get-to-know-us">
                <div class="container mt-5 about-text">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3 align-self="start">
                            Lernen Sie mehr über unser Hotel
                            </h3>
                            <p align-self="center">
                            Wir hier im Boutique-Hotel sind nun schon seit über 60 Jahren in der Freizeit und Kultur-Branche.
                            Bei uns haben nicht berühmte Persönlichkeit Unterkunft gesucht, sondern,d as Hotel selber war
                            bereits mehrfach das Epizentrum kulturell einschlägiger Ereignisse.
                            Erfahren Sie mehr über das Hotel und sein Personal!    
                            </p>
                        </div>
                    </div>
                </div> 
                <b-button to="/about" blue>Über uns</b-button>
            </div>
            <div class="container sm-8" align-self="stretch" name="register-for-more-info">
                <div class="container mt-5 about-text">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3 align-self="start">
                            Lust auf mehr Highlights?
                            </h3>
                            <p>
                            Viele wundervolle Erfahrungen, Veranstaltungen und Events erwarten Sie in der
                            Stadt Wien! Doch kann es manchmal schwer sein diese zu finden.
                            Wenn Sie immer am Laufenden bleiben wollen oder einfach nur einen tollen
                            Urlaub planen wollen, melden Sie sich bei uns. Wir sorgen dafür, dass Sie 
                            nichts mehr verpassen!   
                            Abbonieren Sie jetzt unseren Newsletter und registrieren Sie sich noch heute!
                            </p>
                        </div>
                    </div>
                </div>
                <b-button to="/registrierung" blue>Newsletter abbonieren!</b-button>
            </div>
            </b-col>
            <b-col sm="6">
                <b-container fluid class="image-container">
                    <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-bs-ride="carousel"
                    >
                        <div class="carousel-indicators">
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            ></button>
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                            ></button>
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img
                                src="../assets/Boutique-Hotel-Lobby-1.jpeg"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                            <div class="carousel-item">
                            <img
                                src="../assets/Boutique-Hotel-Lobby-2.jpeg"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                            <div class="carousel-item">
                            <img
                                src="../assets/Boutique-Hotel-Lobby-3.jpeg"
                                class="d-block w-100"
                                alt="..."
                            />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </b-container>
            </b-col>
        
        </b-row>
     </b-container>
    </div>
</template>


<style scoped>
.image-container {
  text-align: center;
  padding: 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>