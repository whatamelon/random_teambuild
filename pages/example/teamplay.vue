<template>
    <div class="bg-neutral-700 h-screen w-full flex md:px-0 px-4">
      <div v-if="fixedExamleTeam.length > 0" class="space-y-4 my-auto mx-auto">
        <div v-for="team in fixedExamleTeam" class="shadow w-full py-4 px-4 bg-neutral-300 rounded-lg space-x-2 space-y-2">
          <div class="flex justify-between">
            <p class="font-black text-black font-lg">TEAM. {{ team[0] }}</p>
            <p class="">{{ $t('totalCount', { count: team.length }) }}</p>
          </div>
          <div class="badge badge-success badge-lg   !bg-[#228be6] text-white !border-[#228be6]" v-for="person in team">{{ person }}</div>
        </div>
      </div>
      <button @click="goHome()" style="transform: translateX(-50%)" class="btn btn-neutral !bg-[#4dabf7] text-white !border-[#4dabf7] btn-lg btn-wide fixed bottom-10 md:bottom-20 left-1/2 w-[calc(100%-32px)] md:w-[calc(60%-80px)]">{{ $t('goRealGame') }}</button>
    </div>
  </template>
  
  <script setup>
    const fixedExamleTeam = useExFixedTeam()
    function goHome() {
        location.href = '/'
    }
  </script>
  