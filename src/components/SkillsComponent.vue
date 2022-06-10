<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-1 col-md-10 col-sm-12">
          <div
            class="col-lg-offset-1 col-lg-10 section-title wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <h1>Mis Habilidades</h1>
            <p>
              Lenguajes de programación, frameworks, gestores de bases de datos
              y tecnologías en las cuales tengo conocimientos.
            </p>

           <!--  <pre>
              {{skills}}
            </pre> -->

            <ul class="social-icon">
              <li v-for="skill in skills" :key="skill" class="tecnologias">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsComponent',
  props: ["END_POINT"],
  data() {
    return {
      skills: [],
    };
  },
  mounted() {
    this.getSkills();
  },
  methods: {
    async getSkills() {
      const response = await fetch(this.END_POINT);
      const data = await response.json();
      this.skills = data.skills;
    },
  },
};
</script>

<style>
</style>