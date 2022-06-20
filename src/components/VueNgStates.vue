<template>
  <div class="col-lg-4">
        <!-- <v-select :items="states" label="Select State"></v-select> -->
        <select name="states" id="states">
          <option  v-for="(items, index) in states" :key="index" value="items.value">{{items.text}}</option>
        </select>
  </div>
</template>

<script>
  export default {
    name: 'VueNgStates',

    data: () => ({

        states: [
            {value: 'ABIA', text:'ABIA'},
            {value: 'ADAMAWA', text:'ADAMAWA'},
            {value: 'AKWA IBOM',text: 'AKWA IBOM'},
            {value: 'ANAMBRA', text: 'ANAMBRA'},
            {value: 'BAUCHI', text: 'BAUCHI'},
            {value: 'BAYELSA', text: 'BAYELSA'},
            {value: 'BENUE', text: 'BENUE'},
            {value: 'BORNO', text: 'BORNO'},
            {value: 'CROSS RIVER', text: 'CROSS RIVER'},
            {value: 'DELTA', text:'DELTA'},
            {value: 'EDO', text:'EDO'},
            {value: 'EBONYI', text: 'EBONYI'},
            {value: 'EKITI', text: 'EKITI'},
            {value: 'ENUGU', text: 'ENUGU'},
            {value: 'GOMBE', text: 'GOMBE'},
            {value: 'IMO', text: 'IMO'},
            {value: 'JIGAWA', text:'JIGAWA'},
            {value: 'KADUNA', text: 'KADUNA'},
            {value: 'KANO', text: 'KANO'},
            {value: 'KATSINA', text:'KATSINA'},
            {value: 'KEBBI', text: 'KEBBI'},
            {value: 'KOGI', text: 'KOGI'},
            {value: 'KWARA',  text: 'KWARA'},
            {value: 'LAGOS', text: 'LAGOS'},
            {value: 'NIGER', text: 'NIGER'},
            {value: 'OGUN', text: 'OGUN'},
            {value: 'ONDO', text:'ONDO'},
            {value: 'OSUN', text: 'OSUN'},
            {value: 'OYO', text: 'OYO'},
            {value: 'NASARAWA', text: 'NASARAWA'},
            {value: 'PLATEAU', text: 'PLATEAU'},
            {value: 'RIVERS', text: 'RIVERS'},
            {value: 'SOKOTO', text: 'SOKOTO'},
            {value: 'TARABA', text: 'TARABA'},
            {value: 'YOBE', text: 'YOBE'},
            {value: 'ZAMFARA', text: 'ZAMFARA'},
            {value: 'ABUJA', text:'ABUJA'},
        ],
       
        // props: {
        //        msg: String
        //  }
     
    }),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
