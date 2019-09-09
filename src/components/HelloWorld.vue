<template>
  <div>
    <div class="quiz">
      {{list[index].infinitive}}
      </div>
    <div class="wrapper">
      <div>
      io
      </div>
      <div>
      <input type="text" name="io" v-model="io" :class="{'good':io == list[index].io}" class="lowercase"/>
      </div>
      <div>
      <span :class="{'hidden': hidden}">{{list[index].io}}</span>
      </div>
      <div>
      tu
      </div>
      <div>
      <input type="text" name="tu" v-model="tu" :class="{'good':tu == list[index].tu}" class="lowercase"/> 
            </div>
      <div>
       <span :class="{'hidden': hidden}"> {{list[index].tu}}</span>
              </div>
      <div>
      lui/lei
            </div>
      <div>
      <input type="text" name="lui/lei" v-model="lei" :class="{'good':lei == list[index].lei}" class="lowercase"/>
            </div>
      <div>
       <span :class="{'hidden': hidden}"> {{list[index].lei}}</span>
              </div>
      <div>
      noi
            </div>
      <div>
      <input type="text" name="noi" v-model="noi" :class="{'good':noi == list[index].noi}" class="lowercase"/>
            </div>
      <div>
       <span :class="{'hidden': hidden}"> {{list[index].noi}}</span>
              </div>
      <div>
      voi
            </div>
      <div>
      <input type="text" name="voi" v-model="voi" :class="{'good':voi == list[index].voi}" class="lowercase"/>
            </div>
      <div>
        <span :class="{'hidden': hidden}">{{list[index].voi}}</span>
              </div>
      <div>
      loro
            </div>
      <div>
      <input type="text" name="loro" v-model="loro" :class="{'good':loro == list[index].loro}" class="lowercase"/>
            </div>
      <div>
        <span :class="{'hidden': hidden}">{{list[index].loro}}</span>
              </div>

    </div>
    <button @click="hidden = !hidden">Answers</button>
    <button @click="next()">Next</button>
    <button @click="repeat()">Repeat</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "HelloWorld",
    data() {
    return {
    list: [],
    index: 0,
    verbo: {
      infinitive: null,
      io: null,
      tu: null,
      lei: null,
      noi: null,
      voi: null,
      loro: null
    },
    io: "",
    tu: "",
    lei: "",
    noi: "",
    voi: "",
    loro: "",
    hidden: true,
  }},
  validations: {
    io: {}
  },
  computed: mapState({
    verbi: state => state.verbi,
  }),
  created() {
    this.test()
  },
  methods: {
        map2() {
        return this.verbi
            .map(v => {
              if(v.coniugation === "1.1")
              {
                return {
                  infinitive: v.infinitive,
                  io: v.base + "o",
                  tu: v.base + "i",
                  lei: v.base + "a",
                  noi: v.base + "iamo",
                  voi: v.base + "ate",
                  loro: v.base + "ano"
                }
              }
              if(v.coniugation === "1.2")
              {
                return {
                  infinitive: v.infinitive,
                  io: v.base + "o",
                  tu: v.base + "hi",
                  lei: v.base + "a",
                  noi: v.base + "hiamo",
                  voi: v.base + "ate",
                  loro: v.base + "ano"
                }
              }
              if(v.coniugation === "1.3")
              {
                return {
                  infinitive: v.infinitive,
                  io: v.base + "io",
                  tu: v.base + "i",
                  lei: v.base + "ia",
                  noi: v.base + "iamo",
                  voi: v.base + "iate",
                  loro: v.base + "iano"
                }
              }
              if(v.coniugation === "1.4")
              {
                return {
                  infinitive: v.infinitive,
                  io: v.io,
                  tu: v.tu,
                  lei: v.lei,
                  noi: v.noi,
                  voi: v.voi,
                  loro: v.loro
                }
              }
              if(v.coniugation === "2.1")
              {
                return {
                  infinitive: v.infinitive,
                  io: v.base + "o",
                  tu: v.base + "i",
                  lei: v.base + "e",
                  noi: v.base + "iamo",
                  voi: v.base + "ete",
                  loro: v.base + "ono"
                }
              }
              if(v.coniugation === "3.1")
              {
                return {
                  infinitive: v.infinitive,
                  io: v.base + "o",
                  tu: v.base + "i",
                  lei: v.base + "e",
                  noi: v.base + "iamo",
                  voi: v.base + "ite",
                  loro: v.base + "ono"
                }
              }
        })},
      test() {
        this.list = this._.shuffle(this.map2())
      },
      next(){
        this.index++;
        this.io = "",
        this.tu = "",
        this.lei = "",
        this.noi = "",
        this.voi = "",
        this.loro = "",
        this.hidden = true
      },
      show(){
        this.hidden = false
      },
      repeat(){
        this.list.push(this.list[this.index])
      }
  }
};
</script>

<style scoped>
.good{
  background-color: rgba(0, 128, 0, 0.116);
}

.wrapper{
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #fff;
  color: #444;
  padding: 10px
}

.quiz{
 padding: 10px
}

div{
  padding-bottom: 10px
}

.hidden{
  visibility:hidden;
}

.lowercase{
  text-transform: lowercase;  
}
</style>