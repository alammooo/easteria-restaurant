<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    }
  },
  emits: ["navPage", "triggerLogin", "googleSignIn"],
  methods: {
    loginHandler() {
      this.$emit("triggerLogin", {
        email: this.loginEmail,
        password: this.loginPassword,
      })
    },
    navPage(pageName) {
      this.$emit("navPage", pageName)
    },
    googleSignIn(data) {
      this.$emit("googleSignIn", data)
    },
  },
}
</script>

<template>
  <section class="h-screen" id="loginSection">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-4xl font-serif text-slate-700"
        >Easteria Eatery
      </a>
      <div class="w-full bg-white rounded-sm md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl">
            Login to Dashboard
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            method="post"
            @submit.prevent="loginHandler">
            <div>
              <label
                for="email"
                class="block mb-2 text-base font-medium text-slate-700"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="loginEmail"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5"
                placeholder="name@company.com" />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-base font-medium text-slate-700"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                v-model="loginPassword"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5" />
            </div>
            <button
              type="submit"
              class="w-full text-amber-200 bg-sky-700 hover:bg-sky-800 font-medium rounded-sm text-base px-5 py-2.5 text-center active:bg-sky-600 active:scale-95 duration-75">
              Sign in
            </button>
            <div class="w-full flex justify-center">
              <GoogleLogin :callback="googleSignIn" class="" />
            </div>

            <p class="text-base font-light text-gray-500">
              Don’t have an account yet?
              <a
                id="toRegister"
                class="font-medium text-sky-900 hover:underline cursor-pointer"
                @click="navPage(`registerSection`)">
                Register Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
