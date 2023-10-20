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
            <div class="container mt-5 about-text" align-self="stretch" name="intoduction">
                <div class="row">
                    <div class="col-sm-8">
                        <h3 align-self="start">Hotel Technikum</h3>
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
                <router-link to="../views/Zimmer.vue" exact-path>Jetzt Buchen!</router-link>
            </div>
            <div class="container sm-8" align-self="stretch" name="get-to-know-us">
                <div class="container mt-5 about-text">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3 align-self="start">Lernen Sie mehr über unser Hotel</h3>
                            <p align-self="center">
                            Wir hier im Boutique-Hotel sind nun schon seit über 60 Jahren in der Freizeit und Kultur-Branche.
                            Bei uns haben nicht berühmte Persönlichkeit Unterkunft gesucht, sondern,d as Hotel selber war
                            bereits mehrfach das Epizentrum kulturell einschlägiger Ereignisse.
                            Erfahren Sie mehr über das Hotel und sein Personal!    
                            </p>
                        </div>
                    </div>
                </div> 
                <router-link to="../views/About.vue" exact-path>Über uns</router-link>
            </div>
            </b-col>
            <b-col sm="6">
                <b-container fluid class="image-container">
                    <b-img right src="src/assets/DreamShaper_v7_Create_a_Picture_of_a_the_inside_of_a_boutiqueh_1.jpeg" class="img-fluid"/>
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