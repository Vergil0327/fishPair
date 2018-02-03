<template>
        <form>
  <v-container>
      <v-layout row wrap>
          <h1>User Profile</h1>
          <v-flex xs12>
            <v-btn-toggle v-model="userType">
              <v-btn flat value="fisher">
                Fisher
              </v-btn>
              <v-btn flat value="consultant">
                Consultant
              </v-btn>
            </v-btn-toggle>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="firstName"
              label="First Name"
              :error-messages="errors.collect('firstName')"
              v-validate="'required'"
              data-vv-name="firstName"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="lastName"
              label="Last Name"
              :error-messages="errors.collect('lastName')"
              v-validate="'required'"
              data-vv-name="lastName"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="email"
              label="E-mail"
              :error-messages="errors.collect('email')"
              v-validate="'required|email'"
              data-vv-name="email"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="password"
              label="Password"
              hint="Leave it empity if you do NOT want to modify your password"
              persistent-hint
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm5>
            <v-text-field
              v-model="phone"
              label="Mobile Phone"
              hint="(Country-code + Phone) ex. 886988289719"
              :error-messages="errors.collect('phone')"
              v-validate="'required|numeric'"
              data-vv-name="phone"
              required
            ></v-text-field>
          </v-flex>
          <v-flex
            v-if="userType === 'consultant'"
            xs12
          >
            <v-select
              v-model="featureTags"
              label="Feature Tags"
              hint="Choose Tags That Fit Your Needs"
              :items="items.featureTags"
              v-validate="'required'"
              data-vv-name="featureTags"
              persistent-hint
              multiple
              tags
              required
            ></v-select>
          </v-flex>
          <v-flex
            xs12
          >
            <v-select
              v-model="fishingAreas"
              label="Fishing Areas"
              :hint="fishingAreasHint"
              :items="items.fishingAreas"
              item-text="text"
              item-value="value"
              :error-messages="errors.collect('fishingAreas')"
              v-validate="'required'"
              data-vv-name="fishingAreas"
              persistent-hint
              multiple
              autocomplete
              required
            ></v-select>
          </v-flex>
          <v-flex
            xs12
          >
            <v-select
              v-model="species"
              label="Species"
              :hint="speciesHint"
              :items="items.species"
              :error-messages="errors.collect('species')"
              v-validate="'required'"
              data-vv-name="species"
              persistent-hint
              multiple
              tags
              required
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              name="selfIntroduction"
              label="Experience, Or Tell Some Problems You Got !"
              hint="Briefly States Your Experience Or Query 😊"
              multi-line
              dark
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-flex>
      </v-layout>
    </v-container>
        </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  $_veeValidate: {
    validator: 'new', // give me a new validator each time.
  },
  name: 'userProfile',
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    userType: '',
    featureTags: [],
    fishingAreas: [],
    species: [],
    selfIntroduction: '',
    hint: {
      fishingAreas: {
        fisher: 'What Part Of Ocean Do You Do Fishery ?',
        consultant: 'What Part Of Ocean Do You Study ?',
      },
      species: {
        fisher: 'What Species Do You Fish ?',
        consultant: 'What Species Do You Study ?',
      },
    },
    items: {
      featureTags: [
        'sustainability assessment',
        'fisheries management',
        'environmental assessment',
        'fisheries policy development',
        'fisheries economics',
        'fisheries resource assessment',
        'fisheries resource survey',
        'fisheries strategic planning',
        'data collection',
        'bycatch management',
        'harvest strategies',
        'third-party certification',
        'fishery improvement gap analysis',
        'environmental impacts',
        'industrial fisheries',
        'data sampling programs',
        'marine consultancy',
        'ecosystem modelling',
      ],
      species: [
        'Barred_Sand_Bass',
        'Dublin_Bay_Prawns',
        'Common_Octopus',
        'Mitre_Squid',
        'Scallop_spp.',
        'Acadian_RedfishDeepwater Redfish',
        'Golden_Tilefish',
        'Atlantic_Cod',
        'Golden_Tilefish',
        'White_Snook',
        'Day_Octopus',
        'Swordfish',
        'Jumbo_Squid',
        'Spiny_Lobster',
        'Yellowfin_TunaSwordfishMahi_mahi',
        'Albacore_Tuna',
        'Yellowtail',
      ],
      fishingAreas: [
        { value: 18, text: 'Arctic Sea' },
        { value: 21, text: 'Atlantic Northwest' },
        { value: 27, text: 'Atlantic Northeast' },
        { value: 31, text: 'Atlantic Western Central' },
        { value: 34, text: 'Atlantic Eastern Central' },
        { value: 37, text: 'Mediterranean and Black Sea' },
        { value: 41, text: 'Atlantic Southwest' },
        { value: 47, text: 'Atlantic Southeast' },
        { value: 48, text: 'Atlantic Antarctic' },
        { value: 51, text: 'Indian Ocean Western' },
        { value: 57, text: 'Indian Ocean Eastern' },
        { value: 58, text: 'Indian Ocean Antarctic and Southern' },
        { value: 61, text: 'Pacific Northwest' },
        { value: 67, text: 'Pacific Northeast' },
        { value: 71, text: 'Pacific Western Central' },
        { value: 77, text: 'Pacific Eastern Central' },
        { value: 81, text: 'Pacific Southwest' },
        { value: 87, text: 'Pacific Southeast' },
        { value: 88, text: 'Pacific Antarctic' },
      ],
    },
  }),
  computed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
    fishingAreasHint() {
      if (this.userType === 'fisher') return this.hint.fishingAreas.fisher;

      return this.hint.fishingAreas.consultant;
    },
    speciesHint() {
      if (this.userType === 'fisher') return this.hint.species.fisher;

      return this.hint.species.consultant;
    },
  },
  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      console.log(this.$validator);
      this.$validator.reset();
    },
  },
  created() {
    if (!this.isLogin) this.$router.push('/');
  },
};
</script>

