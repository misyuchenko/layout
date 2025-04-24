<script setup lang="ts" vapor>
import ClientCard from './ClientSectionCard.vue'
import LimitedContainer from './ui/LimitedContainer.vue'

export interface Client {
  id: string
  name: string
  role: string
  title: string
  commentary: string
  avatar: string
  logo: string
}

const clients: Client[] = [
  {
    id: '1',
    name: 'Annette Black',
    role: 'Marketing Coordinator',
    title: `Exceptional Web and \nDigital Design \nThat Exceeded \nExpectations`,
    commentary:
      'Our website redesign and digital transformation went above and beyond our wildest dreams. Dianne`s attention to detail, creativity, and unmatched design skills resulted in a visually stunning and user-friendly online presence that left us in awe',
    avatar: 'annette',
    logo: '',
  },
  {
    id: '2',
    name: 'Ralph Edwards',
    role: 'Software Development Manager',
    title: `Art Direction that \nPerfectly Captured \nOur Essence`,
    commentary:
      'Collaborating with Dianne on our art direction was an absolute delight. He not only listened to our ideas but also infused his own creativity into the mix, resulting in a visual brand identity that flawlessly encapsulated our essence.',
    avatar: 'ralph',
    logo: '',
  },
  {
    id: '3',
    name: 'Jacob Jones',
    role: 'Scrum Master',
    title: `Interaction Design \nExpertise that \nDelivered Beyond \nMeasure`,
    commentary:
      'Dianne`s expertise in interaction design elevated our app to new heights of user-friendliness and intuitiveness. His meticulous approach and imaginative thinking led to a product that far exceeded our expectations.',
    avatar: 'jacob',
    logo: '',
  },
  {
    id: '4',
    name: 'Cameron Williamson',
    role: 'Software Tester',
    title: `Captivating Motion \nDesign that Breathed \nLife into Our Brand `,
    commentary:
      'Dianne`s mastery of motion design is nothing short of extraordinary. With his stunning animations, he breathed life into our brand, leaving our audience thoroughly captivated.',
    avatar: 'cameron',
    logo: '',
  },
  {
    id: '5',
    name: 'Eleanor Pena',
    role: 'Software Developer',
    title: `Dianne Delivered a \nWebsite that Truly \nShowcases Our \nBusiness`,
    commentary:
      'Dianne`s web design prowess has given us a website that not only showcases our business but does so in a highly professional and user-friendly manner. We couldn`t be more thrilled with the final result.',
    avatar: 'eleanor',
    logo: '',
  },
  {
    id: '6',
    name: 'Courtney Henry',
    role: 'Software Development Manager',
    title: `Dianne Delivers a \nBusiness-Showcasing \nWebsite`,
    commentary:
      'Our website redesign and digital transformation went above and beyond our wildest dreams. Dianne`s attention to detail, creativity, and unmatched design skills resulted in a visually stunning and user-friendly online presence that left us in awe',
    avatar: 'courtney',
    logo: '',
  },
]
</script>

<template>
  <LimitedContainer tag="section" class="clients-section" title="My Clients">
    <ul class="clients-section__list">
      <li v-for="client in clients" :key="client.id"><ClientCard :client /></li>
    </ul>
  </LimitedContainer>
</template>

<style scoped>
.clients__title {
  text-align: center;
  font-size: 2em;
}

.clients-section__list li {
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(37, 37, 37);
}

.clients-section__list li:last-child {
  padding-bottom: unset;
  border-bottom: none;
}

/* .clients {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 1em;
} */

/* .clients {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 1em;
} */
</style>
