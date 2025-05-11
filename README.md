#Auto MCQ Generator using LangChain, Groq API (LLaMA-3), and Flask

#Project Overview:
Developed a full-stack AI-powered web application that automatically generates Multiple Choice Questions (MCQs) from uploaded documents using LangChain and Groq’s LLaMA-3 models. This solution is designed to assist educators, trainers, content creators, and e-learning platforms by turning raw educational materials into quizzes and assessments within seconds.

# Frontend & Integration (Flask Web Interface)

Drag & Drop Upload for .pdf, .docx, and .txt files.

Simple form input to specify the number of questions.

Preview area to display MCQs directly on the webpage.

Download buttons to export output as .txt or .pdf.

# Use Cases
📘 Teachers & Professors – Automate test/quiz preparation from lecture notes or textbooks.

🎓 EdTech Platforms – Integrate as a backend service for dynamic content creation.

🏫 School Management Systems – Add an AI quiz generator module.

📚 Students & Learners – Practice questions from study material or notes.

# Tech Stack Summary

Layer	Technology
Language Model	Groq (LLaMA-3 70B)
Framework	LangChain
Backend	Python, Flask
PDF Export	FPDF
File Parsing	pdfplumber, python-docx
Web UI	HTML, CSS, JavaScript (Flask templates)

# Security & Scalability
Environment-secured API keys using .env

Modular code structure for easy API wrapping or Dockerization

Open to integration with user authentication for cloud hosting

# Impact & Highlights

✅ Reduced manual question generation time by 90%

✅ Supports multiple file formats for wider usability

✅ Accurate, grammatically correct, and context-aware questions

✅ Lightweight and fast thanks to Groq’s high-speed inference

# Set Up Environment Variables
Create a .env file in the root directory:
GROQ_API_KEY=your_groq_api_key

# Run the App

python app.py
  Go to http://localhost:5000 in your browser.

# Screenshots
![Screenshot 2025-05-11 143232](https://github.com/user-attachments/assets/5fc9d3ba-96ba-4041-870d-dfcbfece9a03)
![Screenshot 2025-05-11 143221](https://github.com/user-attachments/assets/ec5f7bc8-3e26-4891-a1d8-0d29a1db929d)
![Screenshot 2025-05-11 143211](https://github.com/user-attachments/assets/bec35de1-8cd3-4525-aa5b-b0a35df51d6b)
![Screenshot 2025-05-11 143145](https://github.com/user-attachments/assets/b6884e85-9f59-44c6-9236-c2ae6fbc78ad)
![Screenshot 2025-05-11 143131](https://github.com/user-attachments/assets/31aade62-f310-4192-9fc2-54f899dedfdd)
![Screenshot 2025-05-11 143113](https://github.com/user-attachments/assets/f55e5385-5dc1-440f-b998-6fa4d4ac41d1)

