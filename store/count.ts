import { defineStore } from "pinia";

export const useCount = defineStore(
  "useCount",
  () => {
    const count = useState("useCount/cont", () => 0);

    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };

    return { count, increment, decrement };
  },
  {
    persist: true,
  }
);
