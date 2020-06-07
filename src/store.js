import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentStep: 0, // current form step
    totalSteps : 3, // total form step
    userDetails : {
      firstName : null,
      lastName : null, 
      title : null,
      email : null,
      phone : null,
      street : null,
      country :null,
      city: null
    },
    countries : null
  },
  mutations: {
    /************************** 
      Icrease form step by one 
    ***************************/
    incrementStep (state) {
      state.currentStep++
    },
    /************************** 
      Decreaese form step by one 
    ***************************/
    decreasedStep (state) {
      state.currentStep--;
    },
    /************************************ 
      Update final usesr details values 
    *************************************/
    updateUserDetails(state, formDetails){
      for(let formDetailsKey in formDetails){
        state.userDetails[formDetailsKey] = formDetails[formDetailsKey].value;
      }
    },
    getCountries(state){
      axios.get("http://localhost:3000/countries").then((response)=>{
         state.countries = response.data;
      })
    }
  }
})