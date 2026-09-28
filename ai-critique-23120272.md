# ĐÁNH GIÁ VÀ NHẬN XÉT VỀ AI (AI CRITIQUE)

- **Mã sinh viên:** 23120272
---

Trong quá trình thực hiện bài tập, AI thể hiện khả năng tự động hóa và hỗ trợ viết script rất nhanh nhưng cũng có một số thiếu sót rõ rệt. Thứ nhất, AI mắc lỗi cung cấp thông tin chưa đầy đủ và tự ý tóm tắt nội dung khi tạo báo cáo kiểm toán, dẫn đến việc bỏ sót một số lượt tương tác. Thứ hai, AI có thiên kiến ưu tiên làm cho test script vượt qua kiểm thử (*pass-oriented*) và tự động gộp chung mã Related Bug giữa các build thay vì phân định ngữ cảnh độc lập cho từng file. Nguyên nhân là do mô hình có xu hướng ngầm định tối ưu hóa độ dài phản hồi để tiết kiệm ngữ cảnh, đồng thời suy luận theo xác suất cục bộ mà thiếu khả năng tự đối chiếu toàn diện với các quy ước đánh giá học thuật nếu không được chỉ định tường minh.

Từ trải nghiệm này, bài học quan trọng nhất về nguyên tắc hợp tác với AI là luôn duy trì vai trò kiểm soát của con người. Người dùng không thể giao hoàn toàn cho AI mà phải luôn kiểm chứng độc lập mọi kết quả. Đồng thời, câu lệnh cần được thiết kế cụ thể, chặt chẽ với các ràng buộc khắt khe (như yêu cầu trích xuất nguyên văn, cấu trúc bảng, quy tắc đánh số). Khi làm việc với AI, sự tương tác lặp và giám sát liên tục chính là chìa khóa để khai thác tối đa năng suất của công cụ mà vẫn đảm bảo tính chính xác, trung thực cho dự án.
