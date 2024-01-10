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
            src="../assets/Hotel-Front-3.jpeg"
            class="d-block w-100"
            alt="Hotel Front"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/Boutique-Hotel-Lobby-4.jpeg"
            class="d-block w-100"
            alt="Hotel Lobby"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/Boutique-Hotel-Rooms-4.jpeg"
            class="d-block w-100"
            alt="Hotel Zimmer"
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

      <div class="row">
        <div class="col-lg-8">
          <h2>Unsere Zimmer</h2>
          <p>
            Unsere Zimmer und Suiten sind gestaltet, um höchsten Komfort und 
            zeitgemäßen Stil zu bieten. Jeder Raum erzählt eine eigene Geschichte 
            und bietet einen Zufluchtsort vor der Hektik der Stadt. Genießen Sie 
            moderne Annehmlichkeiten und eine Ausstattung, die Ihre 
            Erwartungen übertreffen wird.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <h2>Innovative Technologien</h2>
          <p>
            Das Boutique-Hotel Technikum setzt Maßstäbe in Sachen Technologie. 
            Von Smart-Room-Steuerungen bis hin zu High-Speed-WLAN - bei uns erleben Sie 
            einen Aufenthalt, bei dem moderne Technologie nahtlos in die 
            Umgebung integriert ist, ohne die Wärme und den persönlichen Service zu beeinträchtigen.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <h2>Kulinarische Erlebnisse</h2>
          <p>
            Unser Restaurant "FusionFlavors" vereint die Aromen der Welt und bietet kulinarische Erlebnisse,
            die Ihre Sinne verzaubern werden. Genießen Sie exquisit zubereitete Gerichte, begleitet von
            erlesenen Weinen, in einem Ambiente, das Eleganz und Modernität vereint.
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-8">
          <h2>Veranstaltungen und Tagungen</h2>
          <p>
            Das Boutique-Hotel Technikum ist der ideale Ort für Veranstaltungen und Tagungen. 
            Unsere modernen Konferenzräume sind mit neuester Technologie ausgestattet und 
            bieten Platz für kreative Ideen und erfolgreiche Geschäftsabschlüsse.
          </p>
        </div>
      </div>
      

      
      <div class="row">
        <div class="col-lg-8">
          <h2>Unsere Lage</h2>
          <p>
            Unser Hotel liegt im Herzen der Stadt, nur wenige Schritte von den 
            wichtigsten Sehenswürdigkeiten, Einkaufsmöglichkeiten und kulturellen Highlights 
            entfernt. Erkunden Sie die Stadt und kehren Sie in ein luxuriöses Refugium zurück.
          </p>
        </div>
      </div>
      
      
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
          <p>
            Wir freuen uns darauf, Sie im Boutique-Hotel Technikum willkommen zu heißen 
            und Ihnen eine einzigartige Erfahrung inmitten von Tradition und Innovation zu bieten. 
            Buchen Sie noch heute und tauchen Sie ein in die Welt des modernen Luxus!
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
