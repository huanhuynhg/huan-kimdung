# Wedding Invitation V2 — Romantic Classic 2.0

Responsive, reusable wedding invitation website. Built with HTML/CSS/vanilla JS; deployed independently on GitHub Pages. **Not yet deployed.**

## Included
- Romantic Hero with adaptive Vu Quy / Thanh Hon countdown and manual Memories mode.
- Two arched portraits (groom / bride only).
- Two required ceremonies plus three independently optional receptions.
- Responsive masonry gallery, fullscreen lightbox with touch swipe, Memories photos appended.
- Google Sheets + Apps Script Guestbook integration (optional, **test deployment required**).
- Google Forms RSVP embedded or external link (optional).
- Silent background music autoplay attempt, share popup, QR, back-to-top.
- Sample configuration, local placeholder SVGs, setup guide and QA checklist.

## Important
All names, dates, addresses and SVG images are **fictional placeholders**. Guestbook and RSVP are **disabled by default** to avoid accidental writes to real services. The backend sample is **unverified against a live Apps Script deployment**; follow the testing instructions before enabling it for real guests.

Read [Setup](docs/SETUP.md) and [QA checklist](docs/QA.md).


## V2.1 — UI mobile polish

- Điều chỉnh typography và spacing của Hero để tránh chữ viết tay đè lên tên.
- Cải thiện khoảng cách section, chân dung dạng vòm, thẻ sự kiện và gallery trên mobile.
- Đặt `site.url` theo GitHub Pages V2 để QR/chia sẻ trỏ đúng website.
- Thêm version query vào CSS/JS để hạn chế cache cũ khi cập nhật GitHub Pages.
- Ảnh SVG hiện là placeholder: thay `hero.defaultImage`, `couple.*.portrait`, `events.*.image`, `gallery.images` bằng ảnh thật trong cấu hình.
- Guestbook và RSVP vẫn tắt, chưa thay đổi Google Apps Script/Google Sheets.

## V2.2 — 24/10/2026
- Tên mặc định: Hữu Huân (chú rể) và Kim Dung (cô dâu).
- Giao diện luôn dùng bảng màu sáng, kể cả khi thiết bị bật Dark Mode.
- Xóa chữ trang trí khỏi ảnh SVG Hero mẫu để không đè lên tên và tiêu đề thật.
- Tinh chỉnh line-height và spacing trên mobile; tăng khả năng đọc card sự kiện.
- Dữ liệu ngày cưới, địa chỉ và ảnh vẫn là mẫu, cần cập nhật trong wedding.config.json.
- Chưa kết nối Guestbook/RSVP; không thay đổi V1.

## Production build

See `LOCAL-TESTING.md` for local verification and `.github/workflows/pages.yml` for the GitHub Pages deployment workflow. No Local QA panel or demo RSVP/guestbook is included in this production build.
