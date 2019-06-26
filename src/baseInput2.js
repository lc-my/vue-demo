
let BaseInput2 = {
    inheritAttrs:false,
    props:['label','value'],
    computed:{
        inputListeners:function() {
            var me = this;
            return Object.assign({}, this.$listeners, {
                focus: function (event) {
                        console.info(event);
                        me.$emit('focus', event.target.value)
                    }
                }
            );
        }
    },
    template: `
        <label>
          <input
            v-bind="$attrs"
            v-bind:value="value"
             v-on="inputListeners"
          >
          <input type="button"  value="test2">
          <input type="button" value="test">
        </label>
      `
};

export { BaseInput2 };