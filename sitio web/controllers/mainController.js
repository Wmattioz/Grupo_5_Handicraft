const mainController = {

    mostrarHome: (req,res) =>{
        return res.render('home')
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