export default{
    name:'footer',
    title:'Institute Footer',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Institute Name',
            type:'string',
            validation: Rule => Rule.required(),

        },
        {
            name:'email',
            title:'Email',
            type:'string',
            validation: Rule => Rule.required(),

        },
        {
            name:'number',
            title:'Number',
            type:'string',
            validation: Rule => Rule.required(),

        },
    ]
  }