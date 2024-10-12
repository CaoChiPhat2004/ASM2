const express = require('express');
const cors = require('cors');
const orderRouter = require('./path/to/orderRouter'); // Thay đổi đường dẫn cho đúng

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json()); // Đảm bảo rằng body-parser được sử dụng

app.use('/api', orderRouter); // Kết nối router với prefix /api

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
