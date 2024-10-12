const Order = require('../models/orderModel');

// Controller để tạo đơn hàng
exports.createOrder = async (req, res) => {
  const { userId, items } = req.body;

  // Kiểm tra tính hợp lệ của dữ liệu đầu vào
  if (!userId || !items || items.length === 0) {
    return res.status(400).json({ message: 'Invalid order data' });
  }

  try {
    // Tạo đối tượng đơn hàng mới
    const newOrder = new Order({
      userId: userId,
      items: items,
      status: 'Pending', // Mặc định trạng thái đơn hàng là 'Pending'
      createdAt: Date.now(),
    });

    // Lưu đơn hàng vào cơ sở dữ liệu
    await newOrder.save();

    // Trả về phản hồi thành công
    return res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
