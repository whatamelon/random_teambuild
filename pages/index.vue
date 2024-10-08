<template>
  <div class="h-screen w-screen flex bg-white">
    <h1 class="m-auto text-black font-black hover:text-blue-700 hover:cursor-pointer" style="font-size: 5rem" @click="gotolistup()">HELLO👋</h1>
  </div>
</template>

<script setup>
  const name = ref('')
  const list = ref([])

  const router = useRouter()

  function gotolistup() {
    router.push('/listup')
  }
</script>
