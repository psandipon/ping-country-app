<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    weatherData: {
      coord: { lon: 90.4074, lat: 23.7104 },
      weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
      base: "stations",
      main: {
        temp: 294.15,
        feels_like: 293.65,
        temp_min: 294.15,
        temp_max: 294.15,
        pressure: 1017,
        humidity: 78
      },
      visibility: 1500,
      wind: { speed: 4.12, deg: 300 },
      clouds: { all: 40 },
      dt: 1611981465,
      sys: {
        type: 1,
        id: 9145,
        country: "BD",
        sunrise: 1611967193,
        sunset: 1612006994
      },
      timezone: 21600,
      id: 1185241,
      name: "Dhaka",
      cod: 200
    }
  })
};
</script>

<style lang="scss" scoped></style>
