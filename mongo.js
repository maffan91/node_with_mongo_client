const MongoClient = require('mongodb').MongoClient;

const url = 'YOUR_MONGO_DB_URL_HERE';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);

    }catch(error) {
        console.log(error);

        client.close();
        return res.status(422).json({message: 'Could not create the record'});
    }
    client.close();
    res.json(newProduct);
}

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);
    let products;
    try{
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
        // const result = db.collection('products')
    }catch(error){
        console.log(error);
        res.status(422).json({message: 'Could not fetch products'});
    }
    client.close();

    res.json({products});



}

exports.createProduct = createProduct
exports.getProducts = getProducts
