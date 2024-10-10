<template>
  <div class="bg-neutral-700 h-screen w-full flex md:px-0 px-4">
    <div v-if="fixedTeam.length > 0" class="space-y-4 my-auto mx-auto">
      <div v-for="team in fixedTeam" class="shadow w-full py-4 px-4 bg-neutral-300 rounded-lg space-x-2 space-y-2">
        <div class="flex justify-between">
          <p class="font-black text-black font-lg">TEAM. {{ team[0] }}</p>
          <p class="">{{ team.length }}명</p>
        </div>
        <div class="badge badge-success badge-lg   !bg-[#228be6] text-white !border-[#228be6]" v-for="person in team">{{ person }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const fixedTeam = useFixedTeam()
</script>
