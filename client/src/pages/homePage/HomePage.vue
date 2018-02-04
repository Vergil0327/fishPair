<template>
  <v-container
    class="text-xs-center search-bar" fluid
  >
    <h1 v-if="didClientChooseType">{{ msg }}</h1>
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
          required
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
    </v-layout>
      <jumbotron v-if="!didClientChooseType" :title="slogan">
        <v-container fill-height fluid>
          <v-layout row wrap class="wrapper">
            <v-flex d-flex xs6 @click.stop="choose('fisher')">
              <v-card d-flex hover class="py-2 mr-2 card">
                <v-card-title primary-title>
                  <div class="fisher-content">
                    <h3 class="headline text-xs-center mb-0">Fisher</h3>
                    <div class="text-xs-left text">
                      <v-flex xs12>
                        <v-icon>check</v-icon><span> Need MSC Certificate Assistance</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span> Need Suggestion on Fishery Practice</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span> Offer Fishery Experience</span>
                      </v-flex>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex d-flex xs6 @click.stop="choose('consultant')">
              <v-card d-flex hover class="py-2 ml-2 card">
                <v-card-title primary-title>
                  <div class="consultant-content">
                    <h3 class="headline text-xs-center mb-0">Consultant</h3>
                    <div class="text-xs-left text">
                      <v-flex xs12>
                        <v-icon>check</v-icon><span> Offer MSC Certificate Assistance</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span> Do Research on Fishery</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span> Participate in FIP</span>
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
      this.$emit('update:didClientChooseType', !value);
    },
  },
  methods: {
    ...mapActions('user', [
      'fetchState',
    ]),
    ...mapActions('search', [
      'searchUser',
    ]),
    choose(clientType) {
      this.fetchState({ userType: clientType });
      this.$emit('update:didClientChooseType', true);
    },
    submitHandler() {
      this.$validator.validateAll()
        .then((validation) => {
          if (!validation || !this.searchInput) return;
          const query = {
            searchInput: this.searchInput,
            searchCondition: this.searchCondition,
            userType: this.userType,
          };

          console.log(query);
          this.searchUser(query);
        })
        .then(() => {
          this.$router.push('/search/results');
        })
        .catch(error => console.error(error));
    },
    clearSearch() {
      this.searchInput = '';
      this.searchCondition = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toggleBtn__large {
  height: 100%;
}
h1 {
  color: #0D2C54;
}
.card {
  background: #F2F7F2;
  color: #0D2C54;
  border-radius: 6px;

  h3 {
    color: #ea6a66;
    font-weight: 500;
    font-size: 30px !important;
  }

  .text {
    margin-top: 15px;

    > div {
      margin-bottom: 5px;
    }
  }
}
i {
  color: #ea6a66 !important;
}
label {
  color: rgba(0,0,0,.54) !important;
}
.search-bar {
  max-width: 70% !important;

  h1 {
    margin-bottom: 40px;
  }
}

.wrapper {
  width: 690px;
}

.card__title {
  > .fisher-content {
    margin-left: 7px;
  }

  > .consultant-content {
    margin-left: 19px;
  }
}
</style>

