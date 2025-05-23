export const data = [
   
    {
      
        name:'Random 2',
        description:'sara saras..',
        price:2500,
        stock:5,
        category:'ofertas',
        img:'https://picsum.photos/200'
    },
    {
      
        name:'Random 3',
        description:'sara saras..',
        price:5500,
        stock:12,
        category:'mas vendidos',
        img:'https://picsum.photos/201'
    },
    {
     
        name:'Random 4',
        description:'sara saras..',
        price:8500,
        stock:15,
        category:'ofertas',
        img:'https://picsum.photos/205'
    },
    
]


//crear y exportar la promesa

export const getProducts= ()=> {
    let error= false
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(!error){
                resolve(data)
            }else{
                reject('Hubo un error, intente mas tarde')
            }
        },3000)
    })
}

//crear una que devuelva un item

export const getItem =(id)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            //si no buscan que sea dinamico
            // resolve(data[0])

            //dinamico
            let product = data.find((item)=> item.id === id)
            resolve(product)
        },2000)
    })
}