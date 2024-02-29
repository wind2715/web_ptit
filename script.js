document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const userInfo = document.getElementById("user-info");
    const questionsContainer = document.querySelector(".questions");
    const resultContainer = document.getElementById("result");
    const startQuizButton = document.getElementById("start-quiz");

    // Dữ liệu câu hỏi (đây chỉ là dữ liệu demo)
    const questionsData = [
        { type: "true-false", question: "Câu hỏi 1: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 2: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 3: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 4: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 5: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 6: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 7: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 8: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 9: Đây là một câu hỏi đúng/sai?", answer: "true" },
        { type: "true-false", question: "Câu hỏi 10: Đây là một câu hỏi đúng/sai?", answer: "true" },
        {
            type: "multiple-choice",
            question: "Câu hỏi 11: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 12: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 13: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 14: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 15: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 16: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 17: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 18: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 19: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-choice",
            question: "Câu hỏi 20: Chọn một trong bốn đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: "A",
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 21: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 22: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 23: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 24: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 25: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 26: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 27: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 28: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 29: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        {
            type: "multiple-answers",
            question: "Câu hỏi 30: Chọn một hoặc nhiều đáp án sau:",
            options: ["A", "B", "C", "D"],
            answer: ["A", "C"],
        },
        { type: "essay", question: "Câu hỏi 31: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 32: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 33: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 34: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 35: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 36: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 37: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 38: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 39: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 40: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
        { type: "essay", question: "Câu hỏi 41: Hãy trả lời câu hỏi này tự luận.", answer: "Câu trả lời đúng" },
    ];

    // Khi nhấn vào nút Bắt đầu bài kiểm tra
    startQuizButton.addEventListener("click", function () {
        userInfo.style.display = "none"; // Ẩn phần điền thông tin
        questionsContainer.style.display = "block"; // Hiển thị phần câu hỏi
        form.querySelector("button[type='submit']").style.display = "block"; // Hiển thị nút submit

        // Tạo câu hỏi trên form
        questionsData.forEach((question, index) => {
            let questionElement = document.createElement("div");
            questionElement.classList.add("question");
            questionElement.innerHTML = `<p>${question.question}</p>`;

            switch (question.type) {
                case "true-false":
                    questionElement.innerHTML += `
                        <label><input type="radio" name="question${index}" value="true"> Đúng</label>
                        <label><input type="radio" name="question${index}" value="false"> Sai</label>`;
                    break;
                case "multiple-choice":
                    question.options.forEach((option, optionIndex) => {
                        questionElement.innerHTML += `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`;
                    });
                    break;
                case "multiple-answers":
                    question.options.forEach((option, optionIndex) => {
                        questionElement.innerHTML += `<label><input type="checkbox" name="question${index}" value="${option}"> ${option}</label>`;
                    });
                    break;
                case "essay":
                    questionElement.innerHTML += `<textarea name="question${index}" rows="4" cols="50" required></textarea>`;
                    break;
                default:
                    break;
            }

            questionsContainer.appendChild(questionElement);
        });
    });

    // Xử lý sự kiện nút submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn form submit mặc định

        let totalScore = 0; // Tổng điểm số

        // Xử lý và hiển thị kết quả
        questionsData.forEach((question, index) => {
            // Code xử lý kiểm tra đáp án và tính điểm ở đây
            // Sau đó, hiển thị kết quả bài làm và điểm số
        });

        // Hiển thị kết quả tổng điểm số
        resultContainer.innerHTML = `<h2>Kết quả bài làm</h2>`;
        resultContainer.innerHTML += `<p>Tổng điểm số: ${totalScore}/${questionsData.length}</p>`;
        resultContainer.style.display = "block";
    });
});
