# 🔐 Kiểm Tra Mật Khẩu Trực Tuyến

Một ứng dụng web gồm **API backend viết bằng Flask (Python)** và **giao diện frontend bằng HTML/JS**, giúp kiểm tra độ mạnh mật khẩu, thời gian bẻ khóa, và xem mật khẩu có từng bị rò rỉ không. Dự án này có thể dùng cho học tập hoặc làm mẫu cho tích hợp frontend (Ionic/Web) với backend đơn giản.

---

## 🚀 Tính năng chính

- 🔍 Kiểm tra mật khẩu đã từng bị rò rỉ qua dịch vụ [HaveIBeenPwned](https://haveibeenpwned.com/).
- ⏱️ Ước lượng thời gian để bẻ khóa mật khẩu.
- 🔢 Chấm điểm độ mạnh của mật khẩu (0 đến 4).
- 📂 Đưa ra cảnh báo và gợi ý nếu mật khẩu yếu.
- 🌐 Thiết kế RESTful dễ tích hợp vào frontend.

---

## 🛠️ Công nghệ sử dụng

| Thành phần     | Công nghệ           |
|----------------|---------------------|
| Backend        | Python + Flask      |
| Frontend       | HTML + JS (Fetch API) |
| Triển khai     | Render.com          |
| Thư viện       | `hibp`, `zxcvbn`, `flask-cors` |

---

## 🗂️ Cấu trúc dự án

---

## 📦 Cài đặt & chạy cục bộ

### 1. Tải mã nguồn

```bash
git clone https://github.com/Thomas131104/checking-password-online.git
cd kiem-tra-mat-khau
```

### 2. Cài đặt thư viện Python

```bash
pip install -r requirements.txt
```

### 3. Chạy Flask server

```bash
cd backend
python main.py
```

- API sẽ hoạt động tại: http://localhost:10000/api/check-password

---

### 🌐 Giao diện người dùng

- Frontend chỉ cần mở tệp frontend/index.html bằng trình duyệt.

- Tệp script.js gửi request POST đến API Flask (đã triển khai tại Render hoặc localhost):

```js
fetch("https://checking-password-online-1.onrender.com/api/check-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: password })
})
```

## 🧪 API Endpoint

### POST /api/check-password

- Yêu cầu:

```json
{
  "password": "matkhaucuaban"
}
```

- Trả về:

```json
{
  "score": 4,
  "crack_time": "centuries",
  "breached": false,
  "feedback": {
    "warning": "",
    "suggestions": []
  }
}
```

---

## 📄 Ghi chú

- Không lưu trữ mật khẩu của người dùng.

- Phương pháp kiểm tra rò rỉ đảm bảo an toàn và riêng tư (dựa trên kỹ thuật k-anonymity).

- Dễ dàng tích hợp với ứng dụng Ionic, React, Vue, v.v.

## 📚 Tham khảo

- zxcvbn: Thư viện đánh giá mật khẩu từ Dropbox.

- Have I Been Pwned API: API kiểm tra mật khẩu bị rò rỉ.

- Render.com: Dịch vụ triển khai server miễn phí.