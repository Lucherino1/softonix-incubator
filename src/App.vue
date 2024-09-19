<template>
  <header id="home" class="flex flex-col justify-center items-center w-full pb-14 pt-[100px]">
    <div class="w-full min-h-[100px] fixed flex justify-center items-center top-0 z-50 bg-vanilla">
      <nav
        class="app-container flex items-center justify-center text-nowrap w-full"
      >
        <a class="mr-[20px] xl:mr-[72px] min-w-[fit-content]" href="/">
          <img class="h-full w-full" src="/src/assets/images/salty-logo.svg" alt="Salty logo">
        </a>
        <div
          class="font-poppins font-normal text-[16px] leading-4 text-blue-dark hidden md:block"
        >
          <ul class="flex gap-5 lg:gap-[36px]">
            <li
              class="nav__list-item nav__list-item--selected"
            >
              <a href="#home">Home</a>
            </li>
            <li class="nav__list-item">
              <a href="#about-us">About us</a>
            </li>
            <li class="nav__list-item">
              <a href="#destinations">Destinations</a>
            </li>
            <li class="nav__list-item">
              <a href="#tours">Tours</a>
            </li>
            <li class="nav__list-item">
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <button
          class="group flex items-center ml-auto gap-[6px] border leading-4 left-0
          hover:bg-orange hover:text-white transition duration-300
          rounded-full font-poppins font-medium text-orange py-[19px] px-[34px] min-w-[fit-content] right-0"
        >
          Book Now
          <IconBooking class="group-fill-current text-orange group-hover:text-white transition duration-300" />
        </button>
        <div class="mx-0 ml-2 md:hidden">
          <button>
            <IconMenu class="w-[40px] h-[40px] fill-gray-dark" />
          </button>
        </div>
      </nav>
    </div>
    <div class="app-container flex flex-row gap-1 md:gap-5 lg:gap-[70px] pt-[10px]">
      <div class="flex flex-col flex-1 pb-1 lg:pb-[30px]">
        <h1
          class="pt-1 lg:pt-[65px] font-sen font-bold tracking-normal self-center md:self-start
          text-[36px] lg:text-[64px] xl:text-[84px] lg:leading-[86px] text-gray-dark"
        >
          Discover the Best Lovely Places
        </h1>
        <div class="flex justify-center items-center self-center md:hidden">
          <img class="object-cover w-full h-auto" src="/src/assets/images/hero-image.svg" alt="Header image">
        </div>
        <p
          class="pt-[26px] pb-11 lg:pr-[65px] text-[16px] lg:text-[18px] self-center md:self-start
           text-justify text-gray lg:leading-7 max-w-[350px] md:max-w-[400px] lg:max-w-none"
        >
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </p>
        <div
          class="flex mx-auto md:mx-0 lg:justify-start bg-white max-w-[350px] md:max-w-[500px]
          py-[11px] pl-[28px] pr-[20px] rounded-[38px] items-center"
        >
          <div class="pr-2 md:pr-[34px] md:border-r border-r-gray-ultra-light">
            <p class="font-medium text-gray-dark text-[16px] lg:text-[18px] leading-4">Where</p>
            <div class="flex gap-3 md:gap-[26px] items-center max-w-[100px] md:max-w-[140px] mt-[8px]">
              <p class="text-[12px] leading-3 truncate">Center Point, London</p>
              <button>
                <IconPoint />
              </button>
            </div>
          </div>
          <div class="pl-2 md:pl-[34px] pr-10 md:pr-14 py-[2px] border-l md:border-l-0 border-l-gray-ultra-light">
            <p class="font-medium text-gray-dark text-[16px] md:text-[18px] leading-4">Date</p>
            <div class="flex gap-3 md:gap-[26px] items-center max-w-[100px] md:max-w-[140px] mt-[8px]">
              <p class="text-[12px] leading-3 truncate">09th March,2021</p>
              <button>
                <IconCalendar />
              </button>
            </div>
          </div>
          <button class="bg-orange rounded-full min-w-[54px] min-h-[54px] flex justify-center items-center">
            <IconMagnifyingGlass />
          </button>
        </div>
      </div>
      <div class="flex-1 justify-center items-center hidden md:flex">
        <img
          class="object-cover w-full h-auto"
          src="/src/assets/images/hero-image.svg"
          alt="Header img"
        >
      </div>
    </div>
  </header>

  <section class="app-container flex flex-col justify-center pt-5 items-center lg:mt-24 pb-8">
    <div class="flex justify-between flex-col w-full">
      <div class="flex justify-between items-center">
        <p class="main-header">Categories</p>
        <AppArrowBtns />
      </div>
      <p class="max-w-[370px] mt-6">
        Here are lots of interesting destinations to visit,
        but don’t be confused—they’re already grouped by category.
      </p>
    </div>
    <div class="flex gap-[30px] mt-[60px] carrousel-container xl:snap-none">
      <CategoriesCard title="Beach" img-src="/src/assets/images/categories-images/beach.png" />
      <CategoriesCard title="Desert" img-src="/src/assets/images/categories-images/desert.svg" />
      <CategoriesCard title="Mountain" img-src="/src/assets/images/categories-images/mountain.svg" />
      <CategoriesCard title="Tample" img-src="/src/assets/images/categories-images/temple.svg" />
      <CategoriesCard title="Tower" img-src="/src/assets/images/categories-images/tower.svg" />
      <CategoriesCard title="Pyramid" img-src="/src/assets/images/categories-images/pyramid.svg" />
    </div>
  </section>

  <section id="about-us" class="app-container flex flex-col py-5 lg:py-[50px] lg:mt-14">
    <div class="flex gap-14 xl:gap-40">
      <div class="hidden lg:block">
        <img
          class="left-16 mt-[50px] max-w-[540px] max-h-[580px] xl:ml-[-65px]"
          src="/src//assets/images/camera-man-image.svg"
          alt="A happy traveller"
        >
      </div>
      <div class="flex flex-col gap-5 pt-[30px] md:pt-[60px]">
        <p class="text-[20px] leading-5 font-semibold text-orange">Our Experience</p>
        <p class="main-header leading-[40px] md:leading-[66px]">Our Stories Have Adventures</p>
        <p class="text-[16px] leading-[26px] pb-5 sm:pr-16">
          We are experienced in bringing adventures to stay their journey,
          with all outdoor destinations in the world as our specialties.
          Start your adventure now! Nature has already called you!
        </p>
        <div class="flex flex-wrap justify-center gap-5 carrousel-container sm:snap-none">
          <PopularDestinationCard title="12K+" text="Succes Journey" />
          <PopularDestinationCard title="16+" text="Awards Winning" />
          <PopularDestinationCard title="20+" text="Years Of Experience" />
        </div>
      </div>
    </div>
  </section>

  <section id="tours" class="app-container flex flex-col py-6 md:py-[50px]">
    <div class="flex flex-col sm:flex-row items-center pb-[35px]">
      <p
        class="main-header leading-[40px] md:leading-[66px] flex-1 justify-start text-center sm:text-start"
      >
        Find Popular Destination
      </p>
      <AppArrowBtns class="pt-5 md:pt-0 flex-1 justify-end" />
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
        img-src="/src/assets/images/tours-images/rome-italy.png"
      />
    </div>
  </section>

  <section id="destinations" class="app-container flex flex-col items-center mt-1 lg:mt-14 mb-10">
    <div class="flex flex-col items-center justify-center mx-auto text-center pb-7">
      <p class="main-header leading-[66px] pt-9">Top Destinations</p>
      <p class="pt-4">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
    </div>
    <div class="flex flex-wrap gap-[14px] justify-center mx-0 max-w-[600px]">
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="London" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="Bangkok" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="England" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="Singapore" />
      <AppSectionButton class="font-poppins px-5 py-[10px]" content="Italy" />
    </div>
    <div class="flex flex-wrap justify-center gap-[30px] mt-[50px]">
      <div class="flex flex-col gap-[26px]">
        <TopDestinationCard
          width="270px"
          height="250px"
          img-src="/src/assets/images/top-destinations-images/vientam-1.svg"
          score="3.5"
          title="Vientam"
          text="Worefall"
        />
        <TopDestinationCard
          width="270px"
          height="250px"
          img-src="/src/assets/images/top-destinations-images/vientam-2.svg"
          score="3.5"
          title="Vientam"
          text="Worefall"
        />
      </div>
      <TopDestinationCard
        class="hidden sm:block"
        width="370px"
        height="526px"
        img-src="/src/assets/images/top-destinations-images/vientam-3.png"
        score="3.5"
        title="Vientam"
        text="Worefall"
      />
      <div class="sm:flex flex-col gap-[13px] hidden">
        <TopDestinationCard
          width="470px"
          height="250px"
          img-src="/src/assets/images/top-destinations-images/vientam-4.svg"
          score="3.5"
          title="Vientam"
          text="Worefall"
        />
        <div class="flex gap-[30px]">
          <TopDestinationCard
            width="170px"
            height="263px"
            img-src="/src/assets/images/top-destinations-images/vientam-5.svg"
            score="3.5"
            title="Vientam"
            text="Worefall"
          />
          <TopDestinationCard
            width="270px"
            height="263px"
            img-src="/src/assets/images/top-destinations-images/vientam-6.svg"
            score="3.5"
            title="Vientam"
            text="Worefall"
          />
        </div>
      </div>
    </div>
    <button
      class="block sm:hidden underline hover:text-orange transition-all duration-300 mt-5 text-[18px]"
    >
      Show more
    </button>
  </section>

  <section id="blog" class="app-container flex flex-col items-center py-[66px] mt-10">
    <div class="flex gap-20 xl:gap-[175px] items-center">
      <div class="bg-peach-light w-full h-full rounded-[245px] ml-[65px] hidden md:block overflow-hidden">
        <img
          src="./assets/images/customer-image.svg"
          class="w-full object-cover"
          alt="Happy Customer Image"
        >
      </div>
      <div class="flex flex-col">
        <p class="feedback__header main-header pr-[70px] pb-[26px]">A customer said about us:</p>
        <FeedbackCard
          review="Salty helped me a lot in finding the best place for our first outdoor adventure trip.
          They responded very quickly and gave me a detailed account of the place—its history,
           as well as its best features."
          name="Andrew Sarma"
          job="Enterpreneur"
        />
      </div>
    </div>
  </section>

  <section class="app-container flex justify-center py-[46px] lg:mt-7">
    <div
      class="bg-peach-ultra-light w-full h-full flex flex-col
    justify-center items-center text-center py-[75px] rounded-[30px]
    bg-[url('/src/assets/images/bg-sing-up-section.svg')] bg-cover bg-center"
    >
      <p class="font-semibold text-[40px] leading-10 text-gray-dark pb-4">
        Sign up to our newsletter
      </p>
      <p class="leading-[26px] pb-10 text-gray mx-2">
        Reciev latest news, update, and many other things <br class="hidden lg:inline"> every week.
      </p>
      <div class="bg-white py-[10px] flex justify-between pr-3 pl-[26px] rounded-xl">
        <input class="sm:pr-[160px] text-[14px] leading-[14px]" type="email" placeholder="Enter Your email address">
        <button
          class="bg-orange px-3 py-3 rounded-xl group hover:bg-white transition-colors duration-300"
          :style="{ boxShadow: '0px 5px 14px 0px #F7674340'}"
        >
          <IconBooking class="text-white group-hover:text-orange" />
        </button>
      </div>
    </div>
  </section>
  <footer class="app-container mt-[15px] py-14 md:py-20">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-32 lg:gap-[300px] xl:gap-[275px]">
      <div class="flex flex-col order-2 md:order-1">
        <a class="w-[98px] h-[35px] hidden md:block" href="/">
          <img class="h-auto w-full" src="/src/assets/images/salty-logo.svg" alt="Salty logo">
        </a>
        <p class="pt-5 pb-10 hidden md:inline-block">Enjoy the touring <br> with Salty</p>
        <div class="flex gap-[14px]">
          <a href=""><IconFacebook /></a>
          <a href=""><IconInstagram /></a>
          <a href=""><IconTwitter /></a>
        </div>
      </div>
      <div class="flex flex-wrap gap-10 xl:gap-28 pb-1 order-1 md:order-2">
        <div class="flex flex-col">
          <p class="footer__main-header">Resources</p>
          <a class="footer__link" href="">Download</a>
          <a class="footer__link" href="">Help Center</a>
          <a class="footer__link" href="">Guide Book</a>
          <a class="footer__link" href="">App Directory</a>
        </div>
        <div class="flex flex-col">
          <p class="footer__main-header">Travellers</p>
          <a class="footer__link" href="">Why Travellers</a>
          <a class="footer__link" href="">Enterprice</a>
          <a class="footer__link" href="">Customer Stories</a>
          <a class="footer__link" href="">Instagram post</a>
        </div>
        <div class="flex flex-col">
          <p class="footer__main-header">Company</p>
          <a class="footer__link" href="">Travelling</a>
          <a class="footer__link" href="">About Locato</a>
          <a class="footer__link" href="">Success</a>
          <a class="footer__link" href="">Information</a>
        </div>
        <div class="flex flex-col">
          <p class="footer__main-header">Get App</p>
          <a class="footer__link" href="">App Store</a>
          <a class="footer__link" href="">Google Play Store</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import AppArrowBtns from './components/AppArrowBtns.vue'
