<template>
  <v-container
    class="text-xs-center" fluid
  >
    <h1>{{ msg }}</h1>
    <v-layout v-if="didClientChooseType" row>
      <v-flex xs9 @keyup.enter="submitHandler">
        <v-select
          v-model="searchInput"
          label="Search All You Need"
          prepend-icon="search"
          :prepend-icon-cb="submitHandler"
          :items="inputOptions"
          autofocus
          autocomplete
          dark
        ></v-select>
      </v-flex>
      <v-flex xs3>
        <v-select
          v-model="searchCondition"
          :items="allSearchConditions"
          item-text="text"
          item-value="value"
          :error-messages="errors.collect('Search Condition')"
          v-validate="'required'"
          data-vv-name="Search Condition"
          label="Conditions"
          dark
          required
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
    </v-layout>
      <jumbotron v-if="!didClientChooseType" :title="slogan">
        <v-container fill-height fluid>
          <v-layout row wrap>
            <v-flex d-flex xs6 @click.stop="choose('fisher')">
              <v-card d-flex hover class="py-2 mr-1">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline text-xs-center mb-0">Fisher</h3>
                    <div class="text-xs-left">
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I need MSC certificate assistance</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I need suggestion on fishery practice</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I can offer fishery experience</span>
                      </v-flex>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex d-flex xs6 @click.stop="choose('consultant')">
              <v-card d-flex hover class="py-2 mr-1">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline text-xs-center mb-0">Consultant</h3>
                    <div class="text-xs-left">
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I do research on fishery</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I can offer MSC certificate assistance</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I participate in FIP</span>
                      </v-flex>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </jumbotron>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Jumbotron from '@/components/parallax/Jumbotron';

export default {
  $_veeValidate: {
    validator: 'new', // give me a new validator each time.
  },
  name: 'HomePage',
  components: {
    Jumbotron,
  },
  props: {
    didClientChooseType: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      msg: 'Search All You Need',
      slogan: 'Are You A Fisher, or A Consultant ?',
      searchInput: '',
      searchCondition: '',
      allInputOptions: {
        featureTags: [
          { text: 'sustainability assessment', value: 'sustainability_assessment' },
          { text: 'fisheries management', value: 'fisheries_management' },
          { text: 'environmental assessment', value: 'environmental_assessment' },
          { text: 'fisheries policy development', value: 'fisheries_policy_development' },
          { text: 'fisheries economics', value: 'fisheries_economics' },
          { text: 'fisheries resource assessment', value: 'fisheries_resource_assessment' },
          { text: 'fisheries resource survey', value: 'fisheries_resource_survey' },
          { text: 'fisheries strategic planning', value: 'fisheries_strategic_planning' },
          { text: 'data collection', value: 'data_collection' },
          { text: 'bycatch management', value: 'bycatch_management' },
          { text: 'harvest strategies', value: 'harvest_strategies' },
          { text: 'third party certification', value: 'third_party_certification' },
          { text: 'fishery improvement gap analysis', value: 'fishery_improvement_gap_analysis' },
          { text: 'environmental impacts', value: 'environmental_impacts' },
          { text: 'industrial fisheries', value: 'industrial_fisheries' },
          { text: 'data sampling programs', value: 'data_sampling_programs' },
          { text: 'marine consultancy', value: 'marine_consultancy' },
          { text: 'ecosystem modelling', value: 'ecosystem_modelling' },
        ],
        species: [
          { text: 'Barred Sand Bass', value: 'Barred_Sand_Bass' },
          { text: 'Dublin Bay Prawns', value: 'Dublin_Bay_Prawns' },
          { text: 'Common Octopus', value: 'Common_Octopus' },
          { text: 'Mitre Squid', value: 'Mitre_Squid' },
          { text: 'Scallop spp.', value: 'Scallop_spp' },
          { text: 'Acadian RedfishDeepwater Redfish', value: 'Acadian_RedfishDeepwater_Redfish' },
          { text: 'Golden Tilefish', value: 'Golden_Tilefish' },
          { text: 'Atlantic Cod', value: 'Atlantic_Cod' },
          { text: 'Golden Tilefish', value: 'Golden_Tilefish' },
          { text: 'White Snook', value: 'White_Snook' },
          { text: 'Day Octopus', value: 'Day_Octopus' },
          { text: 'Swordfish', value: 'Swordfish' },
          { text: 'Jumbo Squid', value: 'Jumbo_Squid' },
          { text: 'Spiny Lobster', value: 'Spiny_Lobster' },
          { text: 'Yellowfin TunaSwordfishMahi mahi', value: 'Yellowfin_TunaSwordfishMahi_mahi' },
          { text: 'Albacore Tuna', value: 'Albacore_Tuna' },
          { text: 'Yellowtail', value: 'Yellowtail' },
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
    };
  },
  computed: {
    ...mapGetters('user', [
      'isLogin',
      'userType',
    ]),
    allSearchConditions() {
      const conditions = [
        { text: 'Fishing Areas', value: 'fishingAreas' },
        { text: 'Species', value: 'species' },
        { text: 'Feature Tags', value: 'featureTags' },
      ];

      if (this.userType === 'fisher') {
        return conditions;
      }

      return conditions.filter(({ value }) => value !== 'featureTags');
    },
    inputOptions() {
      switch (this.searchCondition) {
        case 'featureTags':
          return this.allInputOptions.featureTags;
        case 'fishingAreas':
          return this.allInputOptions.fishingAreas;
        case 'species':
          return this.allInputOptions.species
            .map(({ text, value }) => ({ text, value: value.toLowerCase() }));
        default:
          break;
      }
      return [];
    },
  },
  watch: {
    isLogin(value) {
      this.didClientChooseType = !value;
    },
  },
  methods: {
    ...mapActions('user', [
      'fetchState',
    ]),
    choose(clientType) {
      this.fetchState({ userType: clientType });
      this.$emit('update:didClientChooseType', true);
    },
    submitHandler() {
      this.$validator.validateAll()
        .then((validation) => {
          if (!validation || !this.searchInput) return;
          const payload = {
            searchInput: this.searchInput,
            searchCondition: this.searchCondition,
          };

          console.log(payload);
        })
        .catch(error => console.error(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toggleBtn__large {
  height: 100%;
}
</style>

