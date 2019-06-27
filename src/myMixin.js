
/*
export let MyMixin = {
    created: function(){
        this.say();
    },
    methods:{
        say:function(){
            console.info('hello');
        }
    }
}*/
export let MyMixin = {
    data:function(){
        return {
            message:'hello',
            foo:'foo'
        }
    },
    created:function(){
        console.info('parent created');
    },
    methods:{
        say:function(){
            console.info('parent say');
        }
    }
}
