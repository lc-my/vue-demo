
let getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children
            ? getChildrenTextContent(node.children)
            : node.text
    }).join('')
}

export let RenderDemo = {
    render:function(createElement){
        // 创建 kebab-case 风格的 ID
        let headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '');

        let result = createElement(
            'H'+this.level,
            [
                createElement('a',{
                    attrs:{
                        name:headingId,
                        href:'#'+headingId
                    },
                    on:{
                        click:function(){
                            console.info(arguments);
                        }
                    }
                },this.$slots.default)
            ]
        );
        return result;
    },
    props:{
        level:{
            type:Number,
            requried:true
        }
    }
}