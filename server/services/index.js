
exports.generateCrudMethod = Model => {
    return{
        getAll:()=>Model.find(),
        getByID: id => Model.findById(id),
        create:record => Model.create(record),
        update:(id,record)=>Model.findByIdAndUpdate(id,record,{new:true}),
        delete:id=>Model.findByIdAndDelete(id)
    }
}

