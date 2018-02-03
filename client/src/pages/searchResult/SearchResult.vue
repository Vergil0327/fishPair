<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(user,i) in users" src="" :key="i">
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ user.firstName + ' ' + user.lastName }}</h3>
                <div>E-Mail: {{ user.email }}</div>
              </div>
            </v-card-title>
            <v-card-media
              height="200px"
              contain
              :src="user.src"
            ></v-card-media>
          </v-card>
        </v-flex>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import alanPhotoSticker from '@/assets/photoStickers/alan.jpg';
import lionelPhotoSticker from '@/assets/photoStickers/lionel.jpg';
import vergilPhotoSticker from '@/assets/photoStickers/vergil.jpg';

export default {
  name: 'searchResult',
  data: () => ({
    users: [
      { firstName: 'Vergil', lastName: 'Wang', email: 'test@example.com', src: vergilPhotoSticker },
      { firstName: 'Lionel', lastName: 'Chen', email: 'test@example.com', src: lionelPhotoSticker },
      { firstName: 'Alan', lastName: 'Yeh', email: 'test@example.com', src: alanPhotoSticker },
    ],
  }),
};
</script>
