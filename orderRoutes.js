const express = require('express');
const router = express.Router();

// POST /order
router.post('/order', async (req, res) => {
  const { items, totalAmount } = req.body;

  // Logic để xử lý đơn hàng
  const orderId = '12345'; // Giả sử đơn hàng đã được lưu thành công
  res.status(200).json({ orderId });
});

module.exports = router;
