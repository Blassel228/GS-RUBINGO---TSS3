<script>
import Header from "@/components/Header.vue";
import Swiper from "@/components/Swiper.vue";
import About from "@/components/About.vue";
import Statistics from "@/components/Statistics.vue";
import Map from "@/components/Map.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import RequestForm from "@/components/RequestForm.vue";

export default {
  name: "Home",
  components: {
    RequestForm,
    Contact,
    Gallery,
    Map,
    Statistics,
    About,
    Swiper,
    Header,
  },
};
</script>

<template>
  <Header />
  <div
    class="flex flex-col gap-[6rem] justify-center items-center min-h-screen text-center"
  >
    <Swiper id="swiper" />
    <About id="about" />
    <Statistics id="statistics" />
    <Map id="map" />
    <Gallery id="gallery" />
    <Contact id="contact" />
    <RequestForm id="request-form" />
  </div>
</template>
