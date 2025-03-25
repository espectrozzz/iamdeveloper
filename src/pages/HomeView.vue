<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="lg:flex lg:justify-between lg:gap-4">
        <div class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Manuel Alfaro</h1>
                <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Engineer</h2>
                <p class="mt-4 max-w-xs leading-normal text-slate-400">Creo interfaces de usuarios accesibles y de alto rendimiento para la web.</p>
            </div>
        </div>
        <div class="pt-24 lg:w-[52%] lg:py-24 text-slate-400 leading-normal">
            <p class="mb-4">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            <p class="mb-4">Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.</p>
            <p class="mb-4">In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.</p>
            <p class="mb-4">In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seed</p>
        </div>
    </div>
</template>