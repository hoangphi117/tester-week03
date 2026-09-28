# Nhận xét và Đánh giá về việc hợp tác cùng AI

Trong quá trình thực hiện bài tập , AI đã hỗ trợ rất tốt trong việc xây dựng tài liệu và tạo script, giúp tiết kiệm đáng kể thời gian. Tuy nhiên, quá trình sử dụng cũng cho thấy AI vẫn có một số hạn chế cần được tester kiểm tra lại.

Khi tạo bộ test case ban đầu, AI đã có một số giả định chưa chính xác: ví dụ, AI tạo test case TC-INPUT-011 với dữ liệu 12 chữ số 999999999999, trong khi ô nhập liệu chỉ cho phép tối đa 10 chữ số. AI cũng bỏ sót trường hợp kiểm tra giá trị âm, vốn là một trường hợp quan trọng khi kiểm thử dữ liệu đầu vào. Ngoài ra, AI còn tự đánh số Bug ID từ 1, 2 mà không biết rằng GitHub sử dụng chung một hệ thống đánh số tăng dần cho cả Issue và Pull Request. Điều này khiến cách đánh số ban đầu không phù hợp với môi trường thực tế.

Qua những vấn đề trên, em nhận ra rằng AI thường dựa vào những cách làm phổ biến và dễ bỏ qua các chi tiết cụ thể của hệ thống nếu không được yêu cầu kiểm tra kỹ. Vì vậy, bài học ở đây là không nên hoàn toàn tin tưởng vào kết quả do AI tạo ra mà cần kiểm tra và đối chiếu lại.

AI có thể giúp tăng tốc công việc và giảm thời gian thực hiện các nhiệm vụ lặp lại, nhưng tester vẫn cần chủ động kiểm tra source code, các yêu cầu và những trường hợp đặc biệt. Tester nên là người định hướng và đánh giá kết quả, còn AI đóng vai trò hỗ trợ trong công việc.
