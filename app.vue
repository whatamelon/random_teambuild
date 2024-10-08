<template>
  <div>
    <AppHeader></AppHeader>
    <NuxtLoadingIndicator color="#fff" />
    <NuxtLayout>
      <NuxtPage :keepalive="{ include: 'Alive' }" class="pt-16" />
    </NuxtLayout>
  </div>
</template>
