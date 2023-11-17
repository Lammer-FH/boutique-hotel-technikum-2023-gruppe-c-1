<script>
import Karussell from '../components/carousel/Karussell.vue';

    export default {
    name: 'Landing',
    components: { Karussell },
    data() {
        return {
            landing_images: [
                "src/assets/images/Hotel-Front-1.jpeg",
                "src/assets/images/Hotel-Front-2.jpeg",
                "src/assets/images/Hotel-Front-3.jpeg"
            ],
            Karussell,
        };
    }
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
                    <Karussell :imageList="landing_images"></Karussell>
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