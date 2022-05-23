import express from "express"
import { ObjectId } from "mongodb";
import DBGraph from "../db/graph.js";
import DBLink from "../db/link.js";
import DBNode from "../db/node.js";

const app = express();

app.post('/', async(req,res)=>{
    const {nodes, links} = req.body;
    nodes.forEach(node => {
        node._id = new ObjectId();
    })
    links.forEach(link => {
        link.start = nodes.find(node => node.name === link.start)._id;
        link.end = nodes.find(node => node.name === link.end)._id;
        link._id =  new ObjectId();
    })
    await DBNode.insertMany(nodes);
    await DBLink.insertMany(links);
    const newGraph = {
        nodes: nodes.map(node => node._id),
        links: links.map(link => link._id)
    }
    await DBGraph.insertMany([newGraph]);
    res.send(200)
})

export  {app as graphRouter }