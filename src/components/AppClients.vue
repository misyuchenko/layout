<script setup lang="ts" vapor>
import ClientCard from './ClientCard.vue'

export interface Client {
  id: string
  name: string
  role: string
  jobTitle: string
  commentary: string
  avatar: string
  logo: string
}

const clients: Client[] = [
  {
    id: '1',
    name: 'Annette Black',
    role: 'Marketing Coordinator',
    jobTitle: `Exceptional Web and \nDigital Design \nThat Exceeded Expectations`,
    commentary:
      'Our website redesign and digital transformation went above and beyond our wildest dreams. Dianne`s attention to detail, creativity, and unmatched design skills resulted in a visually stunning and user-friendly online presence that left us in awe',
    avatar: '',
    logo: '',
  },
  {
    id: '2',
    name: 'Annette Black',
    role: 'Marketing Coordinator',
    jobTitle: `Exceptional Web and \nDigital Design \nThat Exceeded Expectations`,
    commentary:
      'Our website redesign and digital transformation went above and beyond our wildest dreams. Dianne`s attention to detail, creativity, and unmatched design skills resulted in a visually stunning and user-friendly online presence that left us in awe',
    avatar: '',
    logo: '',
  },
  {
    id: '3',
    name: 'Annette Black',
    role: 'Marketing Coordinator',
    jobTitle: `Exceptional Web and \nDigital Design \nThat Exceeded Expectations`,
    commentary:
      'Our website redesign and digital transformation went above and beyond our wildest dreams. Dianne`s attention to detail, creativity, and unmatched design skills resulted in a visually stunning and user-friendly online presence that left us in awe',
    avatar: '',
    logo: '',
  },
  {
    id: '4',
    name: 'Annette Black',
    role: 'Marketing Coordinator',
    jobTitle: `Exceptional Web and \nDigital Design \nThat Exceeded Expectations`,
    commentary:
      'Our website redesign and digital transformation went above and beyond our wildest dreams. Dianne`s attention to detail, creativity, and unmatched design skills resulted in a visually stunning and user-friendly online presence that left us in awe',
    avatar: '',
    logo: '',
  },
]
</script>

<template>
  <h2 class="clients__title">My Clients</h2>
  <ul class="clients">
    <li v-for="client in clients" :key="client.id"><ClientCard :client /></li>
  </ul>
</template>

<style scoped>
.clients__title {
  text-align: center;
  font-size: 2em;
}

.clients {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 1em;
}
</style>
