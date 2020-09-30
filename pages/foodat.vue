<template>
  <v-card max-width="344" light rounded class="searchCard">
    <v-card-text>
      <p class="display-1 text--primary">Greetings</p>
      <p class="display-2 text--primary">Let's explore good food near you.</p>
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col cols="12">
          <v-row dense align="center">
            <v-col>
              <v-autocomplete
                v-model="select"
                light
                autocomplete="new-password"
                :outlined="true"
                :rounded="true"
                color="orange accent-3"
                height="12"
                :loading="isLoading"
                :items="results"
                :search-input.sync="search"
                :filter="filterAddress"
                cache-items
                hide-no-data
                hide-details
                item-text="description"
                item-value="place_id"
                label="Delivery Address"
                @keyup="keyTimer"
              >
              </v-autocomplete>
            </v-col>
            <v-col cols="1" class="ml-n9 px-0">
              <v-icon class="gpsIcon">{{
                mdiCrosshairsGps
              }}</v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-btn
            width="100%"
            color="orange accent-3"
            rounded
            to="cravings"
          >
            I'm Hungry!
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: "basic"
}
</script>