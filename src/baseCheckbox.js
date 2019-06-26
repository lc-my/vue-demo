
export let BaseCheckbox = {
  model:{
      prop:'checked',
      event:'change'
  },
    props:{
      checked:[Boolean,String]
    },
    template:`
        <label>{{checked}}<input type="checkbox"  v-bind:checked="checked" v-on:change="$emit('change',$event.target.value)"></label>
    `
};