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
      <input type="text" name="io" v-model="io" :class="{'good':io == list[index].io}" />
      </div>
      <div>
      {{list[index].io}}
      </div>
      <div>
      tu
      </div>
      <div>
      <input type="text" name="tu" v-model="tu" :class="{'good':tu == list[index].tu}"/> 
            </div>
      <div>
        {{list[index].tu}}
              </div>
      <div>
      lui/lei
            </div>
      <div>
      <input type="text" name="lui/lei" v-model="lei" :class="{'good':lei == list[index].lei}"/>
            </div>
      <div>
        {{list[index].lei}}
              </div>
      <div>
      noi
            </div>
      <div>
      <input type="text" name="noi" v-model="noi" :class="{'good':noi == list[index].noi}" />
            </div>
      <div>
        {{list[index].noi}}
              </div>
      <div>
      voi
            </div>
      <div>
      <input type="text" name="voi" v-model="voi" :class="{'good':voi == list[index].voi}"/>
            </div>
      <div>
        {{list[index].voi}}
              </div>
      <div>
      loro
            </div>
      <div>
      <input type="text" name="loro" v-model="loro" :class="{'good':loro == list[index].loro}"/>
            </div>
      <div>
        {{list[index].loro}}
              </div>
              <button  @click="next()">Next</button>
    </div>
    
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
    loro: ""
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
        })},
      test() {
        this.list = this.map2()
      },
      next(){
        this.index++;
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

</style>