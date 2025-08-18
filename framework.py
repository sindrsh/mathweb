import os
import re

def find_html_files(directory):
    html_files = []
    for dirpath, _, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith(".html"):
                dir_string_list = dirpath.split("/")
                if (len(dir_string_list)-dir_string_list.index("mathweb")<3):
                    html_files.append(os.path.join(dirpath, filename))
    return html_files


def write_html(path, index):
    f = open(path, "r")
    content = f.read()

    menu_script = """<script id="menu-script">
  for (let menuButton of document.getElementsByClassName("menu-button")){
    if (menuButton.href == window.location.href) {
      menuButton.classList.toggle("active")
    } else if (menuButton.classList.contains("active")){
      menuButton.classList.toggle("active")
    }
  }
</script>"""
    substitution = ['<script id="menu-script">(.*?)</script>', menu_script]
    text_handler = re.compile(substitution[0], re.DOTALL)
    content = text_handler.sub(substitution[1], content)

    menu = """<div class="topnav">
      <a href="http://127.0.0.1:3000/mathweb/index.html" class="menu-button">Home</a>
      <a href="http://127.0.0.1:3000/mathweb/books/books.html" class="menu-button">Bøker</a>
      <a href="http://127.0.0.1:3000/mathweb/corruculum/corruculum.html" class="menu-button">Pensum</a>
      <a href="http://127.0.0.1:3000/mathweb/exams/exams.html" class="menu-button">Eksamener</a>
      <button class="icon" onclick="myFunction()">
        Meny
      </button>
    </div>"""
    
    substitution = ['<div class="topnav">(.*?)</div>', menu]
    text_handler = re.compile(substitution[0], re.DOTALL)
    content = text_handler.sub(substitution[1], content)

    styles = """<head id="general">
        <link rel="stylesheet" href="../styles/menu_styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>"""
    
    substitution = ['<head id="general">(.*?)</head>', styles]
    text_handler = re.compile(substitution[0], re.DOTALL)
    content = text_handler.sub(substitution[1], content)
    content = content.replace('<html>', "<html lang='no'>")
    
    
    f.close()
    f = open(path, "w")
    f.write(content)

    f.close()
    

directory_path = "/home/sindre/web/mathweb"
html_files = find_html_files(directory_path)

for file_path in html_files:
    write_html(file_path)


