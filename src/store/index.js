import { createStore } from "redux";
const userdata=[
  {
    id:"1",
    username:"talhawajdan",
    type:"admin",

  },
  {
    id:"2",
    username:"talhawajdan",
    type:"user",
  }
]
  

const counterReducer = (state = userdata, action) => {
  
console.log(state)
  return state;
};

const store = createStore(counterReducer);

export default store;
