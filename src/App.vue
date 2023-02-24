<!-- eslint-disable vue/no-mutating-props -->
<script>
import axios from "axios"
import Navbar from "../src/components/Navbar.vue"
import Login from "../src/components/Login.vue"
import Register from "../src/components/Register.vue"
import Dashboard from "../src/components/Dashboard.vue"
import Food from "../src/components/Food.vue"
import Category from "../src/components/Category.vue"
import FormFood from "./components/FormFood.vue"
import FormCategory from "./components/FormCategory.vue"
import History from "../src/components/History.vue"
import Toastify from "toastify-js"

export default {
  components: {
    Navbar,
    Login,
    Register,
    Dashboard,
    Food,
    Category,
    FormFood,
    FormCategory,
    History,
  },

  data() {
    return {
      // baseUrl: "https://foodea-api-production.up.railway.app",
      baseUrl: "http://localhost:3000",
      page: "loginSection",
      foodList: [],
      categoryList: [],
      historyList: [],
      username: "",
      role: "",
      totalFood: 0,
      totalCategory: 0,
      foodId: undefined,
      foodData: {
        name: "",
        description: "",
        price: "",
        imgUrl: "",
        categoryId: "",
      },
    }
  },

  created() {
    if (localStorage.access_token) {
      this.page = `dashboardSection`
      this.fetchUser()
      this.fetchAll()
      this.googleSignInOnLoad()
    } else {
      this.page = `loginSection`
    }
  },

  methods: {
    notify(erorrName) {
      Toastify({
        text: erorrName,
        close: true,
        duration: 1500,
        newWindow: true,
        gravity: "top",
        position: "center",
        stopOnFocus: false,
        style: {
          background:
            "linear-gradient(90deg, rgba(47,47,184,1) 60%, rgba(193,244,255,1) 100%)",
        },
        onClick: function () {},
      }).showToast()
    },

    async googleSignInOnLoad(response) {
      try {
        const { credential } = response
        const googleToken = await axios({
          method: "POST",
          url: `${this.baseUrl}/google-login`, // Please fill with your backend url!
          headers: { "google-oauth-token": credential },
        })
        localStorage.setItem("access_token", googleToken.data.access_token)

        this.email = googleToken.data.message
        this.fetchAll()
        this.notify(`Success Login With ${this.email}`)
        this.page = "dashboardSection"
      } catch (error) {}
    },

    async postLogin(payload) {
      try {
        const login = await axios({
          method: "post",
          url: `${this.baseUrl}/login`,
          data: payload,
        })

        localStorage.setItem("access_token", login.data.access_token)
        this.fetchAll()
        this.notify(`Successfully logged in`)
        this.page = "dashboardSection"
      } catch (error) {
        let errormsg = undefined
        if (error.request.statusText === "Unauthorized") {
          errormsg = "Invalid Username / Password"
        }
        this.notify(errormsg)
      }
    },

    async postRegister(payload) {
      try {
        const { username, email, password, phoneNumber, address } = payload
        await axios({
          method: "post",
          url: `${this.baseUrl}/register`,
          data: { username, email, password, phoneNumber, address },
        })

        this.notify("Success create user with email : ", payload.email)
        this.page = "loginSection"
      } catch (error) {
        this.notify(error)
      }
    },

    async setfoodId(id) {
      this.foodId = id
      await this.fetchFoodById(id)
      this.navPage(`editFoodSection`)
    },

    async setCategoryId(id) {
      await this.removeCategoryById(id)
    },

    async fetchAll() {
      this.fetchUser()
      this.fetchCategory()
      this.fetchFood()
      this.fetchHistory()
    },

    navPage(page) {
      if (page === `addFoodSection`) {
      }
      this.page = page
    },

    logout() {
      try {
        localStorage.clear()
        this.notify(`Successfully logged out`)
        this.page = "loginSection"
      } catch (error) {
        this.notify(error)
      }
    },

    /* Fetch Data */
    async fetchFood() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/foods`,
          headers: { access_token: localStorage.access_token },
        })
        // console.log(data)
        this.foodList = data.foodLists
        this.totalFood = data.foodLists.length
        // console.log("Fetching food data :", this.foodList)
      } catch (error) {
        this.notify(error)
      }
    },

    async fetchFoodById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/foods/${id}`,
          headers: { access_token: localStorage.access_token },
        })
        this.foodData = data.foods
        // console.log("FETCHING FOOD WITH ID :", data.foods)
      } catch (error) {
        this.notify(error)
      }
    },

    async fetchCategory() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/categories`,
          headers: { access_token: localStorage.access_token },
        })
        this.categoryList = data
        this.totalCategory = data.length
        // console.log("Fetching category data :", this.categoryList)
      } catch (error) {
        // console.log(error)
        this.notify(error)
      }
    },

    async fetchHistory() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/histories`,
          headers: { access_token: localStorage.access_token },
        })

        this.historyList = data.history
        // console.log("Fetching history data :", data)
      } catch (error) {
        // console.log(error)
        this.notify(error)
      }
    },

    async fetchUser() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/user`,
          headers: { access_token: localStorage.access_token },
        })
        this.username = data.findUser.username
        this.role = data.findUser.role
        // console.log("Fetching user data :", data)
      } catch (error) {
        this.notify(error)
      }
    },

    /* Create Data */
    async createFood(payload) {
      try {
        const { name, description, price, imgUrl, categoryId } = payload
        const newFood = await axios({
          method: "POST",
          url: `${this.baseUrl}/foods`,
          headers: { access_token: localStorage.access_token },
          data: { name, description, price, imgUrl, categoryId },
        })
        this.notify(`Successfully created food : ${name}`)
        this.fetchAll()
        this.page = `foodSection`
      } catch (error) {
        // console.log(error)
        this.notify(error.response.data)
      }
    },

    async createCategory(payload) {
      try {
        const { name } = payload
        const newCategory = await axios({
          method: "POST",
          url: `${this.baseUrl}/categories`,
          headers: { access_token: localStorage.access_token },
          data: { name },
        })
        this.notify(`Successfully created category : ${newCategory.data.message}`)
        // console.log("Creating new Category : ", newCategory)
        this.fetchAll()
        this.page = `categorySection`
      } catch (error) {
        if (error.request.responseText === `["Category name is required"]`) {
          this.notify(`Category name is required`)
        }
      }
    },

    /* Update Data */
    async editFood(data) {
      try {
        const { name, description, price, imgUrl, categoryId } = data
        await axios({
          method: "PUT",
          url: `${this.baseUrl}/foods/${this.foodId}`,
          headers: { access_token: localStorage.access_token },
          data: { name, description, price, imgUrl, categoryId },
        })
        this.notify(`Successfully edit food`)
        this.fetchAll()
        this.page = `foodSection`
      } catch (error) {
        this.notify(error.response.data.message)
      }
    },

    async editFoodStatus(data, id) {
      try {
        const status = data
        const updateStatus = await axios({
          method: "PATCH",
          url: `${this.baseUrl}/foods/${id}`,
          headers: { access_token: localStorage.access_token },
          data: { status },
        })
        this.notify(updateStatus.data.message)
        this.fetchAll()
      } catch (error) {
        this.notify(error)
      }
    },

    async removeCategoryById(id) {
      try {
        await axios({
          method: "DELETE",
          url: `${this.baseUrl}/categories/${id}`,
          headers: { access_token: localStorage.access_token },
        })
        this.notify("Success delete Category")
        this.fetchCategory()
      } catch (error) {
        this.notify(error)
      }
    },
  },
}
</script>

<template>
  <!-- Login -->
  <Login
    v-if="page === `loginSection`"
    @triggerLogin="postLogin"
    @navPage="navPage"
    @googleSignIn="googleSignInOnLoad" />

  <!-- Register -->
  <Register
    v-else-if="page === `registerSection`"
    @navPage="navPage"
    @triggerRegister="postRegister" />
  <!-- Navbar -->
  <Navbar
    v-else
    @triggerLogout="logout"
    @navPage="navPage"
    :username="username" />

  <!-- Dashboard -->
  <!-- <Dashboard v-if="page != `logout`"/> -->
  <Dashboard
    v-if="page === `dashboardSection`"
    :totalFood="totalFood"
    :totalCategory="totalCategory" />

  <!-- Food -->
  <Food
    :page="page"
    :foodList="foodList"
    :role="role"
    :foodId="foodId"
    v-if="page === `foodSection`"
    @setfoodId="setfoodId"
    @navPage="navPage"
    @editFoodStatus="editFoodStatus" />

  <FormFood
    :page="page"
    :foodData="foodData"
    :categoryList="categoryList"
    @triggerAddFood="createFood"
    @triggerEditFood="editFood"
    @editFood="editFood"
    v-if="page === `addFoodSection` || page === `editFoodSection`" />

  <!-- Category -->
  <Category
    :page="page"
    :categoryList="categoryList"
    v-if="page === `categorySection`"
    @setCategoryId="setCategoryId"
    @navPage="navPage" />
  <FormCategory
    v-if="page === `addCategorySection`"
    @triggerAddCategory="createCategory" />
  <!-- <Category v-if="page === `categorySection`" /> -->

  <History
    v-if="page === `historySection`"
    :page="page"
    :historyList="historyList" />
</template>
