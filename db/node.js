import pkg from 'mongoose';
const { Schema, model } = pkg;
// // 1. Create an interface representing a document in MongoDB.
// export interface INode {
//   name: string;
//   weight: number;
//   x: number;
//   y: number;
// }

// 2. Create a Schema corresponding to the document interface.
const nodeSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});

// 3. Create a Model.
const DBNode = model("nodes", nodeSchema);

export default DBNode;
