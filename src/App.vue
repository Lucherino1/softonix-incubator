<template>
  <header class="flex flex-col justify-center items-center w-full pb-14">
    <nav class="app-container flex items-center h-120px max-h-[120px] lg:h-[100px] lg:max-h-[100px]">
      <a class=" mr-[20px] xl:mr-[72px] min-w-[fit-content]" href="/">
        <img class="h-full w-full" src="/src/assets/images/salty-logo.svg" alt="Salty logo">
      </a>
      <NavBar class=" xl:mr-[380px] lg:mr-[200px] md:mr-[100px]" />
      <button
        class="group flex items-center ml-auto gap-[6px] border leading-4 left-0
         hover:bg-orange hover:text-white transition duration-300
        rounded-full font-poppins font-medium text-orange py-[19px] px-[34px] min-w-[fit-content] right-0"
      >
        Book Now
        <IconBooking class=" group-fill-current text-orange group-hover:text-white transition duration-300" />
      </button>
    </nav>
    <div class="app-container flex gap-[60px] pt-[10px]">
      <div class="">
        <h1 class="pt-[75px] font-sen font-bold text-[84px] leading-[86px] text-gray-dark">
          Discover the Best Lovely Places
        </h1>
        <p class="pt-[26px] pb-11 pr-[70px] text-18px text-gray leading-7">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </p>
        <div class="flex bg-white absolute py-4 pl-[28px] pr-[20px] rounded-[38px] items-center">
          <div class="pr-[34px] border-r border-r-gray-ultra-light py-[4px]">
            <p class="font-medium text-gray-dark text-[18px] leading-4">Where</p>
            <div class="flex gap-[26px] items-center max-w-[140px] mt-[8px]">
              <p class=" text-[12px] leading-3 truncate">Center Point, London</p>
              <IconPoint />
            </div>
          </div>
          <div class="pl-[34px] pr-14 py-[2px]">
            <p class="font-medium text-gray-dark text-[18px] leading-4">Date</p>
            <div class="flex gap-[26px] items-center max-w-[140px] mt-[8px]">
              <p class=" text-[12px] leading-3 truncate">09th March,2021</p>
              <IconCalendar />
            </div>
          </div>
          <button class="bg-orange rounded-full min-w-[54px] min-h-[54px] flex justify-center items-center">
            <IconMagnifyingGlass class="" />
          </button>
        </div>
      </div>
      <img class="" src="/src/assets/images/hero-image.svg" alt="Header img">
    </div>
  </header>

  <section class="app-container flex flex-col justify-center pt-5 items-center mt-24 pb-8">
    <div class="flex justify-between items-start w-full">
      <div>
        <p class="main-header mb-6">Categories</p>
        <p class=" max-w-[370px]">
          Here are lots of interesting destinations to visit,
          but don’t be confused—they’re already grouped by category.
        </p>
        <img src="" alt="">
      </div>
      <AppArrowBtns />
    </div>
    <div class="flex gap-[30px] mt-[60px]">
      <CategoriesCard title="Beach" img-src="/src/assets/images/categories-images/beach.svg" />
      <CategoriesCard title="Desert" img-src="/src/assets/images/categories-images/desert.svg" />
      <CategoriesCard title="Mountain" img-src="/src/assets/images/categories-images/mountain.svg" />
      <CategoriesCard title="Tample" img-src="/src/assets/images/categories-images/temple.svg" />
      <CategoriesCard title="Tower" img-src="/src/assets/images/categories-images/tower.svg" />
      <CategoriesCard title="Pyramid" img-src="/src/assets/images/categories-images/pyramid.svg" />
    </div>
  </section>

  <section class="app-container_large flex flex-col py-[50px] mt-14">
    <div class="flex gap-40">
      <img class=" left-16" src="/src//assets/images/camera-man-image.svg" alt="A happy traveller">
      <div class=" flex flex-col gap-5 pt-20">
        <p class=" text-[20px] leading-5 font-semibold text-orange">Our Experience</p>
        <p class="main-header">Our Stories Have Adventures</p>
        <p class=" pb-5 pr-16">
          We are experienced in bringing adventures to stay their journey,
          with all outdoor destinations in the world as our specialties.
          Start your adventure now! Nature has already called you!
        </p>
        <div class="flex gap-5">
          <DestinationCard title="12K+" text="Succes Journey" />
          <DestinationCard title="16+" text="Awards Winning" />
          <DestinationCard title="20+" text="Years Of Experience" />
        </div>
      </div>
    </div>
  </section>

  <section class="app-container flex flex-col py-[50px]">
    <div class="flex items-center pb-[35px]">
      <p class="main-header leading-[66px] flex-1 justify-start">Find Popular Destination</p>
      <AppArrowBtns class="flex-1 justify-end" />
    </div>
    <div class="carrousel-container">
      <TourCard
        title="Mountain Hiking Tour"
        text="Mountain Hiking Tour"
        price="$89"
        amount="Person"
        img-src="/src/assets/images/tours-images/mountain-hiking-tour.svg"
      />
      <TourCard
        title="Machu Picchu, Peru"
        text="Machu Picchu, Peru"
        price="$99"
        amount="Person"
        img-src="/src/assets/images/tours-images/machu-picchu-peru.svg"
      />
      <TourCard
        title="The Grand Canyon, Arizona"
        text="Mountain Hiking Tour"
        price="$70"
        amount="Person"
        img-src="/src/assets/images/tours-images/the-grand-canyon-arizona.svg"
      />
      <TourCard
        title="Rome, Italy"
        text="Mountain Hiking Tour"
        price="$99"
        amount="Person"
        img-src="/src/assets/images/tours-images/rome-italy.svg"
      />
    </div>
  </section>

  <section class="app-container flex flex-col items-center my-14">
    <div class="flex flex-col items-center justify-center mx-auto text-center pb-7">
      <p class="main-header leading-[66px] pt-9">Top Destinations</p>
      <p class=" pt-4">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
    </div>
    <div class="flex gap-[14px] mx-0 max-w-[600px]">
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="London" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="Bangkok" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="England" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="Singapore" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="Italy" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppArrowBtns from './components/AppArrowBtns.vue'
import AppSectionButton from './components/AppSectionButton.vue'
import CategoriesCard from './components/CategoriesCard.vue'
import DestinationCard from './components/DestinationCard.vue'
import IconCalendar from './components/icons/IconCalendar.vue'
import IconPoint from './components/icons/IconPoint.vue'
import IconBooking from './components/icons/icons-for-buttons/IconBooking.vue'
import IconMagnifyingGlass from './components/icons/icons-for-buttons/IconMagnifyingGlass.vue'
import NavBar from './components/NavBar.vue'
import TourCard from './components/TourCard.vue'
</script>

<style scoped>
.carrousel-container {
  scroll-snap-type: x mandatory;
  @apply flex gap-[30px] mx-auto xl:w-[1170px] overflow-x-auto pb-5
}
.carrousel-container > * {
  scroll-snap-align: center;
}
</style>
