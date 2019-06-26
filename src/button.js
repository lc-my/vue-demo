
const button = {
    data: function () {
        return {
            count: 0
        }
    },
    props:{
        text:String,
        value:{
            type:Number,
            default:20
        },
        type:{
            type:String,
            default: 'test'
            /*validator:function(value){
                return ['info','log','erroe'].indexOf(value) !== -1;
            }*/
        }

    },
    template: '<button v-on:click="count++">{{text}}:{{ count }},{{value}}</button>'
};

export { button };