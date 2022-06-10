<template>
  <div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
        </button>
        <a href="#top" class="navbar-brand smoothScroll">andycodev</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#top" class="smoothScroll"><span>Inicio</span></a>
          </li>
          <li>
            <a href="#about" class="smoothScroll"><span>Sobre mi</span></a>
          </li>
          <!-- <li><a href="#gallery" class="smoothScroll"><span>Proyectos</span></a></li> -->
          <li>
            <a href="#contact" class="smoothScroll"><span>HABILIDADES</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationComponent'
};
</script>

<style>
</style>