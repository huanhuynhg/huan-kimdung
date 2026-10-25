# V2.9 — Rà soát dữ liệu nội dung

## Đã đối chiếu / chỉnh trong bản local

- Cặp đôi: Hữu Huân & Kim Dung.
- Múi giờ: `Asia/Ho_Chi_Minh` (UTC+7).
- Lễ Vu Quy: 07/01/2027, 09:00–11:00.
- Lễ Thành Hôn: 10/01/2027, 10:00–12:00.
- Tiệc Nhà Gái, Tiệc Nhà Trai, Tiệc Cưới vẫn tắt mặc định.
- RSVP, sổ lưu bút, nhạc và liên hệ vẫn chưa bật/kết nối dữ liệu thật.
- V1 không bị chỉnh sửa; không triển khai GitHub.

## Cần chủ nhà cung cấp / xác nhận trước khi phát hành

- Địa chỉ chính xác của tư gia nhà gái và tư gia nhà trai. Hiện config còn placeholder `Địa chỉ nhà gái (cập nhật)` và `Địa chỉ nhà trai (cập nhật)`.
- URL Google Maps chính xác cho từng địa điểm.
- Xác nhận địa điểm hiển thị nên là “Tư gia nhà gái/nhà trai” hay tên nhà hàng/sảnh cụ thể.
- Ảnh chân dung, ảnh hero và ảnh gallery vẫn là SVG template, chưa phải ảnh cưới thật.
- URL site trong config là URL dự kiến; chưa có triển khai hay xác minh URL live trong lần cập nhật này.

## Kiểm tra thủ công sau khi mở local

2. Kiểm tra ngày hiển thị đúng thứ/ngày trên thẻ sự kiện.
3. Giả lập thời điểm 06/01/2027 08:20, 06/01/2027 09:01, 07/01/2027 trong ngày Vu Quy, và 10/01/2027 trong ngày Thành Hôn.
4. Kiểm tra desktop Chrome và mobile: không tràn chữ ở địa chỉ dài; nút bản đồ mở đúng địa điểm sau khi được cấu hình.
5. Không bật sự kiện tùy chọn nếu chưa có dữ liệu đã xác nhận.
