import zipfile
import xml.etree.ElementTree as ET
import os

def docx_to_text(docx_path):
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    text = []
    try:
        with zipfile.ZipFile(docx_path) as docx:
            tree = ET.fromstring(docx.read('word/document.xml'))
            for paragraph in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                p_text = []
                for run in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                    if run.text:
                        p_text.append(run.text)
                text.append(''.join(p_text))
        return '\n'.join(text)
    except Exception as e:
        return f"Error reading {docx_path}: {str(e)}"

downloads = r"C:\Users\77rhe\Downloads"
class_docx = os.path.join(downloads, "K-Banchan_Classification.docx")
summer_docx = os.path.join(downloads, "여름철_한국음식_10선_학술에세이.docx")

class_text = docx_to_text(class_docx)
summer_text = docx_to_text(summer_docx)

# Write to temporary output files
with open("class_out.txt", "w", encoding="utf-8") as f:
    f.write(class_text)

with open("summer_out.txt", "w", encoding="utf-8") as f:
    f.write(summer_text)

print("Extraction completed.")
