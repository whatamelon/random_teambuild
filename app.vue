<template>
  <div>
    <AppHeader></AppHeader>
    <NuxtLoadingIndicator color="#fff" />
    <NuxtLayout>
      <NuxtPage :keepalive="{ include: 'Alive' }" class="pt-16" />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        hid: 'light-mode-script',
        innerHTML: `
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
  })
</script>
