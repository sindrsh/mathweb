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
                else: 
                    if not "/books/" in dirpath:
                        html_files.append(os.path.join(dirpath, filename))
    return html_files


def write_html(path):
    f = open(path, "r")
    content = f.read()
    path_split = file_path.split("/")
    dept = len(path_split)-len(crnt_split)-1
    level = "./"
    if dept > 0:
        level = ""
        for i in range(dept):
            level+= "../"
    
    menu_script = """<script id="menu-script">
  let reference = document.getElementsByTagName("title")[0].dataset.reference + "-link"
  for (let menuButton of document.getElementsByClassName("menu-button")){
    if (menuButton.id === reference) {
      menuButton.classList.toggle("active")
    } else if (menuButton.classList.contains("active")){
      menuButton.classList.toggle("active")
    }
  }
  const menuIcon = document.getElementById("menu-icon")
  menuIcon.addEventListener("click", menuIconClicked)

  function menuIconClicked() {
    document.getElementById("menu").classList.toggle("responsive")
    document.getElementById("project-title").classList.toggle("responsive")
  }
</script>"""
    substitution = ['<script id="menu-script">(.*?)</script>', menu_script]
    text_handler = re.compile(substitution[0], re.DOTALL)
    content = text_handler.sub(substitution[1], content)
    
    build = "http://127.0.0.1:3000/mathweb"
    build = ""
    menu = """<div id="menu">
      <a href="%s/index.html" class="menu-button" id="index-link">Om</a>
      <a href="%s/books/books.html" class="menu-button" id="books-link">Bøker</a>
      <a href="%s/corruculum/corruculum.html" class="menu-button" id="curriculum-link">Pensum</a>
      <a href="%s/exams/exams.html" class="menu-button" id="exams-link">Eksamener</a>
      <a href="%s/projects/projects.html" class="menu-button" id="projects-link">Ressursbank</a>
      <span id="project-title">OPENMATHBOOKS</span>
      <button id="menu-icon">
        Meny
      </button>
    </div>""" % (build, build, build, build, build)

    
    substitution = ['<div id="menu">(.*?)</div>', menu]
    text_handler = re.compile(substitution[0], re.DOTALL)
    content = text_handler.sub(substitution[1], content)

    styles = f"""<head id="general">
        <link rel="stylesheet" href="{level}styles/menu_styles.css">
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

crnt_split = os.getcwd().split("/")
for file_path in html_files:
    write_html(file_path)
