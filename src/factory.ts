
export const addOne =(model) =>  async (req,res) =>{
    
    const newPlayer = await model.create(req.body)
    if(newPlayer){
         res.send(newPlayer)
    }else{
        res.send('Error Please try again')
    }
}
export const findall =(model) => async (req,res) =>{
    const allUsers = await model.findAll()
    res.send(allUsers)
}
export const getById = (model) =>async (req,res) =>{
    const id = parseInt(req.params.id)
    const user = await model.findByPk(id)
    res.send(user)
}
export const findOne = (model) =>async  (req,res) =>{
    const user  = await model.findOne({ where: req.body })
    console.log(user)
    res.send(user)
}