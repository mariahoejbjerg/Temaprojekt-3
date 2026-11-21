# Projektbeskrivelse

- Projektet er en digital brugergrænseflade, eksempelvis en hjemmeside eller webapp.
- Figma-designet, som projektet har adgang til, er den primære visuelle og strukturelle source of truth for projektet.
- Brug Figma MCP til at undersøge designet og hente relevante oplysninger.
- Implementeringen skal tage udgangspunkt i det faktiske Figma-design frem for egne designmæssige antagelser.
- Opfind ikke sektioner, komponenter, indhold, styling eller funktionalitet, som ikke kan begrundes ud fra Figma eller brugerens konkrete instruktioner.
- Brug semantisk HTML som udgangspunkt.
- Skriv al kode på engelsk.
- Svar, forklaringer og opsummeringer til brugeren skal være på dansk.

# Figma og Figma MCP

- Figma er projektets primære source of truth for:
    - Layout.
    - Visuelt hierarki.
    - Indholdsstruktur.
    - Tekstindhold, når det fremgår af designet.
    - Farver.
    - Typografi.
    - Spacing.
    - Størrelser.
    - Grid.
    - Alignment.
    - Komponenter.
    - Billeder og grafiske elementer.
    - States og varianter, når de findes.
    - Responsive variationer, når de findes.
- Undersøg altid Figma via Figma MCP, før der skrives eller ændres kode.
- Begynd ikke implementeringen ud fra screenshots, hukommelse eller antagelser, hvis de relevante oplysninger kan undersøges gennem Figma MCP.
- Find først de relevante pages, frames, sections og components i Figma.
- Undersøg derefter de relevante designoplysninger via Figma MCP.
- Brug Figma MCP målrettet og hent de oplysninger, der er nødvendige for den konkrete opgave.
- Genbrug information, der allerede er hentet fra Figma, når den fortsat er relevant.
- Kontrollér relevante Figma-elementer igen, hvis der er tvivl om implementeringen.
- Hvis Figma og eksisterende kode afviger fra hinanden, skal den konkrete opgave og Figma som udgangspunkt prioriteres, men eksisterende funktionalitet må ikke ødelægges uden en klar grund.
- Hvis brugerens konkrete instruktion er i konflikt med Figma, har brugerens instruktion prioritet.
- Gæt ikke på designværdier, som kan aflæses eller hentes fra Figma.
- Brug faktiske værdier fra Figma, når de er tilgængelige.
- Undgå at "forbedre", redesigne eller personliggøre Figma-designet på eget initiativ.
- Hvis en vigtig oplysning ikke findes i Figma, eksisterende kode eller brugerens instruktioner, stil ét kort og konkret spørgsmål, hvis oplysningen har væsentlig betydning for resultatet.
- Foretag kun mindre og reversible antagelser, når de er nødvendige for implementeringen.
- Oplys brugeren kort om relevante antagelser.

# Arbejdsgang før implementering

Før kode ændres skal følgende rækkefølge anvendes:

1. Læs brugerens konkrete opgave.
2. Undersøg projektets eksisterende filer, struktur og teknologier.
3. Undersøg den relevante Figma-fil via Figma MCP.
4. Identificér de relevante Figma-pages, frames, components og assets.
5. Undersøg de designværdier og den struktur, der er nødvendige for opgaven.
6. Sammenhold Figma med den eksisterende implementering.
7. Planlæg den mindst omfattende ændring, der implementerer Figma korrekt.
8. Foretag først derefter kodeændringer.
9. Validér implementeringen.
10. Fejlfind eventuelle fejl, der er opstået.
11. Sammenlign det færdige resultat med Figma igen, når værktøjerne gør dette muligt.

Spring ikke Figma-undersøgelsen over, selv hvis opgaven umiddelbart virker simpel.

# Teknologier

- Brug primært HTML5 til dokumentstruktur.
- Brug CSS til at implementere det visuelle design fra Figma.
- Brug JavaScript, når funktionalitet eller interaktion kræver det.
- Brug eksisterende teknologier og værktøjer i projektet.
- Brug indbyggede browser- og HTML-funktioner, når de kan løse opgaven tilfredsstillende.
- Tilføj ikke nye frameworks, biblioteker eller pakker uden brugerens tilladelse.
- Respekter projektets eksisterende package manager og lockfiler.
- Udskift ikke projektets eksisterende teknologistack uden en direkte anmodning.
- Undgå JavaScript til funktionalitet, der kan løses hensigtsmæssigt med HTML og CSS.

