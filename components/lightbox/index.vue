<template>
<section class="lightBoxComponent" @click="closeLightBox()" ref="lightbox">
    <div class="modal-mask">
      <button class="modal-default-button" @click="closeLightBox()">
         <!-- <img src="../../images/fermer.svg" alt="close modal"> -->
         X
      </button>
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <div name="header" v-html="TextHeader"></div>
          </div>
          <div class="modal-body">
            <div name="body" v-html="TextBody"></div>
            <img src="https://img.clipartlook.com/download-thumb-clipart-800_800.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
</section>
</template>
<script src="./component.js"></script>
<style lang="scss" scoped>
  @import "./style.scss";
</style>
