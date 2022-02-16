import axios from "axios"

class Home {
    getCards() {
        return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
    }
    getGraphs() {
        return axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10&api_key=cd55e81e0e9d88e120a62e7ee8d20f14606b0f86966617f6aef166a1bf413fa3')
    }
}


export default new Home()