<script>
export default {
  name: "About",
};
</script>

<template>
  <div>
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
            src="src/assets/Default_Create_a_Picture_of_a_Hotel_called_Hotel_Technikum_in_0_7e32812d-8397-4e35-b99f-bd78f779d529_1.jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="src/assets/Default_Create_a_Picture_of_a_Hotel_called_Hotel_Technikum_in_1_d7901d1c-35ce-4318-8c6f-b2e92bb8c4f0_1.jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="src/assets/DreamShaper_v7_hotel_rooms_of_a_boutique_hotel_0.jpg"
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

    <div class="container mt-5 about-text">
      <div class="row">
        <div class="col-lg-8">
          <h1>Willkommen im Technikum Boutique Hotel!</h1>
          <p>
            Entdecken Sie das Herzstück der urbanen Eleganz und Innovation
            inmitten der pulsierenden Stadt. Das Technikum Boutique Hotel ist
            mehr als nur eine Unterkunft - es ist ein Erlebnis, das Sie in eine
            Welt des modernen Luxus und anspruchsvollen Designs entführt.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <h2>Unsere Geschichte</h2>
          <p>
            Das Technikum Boutique Hotel ist das Ergebnis der Vision einer
            Gruppe von kreativen Köpfen, die ein einzigartiges Konzept schaffen
            wollten, das Tradition und Technologie in Einklang bringt.
            Inspiriert von der reichen Geschichte unserer Stadt und dem
            Fortschritt, der sie geprägt hat, verbindet unser Hotel gekonnt den
            Charme der Vergangenheit mit der Innovation der Zukunft.
          </p>
        </div>
      </div>

      <!-- Weitere Abschnitte (Zimmer, Technologie, Kulinarische Erlebnisse, usw.) hier einfügen -->

      <div class="row">
        <div class="col-lg-8">
          <h2>Ihr Aufenthalt bei uns</h2>
          <p>
            Im Technikum Boutique Hotel sind wir stolz darauf, einen
            unvergesslichen Aufenthalt für unsere Gäste zu schaffen. Unser
            engagiertes Team steht Ihnen rund um die Uhr zur Verfügung, um Ihre
            Wünsche zu erfüllen und Ihren Aufenthalt so angenehm wie möglich zu
            gestalten.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <h2>Kontakt</h2>
          <p>
            Adresse: Musterstraße 123, 12345 Musterstadt<br />
            Telefon: +49 123 456789<br />
            E-Mail: info@technikumhotel.de<br />
            Reservierungen: reservations@technikumhotel.de
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
