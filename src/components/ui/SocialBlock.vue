<script setup lang="ts">
import Twitter from '@/assets/svg/icon_twitter.svg'
import Facebook from '@/assets/svg/icon_facebook.svg'
import LinkedIn from '@/assets/svg/icon_linkedin.svg'
import Dribble from '@/assets/svg/icon_dribble.svg'
</script>

<template>
  <ul class="social-block">
    <li>
      <a href="#">
        <Facebook />
      </a>
    </li>
    <li>
      <a href="#">
        <Twitter />
      </a>
    </li>
    <li>
      <a href="#">
        <LinkedIn />
      </a>
    </li>
    <li>
      <a href="#">
        <Dribble />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-block {
  display: flex;
  gap: 10px;
}
</style>
