import { defineStore } from "pinia";

export const useCount = defineStore(
  "useCount",
  () => {
    const count = useState("useCount/cont", () => 0);

    const str = useState("count/str", () => "a");

    const increment = () => {
      count.value++;
      str.value += str.value;
    };
    const decrement = () => {
      count.value--;
    };

    return { count, str, increment, decrement };
  },
  {
    persist: true,
  }
);
