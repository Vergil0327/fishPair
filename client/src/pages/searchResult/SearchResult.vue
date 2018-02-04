<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12>
        <h1>Serach Results</h1>
        <v-carousel hide-delimiters light>
          <!-- <v-carousel-item v-for="(user,i) in users" src="" :key="i">
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
          </v-carousel-item> -->
          <v-carousel-item v-for="(user,i) in userCarouselItems" src="" :key="i">
              <v-flex xs12>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{ user.firstName + ' ' + user.lastName }}</h3>
                      <div>E-Mail: {{ user.email }}</div>
                      <div v-if="user.phone">Phone: {{ user.phone }}</div>
                      <div v-if="user.tag.length > 0">
                        Experienced: <span v-for="(tagItem, i) in user.tag" :key="i"> {{ tagItem }} </span>
                      </div>
                      <div v-if="user.species">Fishing Species: {{ user.species }}</div>
                      <div v-if="user.organization_name">Organization: {{ user.organization_name }}</div>
                      <div v-if="user.fip_stage">Fishery Improvement Project: {{ user.fip_stage }}</div>
                      <div v-if="user.website">Fishery Improvement Project Website: {{ user.website }}</div>
                      <!-- <br> -->
                      <!-- <div v-if="user.overview">Fishery Improvement Project Overview: {{ user.overview }}</div> -->
                    </div>
                  </v-card-title>
                  <v-card-media
                    height="200px"
                    contain
                    :src="user.src || ''"
                  ></v-card-media>
                </v-card>
              </v-flex>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import alanPhotoSticker from '@/assets/photoStickers/alan.jpg';
import lionelPhotoSticker from '@/assets/photoStickers/lionel.jpg';
import vergilPhotoSticker from '@/assets/photoStickers/vergil.jpg';
import consultantPhotoSticker from '@/assets/photoStickers/Tommaso_Giarrizzo.jpg';
import defaultImage from '@/assets/photoStickers/defaultImage.png';

export default {
  name: 'searchResult',
  data: () => ({
    users: [
      { firstName: 'Vergil', lastName: 'Wang', email: 'test@example.com', tag: ['example'], src: vergilPhotoSticker },
      { firstName: 'Lionel', lastName: 'Chen', email: 'test@example.com', tag: ['example'], src: lionelPhotoSticker },
      { firstName: 'Alan', lastName: 'Yeh', email: 'test@example.com', tag: ['example'], src: alanPhotoSticker },
    ],
    fishingAreas: [
      { value: '18', text: 'Arctic Sea' },
      { value: '21', text: 'Atlantic Northwest' },
      { value: '27', text: 'Atlantic Northeast' },
      { value: '31', text: 'Atlantic Western Central' },
      { value: '34', text: 'Atlantic Eastern Central' },
      { value: '37', text: 'Mediterranean and Black Sea' },
      { value: '41', text: 'Atlantic Southwest' },
      { value: '47', text: 'Atlantic Southeast' },
      { value: '48', text: 'Atlantic Antarctic' },
      { value: '51', text: 'Indian Ocean Western' },
      { value: '57', text: 'Indian Ocean Eastern' },
      { value: '58', text: 'Indian Ocean Antarctic and Southern' },
      { value: '61', text: 'Pacific Northwest' },
      { value: '67', text: 'Pacific Northeast' },
      { value: '71', text: 'Pacific Western Central' },
      { value: '77', text: 'Pacific Eastern Central' },
      { value: '81', text: 'Pacific Southwest' },
      { value: '87', text: 'Pacific Southeast' },
      { value: '88', text: 'Pacific Antarctic' },
    ],
  }),
  computed: {
    ...mapGetters('user', [
      'userType',
    ]),
    ...mapGetters('search', [
      'searchResults',
    ]),
    userCarouselItems() {
      let caroucelItems = [];

      if (this.searchResults.registerData) {
        caroucelItems = [...caroucelItems, ...this.searchResults.registerData];
      }

      if (this.searchResults.unRegisterData) {
        caroucelItems = [...caroucelItems, ...this.searchResults.unRegisterData];
      }


      caroucelItems = [
        ...caroucelItems,
        ...this.users,
        {
          firstName: 'Tommaso',
          lastName: 'Giarrizzo',
          email: '',
          website: 'https://www.researchgate.net/profile/Tommaso_Giarrizzo',
          src: consultantPhotoSticker,
          tag: ['Zoology', 'Marine Biology', 'Ecolog'],
        },
      ];

      caroucelItems = caroucelItems.map((item) => {
        const copy = item;
        if (!copy.src) copy.src = defaultImage;

        return copy;
      });
      console.log('caroucelItems', caroucelItems);
      return caroucelItems;
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  color: black;
}

.carousel {
  width: 50%;
  margin: auto;
  box-shadow: none;
}

</style>
