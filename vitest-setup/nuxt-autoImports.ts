// nuxt #imports 모듈을 인식 못하기 떄문에
// 사용하는 nuxt 함수에서 사용하는
// 함수 mock 만들어서 테스트 해야할거같다

vi.stubGlobal("useState", (key: any, init: any) => ref(init()));
vi.stubGlobal("useCookie", (key: any, init: any) => ref(init()));

// useRuntimeConfig 등등
