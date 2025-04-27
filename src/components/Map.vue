<template>
  <div id="map" class="w-full h-[400px]"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Map",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const schoolCoordinates = [-1.4394689, 30.4623582];
      const map = L.map("map").setView(schoolCoordinates, 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(schoolCoordinates)
        .addTo(map)
        .bindPopup("School Location")
        .openPopup();
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
