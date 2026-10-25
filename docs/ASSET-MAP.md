# Asset map — Wedding V2.10

Các ảnh dưới đây được lấy từ ZIP website gốc, đổi tên theo vai trò và giữ nguyên nội dung ảnh.

- `assets/portraits/groom.jpg` ← `images/groom.JPG`
- `assets/portraits/bride.jpg` ← `images/bride.JPG`
- Hero mặc định dùng lại `assets/gallery/gallery-01.jpg` để tránh lưu trùng ảnh.
- Ảnh sự kiện dùng lại ảnh trong gallery: Vu Quy `gallery-07.jpg`, Thành Hôn `gallery-08.jpg`, tiệc nhà gái `gallery-05.jpg`, tiệc nhà trai `gallery-10.jpg`.

## Gallery (theo đúng thứ tự trong website gốc)

| JSON `src` | File gốc |
|---|---|
| `assets/gallery/gallery-01.jpg` | `images/THON0023.JPG` |
| `assets/gallery/gallery-02.jpg` | `images/THON0098.JPG` |
| `assets/gallery/gallery-03.jpg` | `images/THON0199.jpg` |
| `assets/gallery/gallery-04.jpg` | `images/THON0221.JPG` |
| `assets/gallery/gallery-05.jpg` | `images/THON0488.JPG` |
| `assets/gallery/gallery-06.jpg` | `images/THON0762.JPG` |
| `assets/gallery/gallery-07.jpg` | `images/THON0002.jpg` |
| `assets/gallery/gallery-08.jpg` | `images/THON0807.JPG` |
| `assets/gallery/gallery-09.jpg` | `images/THON1033.JPG` |
| `assets/gallery/gallery-10.jpg` | `images/THON1078.JPG` |
| `assets/gallery/gallery-11.jpg` | `images/THON9999.JPG` |
| `assets/gallery/gallery-12.jpg` | `images/THON0001.jpg` |

Đường dẫn tương đối trong `wedding.config.json` đều tính từ thư mục gốc của website (cùng cấp với `index.html`). Có thể thay ảnh bằng cách giữ nguyên tên file hoặc sửa trường `src` tương ứng trong JSON.
