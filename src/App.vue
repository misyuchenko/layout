<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue'
import HeaderSection from './components/HeaderSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import WorkSection from './components/WorkSection.vue'
import ClientSection from './components/ClientsSection.vue'
import TeamSection from './components/TeamSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <BaseLayout>
    <main>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ClientSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </main>
  </BaseLayout>
</template>

<style scoped></style>
