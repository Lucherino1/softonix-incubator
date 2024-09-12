<template>
  <div id="sticky-panel" class="sticky-panel p-4 pb-0">
    <h3 class="font-medium">Countries</h3>

    <hr class="mt-2">
  </div>

  <div class="p-4 h-[2000px] flex flex-col">
    <p v-if="loading">Loading...</p>

    <p v-else-if="!countries">Error happened during countries fetch</p>

    <ul v-else class="list-disc list-inside">
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}

        <ol>
          <li v-for="city in country.cities" v-show="citiesHashed[city]?.name" :key="city" class="ml-4">
            - {{ citiesHashed[city]?.name }}
          </li>
        </ol>
      </li>
    </ul>

    <p id="bottom-item" class="mt-auto">Bottom</p>
  </div>
</template>

<script lang="js" setup>
import { result } from '@/homework/homework-1-promises.js'

console.log(result)

// function sum (a, b) { return a + b } // for test

// // eslint-disable-next-line
// function memoize (fn) {
//   // fn ваш код тут...
//   const cache = new Map()

//   return (...args) => {
//     const key = JSON.stringify(args)

//     if (cache.has(key)) {
//       console.log('from cache: ' + cache.get(key))
//       return cache.get(key)
//     }
//     const result = fn(...args)
//     cache.set(key, result)
//     return result
//   }
// }

// // приклад виконання вашого коду
// const sumMemoized = memoize(sum)

// sumMemoized(1, 3) // результат 4
// sumMemoized(3, 3) // результат 6
// sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання

</script>

<style lang="scss">
.sticky-panel {
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
}

.sticky-panel + div {
  padding-top: 64px;
}
</style>