# Projektstruktur

- Undersøg den eksisterende kode og filstruktur, før noget ændres.
- Følg projektets eksisterende struktur og navngivning.
- Genbrug eksisterende filer, komponenter og patterns, når det er hensigtsmæssigt.
- Opret kun filer og mapper, der er nødvendige for opgaven.
- Hvis projektet ikke allerede har en relevant struktur, kan følgende bruges som udgangspunkt:
    - `index.html` til forsiden.
    - Separate HTML-filer til nødvendige undersider.
    - `assets` eller `images` til billeder og medier.
    - `styles` til CSS.
    - `scripts` til JavaScript.
- Flyt, omdøb eller slet ikke eksisterende filer uden en konkret grund.
- Ændr ikke filer, der ligger uden for opgavens omfang.
- Undgå unødvendig duplikering af markup, styling og funktionalitet.

# HTML-standarder

- Brug gyldig HTML5.
- Brug `<!doctype html>`.
- Brug korrekt `lang`-attribut ud fra sidens faktiske sprog.
- Angiv charset.
- Brug en beskrivende sidetitel.
- Brug semantiske HTML-elementer, når deres betydning matcher indholdet.
- Foretræk blandt andet:
    - `header`.
    - `nav`.
    - `main`.
    - `section`.
    - `article`.
    - `aside`.
    - `footer`.
    - `address`.
- Brug ikke semantiske elementer alene på grund af deres standardstyling.
- Brug en logisk rækkefølge af overskrifter.
- Brug links til navigation og knapper til handlinger.
- Brug indbyggede interaktive HTML-elementer frem for generiske elementer, når det er muligt.
- Forbind formularfelter med deres labels.
- Giv meningsbærende billeder relevante `alt`-tekster.
- Brug tom `alt`-tekst til rent dekorative billeder, når det er korrekt.
- Sørg for, at interaktive elementer har et tilgængeligt navn.
- Undgå:
    - Forældede HTML-elementer.
    - Dublerede ID'er.
    - Tomme links.
    - Unødvendige wrapper-elementer.
    - Unødvendig brug af `div`, hvor et semantisk element er mere passende.

# CSS og Figma

- CSS skal implementeres ud fra det relevante Figma-design.
- Det er tilladt at oprette og ændre CSS som en del af implementeringen.
- Undersøg relevante designværdier gennem Figma MCP før styling implementeres.
- Brug så vidt muligt værdier fra Figma til:
    - Farver.
    - Fontfamilier.
    - Fontstørrelser.
    - Fontvægte.
    - Line-height.
    - Letter-spacing.
    - Spacing.
    - Padding.
    - Margin.
    - Gap.
    - Bredder og højder.
    - Border.
    - Border-radius.
    - Shadows.
    - Layout.
    - Alignment.
- Brug eksisterende design tokens eller CSS custom properties, hvis projektet allerede har dem.
- Hvis Figma viser et konsistent designsystem, bør gentagne værdier implementeres konsistent frem for som tilfældige enkeltværdier.
- Undgå magiske værdier, hvis værdien allerede findes som en del af projektets eller Figmas designsystem.
- Brug ikke inline styling som standard.
- Hold styling i projektets eksisterende CSS-struktur.
- Opret ikke unødvendige stylesheets.
- Undgå `!important`, medmindre der er en konkret teknisk grund.
- Undgå at tilføje visuelle effekter, animationer, gradients, shadows eller andre detaljer, der ikke understøttes af Figma.
- CSS skal understøtte designet uden at gøre HTML-strukturen unødvendigt kompleks.

# Responsive design

- Undersøg Figma for desktop-, tablet- og mobile frames eller andre responsive varianter.
- Implementér responsive layouts ud fra de varianter, der faktisk findes i Figma.
- Gæt ikke på specifikke responsive designs, hvis de findes i Figma og kan undersøges via MCP.
- Når Figma ikke definerer alle viewport-størrelser, skal layoutet tilpasses på en konservativ måde, så designets struktur, hierarki og relationer bevares.
- Undgå horisontal scrolling, medmindre designet eller funktionaliteten kræver det.
- Sørg for, at indhold fortsat er læsbart og funktionelt mellem definerede breakpoints.
- Brug moderne CSS-layout som Flexbox og Grid, når det passer til designet.

