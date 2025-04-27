<script setup>
import Image from "@/components/Image.vue";
import image from "@/images/image1.jpg";
</script>

<template>
  <div class="container flex flex-wrap justify-center gap-6">
    <div
      class="photo-container flex-1 min-w-[300px] max-h-[450px] relative flex justify-center items-center"
    >
      <Image
        :image="image"
        :text="'Hello'"
        class="w-full h-full object-cover rounded-md"
      />
    </div>
    <div
      class="text-container flex-1 max-h-[450px] bg-gray-100 p-12 rounded-md flex flex-col justify-start overflow-y-auto"
    >
      <div class="max-w-xl w-full">
        <h1 class="text-3xl font-bold mb-4 flex justify-start">ABOUT US</h1>
        <p class="text-gray-700 text-justify mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt, nulla sit amet euismod sagittis, justo odio efficitur dui,
          at volutpat risus nisi ut augue. Proin fermentum nisi eu libero
          pellentesque dapibus.
        </p>
        <p class="text-gray-700 text-justify">
          Nulla facilisi. Curabitur posuere, nunc ut cursus dapibus, ligula
          felis consequat erat, et tincidunt nisl justo nec eros. Fusce
          tristique libero ac purus interdum, id fringilla nunc tristique. Donec
          eget turpis sed erat cursus vehicula a at odio. Sed ut lacus sit amet
          magna fermentum fermentum non eu nunc.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 750px) {
  .container {
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .photo-container {
    flex: 0 0 50%;
  }

  .text-container {
    flex: 0 0 35%;
  }
}

@media (max-width: 750px) {
  .container {
    flex-direction: column;
  }

  .photo-container,
  .text-container {
    flex: none;
    width: 100%;
  }
}
</style>
