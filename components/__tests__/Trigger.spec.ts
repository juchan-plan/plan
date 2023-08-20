import { VueWrapper, shallowMount } from "@vue/test-utils";

import Trigger from "../Trigger.vue";

let wrapper: VueWrapper<InstanceType<typeof Trigger>>;
describe("Fetch Compoent", () => {
  beforeEach(() => {
    wrapper = shallowMount(Trigger, {
      props: {
        propsBody: "tst",
      },
    });
  });

  it("props reder", () => {
    expect(wrapper.text()).toContain("tst");
  });

  it("function called", async () => {
    const spy = vi.spyOn(wrapper.vm, "callTrigger");
    expect(spy).not.toBeCalled();

    expect(spy.getMockName()).toBe("callTrigger");

    wrapper.vm.callTrigger();

    await nextTick();

    expect(wrapper.text()).toContain("trigger");

    // expect(spy).toBeCalledTimes(0);
  });

  it("btn Click Trigger change Text", async () => {
    const btnSelector = "[data-testid='cahnge-btn']";

    const spy = vi.spyOn(wrapper.vm, "callTrigger");
    expect(spy).not.toBeCalled();

    const btn = wrapper.find(btnSelector);
    expect(btn.text()).toBe("체인지 클릭");

    await btn.trigger("click");

    expect(wrapper.text()).toContain("체인지");
    expect(spy).toBeCalledTimes(1);
  });
});