# Gestaltlove og designprincipper

- Implementeringen skal bevare de visuelle relationer og det hierarki, der fremgår af Figma.
- Brug Gestaltprincipper som støtte til at forstå designets struktur, ikke som anledning til at redesigne Figma.

- Figur og baggrund:
    - Sørg for tydelig visuel adskillelse mellem vigtigt indhold og baggrund.
    - Bevar kontrast og hierarki fra Figma.
    - Undgå styling, der gør forgrund og baggrund unødigt svære at skelne.

- Nærhed:
    - Elementer, der visuelt og funktionelt hører sammen, skal også implementeres som sammenhørende grupper.
    - Bevar relevante spacing-relationer fra Figma.
    - Brug afstand aktivt til at kommunikere gruppering.

- Lighed:
    - Elementer med samme funktion eller betydning bør have et konsistent visuelt udtryk, når dette understøttes af Figma.
    - Genbrug komponenter og styling for gentagne elementer.

- Lukkethed:
    - Bevar visuelle grupperinger skabt gennem containere, cards, baggrunde, borders eller andre afgrænsninger i Figma.
    - Brug ikke ekstra containere alene for visuel gruppering, hvis samme effekt kan opnås semantisk og enklere.

- Forbundethed:
    - Bevar visuelle forbindelser mellem elementer, når Figma bruger linjer, farver, containere eller andre relationer til at vise sammenhæng.

- Gestaltprincipperne må ikke bruges til at tilsidesætte et eksplicit Figma-design.
- Hvis et designvalg virker usædvanligt, implementér først det dokumenterede design frem for automatisk at "rette" det.

# Accessibility

- Accessibility skal tænkes ind i implementeringen uden unødigt at ændre Figma-designet.
- Brug semantisk HTML som første lag af accessibility.
- Sørg for tastaturadgang til interaktive funktioner.
- Bevar synlige focus states eller implementér passende focus states, hvis de mangler.
- Brug ikke farve som eneste måde at kommunikere vigtig betydning på.
- Sørg for korrekte labels og tilgængelige navne.
- Brug ARIA kun, når native HTML ikke er tilstrækkeligt.
- Undgå overflødig eller forkert ARIA.
- Hvis Figma indeholder et designvalg, der giver et væsentligt accessibility-problem, må problemet ikke skjules. Implementér en så designnær og tilgængelig løsning som muligt og oplys brugeren kort om afvigelsen.

# Assets og billeder

- Undersøg Figma MCP for relevante billeder, ikoner, logoer og andre assets.
- Genbrug eksisterende assets i projektet, når de matcher Figma.
- Brug assets fra Figma, når de er tilgængelige og nødvendige for designet.
- Erstat ikke specifikke Figma-assets med tilfældige alternativer.
- Opfind ikke billeder, logoer eller ikoner.
- Bevar passende aspect ratio.
- Optimér assets på en måde, der ikke skaber en synlig afvigelse fra Figma.
- Brug ikke materiale uden passende brugsret.
- Brug SVG til vektorgrafik, når det er hensigtsmæssigt og tilgængeligt.

# Kodestandarder

- Skriv al kode på engelsk.
- Det gælder blandt andet:
    - Variabelnavne.
    - Funktionsnavne.
    - Class-navne.
    - ID'er.
    - Filnavne.
    - Tekniske kommentarer.
- Brugerrettet indhold skal følge sproget i Figma eller brugerens instruktion.
- Brug ensartet indrykning.
- Brug beskrivende navne.
- Hold kode enkel og læsbar.
- Undgå unødvendig abstraktion.
- Undgå duplikeret kode, når en enkel genbrugelig løsning er mere passende.
- Tilføj kun kommentarer, når de forklarer en ikke-indlysende beslutning.
- Placer ikke adgangskoder, tokens, API keys eller andre hemmeligheder i klientkode.
- Håndter indhold fra brugere og eksterne kilder sikkert.

# Arbejdsform

