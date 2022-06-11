<template>
  <section id="home">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-offset-1 col-md-10 col-sm-12 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <!-- <div class="box">
        </div> -->
          <h1 class="fadeInUp" data-wow-delay="0.6s">
            Hola👋, Soy Andy Giampierre ordoñez Vega
          </h1>

          <h2 class="rol wow fadeInUp" data-wow-delay="0.9s">
            Desarrollador <strong>FullStack 👨‍💻</strong>
          </h2>
          <!-- <p class="wow fadeInUp" data-wow-delay="0.9s">Snapshot website template is available for free download. Anyone can modify and use it for any site. Please tell your friends about <a rel="nofollow" href="http://www.templatemo.com">templatemo</a>. Thank you.</p> -->
          <a
            href="#about"
            class="smoothScroll btn btn-success btn-lg wow fadeInUp"
            data-wow-delay="1.2s"
            @click.prevent="downloadCV(urlFile, nameFile)"
            >Descargar CV</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      urlFile: './archivo.pdf',
      nameFile: 'CV_AndyGiampierreOrdoñezVega'
    };
  },

  methods: {
    downloadCV(fileURL, fileName) {
      // for non-IE
       if (!window.ActiveXObject) {
         var save = document.createElement("a");
         save.href = fileURL;
         save.target = "_blank";
         var filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
         save.download = fileName || filename;
         if (
           navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
           navigator.userAgent.search("Chrome") < 0
         ) {
           document.location = save.href;
         } else {
           var evt = new MouseEvent("click", {
             view: window,
             bubbles: true,
             cancelable: false,
           });
           save.dispatchEvent(evt);
           (window.URL || window.webkitURL).revokeObjectURL(save.href);
         }
       }
      // for IE < 11
       else if (!!window.ActiveXObject && document.execCommand) {
         var _window = window.open(fileURL, "_blank");
         _window.document.close();
         _window.document.execCommand("SaveAs", true, fileName || fileURL);
         _window.close();
       }
    },
  },
};
</script>

<style>
</style>