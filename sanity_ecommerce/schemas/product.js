export default{
    name:"product",
    title:"product",
    type:"document",
    fields: [{
        name:"image",
        title:"image",
        type:"array",
        of:[{
            type:"image"
        }],
        options:{hotspot:true,},

    }
, {
    name:"name",
    title:"Name",
    type:"string",
},{
    name:"slug",
    title:"slug",
    type:"slug",
    options:{
        source:"name",
        maxLength:100,
    }
},{
    name:"price",
    title:"Price",
    type:"number",
},{
    name:"details",
    title:"details",
    type:"string",
}
 
]
}