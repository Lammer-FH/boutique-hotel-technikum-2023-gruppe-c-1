<script>
export default {
  name: "RoomCard",
  props: ["roomName", "price", "imagePath"],
}

</script>

<template>
    <b-card
        :title="roomName"
        :img-src="imagePath"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        aktueller Preis: <b>{{price}}</b>
      </b-card-text>
    </b-card>
</template>

<style scoped>

</style>