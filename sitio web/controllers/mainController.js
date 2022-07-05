const mainController = {

    mostrarHome: (req,res) =>{
        return res.render('home') 
        /*,{
            articles:[{
                title: 'articulo 1',
                img: "public/images/H5204c57802c84d74b06b98bcf45bfb5ag.png",
                precio: '$12000',
                descripcion: 'Alzada con pie en forma de flor'
            },
            {
                title: 'articulo 1',
                img: "public/images/H5204c57802c84d74b06b98bcf45bfb5ag.png",
                precio: '$12000',
                descripcion: 'Alzada con pie en forma de flor'
            }
        ]
        }*/
    },
    

    mostrarLogin: (req,res) =>{
        return res.render('login')
    },

    mostrarRegister: (req,res) =>{
        return res.render('register')
    },

    mostrarProducto: (req,res) =>{
        return res.render('producto')
    },

    mostrarCart: (req,res) =>{
        return res.render('cart')
    }

    
}

module.exports=mainController;