<template>
  <div>
    <div>
      <v-row align="center">
        <v-col cols="12">
          <v-select
            :items="items"
            :menu-props="{ top: true, offsetY: true }"
            v-model="picked"
            label="Label"
          ></v-select>
        </v-col>
      </v-row>
    </div>
    <div>
      <selected :picked="picked" />
    </div>
  </div>
</template>

<script>
import selected from "../components/selected";

export default {
  components: {
    selected
  },

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    picked: ""
  })
};
</script>
