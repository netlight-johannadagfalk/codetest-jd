// api/new-item
//only POSTS to /api/new-item

//use in fetch URL : '/api/new-item', method post and body: JSON.stringify(data)

import { MongoClient } from 'mongodb';

async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://jdag:Net-CB1fh7@cluster0.kxnec.mongodb.net/firstDB?retryWrites=true&w=majority'
    );
    const db = client.db();

    const itemsCollection = db.collection('items');
    const result = await itemsCollection.insertOne({ data });
    //result is created ID
    console.log(result);

    res.status(201).json({ message: 'Item created' });
  }
}
export default handler;
