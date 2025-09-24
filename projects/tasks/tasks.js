const tasks = {
    "walkspeed": {
      "tags": ["proporsjonalitet", "omgjøring av enheter"],
      "title": "Gåfart",
      "grades": ["5", "6", "7", "8", "9", "10", "1P"],
      "content": `Vanlig gåfart regnes for å være ca. 1,5 m/s. Hvor langt kommer
    man med denne farten
      <ul class="abc-list">
        <li> etter 25 min?</li>
        <li> etter 3 timer?</li>
      </ul>
      `
    },
    "thunderbolt": {
      "tags": ["overslag", "proporsjonalitet"],
      "title": "Lyn og torden",
      "grades": ["5", "6", "7", "8", "9", "10", "1P"],
      "content": `Når det er lyn og torden kan du bruke følgende metode for å
      finne ut omtrent hvor langt unna du er uværet:
      <div class="statement"> Start med å telle sekunder straks du ser et lyn. Stopp
      tellingen når du hører torden. Gang antall sekunder med
      300, da har du et overslag på hvor mange meter du er unna
      uværet.
      </div>
      Bruk internett til undersøke hastigheten til lys (lyn) og lyd (torden) i luft, og forklar hva denne metoden baserer seg på.
      `,
    },
    "secondorderfunction": {
      "tags": ["andregrad", "utforsking", "funksjoner"],
      "title": "Andregradsunksjonen",
      "grades": ["10", "1P", "1T"],
      "content": `<p>Gitt funksjonen 
    <math class="inline-math">
      <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
      <mo>=</mo>
      <msup><mi>x</mi><mn>2</mn></msup>
      <mo>−</mo><mn>2</mn><mi>x</mi>
      <mo>−</mo><mn>8</mn>
    </math>.
    Nullpunktene og bunnpunktet er markert i figuren under.
    <div class="image-container"><img src="./tasks/opgfunkkvad.svg"></div>
  </p>
  <ol class="abc-list">
    <li>
      Vis at vi kan skrive 
      <math class="inline-math">
        <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
        <mo>=</mo>
        <mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo>
        <mo>(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo>)</mo>
      </math>.
    </li>

    <li>
      Finn nullpunktene 
      <math class="inline-math"><msub><mi>x</mi><mn>1</mn></msub></math>
      og 
      <math class="inline-math"><msub><mi>x</mi><mn>2</mn></msub></math>
      til 
      <math class="inline-math"><mi>f</mi></math>.
    </li>

    <li>
      Hva er horisontalavstanden mellom bunnpunktet og 
      <math class="inline-math"><msub><mi>x</mi><mn>1</mn></msub></math>?
      Hva er horisontalavstanden mellom bunnpunktet og 
      <math class="inline-math"><msub><mi>x</mi><mn>2</mn></msub></math>?
    </li>

    <li>
      Finn <math class="inline-math"><mi>y</mi></math>-verdiene til punktene 
      <math class="inline-math">
        <mi>A</mi><mo>=</mo><mo>(</mo><mo>−</mo><mn>3</mn><mo>,</mo> <mi>f</mi><mo>(</mo><mo>−</mo><mn>3</mn><mo>)</mo><mo>)</mo>
      </math>
      og
      <math class="inline-math">
        <mi>B</mi><mo>=</mo><mo>(</mo><mn>5</mn><mo>,</mo> <mi>f</mi><mo>(</mo><mn>5</mn><mo>)</mo><mo>)</mo>
      </math>.
      Hva er horisontalavstanden mellom bunnpunktet og 
      <math class="inline-math"><mi>A</mi></math>?
      Hva er horisontalavstanden mellom bunnpunktet og 
      <math class="inline-math"><mi>B</mi></math>?
    </li>

    <li>
      Det vi har funnet i c) og d) er eksempler på en sammenheng som gjelder for alle andregradsfunksjoner.
      Hvis to punkter på grafen til en andregradsfunksjon har lik horisontalavstand til toppunktet/bunnpunktet,
      hva kan vi da vite om 
      <math class="inline-math"><mi>y</mi></math>-verdiene til punktene?
    </li>
  </ol>
  `,
  "solution": `<ol class="abc-list">
      <li>
        Ved å gange ut parentesene får vi at
        <math display="block" class="block">
          <mrow>
            <mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo>
            <mo>(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo>)</mo>
            <mo>=</mo>
            <msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>8</mn>
            <mo>=</mo>
            <msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>8</mn>
            <mo>=</mo>
            <msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>8</mn>
          </mrow>
        </math>
        Dette tilsvarer funksjonsuttrykket til <math class="inline-math"><mi>f</mi></math>.
      </li>
      <li>
        Av uttrykket fra a), finner vi at
        <math class="inline-math"><mi>f</mi><mo>=</mo><mn>0</mn></math>
        når
        <math class="inline-math"><mi>x</mi><mo>=</mo><mo>−</mo><mn>2</mn></math>
        og
        <math class="inline-math"><mi>x</mi><mo>=</mo><mn>4</mn></math>.
      </li>
      <li>
        Vi har at
        <math display="block" class="display-math">
          <mtable >
            <mtr>
              <mtd>
                <mi>f</mi><mo>(</mo><mo>−</mo><mn>3</mn><mo>)</mo>
                <mo>=</mo>
                <mo>(</mo><mo>−</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>)</mo>
                <mo>(</mo><mo>−</mo><mn>3</mn><mo>−</mo><mn>4</mn><mo>)</mo>
                <mo>=</mo>
                <mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo><mo>·</mo><mo>(</mo><mo>−</mo><mn>7</mn><mo>)</mo>
                <mo>=</mo><mn>7</mn>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>f</mi><mo>(</mo><mn>5</mn><mo>)</mo>
                <mo>=</mo>
                <mo>(</mo><mn>5</mn><mo>+</mo><mn>2</mn><mo>)</mo>
                <mo>(</mo><mn>5</mn><mo>−</mo><mn>4</mn><mo>)</mo>
                <mo>=</mo>
                <mn>7</mn><mo>·</mo><mn>1</mn>
                <mo>=</mo><mn>7</mn>
              </mtd>
            </mtr>
          </mtable>
        </math>
        Altså er
        <math class="inline-math"><mi>A</mi><mo>=</mo><mo>(</mo><mo>−</mo><mn>3</mn><mo>,</mo><mspace width="0.25em"/><mn>7</mn><mo>)</mo></math>
        og
        <math class="inline-math"><mi>B</mi><mo>=</mo><mo>(</mo><mn>5</mn><mo>,</mo><mspace width="0.25em"/><mn>7</mn><mo>)</mo></math>.
        For både <math class="inline-math"><mi>A</mi></math> og <math class="inline-math"><mi>B</mi></math> er horisontalavstanden til bunnpunktet <math class="inline-math"><mn>4</mn></math>.
      </li>
      <li>
        To punkt med lik horisontalavstand til bunnpunktet vil ha samme
        <math class="inline-math"><mi>y</mi></math>-verdi.
      </li>
    </ol>`
    },
    "secondorderfunctionadvanced-1": {
        "tags": ["andregradsfunksjon", "symmetri", "utforsking", "utfordring"],
        "title": "Andregradsfunksjonens symmetriegenskaper 1",
        "grades": ["1t"],
        "content": ` <p>
    Gitt funksjonen
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
      <mo>=</mo>
      <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup>
      <mo>+</mo>
      <mi>b</mi><mi>x</mi>
      <mo>+</mo>
      <mi>c</mi>
    </math>.
    Vis at grafen til 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi></math>
    er symmetrisk om linja 
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>x</mi><mo>=</mo>
      <mfrac>
        <mrow><mo>-</mo><mi>b</mi></mrow>
        <mrow><mn>2</mn><mi>a</mi></mrow>
      </mfrac>
    </math>.
  </p>
  <p>Etter denne oppgaven bør du også gjøre oppgaven <i>Andregradsfunksjonens symmetriegenskaper 2</i>
  </p>
  `,
  "solution": `<p>
    <h4>Alternativ 1</h4>
    Skal grafen til 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi></math>
    være symmetrisk om linja 
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>x</mi><mo>=</mo>
      <mfrac>
        <mrow><mo>-</mo><mi>b</mi></mrow>
        <mrow><mn>2</mn><mi>a</mi></mrow>
      </mfrac>
    </math>,
    må vi for et tall 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi></math>
    ha at
  </p>

  <p>
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow>
        <mi>f</mi>
        <mo>(</mo>
        <mi>k</mi>
        <mo>-</mo>
        <mfrac>
          <mi>b</mi>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>)</mo>
        <mo>=</mo>
        <mi>f</mi>
        <mo>(</mo>
        <mo>-</mo><mi>k</mi>
        <mo>-</mo>
        <mfrac>
          <mi>b</mi>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>)</mo>
      </mrow>
    </math>
  </p>

  <p>
    For et tall 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi></math>
    har vi at
  </p>

  <p>
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow>
        <mi>d</mi>
        <mo>-</mo>
        <mfrac>
          <mi>b</mi>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>=</mo>
        <mfrac>
          <mrow><mn>2</mn><mi>a</mi><mi>d</mi><mo>-</mo><mi>b</mi></mrow>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
      </mrow>
    </math>
  </p>

  <p>Videre er</p>

  <p>
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mtable >
        <mtr>
          <mtd>
            <mi>f</mi>
            <mo>(</mo>
            <mi>d</mi>
            <mo>-</mo>
            <mfrac>
              <mi>b</mi>
              <mrow><mn>2</mn><mi>a</mi></mrow>
            </mfrac>
            <mo>)</mo>
            <mo>=</mo>
            <mi>a</mi>
            <mo>(</mo>
            <mfrac>
              <mrow><mn>2</mn><mi>a</mi><mi>d</mi><mo>-</mo><mi>b</mi></mrow>
              <mrow><mn>2</mn><mi>a</mi></mrow>
            </mfrac>
            <msup><mo>)</mo><mn>2</mn></msup>
            <mo>+</mo>
            <mi>b</mi>
            <mo>(</mo>
            <mfrac>
              <mrow><mn>2</mn><mi>a</mi><mi>d</mi><mo>-</mo><mi>b</mi></mrow>
              <mrow><mn>2</mn><mi>a</mi></mrow>
            </mfrac>
            <mo>)</mo>
            <mo>+</mo>
            <mi>c</mi>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mo>=</mo>
            <mfrac>
              <mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup>
              <mo>-</mo><mn>4</mn><mi>a</mi><mi>b</mi><mi>d</mi>
              <mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow>
              <mrow><mn>4</mn><mi>a</mi></mrow>
            </mfrac>
            <mo>+</mo>
            <mfrac>
              <mrow><mn>2</mn><mi>a</mi><mi>b</mi><mi>d</mi><mo>-</mo><msup><mi>b</mi><mn>2</mn></msup></mrow>
              <mrow><mn>2</mn><mi>a</mi></mrow>
            </mfrac>
            <mo>+</mo>
            <mi>c</mi>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mo>=</mo>
            <mfrac>
              <mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup>
              <mo>-</mo><msup><mi>b</mi><mn>2</mn></msup></mrow>
              <mrow><mn>4</mn><mi>a</mi></mrow>
            </mfrac>
            <mo>+</mo>
            <mi>c</mi>
          </mtd>
        </mtr>
      </mtable>
    </math>
  </p>

  <p>
    Dette betyr at uansett om 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi><mo>=</mo><mi>k</mi></math>
    eller 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi><mo>=</mo><mo>-</mo><mi>k</mi></math>,
    så vil uttrykket over være likt, og altså er betingelsen gyldig.
  </p>
    <h4> Alternativ 2 </h4>
    <p>
    Skal <math xmlns="http://www.w3.org/1998/Math/MathML" class="math">
      <mi>f</mi>
    </math> være symmetrisk om en vertikallinje, må det bety at to tall
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>s</mi></math> og
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math>
    gir lik <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi></math>-verdi:
  </p>

  <div class="display math">
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mtable>
        <mtr>
          <mtd>
            <mrow>
              <mi>f</mi>
              <mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo>
              <mo>=</mo>
              <mi>f</mi>
              <mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <mi>a</mi><msup><mi>s</mi><mn>2</mn></msup>
              <mo>+</mo>
              <mi>b</mi><mi>s</mi>
              <mo>+</mo>
              <mi>c</mi>
              <mo>=</mo>
              <mi>a</mi><msup><mi>t</mi><mn>2</mn></msup>
              <mo>+</mo>
              <mi>b</mi><mi>t</mi>
              <mo>+</mo>
              <mi>c</mi>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <mi>a</mi>
              <mo stretchy="false">(</mo>
                <msup><mi>s</mi><mn>2</mn></msup>
                <mo>&#x2212;</mo>
                <msup><mi>t</mi><mn>2</mn></msup>
              <mo stretchy="false">)</mo>
              <mo>+</mo>
              <mi>b</mi>
              <mo stretchy="false">(</mo><mi>s</mi><mo>&#x2212;</mo><mi>t</mi><mo stretchy="false">)</mo>
              <mo>=</mo>
              <mn>0</mn>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <mi>a</mi>
              <mo stretchy="false">(</mo><mi>s</mi><mo>&#x2212;</mo><mi>t</mi><mo stretchy="false">)</mo>
              <mo stretchy="false">(</mo><mi>s</mi><mo>+</mo><mi>t</mi><mo stretchy="false">)</mo>
              <mo>+</mo>
              <mi>b</mi>
              <mo stretchy="false">(</mo><mi>s</mi><mo>&#x2212;</mo><mi>t</mi><mo stretchy="false">)</mo>
              <mo>=</mo>
              <mn>0</mn>
              <mo>&#xA0;</mo>
              <mtext>(</mtext><mi>s</mi><mo>&#x2260;</mo><mi>t</mi><mtext>)</mtext>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <mi>a</mi><mo stretchy="false">(</mo><mi>s</mi><mo>+</mo><mi>t</mi><mo stretchy="false">)</mo>
              <mo>+</mo>
              <mi>b</mi>
              <mo>=</mo>
              <mn>0</mn>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <mi>t</mi>
              <mo>=</mo>
              <mrow>
                <mo>&#x2212;</mo>
                <mfrac>
                  <mi>b</mi>
                  <mi>a</mi>
                </mfrac>
                <mo>&#x2212;</mo>
                <mi>s</mi>
              </mrow>
            </mrow>
          </mtd>
        </mtr>

      </mtable>
    </math>
  </div>
  <p class="note">
    Vi lar <math xmlns="http://www.w3.org/1998/Math/MathML" class="math" display="inline">
      <msub><mi>x</mi><mi>s</mi></msub>
    </math> være <i>x</i>-verdien til symmetrilinja til <math xmlns="http://www.w3.org/1998/Math/MathML" class="math" display="inline"><mi>f</mi></math>.
    <math xmlns="http://www.w3.org/1998/Math/MathML" class="math" display="inline">
      <msub><mi>x</mi><mi>s</mi></msub>
    </math> må ligge midt mellom <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>s</mi></math> og
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math>. Vi lar <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>t</mi></math>&gt;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>s</mi></math>, da er:
  </p>

  <div class="display math">
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mtable>
        <mtr>
          <mtd>
            <mrow>
              <msub><mi>x</mi><mi>s</mi></msub>
              <mo>=</mo>
              <mi>s</mi>
              <mo>+</mo>
              <mfrac><mn>1</mn><mn>2</mn></mfrac>
              <mo stretchy="false">(</mo>
                <mi>t</mi>
                <mo>&#x2212;</mo>
                <mi>s</mi>
              <mo stretchy="false">)</mo>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <msub><mi>x</mi><mi>s</mi></msub>
              <mo>=</mo>
              <mi>s</mi>
              <mo>+</mo>
              <mfrac><mn>1</mn><mn>2</mn></mfrac>
              <mrow>
                <mo stretchy="false">(</mo>
                <mrow>
                  <mo>&#x2212;</mo>
                  <mfrac><mi>b</mi><mi>a</mi></mfrac>
                  <mo>&#x2212;</mo>
                  <mi>s</mi>
                  <mo>&#x2212;</mo>
                  <mi>s</mi>
                </mrow>
                <mo stretchy="false">)</mo>
              </mrow>
            </mrow>
          </mtd>
        </mtr>

        <mtr>
          <mtd>
            <mrow>
              <msub><mi>x</mi><mi>s</mi></msub>
              <mo>=</mo>
              <mrow>
                <mo>&#x2212;</mo>
                <mfrac>
                  <mi>b</mi>
                  <mrow><mn>2</mn><mi>a</mi></mrow>
                </mfrac>
              </mrow>
            </mrow>
          </mtd>
        </mtr>
      </mtable>
    </math>
  </div>
  </ol>
  `
},
    "secondorderfunctionadvanced-2": {
        "tags": ["andregradsfunksjon", "symmetri", "utforsking", "utfordring"],
        "title": "Andregradsfunksjonens symmetriegenskaper 2",
        "grades": ["1t"],
        "content": `<p>
    Gitt funksjonen 
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
      <mo>=</mo>
      <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup>
      <mo>+</mo><mi>b</mi><mi>x</mi>
      <mo>+</mo><mi>c</mi>
    </math>.
    I oppgaven <i>Andregradfunksjonens symmetriegenskaper 1</i> viste vi at 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi></math>
    er symmetrisk om linja 
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>x</mi>
      <mo>=</mo>
      <mfrac>
        <mrow><mo>&#x2212;</mo><mi>b</mi></mrow>
        <mrow><mn>2</mn><mi>a</mi></mrow>
      </mfrac>
    </math>.
    Da følger det at for alle tall
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi></math> er
  </p>

  <div class="display math">
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow>
        <mi>f</mi>
        <mo>(</mo>
        <mo>&#x00B1;</mo><mi>k</mi>
        <mo>&#x2212;</mo>
        <mfrac>
          <mi>b</mi>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>)</mo>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mn>4</mn><msup><mi>a</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup>
            <mo>&#x2212;</mo>
            <msup><mi>b</mi><mn>2</mn></msup>
          </mrow>
          <mrow><mn>4</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>+</mo>
        <mi>c</mi>
      </mrow>
    </math>
  </div>

  <p>
    Bruk dette til å utlede 
    <i>abc</i>-formelen.
  </p>`,
  "solution": `
  <p>
    Hvis 
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
      <mo>=</mo>
      <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup>
      <mo>+</mo><mi>b</mi><mi>x</mi>
      <mo>+</mo><mi>c</mi>
      <mo>=</mo><mn>0</mn>
    </math>, har vi for et tall 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi></math> at
  </p>

  <div class="display math">
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow>
        <mi>f</mi>
        <mo>(</mo>
        <mo>&#x00B1;</mo><mi>k</mi>
        <mo>&#x2212;</mo>
        <mfrac><mi>b</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac>
        <mo>)</mo>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mn>4</mn><msup><mi>a</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup>
            <mo>&#x2212;</mo><msup><mi>b</mi><mn>2</mn></msup>
          </mrow>
          <mrow><mn>4</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>+</mo><mi>c</mi>
        <mo>=</mo><mn>0</mn>
      </mrow>
    </math>
  </div>

  <p>
    Løser vi denne ligningen med hensyn på 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi></math>, får vi at
  </p>

  <div class="display math">
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow>
        <mi>k</mi>
        <mo>=</mo>
        <mo>&#x00B1;</mo>
        <mfrac>
          <msqrt>
            <msup><mi>b</mi><mn>2</mn></msup>
            <mo>&#x2212;</mo>
            <mn>4</mn><mi>a</mi><mi>c</mi>
          </msqrt>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
      </mrow>
    </math>
  </div>

  <p>
    Dette betyr at
  </p>

  <div class="display math">
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow>
        <mi>f</mi>
        <mo>(</mo>
        <mo>&#x00B1;</mo>
        <mfrac>
          <msqrt>
            <msup><mi>b</mi><mn>2</mn></msup>
            <mo>&#x2212;</mo>
            <mn>4</mn><mi>a</mi><mi>c</mi>
          </msqrt>
          <mrow><mn>2</mn><mi>a</mi></mrow>
        </mfrac>
        <mo>&#x2212;</mo>
        <mfrac><mi>b</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac>
        <mo>)</mo>
        <mo>=</mo><mn>0</mn>
      </mrow>
    </math>
  </div>
  `
    },
  "areaandcircumferenceevenandodd": {
    "title": "Areal og omkrets til rektangel",
    "tags": ["utforsking", "areal", "omkrets", "multiplikasjon"],
    "content": `<ul class="abc-list">
  <li>Forklar hvorfor omkretsen til et rektangel med heltalls bredde og høyde alltid er et partall.</li>
  <li>
    ''Hvis både bredden og høyden i et rektangel er oddetall, er det umulig at arealet og omkretsen til rektangelet har samme verdi.''
    <p>Forklar hvorfor påstanden er riktig/ikke riktig.</p>
  </li>
  <li>Hva er sidelengden til det eneste kvadratet hvor areal og omkrets har samme verdi?</li>
</ul>`,
    "solution": `<ol>
    <li>
      Omkretsen til et rektangel er lik  
      <br>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
          <mn>2</mn>
          <mo>&#x22C5;</mo>
          <mi>bredde</mi>
          <mo>+</mo>
          <mn>2</mn>
          <mo>&#x22C5;</mo>
          <mi>høyde</mi>
        </mrow>
      </math>
      Hvis både bredden og høyden er heltall, er begge leddene over partall, og summen av to partall er et partall.
    </li>
    <li>
      Et oddetall ganget med et oddetall vil alltid gi et oddetall. Dermed er arealet et oddetall.  
      Hvis både bredden og høyden er oddetall er de også heltall, og da har vi fra oppgave a) at omkretsen er et partall.
    </li>
    <li>
      <mn>4</mn>
    </li>
  </ol>`,
  "grades": ["5", "6", "7"]
  },
  "thequadraticrules": {
    "title": "Kvadratsetningene",
    "tags": ["utforsking", "algebra", "kvadratsetningene", "areal"],
    "grades": ["9", "10", "1T"],
    "content": `
    <p>
    I begge figurene under er den største firkanten et kvadrat, og arealene til de fargede kvadratene er vist i figurene. 
    I <em>figur b</em> har det største kvadratet sidelengde 
    <math>
      <mi>a</mi>
    </math>.
  </p>

  <ol class="abc-list">
    <li>
      Bruk <em>figur a</em> til å forklare at 
      <math>
        <msup>
        <mrow>
          <mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
        <mo>=</mo>
        <msup><mi>a</mi><mn>2</mn></msup>
        <mo>+</mo>
        <mn>2</mn><mi>a</mi><mi>b</mi>
        <mo>+</mo>
        <msup><mi>b</mi><mn>2</mn></msup>
      </math>.
    </li>

    <li>
      Bruk <em>figur b</em> til å forklare at 
      <math>
        <msup>
        <mrow>
          <mo>(</mo><mi>a</mi><mo>-</mo><mi>b</mi><mo>)</mo>
        </mrow>
        <mn>2</mn></msup>
        <mo>=</mo>
        <msup><mi>a</mi><mn>2</mn></msup>
        <mo>-</mo>
        <mn>2</mn><mi>a</mi><mi>b</mi>
        <mo>+</mo>
        <msup><mi>b</mi><mn>2</mn></msup>
      </math>.
    </li>

    <li>
      Bruk <em>figur b</em> til å forklare at 
      <math>
        <mrow>
          <mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo>
          <mo>(</mo><mi>a</mi><mo>-</mo><mi>b</mi><mo>)</mo>
        </mrow>
        <mo>=</mo>
        <msup><mi>a</mi><mn>2</mn></msup>
        <mo>-</mo>
        <msup><mi>b</mi><mn>2</mn></msup>
      </math>.
    </li>
  </ol>
    Figur a: <img src="./tasks/opgalgsquare1.svg">&nbsp;, Figur b:
  <img src="./tasks/opgalgsquare2.svg">
    `,
    "solution": `
  Figur a: <img src="./tasks/opgalgsquare1_lf.svg">&nbsp;, Figur b:
  <img src="./tasks/opgalgsquare2_lf.svg">
  <ol class="abc-list">
    <li>
      <p>Da det røde kvadratet har sidelengde <math><mi>a</mi></math> og det grønne kvadratet har sidelengde <math><mi>b</mi></math>, har det største kvadratet sidelengde <math><mi>a</mi><mo>+</mo><mi>b</mi></math>. Hver av de hvite rektanglene har areal <math><mi>a</mi><mi>b</mi></math>. Dermed har vi at:</p>

      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mtable columnalign="right center left">
          <mtr>
            <mtd><msub><mi>A</mi><mtext>størst kvadrat</mtext></msub></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msub><mi>A</mi><mtext>rødt kvadrat</mtext></msub>
              <mo>+</mo>
              <msub><mi>A</mi><mtext>grønt kvadrat</mtext></msub>
              <mo>+</mo>
              <mn>2</mn><msub><mi>A</mi><mtext>hvitt rektangel</mtext></msub>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <msup><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup>
            </mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msup><mi>a</mi><mn>2</mn></msup>
              <mo>+</mo>
              <msup><mi>b</mi><mn>2</mn></msup>
              <mo>+</mo>
              <mn>2</mn><mi>a</mi><mi>b</mi>
            </mtd>
          </mtr>
        </mtable>
      </math>
    </li>

    <li>
      <p>Det blå kvadratet har sidelengde <math><mi>a</mi><mo>−</mo><mi>b</mi></math>. Hver av de hvite rektanglene har areal <math><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo><mi>b</mi></math>. Dermed har vi at:</p>

      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mtable columnalign="right center left">
          <mtr>
            <mtd><msub><mi>A</mi><mtext>størst kvadrat</mtext></msub></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msub><mi>A</mi><mtext>blått kvadrat</mtext></msub>
              <mo>+</mo>
              <msub><mi>A</mi><mtext>grønt kvadrat</mtext></msub>
              <mo>+</mo>
              <mn>2</mn><msub><mi>A</mi><mtext>hvitt rektangel</mtext></msub>
            </mtd>
          </mtr>
          <mtr>
            <mtd><msup><mi>a</mi><mn>2</mn></msup></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msup><mrow><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup>
              <mo>+</mo>
              <msup><mi>b</mi><mn>2</mn></msup>
              <mo>+</mo>
              <mn>2</mn><mrow><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo><mi>b</mi></mrow>
            </mtd>
          </mtr>
          <mtr>
            <mtd><msup><mi>a</mi><mn>2</mn></msup></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msup><mrow><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup>
              <mo>+</mo>
              <msup><mi>b</mi><mn>2</mn></msup>
              <mo>+</mo>
              <mn>2</mn><mi>a</mi><mi>b</mi>
              <mo>−</mo>
              <mn>2</mn><msup><mi>b</mi><mn>2</mn></msup>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <msup><mi>a</mi><mn>2</mn></msup>
              <mo>−</mo>
              <mn>2</mn><mi>a</mi><mi>b</mi>
              <mo>+</mo>
              <msup><mi>b</mi><mn>2</mn></msup>
            </mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msup><mrow><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup>
            </mtd>
          </mtr>
        </mtable>
      </math>
    </li>

    <li>
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mtable columnalign="right center left">
          <mtr>
            <mtd>
              <msup><mi>a</mi><mn>2</mn></msup>
              <mo>−</mo>
              <msup><mi>b</mi><mn>2</mn></msup>
            </mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msub><mi>A</mi><mtext>størst kvadrat</mtext></msub>
              <mo>−</mo>
              <msub><mi>A</mi><mtext>grønt kvadrat</mtext></msub>
            </mtd>
          </mtr>
          <mtr>
            <mtd></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msub><mi>A</mi><mtext>blått kvadrat</mtext></msub>
              <mo>+</mo>
              <mn>2</mn><msub><mi>A</mi><mtext>hvitt rektangel</mtext></msub>
            </mtd>
          </mtr>
          <mtr>
            <mtd></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <msup><mrow><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup>
              <mo>+</mo>
              <mn>2</mn><mrow><mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo><mi>b</mi></mrow>
            </mtd>
          </mtr>
          <mtr>
            <mtd></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <mrow>
                <mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo>
                <mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>)</mo>
              </mrow>
            </mtd>
          </mtr>
          <mtr>
            <mtd></mtd>
            <mtd><mo>=</mo></mtd>
            <mtd>
              <mrow>
                <mo>(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>)</mo>
                <mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo>
              </mrow>
            </mtd>
          </mtr>
        </mtable>
      </math>
    </li>
  </ol>
    `
  },
  "determinant": {
    "title": "Parallellogram i koordinatsystem",
    "tags": ["algebra", "areal", "utforsking"],
    "grades": ["9","10", "1P", "1T", "R1"],
    "content": `<p>Gitt punktene

  <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>O</mi><mo>=</mo><mo>(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>)</mo>
  <mo>,</mo>
  <mtext>&nbsp;</mtext>
  <mi>B</mi><mo>=</mo><mo>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>)</mo>
  <mo>,</mo>
  <mtext>&nbsp;</mtext>
  <mi>C</mi><mo>=</mo><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>+</mo><mi>d</mi><mo>)</mo>
  <mo>,</mo>
  <mtext>&nbsp;</mtext>
  <mtext> og&nbsp; </mtext>
  <mi>D</mi><mo>=</mo><mo>(</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo>)</mo>
</math>
</p>
<p>Vis at
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msub>
    <mi>A</mi>
    <mrow>
      <mo>□</mo>
      <mi>O</mi>
      <mi>B</mi>
      <mi>C</mi>
      <mi>D</mi>
    </mrow>
  </msub>
  <mo>=</mo>
  <mi>a</mi><mi>d</mi><mo>-</mo><mi>c</mi><mi>d</mi>
</math>
</p>
<img src="./tasks/determinant.svg"></div>
`,
  "solution": `
  <p>
  Vi lar <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>E</mi>
  <mo>=</mo>
  <mo>(</mo>
  <mi>a</mi>
  <mo>+</mo>
  <mi>c</mi>
  <mo>,</mo>
  <mn>0</mn>
  <mo>)</mo>
</math>
og
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>F</mi>
  <mo>=</mo>
  <mo>(</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>b</mi>
  <mo>+</mo>
  <mi>d</mi>
  <mo>)</mo>
</math>
  . Med 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>O</mi><mi>E</mi></math> 
  som grunnlinje har 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>△</mi><mi>O</mi><mi>E</mi><mi>B</mi></math> 
  høyde 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi></math>, 
  altså er
</p>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mn>2</mn>
  <msub><mi>A</mi><mrow><mi>△</mi><mi>O</mi><mi>E</mi><mi>B</mi></mrow></msub>
  <mo>=</mo>
  <mo>(</mo><mi>a</mi><mo>+</mo><mi>c</mi><mo>)</mo><mi>b</mi>
</math>

<p>Tilsvarende er</p>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mn>2</mn>
  <msub><mi>A</mi><mrow><mi>△</mi><mi>F</mi><mi>D</mi><mi>O</mi></mrow></msub>
  <mo>=</mo>
  <mo>(</mo><mi>b</mi><mo>+</mo><mi>d</mi><mo>)</mo><mi>c</mi>
</math>

<p>
  Da 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>A</mi><mrow><mi>△</mi><mi>O</mi><mi>E</mi><mi>B</mi></mrow></msub><mo>=</mo><msub><mi>A</mi><mrow><mi>△</mi><mi>C</mi><mi>D</mi><mi>F</mi></mrow></msub></math> 
  og 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>A</mi><mrow><mi>△</mi><mi>F</mi><mi>D</mi><mi>O</mi></mrow></msub><mo>=</mo><msub><mi>A</mi><mrow><mi>△</mi><mi>E</mi><mi>B</mi><mi>C</mi></mrow></msub></math>, 
  har vi at
</p>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable>
    <mtr>
      <mtd>
        <msub><mi>A</mi><mrow><mo>□</mo><mi>A</mi><mi>B</mi><mi>C</mi><mi>D</mi></mrow></msub>
      </mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <msub><mi>A</mi><mrow><mo>□</mo><mi>O</mi><mi>E</mi><mi>C</mi><mi>F</mi></mrow></msub>
        <mo>-</mo><mn>2</mn><msub><mi>A</mi><mrow><mi>△</mi><mi>O</mi><mi>B</mi><mi>E</mi></mrow></msub>
        <mo>-</mo><mn>2</mn><msub><mi>A</mi><mrow><mi>△</mi><mi>F</mi><mi>D</mi><mi>O</mi></mrow></msub>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mo>(</mo><mi>a</mi><mo>+</mo><mi>c</mi><mo>)(</mo><mi>b</mi><mo>+</mo><mi>d</mi><mo>)</mo>
        <mo>-</mo>
        <mo>(</mo><mi>a</mi><mo>+</mo><mi>c</mi><mo>)</mo><mi>b</mi>
        <mo>-</mo>
        <mo>(</mo><mi>b</mi><mo>+</mo><mi>d</mi><mo>)</mo><mi>c</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mo>(</mo><mi>a</mi><mo>+</mo><mi>c</mi><mo>)</mo><mi>d</mi>
        <mo>-</mo>
        <mo>(</mo><mi>b</mi><mo>+</mo><mi>d</mi><mo>)</mo><mi>c</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd></mtd>
      <mtd>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mi>a</mi><mi>d</mi><mo>-</mo><mi>b</mi><mi>c</mi>
      </mtd>
    </mtr>
  </mtable>
</math>
<img src="./tasks/determinant_lf.svg"></div>
  `
  }
}

export default tasks
