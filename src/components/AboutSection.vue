<script setup lang="ts">
import LimitedContainer from '@/components/ui/LimitedContainer.vue'
import IconArrowDown from '@/assets/svg/arrow-down.svg'
import IconFacebook from '@/assets/svg/social_facebook.svg'
import IconLinkedIn from '@/assets/svg/social_linkedin.svg'
import IconTwitter from '@/assets/svg/social_twitter.svg'
import IconDribble from '@/assets/svg/social_dribble.svg'

import Company_1 from '@/assets/svg/company_1.svg'
import Company_2 from '@/assets/svg/company_2.svg'
import Company_3 from '@/assets/svg/company_3.svg'
import Company_4 from '@/assets/svg/company_4.svg'
import Company_5 from '@/assets/svg/company_5.svg'
import Company_6 from '@/assets/svg/company_6.svg'
import Company_7 from '@/assets/svg/company_7.svg'

const socialIcons = [IconFacebook, IconLinkedIn, IconTwitter, IconDribble]
const companies = [Company_1, Company_2, Company_3, Company_4, Company_5, Company_6, Company_7]
console.log(companies)
</script>

<template>
  <LimitedContainer tag="section" class="about-section" hide-border>
    <h2 class="about-section__title">
      <span>Dianne Russell</span> <br />
      <span>Digital Design</span>
    </h2>
    <div class="about-section__actions">
      <IconArrowDown />
    </div>
  </LimitedContainer>
  <img src="../assets/images/girl.webp" alt="girl" />
  <LimitedContainer tag="p" class="about-section__info">
    From art to technology, we transform visions into extraordinary <b>digital experiences</b> -
    your design, our passion, an exceptional future
  </LimitedContainer>
  <LimitedContainer tag="section" class="about-section__about-me">
    <p>ABOUT ME</p>
    <ul>
      <li v-for="icon in socialIcons" :key="icon">
        <component :is="icon" />
      </li>
    </ul>
  </LimitedContainer>
  <!-- <LimitedContainer tag="section" class="about-section__companies">
    <ul class="companies">
      <li v-for="company in companies" :key="company">
        <component v-for="company in companies" :key="company" :is="company" />
      </li>
    </ul>
  </LimitedContainer> -->
</template>

<style scoped>
.about-section {
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-section__title {
  text-align: center;
  font-size: var(--app-font-size-xxl);
  font-weight: var(--app-text-width-bold);
}

.about-section__title span:last-child {
  font-weight: var(--app-text-width-light);
}

.about-section__actions {
  display: flex;
  justify-content: center;
}

.about-section__info {
  font-size: var(--app-font-size-xl);
  padding-block: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.about-section__about-me {
  background-color: var(--app-color-black);
  font-size: var(--app-font-size-xl);
  color: white;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-block: 30px;
}

.about-section__about-me ul {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.companies {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  /* width: 100%; */
}

/* .companies li {
  max-width: 100%;
} */

.companies :nth-child(1) {
  grid-area: 1 / 1 / 2 / 3;
}

.companies :nth-child(1) {
  grid-area: 2 / 1 / 3 / 3;
}

.companies :nth-child(3) {
  grid-area: 3 / 1 / 4 / 2;
}

.companies :nth-child(4) {
  grid-area: 3 / 2 / 4 / 3;
}

.companies :nth-child(5) {
  grid-area: 4 / 1 / 5 / 2;
}

.companies :nth-child(6) {
  grid-area: 4 / 2 / 5 / 3;
}

.companies :nth-child(7) {
  grid-area: 5 / 1 / 6 / 3;
}
</style>