import AppSectionButton from './components/AppSectionButton.vue'
import CategoriesCard from './components/CategoriesCard.vue'
import PopularDestinationCard from './components/ExpirienceCard.vue'
import IconCalendar from './components/icons/IconCalendar.vue'
import IconPoint from './components/icons/IconPoint.vue'
import IconBooking from './components/icons/icons-for-buttons/IconBooking.vue'
import IconMagnifyingGlass from './components/icons/icons-for-buttons/IconMagnifyingGlass.vue'
import TourCard from './components/TourCard.vue'
import TopDestinationCard from './components/TopDestinationCard.vue'
import FeedbackCard from './components/FeedbackCard.vue'
import IconInstagram from './components/icons/icons-social-medias/IconInstagram.vue'
import IconTwitter from './components/icons/icons-social-medias/IconTwitter.vue'
import IconFacebook from './components/icons/icons-social-medias/IconFacebook.vue'
import IconMenu from './components/icons/IconMenu.vue'

</script>

<style lang="scss" scoped>

.nav__list-item {
  position: relative;
  padding-bottom: 0.5rem;
  @apply hover:text-orange transition duration-300
}
.nav__list-item--selected {
  position: relative;
  padding-bottom: 0.375rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 12px;
    height: 2px;
    @apply bg-orange
  }
}

.carrousel-container {
  scroll-snap-type: x mandatory;
  @apply flex gap-[30px] mx-auto w-full overflow-x-auto pb-5
}
.carrousel-container > * {
  scroll-snap-align: center;
}

.feedback__header {
  position: relative;
  padding-top: 24px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 67px;
    height: 8px;
    background-color: #ffd482;
    border-radius: 12px;
  }
}

.footer__main-header {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  @apply text-gray-dark capitalize pb-[22px]
}
.footer__link {
  font-size: 14px;
  font-weight: 400;
  line-height: 34px;
  @apply text-gray-slate hover:text-orange transition-colors duration-300
}

</style>
