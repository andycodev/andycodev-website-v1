<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-8 wow fadeInUp" data-wow-delay="0.2s">
          <div class="about-thumb">
            <h1>Sobre mi</h1>

            <p>
              Egresado de la carrera de Ingeniería de Sistemas de la Universidad
              Peruana Unión sede Lima.
            </p>

            <p>
              Actualmente me encuentro trabajando como Analista Desarrollador
              fullstack en la Universidad Peruana Unión de Lima desde mayo del
              2020 hasta la fecha.
            </p>

            <p>Enfocado a la programación web.</p>
          </div>
        </div>

        <div
          class="col-md-3 col-sm-4 wow fadeInUp about-img"
          data-wow-delay="0.6s"
        >
          <img
            src="/template/images/perfil-official-contra.png"
            class="img-responsive img-circle"
            alt="About"
          />
        </div>

        <div class="clearfix"></div>

        <div class="col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
          <div class="section-title text-center">
            <h1>Experiencia</h1>
            <h3>
              Resumen sobre mi experiencia y el trabajo que desarrollo según mi
              rol.
            </h3>
          </div>
        </div>
        <di
          v-for="experience in experiences"
          :key="experience.id"
          class="col-sm-12 col-md-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="experience">
            <h1>{{ experience.entity }}</h1>
            <h2 class="text-center">{{ experience.date }}</h2>
            <h3>{{ experience.rol }}</h3>
            <img
              :src="experience.img"
              class="img-responsive"
              :alt="experience.rol"
            />
            <p>
              {{ experience.description }}
            </p>
          </div>
        </di>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  props: ["END_POINT"],
  data() {
    return {
      experiences: [],
      repos: [],
    };
  },

  mounted() {
    this.getExperiences();
  },

  methods: {
    async getExperiences() {
      const response = await fetch(this.END_POINT);
      const data = await response.json();
      this.experiences = data.experiences.reverse();
    },
  },
};
</script>

<style>
</style>