import { store } from "../../src/store"

export default {
    data:function(){
      return {
        
      }
    },
    store : store,
    methods : {
      getCurrentState : function(){
        return store.state;
      }
    }
    
}