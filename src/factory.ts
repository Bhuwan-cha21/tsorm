
export const addOne =(model) =>  async (req,res) =>{
    
    const newItem = await model.create(req.body)
    if(newItem){
         res.send(newItem)
    }else{
        res.send('Error Please try again')
    }
}
export const findall =(model) => async (req,res) =>{
    const Items = await model.findAll()
    res.send(Items)
}
export const getById = (model) =>async (req,res) =>{
    const id = parseInt(req.params.id)
    const item = await model.findByPk(id)
    res.send(item)
}
export const findOne = (model) =>async  (req,res) =>{
    const item  = await model.findOne({ where: req.body })
    console.log(item)
    res.send(item)
}
export const deleteOne = (model) => async (req,res) =>{
    const id = parseInt(req.params.id)
     await model.destroy({where :{id :id }})
    res.send('deleed')
}