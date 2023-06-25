<script setup lang="ts">
const { propsBody } = defineProps<{
  propsBody: string;
}>();

const calldata = useState("fetch-body-data", () => propsBody);
const { data } = useFetch("/api/testData", {
  method: "post",
  body: calldata.value,
});

const callTrigger = (v?: any) => {
  calldata.value = v || "trigger";
};

defineExpose({
  callTrigger,
});
</script>

<template>
  <div>Fetch</div>
  <p>fetch {{ data }} !!</p>
  <button data-testid="cahnge-btn" @click="callTrigger('체인지')">
    체인지 클릭
  </button>
  <p>
    {{ calldata }}
  </p>
</template>

<style lang="scss" scoped></style>
