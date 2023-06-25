<script setup lang="ts"></script>

<template>
  <div>
    <Count />
    <br />
    <Icon class="text-[3rem]" name="teenyicons:arrow-outline" />
    <Icon class="text-[3rem] inline-block" name="logos:adobe-photoshop" />
    <ClientOnly>
      <Trigger />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped></style>
