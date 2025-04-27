<template>
  <Column class="w-[87%]">
    <TextLine>Contact</TextLine>
    <p class="text-[1.5rem] font-light">PLEASE REACH US ON</p>

    <div class="grid w-full gap-4 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
      <ContactCard class="w-full p-[1.5rem]">
        <p class="contact-header text-[2rem] font-bold">ADDRESS</p>
        <p class="contact text-[1.3rem]">GS RUBINGO/TSS3 address details</p>
      </ContactCard>
      <ContactCard class="w-full p-[2rem]">
        <p class="contact-header text-[2rem] font-bold">PHONE</p>
        <p class="contact text-[1.3rem]">GS RUBINGO/TSS3 phone details</p>
      </ContactCard>
      <ContactCard class="w-full p-[2rem]">
        <p class="contact-header text-[2rem] font-bold">EMAIL</p>
        <p class="contact text-[1.3rem]">GS RUBINGO/TSS3 email details</p>
      </ContactCard>
    </div>
  </Column>
</template>

<style scoped>
.contact {
  font-size: clamp(1.3rem, 0.8rem, 1.3rem);
}
.contact-header {
  font-size: clamp(1.5rem, 4vw, 2rem);
}
@media (min-width: 768px) and (max-width: 1125px) {
  .contact-header {
    font-size: 1.5rem;
  }
  .contact {
    font-size: 0.8rem;
  }
}
</style>

<script setup>
import ContactCard from "@/components/ContactCard.vue";
import TextLine from "@/components/TextLine.vue";
import Column from "@/components/Column.vue";
</script>
