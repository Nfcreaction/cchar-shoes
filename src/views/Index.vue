<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 mt-5 fw-bold text-body-emphasis brush">Cchar-shoes</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-5">Calzate con CCHAR</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5"></div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {}
$('.footer').addClass('fixed-bottom')
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

h1,
.lead {
  font-family: 'Rock Salt', cursive;
}

.brush {
  width: 100%;
  height: 100%;
  padding: 1em;
  background: radial-gradient(circle, #f7c6e7 20%, transparent 70%);
}
</style>