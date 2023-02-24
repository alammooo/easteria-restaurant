<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    }
  },
  emits: ["navPage", "triggerRegister"],
  methods: {
    navPage(pageName) {
      this.$emit("navPage", pageName)
    },
    registerHandler() {
      this.$emit("triggerRegister", {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      })
    },
  },
}
</script>
<template>
  <section class="h-screen" id="registerSection">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-4xl font-serif text-slate-700">
        Easteria Eatery
      </a>
      <div class="w-full bg-white rounded-sm md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl">
            Register new Account
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            @submit.prevent="registerHandler">
            <div>
              <label
                for="registerUsername"
                class="block mb-2 text-base font-medium text-slate-700">
                Username
              </label>
              <input
                type="text"
                id="registerUsername"
                v-model="username"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5"
                placeholder="name@company.com"
                required="" />
            </div>
            <div>
              <label
                for="registerEmail"
                class="block mb-2 text-base font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                v-model="email"
                id="registerEmail"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5"
                placeholder="name@company.com"
                required="" />
            </div>
            <div>
              <label
                for="registerPassword"
                class="block mb-2 text-base font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                v-model="password"
                id="registerPassword"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5"
                required="" />
            </div>
            <div>
              <label
                for="registerPhoneNumber"
                class="block mb-2 text-base font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                v-model="phoneNumber"
                id="registerPhoneNumber"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5"
                placeholder="+49 12345678" />
            </div>
            <div>
              <label
                for="registerAddress"
                class="block mb-2 text-base font-medium text-slate-700">
                Address
              </label>
              <input
                type="text"
                v-model="address"
                id="registerAddress"
                class="bg-gray-50 border border-gray-300 text-slate-700 sm:text-base rounded-sm focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5"
                placeholder="Semarang, JT" />
            </div>
            <button
              type="submit"
              class="w-full text-sky-800 bg-amber-200 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-sky-900 font-medium rounded-sm text-base px-5 py-2.5 text-center">
              Sign Up
            </button>
            <p class="text-base font-light text-gray-500">
              Already have account?
              <a
                id="toLogin"
                class="font-medium text-sky-900 hover:underline cursor-pointer"
                @click="navPage(`loginSection`)"
                >Login</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
