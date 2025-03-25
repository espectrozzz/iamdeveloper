<script setup>
import { onMounted } from "vue"
import HelloWorld from './components/HelloWorld.vue'

const changeBackgroundColor = (x, y) => {
  const element = document.getElementById("customEvent");
  element.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
}

onMounted(() => {
  const elementEvent = document.getElementById("app");

  elementEvent.addEventListener("mousemove", (event) => {
    changeBackgroundColor(event.x, event.y)
  });
})

</script>

<template>
  <div id="customEvent" class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style="background: radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%);"></div>
  <main class="min-w-screen min-h-screen font-inter py-24 px-40">
    <RouterView />
  </main>
</template>

