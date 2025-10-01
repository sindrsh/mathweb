import os
import sys
import re
import json

task_ids = []
for entr in os.listdir("./tasks/"):
    if not "." in entr:
        task_ids.append(entr)

teachings_ids = []
for entr in os.listdir("./teachings/"):
    if not "." in entr:
        teachings_ids.append(entr)

def add_project(idd, typ):
    file_path = f"/home/sindre/web/mathweb/projects/{typ}s/{idd}"
    sys.path.append(file_path)
    from index import title, grades, tags
    
    for tag in tags:
        if tag not in all_tags:
            all_tags.append(tag)
        if tag in tag_index:
            for grade in grades:
                tag_index[tag]["grades"].add(grade)
            tag_index[tag]["types"].add(typ)
        else:
            tag_index[tag] = {}
            tag_index[tag]["types"] = set([typ])
            tag_index[tag]["grades"] = set()
            for grade in grades:
               tag_index[tag]["grades"].add(grade)    
    
    preview_index[idd] = {}
    preview_index[idd]["grades"] = set(grades)
    preview_index[idd]["type"] = set([typ])
    preview_index[idd]["tags"] = set(tags)
    
    html = f"""
    <a class="preview hide {typ}" href="./{typ}s/{idd}/{idd}.html" data-id="{idd}">
    <h3>{title}</h3>
    <p>
    {''.join([f'<span class="preview-tag">{tag}</span> \n' for tag in tags])}
    </p>
    <p>
    {''.join([f'<span class="preview-grade">{grade}</span> \n' for grade in grades])}
    </p>
    </a>
    """
    del sys.modules["index"]
    sys.path.remove(file_path)
    return html
 
all_tags = []
tag_index = {}
preview_index = {}
task_html = ""
teaching_html = ""
for i in task_ids:
    task_html += add_project(i, "task")

for i in teachings_ids:
    teaching_html += add_project(i, "teaching")

for tag in tag_index:
    tag_index[tag]["types"] = list(tag_index[tag]["types"])
    tag_index[tag]["grades"] = list(tag_index[tag]["grades"])

for idd in preview_index:
    preview_index[idd]["tags"] = list(preview_index[idd]["tags"])
    preview_index[idd]["type"] = list(preview_index[idd]["type"])
    preview_index[idd]["grades"] = list(preview_index[idd]["grades"])
    


f = open("/home/sindre/web/mathweb/projects/projects.html", "r")
content = f.read()

tags_html = f"""{''.join([f'<button class="tag-button hide" data-tag="{tag}">{tag}</button> \n' for tag in all_tags])}"""
substitution = ['<div id="tags-filter">(.*?)</div>', f'<div id="tags-filter">{tags_html}</div>']
text_handler = re.compile(substitution[0], re.DOTALL)
content = text_handler.sub(substitution[1], content)

grades = ["5", "6", "7", "8", "9", "10", "1P", "1T", "2P", "R1", "R2"]
grades_html = f"""{''.join([f'<button class="grade-button" data-grade="{grade}">{grade}</button> \n' for grade in grades])}"""
substitution = ['<div id="grades-filter">(.*?)</div>', f'<div id="grades-filter">{grades_html}</div>']
text_handler = re.compile(substitution[0], re.DOTALL)
content = text_handler.sub(substitution[1], content)

substitution = ['<div id="task-container">(.*?)</div>', f'<div id="task-container">{task_html}</div>']
text_handler = re.compile(substitution[0], re.DOTALL)
content = text_handler.sub(substitution[1], content)

substitution = ['<div id="teaching-container">(.*?)</div>', f'<div id="teaching-container">{teaching_html}</div>']
text_handler = re.compile(substitution[0], re.DOTALL)
content = text_handler.sub(substitution[1], content)

f.close()
f = open("projects.html", "w")
f.write(content)
f.close()

tags_string = f"""
let allTags = {all_tags}
let tagIndex = {tag_index}
let previewIndex = {preview_index}
export {{allTags, tagIndex, previewIndex}}
"""

f = open("tags.js", "w")
f.write(tags_string)
f.close()

