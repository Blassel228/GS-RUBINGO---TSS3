<template>
  <Row
    class="flex justify-center items-center w-[87%] h-[15rem] bg-gray-100 rounded-lg gap-[5vw] text-center p-4 flex-wrap"
  >
    <div class="flex flex-col items-center min-w-[80px] w-[30%] sm:w-[25%]">
      <TextLine class="text-blue-500 font-bold text-3xl sm:text-4xl md:text-5xl"
        >262</TextLine
      >
      <p class="text-sm sm:text-base md:text-lg text-gray-800">STUDENTS</p>
    </div>
    <div class="flex flex-col items-center min-w-[80px] w-[30%] sm:w-[25%]">
      <TextLine class="text-blue-500 font-bold text-3xl sm:text-4xl md:text-5xl"
        >15</TextLine
      >
      <p class="text-sm sm:text-base md:text-lg text-gray-800">TEACHERS</p>
    </div>
    <div class="flex flex-col items-center min-w-[80px] w-[30%] sm:w-[25%]">
      <TextLine class="text-blue-500 font-bold text-3xl sm:text-4xl md:text-5xl"
        >5</TextLine
      >
      <p class="text-sm sm:text-base md:text-lg text-gray-800">OTHER WORKERS</p>
    </div>
  </Row>
</template>

<script setup>
import Row from "@/components/Row.vue";
import TextLine from "@/components/TextLine.vue";
</script>
