import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const nominalSchema = new Schema({
  coinQuantity: {
    type: Number,
    default: 0,
  },
  coinName: {
    type: String,
    require: [true, 'Name Coin is required'],
  },
  price: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Nominal', nominalSchema);
