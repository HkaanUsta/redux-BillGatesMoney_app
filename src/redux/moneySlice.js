import {createSlice} from '@reduxjs/toolkit'

const moneySlice = createSlice({
  name: 'spend',
  initialState: {
    items: [
      {
        id:"asddfsaadfs",
        name:"Big Mac",
        price:2,
        img:"https://webstockreview.net/images/hamburger-clipart-pdf-1.png"
      },
      {
        id:"asddadsffsas",
        name:"Jet Ski",
        price:12000,
        img:"https://neal.fun/spend/images/jet-ski.jpg"
      },
      {
        id:"asddfsasdfas",
        name:"Ferrari",
        price:250000,
        img:"https://neal.fun/spend/images/ferrari.jpg"
      },
      {
        id:"kmdfdfsgdsggjsd",
        name:"Boeing 747",
        price:148000000,
        img:"https://neal.fun/spend/images/boeing-747.jpg"
      },
      {
        id:"kmdfgjsasddfgsd",
        name:"Skyscraper",
        price:850000000,
        img:"https://neal.fun/spend/images/skyscraper.jpg"
      },
      {
        id:"kmdfgjsd",
        name:"Cruise Ship",
        price:930000000,
        img:"https://neal.fun/spend/images/cruise-ship.jpg"
      },
      {
        id:"lsadjflkajf",
        name:"City",
        price:2120000000,
        img:"data:image/jpeg;base64,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"
      },

    ],
    totalMoney:100_000_000_000,
    buys:{
    }
  },
  reducers: {
    buyItem: (state, action) => {
      const {price,id,name} = action.payload
      state.totalMoney-=price
      if (Object.keys(state.buys).indexOf(id) === -1) {
        state.buys[id]={
          name,
          price,
          time:1
        }
      }else{
        state.buys[id]={
          ...state.buys[id],
          time:state.buys[id].time+1
        }
      }
    },
    sellItem: (state, action) => {
      const {price,id} = action.payload
      state.totalMoney+=price
      if (Object.keys(state.buys).indexOf(id) !== -1) {
        if(state.buys[id].time===1){
          state.buys[id].time=0
        }else{
          state.buys[id].time-=1
        }
      }
    },
  }
});

export default moneySlice.reducer;
export const {buyItem, sellItem} = moneySlice.actions;