<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-1 col-md-10 col-sm-12">
          <div
            class="col-lg-offset-1 col-lg-10 section-title wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <h1>Enviar un mensaje</h1>
            <p>
              Mediante este formulario será direccionado para poder enviarme un
              mensaje a mi número de whatsapp.
            </p>
          </div>

          <form
            action="#"
            method="post"
            class="wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div class="col-md-12 col-sm-12">
              <textarea
                name="message"
                rows="6"
                class="form-control"
                id="message"
                v-model="message"
                @keyup="messageWhatsapp(message)"
                placeholder="Escribir mensaje, como mínimo cuatro caracteres."
              ></textarea>
            </div>
            <div class="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
              <a v-if="!isDisabled"
                :disabled="!isDisabled"
                class="btn btn-whatsapp wow fadeInUp"
                data-wow-delay="0.8s"
                >Enviar mensaje <i class="fa fa-lock"></i
              >
              </a>
              <a v-else
                :href="apiWhatsapp"
                target="_blank"
                class="btn btn-whatsapp wow fadeInUp"
                data-wow-delay="0.8s"
                >Enviar mensaje <i class="fa fa-whatsapp"></i
              >
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      message: "",
      apiWhatsapp: "",
    };
  },

  methods: {
    messageWhatsapp(message) {
      this.apiWhatsapp = `https://api.whatsapp.com/send?phone=+51999968702&text=${message}`;
    },
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    isDisabled: function(){
      return (this.message.length >= 4) ? true : false; 
    }


  }
};
</script>

<style>
</style>