- Undersøg relevante filer før ændringer.
- Undersøg altid Figma via MCP før implementering.
- Følg eksisterende kode, struktur og navngivning.
- Lav så få ændringer som nødvendigt for at løse opgaven korrekt.
- Bevar eksisterende funktionalitet, medmindre opgaven kræver en ændring.
- Undgå at omskrive kode, der ikke er relevant for opgaven.
- Tilføj ikke funktioner, som brugeren ikke har bedt om, og som ikke fremgår af Figma.
- Gæt ikke, når Figma eller projektet kan give svaret.
- Stil højst ét kort og konkret spørgsmål, hvis afgørende information mangler.
- Foretag kun mindre og reversible antagelser.
- Kontrollér ændringerne før afslutning.
- Påstå kun, at en test, validator eller kommando er bestået, hvis den faktisk er blevet kørt.

# Begrænsninger

- Figma må ikke behandles som løs inspiration. Det er projektets primære designreference.
- Redesignet må ikke ændres efter personlig præference.
- Opfind ikke:
    - Tekstindhold.
    - Funktioner.
    - Navigation.
    - Sektioner.
    - Designkomponenter.
    - Farver.
    - Typografi.
    - Ikoner.
    - Billeder.
- Tilføj ikke backend, database, authentication, login, betaling eller andre større systemer uden en direkte anmodning.
- Tilføj ikke nye frameworks, biblioteker eller runtime-afhængigheder uden tilladelse.
- Markér nødvendigt midlertidigt indhold tydeligt som placeholder, hvis det ikke kan hentes fra Figma eller projektet.
- Udfør ikke destruktive handlinger, hvis omfanget er uklart.
- Overskriv ikke fungerende kode alene for at opnå en anden kodestil.

# Test og kvalitet

- Kontrollér alle ændrede filer før afslutning.
- Kontrollér, at opgaven er løst som beskrevet.
- Sammenhold resultatet med de relevante Figma-frames.
- Kontrollér især:
    - Struktur.
    - Layout.
    - Spacing.
    - Typografi.
    - Farver.
    - Størrelser.
    - Alignment.
    - Assets.
    - Komponenter.
    - Responsive layouts.
- Validér ændrede HTML-filer med en tilgængelig HTML-validator eller linter.
- Kontrollér for:
    - Syntaksfejl.
    - Ugyldig HTML-struktur.
    - Ugyldig indlejring.
    - Dublerede ID'er.
    - Manglende labels.
    - Manglende eller forkerte `alt`-tekster.
    - Forkerte interne links.
    - Ulogisk overskriftshierarki.
    - Accessibility-problemer.
- Kontrollér ændret CSS for:
    - Syntaksfejl.
    - Unødvendig duplikering.
    - Ubrugte regler, når dette kan verificeres sikkert.
    - Utilsigtede overrides.
    - Responsive problemer.
- Kør projektets eksisterende relevante:
    - Tests.
    - Linters.
    - Build-kommandoer.
    - Valideringskommandoer.
- Kør relevant syntakskontrol, hvis JavaScript eller andre programmeringssprog ændres.
- Ret fejl, som ændringerne har forårsaget.
- Kør fejlede kontroller igen efter rettelser.
- Fejlfind eventuelle fejl i koden, før opgaven afsluttes.
- Gennemgå til sidst ændringerne for utilsigtede ændringer.
- Oplys, hvis en nødvendig kontrol ikke kunne udføres, og forklar kort hvorfor.
- Påstå aldrig, at noget er visuelt identisk med Figma, medmindre det faktisk er blevet kontrolleret.

# Svar fra CODEX

- Svar på dansk.
- Hold tekniske identifiers og kode på engelsk.
- Forklar kort, hvad der er ændret.
- Angiv hvilke filer der er oprettet eller ændret.
- Angiv hvilke relevante Figma-frames eller komponenter der blev undersøgt via Figma MCP.
- Angiv hvilke tests og kontroller der er kørt.
- Oplys om kontrollerne bestod.
- Gør opmærksom på relevante:
    - Fejl.
    - Afvigelser fra Figma.
    - Risici.
    - Begrænsninger.
    - Antagelser.
    - Manglende oplysninger.
- Hold svaret kort og konkret.
- Påstå ikke, at opgaven er færdig, hvis nødvendig validering fejler.
- Fejlfind eventuelle fejl, der skyldes implementeringen, inden det afsluttende svar gives.