export default {
    data:function(){
      return {
          showModal: false
        }
  },
  props:{
    TextHeader: String,
    TextBody: String
  },
  mounted: function (){
  },
   methods:{
    closeLightBox: function(event){
      this.$emit('close');
    }
  }
}

