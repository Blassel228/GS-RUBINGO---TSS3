<script setup>
import Row from "@/components/Row.vue";
import Column from "@/components/Column.vue";
</script>
<template>
  <div class="main-container w-[80%] gap-[1rem] flex flex-row">
    <Column class="flex flex-col w-full gap-[2rem]">
      <Row class="w-full gap-[2rem]">
        <Column class="w-full">
          <label for="font-light" class="font-light text-xl justify-start flex"
            >Email</label
          >
          <input
            type="text"
            class="email-input w-full p-2 border bg-gray-50 border-gray-300 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 hover:border-gray-500"
          />
        </Column>
        <Column class="w-full">
          <label for="name-input" class="font-light text-xl justify-start flex"
            >Name</label
          >
          <input
            type="text"
            class="name-input w-full p-2 border bg-gray-50 border-gray-300 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 hover:border-gray-500"
          />
        </Column>
      </Row>
      <Column>
        <label class="font-light text-xl flex">How can we help?</label>
        <textarea
          class="h-[20%] flex justify-start w-full bg-gray-50 p-2 border-gray-300 border"
        />
        <div class="flex items-center space-x-2">
          <input id="checkbox" type="checkbox" class="w-5 h-5" />
          <label for="checkbox" class="font-light text-xl">
            I agree to the
            <a href="#" class="font-light underline hover:text-blue-600"
              >Terms & Conditions</a
            >
          </label>
        </div>
        <button
          class="send-request-button rounded-lg bg-blue-500 text-white p-[0.5rem] text-2xl font-light hover: cursor-pointer w-[12rem] hover:cursor-pointer hover:bg-blue-600"
        >
          Send a Request
        </button>
      </Column>
    </Column>
    <Column
      class="subscribe-form bg-blue-100 rounded-md w-[40%] flex flex-col items-center justify-center p-6 gap-4 mb-10"
    >
      <div class="text-center">
        <p class="text-[2rem] font-medium leading-tight">GS RUBINGO / TSS3<br /></p>
        <p class="font-light text-2xl">please subscribe</p>
      </div>
      <div class="w-full flex flex-col items-center gap-2.5">
        <input
          type="text"
          class="w-[80%] p-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 hover:border-gray-500"
        />
        <button
          class="subscribe-button w-[50%] p-2 bg-blue-500 text-white rounded-md hover:cursor-pointer hover:bg-blue-600"
        >
          Subscribe*
        </button>
      </div>
    </Column>
  </div>
</template>

<style scoped>
  .send-request-button{
    font-size: clamp(0.7rem, 1.4rem, 2rem);
  }
  @media (max-width: 1020px){
    .main-container{
      display: flex;
      flex-direction: column;
    }
    .subscribe-form{
      width: 100%;
    }
  }
</style>