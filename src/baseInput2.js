let BaseInput2 = {
        data: function () {
            return {
                value2: this.value,
                direction:'left',
                px:{
                    top:20,
                    left:20
                }
            }
        },
        inheritAttrs: false,
        props: ['label', 'value'],
        /*directives :{
            focus:{
              innerted:function(el){
                  el.focus();
              }
          }
        },*/
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    //console.info(arguments);
                    el.focus()
                }
            },
            pin:{
                bind:function(el,bind){
                    el.style.position = 'fixed';
                    /*let direction = bind.arg  === 'left' ? 'left' : 'top';
                    el.style[direction] = bind.value+'px';*/

                    el.style.top = bind.value.top+'px';
                    el.style.left = bind.value.left+'px';

                }
            }
        },
        computed: {
            inputListeners: function () {
                var me = this;
                return Object.assign({}, this.$listeners, {
                        focus: function (event) {
                            //console.info(event);
                            me.$emit('focus', event.target.value)
                        }
                    }
                )
                    ;
            }
        },
        watch: {
            value2: function () {
                //console.info(arguments);
            }
        }
        ,
        template: `
        <label v-pin:[direction]="px">
          <input
            type="text"
            v-bind="$attrs"
            v-model="value2"
             v-on="inputListeners"
             v-focus
          >
          <input type="type"  v-model="px.top">
          <input type="button" value="test">
          {{px.top}}
        </label>
      `
    }
;

export {BaseInput2};