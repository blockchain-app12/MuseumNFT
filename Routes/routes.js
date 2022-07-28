module.exports=(app)=>{

    var route_controllers = require('../Controllers/controller');

    app.get('/api',route_controllers.test);

    app.post('/api/metanftform',route_controllers.metanft);

    app.get('/api/nftmetadata',route_controllers.nft);

    app.get('/api/nftmetadataquery/id/:id',route_controllers.nftdata);
}