<template>
  <div class="flex flex-col items-center h-[80vh]" id="hero">
    <div class="lg:ml-0 ml-8">
      <h1
        class="lg:text-7xl text-5xl mt-[10%] float-left"
        v-motion
        :initial="{
          y: 100,
          opacity: 0,
        }"
        :enter="{ y: 0, opacity: 1, transition: { delay: 0 } }"
      >
        Hello, I'm <span class="text-secondary">Josef Macera</span>.
      </h1>
      <p
        class="float-left mt-8 lg:w-3/4 text-2xl"
        v-motion
        :initial="{
          y: 100,
          opacity: 0,
        }"
        :enter="{ y: 0, opacity: 1, transition: { delay: 250 } }"
      >
        I'm a full-stack web developer based in Reno, Nevada. I'm an open source
        enthusiast and enjoy anything to do with computers.
      </p>
    </div>
  </div>
</template>
