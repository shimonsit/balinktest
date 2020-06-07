import progressBar from '../progressBar/index.vue';
import lightbox from '../lightbox/index.vue';
import { store } from '../../src/store'
import axios from 'axios'
export default {
  data:function(){

    /******************************************* 
      setup all steps controls with validations 
    ********************************************/
    return {
      currentStep : this.getCurrentState().currentStep,
      showMenu: true,
      stepData: [
        {
        form : {
          firstName : {tag:"input", name:"firstname", label: null, value: null, type : "text", placeholder: "First Name", isRequired : true, validationRegex : /^[A-Za-z]{2}/,inputErr: []} ,
          lastName : {tag:"input", name:"lastname", label: null, value:null, type : "text", placeholder: "Last Name", isRequired : true, validationRegex : /^[A-Za-z]{2}/, inputErr: [] } ,
          title : {tag:"input", name:"title", label: null, value:null, type : "text", placeholder: "Title", isRequired : false, validationRegex : null,inputErr:[] }
        }
      },
      {
        form : {
          country : {tag:"select", name:"country",label: null, value:0, type : "text", placeholder: "country", isRequired : true, validationRegex : null,inputErr: [] } ,
          city : {tag:"input", name:"city",label: null, value:null, type : "text", placeholder: "city", isRequired : false, validationRegex : null,inputErr: [] } ,
          street : {tag:"input", name:"street",label: null, value:null, type : "text", placeholder: "street", isRequired : false, validationRegex : null,inputErr: [] }
        }
      },
      {
        form : {
          email : {tag:"input",name:"email",label: null, value:null, type : "email", placeholder: "Email", isRequired : true, validationRegex : /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/, inputErr: [] } ,
          phone : {tag:"input",name:"tel",label: null, value:null, type : "tel", placeholder: "Phone number", isRequired : true, validationRegex :/^[0-9]{10}/, inputErr: []} ,
          optin : {tag:"input",name:"optin",label:"recevez par mail nos bons plans Balink",value:null, type : "checkbox", placeholder: "Title", isRequired : false, validationRegex : null, inputErr: [] }
        }
      }
    ],
    TextHeader:"<h4>Message envoyé</h4>",
    TextBody: "<p>Votre Message a été bien envoyé</p>",
    showModal:false

  }
},
  components: {
    'progressBar': progressBar,
    'lightbox':lightbox
  },
  created :function() {
    this.triggerGetCountries();
  },
  store : store, 
  methods: {
    
    triggerGetCountries : function(){
      store.commit('getCountries');
    },
    /**************
      post new user 
    ***************/
    onSubmit : function(){
      const url = 'http://localhost:3000/user';
      if(this.getCurrentState().currentStep !== this.stepData.length){
        this.updateFormValidations(this.getCurrentState().currentStep);
        if(this.stepData[this.getCurrentState().currentStep].validForm){
          store.commit("updateUserDetails", this.stepData[this.getCurrentState().currentStep].form);
          axios.post(url, this.getCurrentState().userDetails).then((response)=>{
            console.log(response)
          })
          //form valid => open modal
          this.showModal = true;
        }
      }
     
    },
    getCurrentState : function(){
       return store.state;
    },
    /************************************************************** 
      increase & update user details if the current form is valid 
    ***************************************************************/
    nextStep : function(){
      if(this.getCurrentState().currentStep !== this.stepData.length){
        this.updateFormValidations(this.getCurrentState().currentStep);
        if(this.stepData[this.getCurrentState().currentStep].validForm){
          store.commit("updateUserDetails", this.stepData[this.getCurrentState().currentStep].form);
          store.commit("incrementStep");
        }
      }
      
    },
    /************************************************** 
      Decrease current step if step is gretter then 0 
    ***************************************************/
    prevStep : function(){
      if(this.getCurrentState().currentStep > 0){
        store.commit("decreasedStep");
      }
    },
    toggleShow: function() {
			this.showMenu = !this.showMenu;
    },
    itemClicked : function(item){
     this.toggleShow();
     this.stepData[this.getCurrentState().currentStep].form['country'].value = item;
    },
    /************************************************************* 
      Checking current form validation and update controls errors 
    **************************************************************/
    updateFormValidations : function(currentStep){
      this.stepData[currentStep].validForm = true;
       for(let formControlKey in this.stepData[currentStep].form){
        this.stepData[currentStep].form[formControlKey].inputErr = [];
        const control = this.stepData[currentStep].form[formControlKey];
        if(control.isRequired &&  (control.value === null || control.value.length === 0)){
          this.stepData[currentStep].validForm = false;
          control.inputErr.push(`Field is required`);
        }
        else if(control.isRequired && control.name=="country" && control.value==0){
          this.stepData[currentStep].validForm = false;
          control.inputErr.push(`Field is required`);
        }
        else if(control.validationRegex && !control.validationRegex.test(control.value)){
          this.stepData[currentStep].validForm = false;
          control.inputErr.push(`${control.name} is not valid`);
        }
      }
    }
  }
  
  
}
