# Kiểm tra local – Wedding V2.16 Production Cleanup

Mở PowerShell tại thư mục gốc website (nơi có `index.html`) và chạy:

```powershell
py scripts\build_memories_manifest.py
py -m http.server 5500
```

Mở `http://localhost:5500`, sau đó dùng `Ctrl+F5` để tải lại. Giữ cửa sổ PowerShell mở.

## Kiểm tra Memories
- Trước 00:00 ngày sau ngày Lễ Thành Hôn theo múi giờ `Asia/Ho_Chi_Minh`, trang hiển thị nội dung thiệp cưới.
- Từ 00:00 ngày kế tiếp, website tự chuyển sang Memories Mode khi khách mở hoặc tải lại trang; nội dung sự kiện, thư viện ảnh chính, RSVP, lời chúc và liên hệ được ẩn.
- Thư viện Memories dùng tối đa 15 ảnh mỗi trang; dấu chấm chỉ hiện khi có từ 16 ảnh trở lên.
- Thư viện “Khoảnh khắc của chúng mình” không dùng phân trang Memories.

## Lưu ý
Website tĩnh trên GitHub Pages chỉ kiểm tra ngày giờ khi trang đang chạy/được mở lại; không có tiến trình máy chủ chạy nền để thay đổi giao diện của một trang đã đóng. Workflow GitHub Actions tạo `assets/memories/manifest.json` từ ảnh có trong `assets/memories/photos/`.
