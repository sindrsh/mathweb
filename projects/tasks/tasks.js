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
          <mtable columnalign="left">
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
    }
}

export default tasks
