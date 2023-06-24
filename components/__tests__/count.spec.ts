import Count from "@/components/count.vue";
import { VueWrapper, shallowMount } from "@vue/test-utils";

import { setActivePinia, createPinia } from "pinia";
import { useCount } from "store/count";

let wrapper: VueWrapper;

describe("count Compoent Testing", () => {
  beforeEach(() => {
    // 피니아 설정
    setActivePinia(createPinia());
    wrapper = shallowMount(Count);
  });

  it("render Test", () => {
    expect(wrapper.text()).toContain(`count`);
  });

  it("useCounter Increment Render", async () => {
    const count = useCount();

    let countValue = 0;

    expect(count.count).toBe(countValue);
    expect(wrapper.text()).toContain(`카운트 : ${countValue}`);
    count.increment();

    countValue = 1;
    expect(count.count).toBe(countValue);
    await nextTick();
    expect(wrapper.text()).toContain(`카운트 : ${countValue}`);
  });
});
