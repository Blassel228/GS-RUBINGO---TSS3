<script>
import TextLine from "@/components/TextLine.vue";
import { defineComponent } from "vue";
import GalleryItem from "@/components/GalleryItem.vue";

const imagePaths = import.meta.glob(
  ["@/images/students*.webp", "@/images/students*.jpg"],
  { eager: true },
);

const importedImages = Object.values(imagePaths).map(
  (module) => module.default,
);

export default defineComponent({
  components: { GalleryItem, TextLine },
  data() {
    return {
      images: importedImages,
    };
  },
});
</script>

<template>
  <div class="w-[87%]">
    <TextLine class="mb-[1rem]">GALLERY</TextLine>
    <div
      class="gallery-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"
    >
      <GalleryItem
        class="image-card"
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Gallery image ' + index"
      />
    </div>
  </div>
</template>

<style scoped>
.image-card {
  aspect-ratio: 1 / 1;
}
</style>
