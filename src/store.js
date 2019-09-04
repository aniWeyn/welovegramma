import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/verbi.json'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    verbi: data.lecture.verbi,
    coniugations: data.lecture.coniugation,
    explanations: data.lecture.explanations,
    listOfVerbs: [],
    verbo: {
      infinitive: null,
      io: null,
      tu: null,
      lei: null,
      noi: null,
      voi: null,
      loro: null
    }
  },
  getters: {
    listOfVerbs(state){
      /*this.verbi.map((element) => {
        if(element.coniugation == "1.1")
        {
          this.verbo.infinitive = element.infinitive,
          this.verbo.io = element.base + "a",
          this.verbo.tu = element.base + "i",
          this.verbo.lei = element.base + "o",
          this.verbo.noi = element.base + "iamo",
          this.verbo.voi = element.base + "ate",
          this.verbo.loro = element.base + "ano"
          }
        if(element.coniugation == "1.2")
        {
          this.verbo.infinitive = element.infinitive,
          this.verbo.io = element.base + "a",
          this.verbo.tu = element.base + "hi",
          this.verbo.lei = element.base + "o",
          this.verbo.noi = element.base + "hiamo",
          this.verbo.voi = element.base + "ate",
          this.verbo.loro = element.base + "ano"
          }
          console.log(this.verbo.infinitive)
          this.list.push(this.verbo)
      })*/
    }
  },
  mutations: {

      
  },
  actions: {

  },
});
