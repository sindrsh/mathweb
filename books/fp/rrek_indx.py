index = {
    "2plus3times4": {
        "dmath":  "<mn>2</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>4</mn>",
    },
    "interprets": """  <ol type="i">
    <li> ''2 pluss 3 er 5. 5 ganget med 4 er 20. Svaret er 20.''</li>
    <li> ''3 ganget med 4 er 12. 2 pluss 12 er 14. Svaret er 14.''</li>
  </ol>""",
    "2plus3times4lang": {
        "dmath": """<mtable>
      <mtr>
        <mtd><mn>2</mn><mo>⋅</mo><mn>3</mn></mtd> 
        <mtd><mo>=</mo></mtd>
        <mtd><mtext>''Regn ut&nbsp; </mtext><mn>3</mn><mo>⋅</mo>4<mtext>, og legg sammen med 2''</mtext></mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd><mo>=</mo></mtd>
        <mtd><mn>2</mn><mo>+</mo><mn>12</mn></mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd><mo>=</mo></mtd>
        <mtd>14</mtd>
      </mtr>
    </mtable>"""
    },
    "(2plus3)times4": {
        "dmath": """<mtable>
      <mtr>
        <mtd><mo>(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>)</mo><mo>⋅</mo><mn>4</mn></mtd> 
        <mtd><mo>=</mo></mtd>
        <mtd><mtext>''Legg sammen 2 og 3, og gang med 4 etterpå''</mtext></mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd><mo>=</mo></mtd>
        <mtd><mn>5</mn><mo>⋅</mo><mn>4</mn></mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd><mo>=</mo></mtd>
        <mtd>20</mtd>
      </mtr>
    </mtable>"""
    },
    "calcorder": """  <ol type="1">
    <li> Uttrykk med parentes</li>
    <li> Multiplikasjon eller divisjon</li>
    <li> Addisjon eller subtraksjon</li>
  </ol>""",
    "calcorderexmp1": {
        "dmath": "<mn>23</mn><mo>−</mo><mo>(</mo><mn>3</mn><mo>+</mo><mn>9</mn><mo>)</mo><mo>+</mo><mn>4</mn><mo>⋅</mo> <mn>7</mn>",
    },
    "calcorderexmp1s": {
        "dmath": """<mtable>
      <mtr>
        <mtd>
          <mn>23</mn><mo>−</mo><mo>(</mo><mn>3</mn><mo>+</mo><mn>9</mn><mo>)</mo><mo>+</mo><mn>4</mn><mo>⋅</mo> <mn>7</mn> 
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd><mn>23</mn><mo>−</mo><mn>12</mn><mo>+</mo><mn>4</mn><mo>⋅</mo> <mn>7</mn> </mtd>
        <mtd><mtext>Parentes</mtext></mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd><mn>23</mn><mo>−</mo><mn>12</mn><mo>+</mo><mn>28</mn></mtd>
        <mtd>Ganging</mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>39</mtd>
        <mtd><mtext>Addisjon og subtraksjon</mtext></mtd>
      </mtr>
    </mtable>"""
    },
    "calcorderexmp2": {
        "dmath": "<mn>18</mn><mo> :</mo><mo>(</mo><mn>7</mn><mo>−</mo><mn>5</mn><mo>)</mo><mo>−</mo><mn>3</mn>",
        "display": True
    },
    "calcorderexmp2s": {
        "math": """<mtable>
      <mtr>
        <mtd>
          <mn>18</mn><mo> :</mo><mo>(</mo><mn>7</mn><mo>−</mo><mn>5</mn><mo>)</mo><mo>−</mo><mn>3</mn> 
        </mtd>
        <mtd><mo>=</mo></mtd>
        <mtd><mn>18</mn><mo> :</mo><mn>2</mn><mo>−</mo><mn>3</mn></mtd>
        <mtd>Parentes</mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd> 
          <mo>=</mo>
        </mtd>
        <mtd><mn>9</mn><mo>−</mo><mn>3</mn></mtd>
        <mtd>Deling</mtd>
      </mtr>
      <mtr>
        <mtd></mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mn>6</mn>
        </mtd>
        <mtd>
          <mtext>Subtraksjon</mtext>
        </mtd>
      </mtr>
    </mtable>"""
    },
    "twoways": {
        "dmath": """  <ol type="i">
    <li> Det er <math>  <mn>2</mn><mo>⋅</mo><mn>4</mn> <mo>=</mo><mn>8</mn>  </math> lilla ruter og <math>  <mn>3</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>12</mn>  </math> grønne ruter. Til sammen er det <math>  <mn>8</mn><mo>+</mo><mn>12</mn> <mo>=</mo><mn>20</mn>  </math> ruter. Dette kan vi skrive som
  <math class="display-math" display="block"> <mn>2</mn><mo>⋅</mo> <mn><mn>4</mn></mn> <mo>+</mo> <mn>3</mn><mo>⋅</mo> <mn><mn>4</mn></mn> <mo>=</mo> <mn>20</mn>  </math> </li>
    <li> Det er <math>  <mn>2</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>5</mn>  </math> ruter bortover og 4 ruter oppover. Altså er det <math>  <mn>5</mn><mo>⋅</mo><mn>4</mn> <mo>=</mo><mn>20</mn>  </math> ruter totalt. Dette kan vi skrive som
    <math class="display-math" display="block"> <mo>(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>)</mo><mo>⋅</mo> <mn>4</mn> <mo>=</mo> <mn>20</mn> </math> </li>
  </ol>"""
    },
    "2p3t4": {
        "dmath": '<mo>(</mo><mn><mn>2</mn></mn><mo>+</mo><mn><mn>3</mn></mn><mo>)</mo><mo>⋅</mo><mn><mn><mn>4</mn></mn></mn> <mo>=</mo> <mn><mn>2</mn></mn><mo>⋅</mo> <mn><mn><mn>4</mn></mn></mn><mo>+</mo> <mn><mn>3</mn></mn><mo>⋅</mo><mn><mn><mn>4</mn></mn></mn>'
    },
    "distex1": {
        "dmath": '      <mo>(</mo><mn style="color: var(--select-color4);">4</mn><mo>+</mo><mn style="color: var(--select-color2);">7</mn><mo>)</mo><mo>⋅</mo><mn style="color: var(--select-color1);">8</mn><mo>=</mo><mn style="color: var(--select-color4);">4</mn><mo>⋅</mo><mn style="color: var(--select-color1);">8</mn><mo>+</mo><mn style="color: var(--select-color2);">7</mn><mo>⋅</mo><mn style="color: var(--select-color1);">8</mn>'
    },
    "distex2": {
        "dmath": """<mtable>
    <mtr>
      <mtd>
        <mrow>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>10</mn>
          <mo>−</mo>
          <mn>7</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>⋅</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mn>10</mn>
          <mo>⋅</mo>
          <mn>2</mn>
          <mo>−</mo>
          <mn>7</mn>
          <mo>⋅</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow></mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mn>20</mn>
          <mo>−</mo>
          <mn>14</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow></mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mn>6</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "distnote": {
        "dmath": """<mo form="prefix" stretchy="false">(</mo>
    <mn>10</mn>
    <mo>−</mo>
    <mn>7</mn>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>⋅</mo>
    <mn>2</mn>
    <mo>=</mo>
    <mn>3</mn>
    <mo>⋅</mo>
    <mn>2</mn>
    <mo>=</mo>
    <mn>6</mn>"""
    },
    "distex3a": {
        "math": "<mn>12</mn><mo>⋅</mo><mn>3</mn>"
    },
    "distex3b": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd>
        <mrow>
          <mn>12</mn>
          <mo>⋅</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>10</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>⋅</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow></mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mn>10</mn>
          <mo>⋅</mo>
          <mn>3</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow></mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mn>30</mn>
          <mo>+</mo>
          <mn>6</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mrow></mrow>
      </mtd>
      <mtd>
        <mrow>
          <mo>=</mo>
          <mn>36</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "2min2t3a": {
        "dmath": """<mrow>
    <mo form="prefix" stretchy="false">(</mo>
    <mn>2</mn>
    <mo>−</mo>
    <mn>2</mn>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>⋅</mo>
  </mrow>
  <mrow>
    <mn>3</mn>
  </mrow>"""
    },
    "2min2t3b": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>2</mn>
          <mo>−</mo>
          <mn>2</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>⋅</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>3</mn>
          <mo>−</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>6</mn>
          <mo>−</mo>
          <mn>6</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "2min2t3c": {
        "math": """<mn>0</mn>
    <mo>=</mo>
    <mn>2</mn>
    <mo>−</mo>
    <mn>2</mn>"""
    },
    "2min2t3d": {
        "dmath": """<mn>0</mn>
    <mo>⋅</mo>
    <mn>3</mn>
    <mo>=</mo>
    <mn>0</mn>"""
    },
    "times0": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>7</mn>
          <mo>⋅</mo>
          <mn>0</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>0</mn>
          <mo>⋅</mo>
          <mn>219</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "asso": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>+</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>5</mn>
          <mo>+</mo>
          <mn>3</mn>
          <mo>=</mo>
          <mn>9</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>2</mn>
          <mo>+</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>3</mn>
          <mo>+</mo>
          <mn>4</mn>
          <mo form="postfix" stretchy="false">)</mo>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>7</mn>
          <mo>=</mo>
          <mn>9</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "timesasso": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>3</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>⋅</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>6</mn>
          <mo>⋅</mo>
          <mn>4</mn>
          <mo>=</mo>
          <mn>24</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>2</mn>
          <mo>⋅</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>3</mn>
          <mo>⋅</mo>
          <mn>4</mn>
          <mo form="postfix" stretchy="false">)</mo>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>12</mn>
          <mo>=</mo>
          <mn>24</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "minantiasso": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>12</mn>
          <mo>−</mo>
          <mn>5</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>−</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>7</mn>
          <mo>−</mo>
          <mn>4</mn>
          <mo>=</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>12</mn>
          <mo>−</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>5</mn>
          <mo>−</mo>
          <mn>4</mn>
          <mo form="postfix" stretchy="false">)</mo>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>12</mn>
          <mo>−</mo>
          <mn>1</mn>
          <mo>=</mo>
          <mn>11</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "divantiasso": {
        "math": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>80</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>10</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>8</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>2</mn>
          <mo>=</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>80</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>10</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>2</mn>
          <mo form="postfix" stretchy="false">)</mo>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>80</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>5</mn>
          <mo>=</mo>
          <mn>16</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "dir1": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>12</mn>
          <mo>−</mo>
          <mn>5</mn>
          <mo>−</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>12</mn>
          <mo>−</mo>
          <mn>5</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>−</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>7</mn>
          <mo>−</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>3</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "dir2": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>80</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>10</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>80</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>10</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>8</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>2</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "dir3": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mn>6</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>3</mn>
          <mo>⋅</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mo form="prefix" stretchy="false">(</mo>
          <mn>6</mn>
          <mo lspace="0.2222em" rspace="0.2222em">:</mo>
          <mn>3</mn>
          <mo form="postfix" stretchy="false">)</mo>
          <mo>⋅</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mrow></mrow>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>8</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""
    },
    "6div3": {
        "math": "<mn>6</mn><mo> :</mo><mn>3</mn><mo>=</mo><mn>2</mn>"
    },
    "40div10": {
        "math": "<mn>40</mn><mo> :</mo><mn>10</mn><mo>=</mo><mn>4</mn>"
    },
    "24fakt": {
        "dmath": """<mtable displaystyle="true" class="tml-jot">
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mn>24</mn>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>12</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mn>24</mn>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>3</mn>
          <mo>⋅</mo>
          <mn>8</mn>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd class="tml-right" style="padding-left:0em;padding-right:0em;">
        <mn>24</mn>
      </mtd>
      <mtd class="tml-left" style="padding-left:0em;padding-right:0em;">
        <mrow>
          <mo>=</mo>
          <mn>2</mn>
          <mo>⋅</mo>
          <mn>3</mn>
          <mo>⋅</mo>
          <mn>4</mn>
        </mrow>
      </mtd>
    </mtr>
  </mtable>"""    
    },
    "12primfakt": {
        "dmath": "<mn>12</mn><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>⋅</mo><mn>3</mn>"
    }
}
