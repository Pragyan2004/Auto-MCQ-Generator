import os
import pdfplumber
import docx
from fpdf import FPDF
from langchain_groq import ChatGroq
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import os

from dotenv import load_dotenv
UPLOAD_FILE = "The Wonders of Science.docx" 
NUM_QUESTIONS = 5
OUTPUT_FOLDER = "results"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)
llm = ChatGroq(
    api_key=os.environ.get("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0.0
)
mcq_prompt = PromptTemplate(
    input_variables=["context", "num_questions"],
    template="""
You are an AI assistant helping the user generate multiple-choice questions (MCQs) from the text below:

Text:
{context}

Generate {num_questions} MCQs. Each should include:
- A clear question
- Four answer options labeled A, B, C, and D
- The correct answer clearly indicated at the end

Format:
## MCQ
Question: [question]
A) [option A]
B) [option B]
C) [option C]
D) [option D]
Correct Answer: [correct option]
"""
)

mcq_chain = LLMChain(llm=llm, prompt=mcq_prompt)

def extract_text(file_path):
    ext = file_path.rsplit('.', 1)[-1].lower()
    if ext == "pdf":
        with pdfplumber.open(file_path) as pdf:
            return ''.join([p.extract_text() for p in pdf.pages if p.extract_text()])
    elif ext == "docx":
        doc = docx.Document(file_path)
        return ' '.join([para.text for para in doc.paragraphs])
    elif ext == "txt":
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    else:
        raise ValueError("Unsupported file type")

def save_txt(mcqs, filename):
    path = os.path.join(OUTPUT_FOLDER, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(mcqs)
    print(f"Saved text to {path}")

def save_pdf(mcqs, filename):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    for mcq in mcqs.split("## MCQ"):
        if mcq.strip():
            pdf.multi_cell(0, 10, mcq.strip())
            pdf.ln(5)
    path = os.path.join(OUTPUT_FOLDER, filename)
    pdf.output(path)
    print(f"Saved PDF to {path}")

def main():
    text = extract_text(UPLOAD_FILE)
    if not text:
        print("No text extracted.")
        return

    print("Generating MCQs...")
    mcqs = mcq_chain.run({"context": text, "num_questions": NUM_QUESTIONS}).strip()

    base_name = os.path.basename(UPLOAD_FILE).rsplit('.', 1)[0]
    save_txt(mcqs, f"generated_mcqs_{base_name}.txt")
    save_pdf(mcqs, f"generated_mcqs_{base_name}.pdf")

    print("\nMCQ Generation Complete!")

if __name__ == "__main__":
    main()