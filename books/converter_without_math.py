import sys
import re
filename = "tel_bm"
book = "fp"
sys.path.append("/home/sindre/web/mathweb/books/"+ book)
from  cnt_indx import *

f = open("/home/sindre/openmathbooks/MB/tel/"+filename+".tex", "r")
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
substitutes = [
    ['\\\\label{ ( [^}]* ) }', ''],
    ['\\\\vspace{ ( [^}]* ) }', ''],
    ['\\\\os', '</br>'],
    ['\\\\section{ ( [^}]* ) }', r'<h2 class="section-title">\1</h2>'],
    ['\\\\subsection[*]{ ( [^}]* ) }', r'<h3 class="subsection-title">\1</h3>'],
    ['\\\\subsubsection{ ( [^}]* ) }', r'<h4 class="subsubsection-title">\1</h4>'],
    ['\\\\subsubsection[*]{ ( [^}]* ) }', r'<h4 class="subsubsection-title">\1</h4>'],
    ['\\\\index{ ( [^}]* ) }', ''],
    ['\\\\hrs{ ( [^}]* ) }{seksjon}', '<span class="reference-section" index-reference=""> </span>'],
    ['\\\\refkap{ ( [^}]* ) }', '<span class="reference-chapter" index-reference=""> </span>'],
    ['\\\\hrs{ ( [^}]* ) }{regel}', '<span class="reference-rule" index-reference=""> </span>'],
    ['\\\\hrs{ ( [^}]* ) }{kapittel}', '<span class="reference-chapter" index-reference=""> </span>'],
    ['\\\\rref{ ( [^}]* ) }', 'regel ??'],
    ['\\\\outl{ ( [^}]* ) }', r'<span class="outline">\1</span>'],
    ['\\\\textit{ ( [^}]* ) }', r'<i>\1</i>'],
    ['\\\\textsl{ ( [^}]* ) }', r'<span class="slant">\1 </span>'],
    ['\\\\text{ ( [^}]* ) }', r'<mtext>\1</mtext>'],
    ['\\\\sym{ ( [^}]* ) }', r'<span class="symbol"> \1</span>'],
    ['%\\\\fig{ ( [^}]* ) }', ''],
    ['\\\\fig{ ( [^}]* ) }', r'<div class="figure"> <img src="./fig/\1.svg"> </div>'],
    ['\\\\amounts{ ( [^}]* ) }', r'<div class="amounts"> \1 <span>Mengde</span></div>'],
    ['\\\\numrline{ ( [^}]* ) }', r'<div class="number-line"> \1 <span>Tallinje</span></div>'],
    ['\\\\begin{itemize} ( [^}]* ) \\\\end{itemize}', r'<ul>\1</ul>'],
    ['\\\\begin{tabular} ( [^}]* ) \\\\end{tabular}', r'<table>\1</table>'],
    ['\\\\begin{comment} ( [^}]* ) \\\\end{comment}', r''],
    ['\\\\spr{ ( [^}]* ) }', r'<div class="language-box"><h4>Språkboksen</h4>\1</div>'],
    ['\\\\st{ ( [^}]* ) }', r'<div class="statement">\1</div>'],
    ['\\\\reg\\[([^\\[]*)\\]{( [^}]* ) }', r'<div class="rule"><h4>\1</h4> \2</div>'],
    ['\\\\regdef\\[([^\\[]*)\\]{( [^}]* ) }', r'<div class="rule definition"><h4>\1</h4>\2</div>'],
    ['\\\\info{([^}]*)}{( [^}]* ) }', r'<div class="info"> <h4>\1</h4> \2</div>'],
    ['\\\\eks\\[\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[1\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[2\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[3\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[4\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[5\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[6\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
    ['\\\\eks\\[7\\]{ ( [^}]* ) }', r'<div class="example">\1</div>'],
]

content = f.read()
text_handler = re.compile(r"\\vspace\{[^}]*\}", re.DOTALL)
content = text_handler.sub( '', content)

text_handler = re.compile(r"%id\{([^}]+)\}\s*(.*?)\s*%\\id", re.DOTALL)
content = text_handler.sub( r'<id>\1</id>', content)

text_handler = re.compile(r"%span\{([^}]+)\}\s*(.*?)\s*%\\span", re.DOTALL)
content = text_handler.sub( r'<span id="\1">\2</span>', content)

text_handler = re.compile(r'\\begin\{comment\}(.*?)\\end\{comment\}', re.DOTALL)
content = text_handler.sub( r'', content)
text_handler = re.compile(r'\\refkap{(.*?)}', re.VERBOSE)
content = text_handler.sub('', content)
text_handler = re.compile(r'\\sec{(.*?)}', re.VERBOSE)
content = text_handler.sub('', content)
text_handler = re.compile(r'\\footnotetext{(.*?)}', re.VERBOSE)
content = text_handler.sub( r'', content)

content = content.replace("\\note", "Merk")
content = content.replace("\\input{../../doc}", "")
content = content.replace("\\input{../../preamb}", "")
content = content.replace("\\input{../bm}", "")
content = content.replace("\\begin{document}", "")
content = content.replace("\\end{document}", "")
content = content.replace("\\\\", "")
content = content.replace("\\vsk", "")
content = content.replace("\\vsb", "")
content = content.replace("\\vs", "")
content = content.replace("\\sv", '<p class="answer-title">Svar</p>')
content = content.replace("\\regv", "")
content = content.replace("\\newpage", "")
content = content.replace("\\!", "")
content = content.replace("\\mer", '<span class="note">Merk: </span>')


for substitution in substitutes:
    text_handler = re.compile(substitution[0], re.VERBOSE)
    content = text_handler.sub(substitution[1], content)


text_handler = re.compile('\\\\item\\s+(.*?)(?=\\\\item|</ul>)', re.DOTALL)
content = text_handler.sub(r'<li>\1</li>', content)

matches = re.findall(r'<id>(.*?)</id>', content)

for id in matches:
    if id in index:
        if isinstance(index[id], dict):
            if "math" in index[id]:
                content = content.replace(r'<id>%s</id>' % id , r'<math class="inline-math">%s</math>' % index[id]["math"])
            if "dmath" in index[id]:
                content = content.replace(r'<id>%s</id>' % id , r'<math class="display-math" display="block">%s</math>' % index[id]["dmath"])
            if "footnote" in index[id]:
                content = content.replace(r'<id>%s</id>' % id , r'<button class="footnote-button" data-reference="%s">*</button><div class="footnote" id="%s" hidden>%s</div>' % (id, id, index[id]["footnote"]))
        else:
            content = content.replace(r'<id>%s</id>' % id , r'%s' % index[id])
    else:
        print("! Missing id:", id)



sections = re.findall(r'<h2 class="section-title">', content)

content = re.sub(r'<h2 class="section-title">', r'</section><section><h2 class="section-title">', content)
content = re.sub(r'</section><section><h2 class="section-title">', r'<section><h2 class="section-title">', content, 1)

content = content+'</section>'

outfile = open("/home/sindre/web/mathweb/books/"+ book + "/" + filename+ ".txt", "w")
outfile.write(content)
outfile.close

