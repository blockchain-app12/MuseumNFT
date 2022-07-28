var metanftdata = require('../Models/metadata');

exports.test = (req,res)=>{
    console.log("Backend connected success !");
    res.json({statuscode:200,message:"Backend routing success !"});
}

exports.metanft = (req, res) => {    
    metanftdata.find().then(nfts=> {
    var data = new metanftdata({
        id:nfts.length + 1,
        Name:req.body.name,
        Description:req.body.description,
        Image:req.body.cdn
    });

    data.save().then(data=>{       
        res.json({statuscode:200, status:"true",message:"data success"})
        return
    }).catch(err=>{
        res.json({statuscode:404, status:"false",message:"data storing err !:", err})
    })
})
}

exports.nft = (req, res) => {
    if(req.query.name == undefined && req.query.id == undefined) {
        metanftdata.find({})
        .then(data => {
            if(data.length > 0) {
                res.json({statuscode:res.statuscode,data:data})
            } else {
                res.json({statuscode:res.statuscode,data:[],message:"No records Found !"})
            }
            console.log(data);
        }).catch(err => {        
            console.log(err);
            res.send(err);
        });
    } else if(req.query.name != undefined) {
        console.log(req.query.name);
        metanftdata.find({"name":req.query.name})
        .then(data => {
            if(data.length > 0) {
                res.json({statuscode:res.statuscode,data:data})
            } else {
                res.json({statuscode:res.statuscode,data:[],message:"No records Found !"})
            }
            console.log(data);
        }).catch(err => {        
            console.log(err);
            res.send(err);
        });
    } else if(req.query.id != undefined) {
        metanftdata.find({"id":req.query.id})
        .then(data => {
            if(data.length > 0) {
                res.json({statuscode:res.statuscode,data:data})
            } else {
                res.json({statuscode:res.statuscode,data:[],message:"No records Found !"})
            }
            console.log(data);
        }).catch(err => {        
            console.log(err);
            res.send(err);
        });
    }
}

exports.nftdata = (req, res) => {
    if(req.params.id == undefined ) {
        metanftdata.find({})
        .then(data => {
            if(data.length > 0) {
                let obj = {
                    name:data[0]["Name"],
                    description:data[0]["Description"],
                    image:data[0]["Image"]
                }
                res.send(obj)
            } else {
                res.json({statuscode:res.statuscode,data:[],message:"No records Found !"})
            }
            console.log(data);
        }).catch(err => {        
            console.log(err);
            res.send(err);
        });
    } else {
        metanftdata.find({"id":req.params.id})
        .then(data => {
            if(data.length > 0) {
                let obj = {
                    name:data[0]["Name"],
                    description:data[0]["Description"],
                    image:data[0]["Image"]
                }
                res.send(obj)
            } else {
                res.json({statuscode:res.statuscode,data:[],message:"No records Found !"})
            }
            console.log(data);
        }).catch(err => {        
            console.log(err);
            res.send(err);
        });
    }
}


