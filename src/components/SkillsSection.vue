<script setup lang="ts">
import LimitedContainer from './ui/LimitedContainer.vue'
import SkillsSectionItem from './SkillsSectionItem.vue'

export interface Skill {
  name: string
  description: string
}

const skills: Skill[] = [
  {
    name: 'Digital Design',
    description:
      'I craft captivating digital designs that captivate and motivate your audience. Allow me to breathe life into your brand with my expertise.',
  },
  {
    name: 'Art Direction',
    description:
      'My proficiency in art direction guarantees that your project aligns with your brand, conveys your message effectively, and is visually striking. Let`s collaborate to narrate your story.',
  },
  {
    name: 'Interaction Design',
    description:
      'I have a specialization in creating user experiences that are not only functional but also aesthetically pleasing and user-friendly.',
  },
  {
    name: 'Motion Design',
    description:
      'From dynamic logos to informative explainer videos, I infuse life into your message through visually mesmerizing motion design.',
  },
]

const formatNumber = (num: number) => num.toString().padStart(2, '0')
</script>

<template>
  <LimitedContainer tag="section" class="skills-section" title="what i do">
    <ul class="skills-section__list">
      <li v-for="(item, index) in skills" :key="index">
        <SkillsSectionItem :item="item" :place="formatNumber(index + 1)" />
      </li>
    </ul>
  </LimitedContainer>
</template>

<style scoped>
.skills-section {
  padding-block: 20px;
}

.skills-section__list li + li {
  margin-top: 30px;
}
</style>
