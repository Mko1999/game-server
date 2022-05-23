import pkg from 'mongoose';
const { Schema, model } = pkg;
import DBLink from "./link.js";
import DBNode from "./node.js";

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.
const graphSchema = new Schema({
  nodes: [{ type: Schema.Types.ObjectId, required: true, ref: DBNode }],
  links: [{ type: Schema.Types.ObjectId, required: true, ref: DBLink }],
});

// 3. Create a Model.
const DBGraph = model("graphs", graphSchema);

export default DBGraph;
