<template>
  <div class="h-16 shadow fixed top-0 w-full bg-neutral-100 flex justify-between">
    <div class="w-1/5 hidden md:block"></div>
    <NuxtLink :to="'/'"><img src="/img/logo.png" class="w-fit h-16 mx-auto" /></NuxtLink>

    <div class="w-1/2 md:w-1/5 flex pr-4 md:pr-10">
      <form class="justify-end flex w-full h-fit my-auto form-control flex-row">
        <label for="locale-select" class="label w-fit">{{ $t('language') }}: </label>
        <select id="locale-select" class=" select select-bordered w-fit bg-transparent ml-1" v-model="$i18n.locale">
          <option value="ko">한글</option>
          <option value="en">English</option>
        </select>
      </form>
    </div>
  </div>
</template>
