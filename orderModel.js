const mongoose = require('mongoose');

// Định nghĩa schema cho đơn hàng
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Liên kết với mô hình User
    required: true,
  },
  items: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    default: 'Pending', // Trạng thái mặc định là 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Xuất mô hình Order
module.exports = mongoose.model('Order', orderSchema);
