<template>
  <div>
    <NuxtLoadingIndicator color="#121212" />
    <NuxtLayout>
      <NuxtPage :keepalive="{ include: 'Alive' }" />
    </NuxtLayout>
  </div>
</template>
