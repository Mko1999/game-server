
import pkg from 'mongoose';
const { Schema, model } = pkg;
import DBNode from "./node.js";

// // 1. Create an interface representing a document in MongoDB.
// export interface ILink {
//   start: INode;
//   end: INode;
//   length: number;
// }

// 2. Create a Schema corresponding to the document interface.
const linkSchema = new Schema({
  start: { type: Schema.Types.ObjectId, required: true, ref: DBNode },
  end: { type: Schema.Types.ObjectId, required: true, ref: DBNode },
  length: { type: Number, required: true },
});

// 3. Create a Model.
const DBLink = model("links", linkSchema);

export default DBLink;
