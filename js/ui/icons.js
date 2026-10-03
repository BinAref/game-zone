/*! BinAref Game Zone — © BinAref. جميع الحقوق محفوظة. */
"use strict";const GameIcons=(()=>{const c=(i,s)=>`<svg class="gi gi-${i}" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">${s}</svg>`,t=()=>{const i=[];for(let s=4;s>=1;s--)i.push(`<circle class="gi-seg" style="--i:${s}" cx="${5+s*6.5}" cy="27" r="${4.6+s*.25}"/>`);return c("snake",`<g class="gi-body">${i.join("")}</g>
       <g class="gi-head" style="--i:0">
         <circle class="gi-head-b" cx="37" cy="27" r="7.4"/>
         <circle class="gi-eye" cx="39.4" cy="24.4" r="2.1"/>
         <circle class="gi-pupil" cx="40.2" cy="24.4" r="1.05"/>
         <path class="gi-tongue" d="M44.4 29.2 h4.4 l-1.9 1.7 m1.9-1.7 l-1.9-1.7"/>
       </g>`)},l=()=>c("snake2048",`<path class="gi-s2-tube-o" d="M8 35 Q14 26 21 31 T35 27"/>
       <path class="gi-s2-tube" d="M8 35 Q14 26 21 31 T35 27"/>
       ${[[9,34.6,4.3,"#f2a30d",2],[18,30.2,4.6,"#13a06f",4],[27,32.4,4.9,"#2f6bea",8]].map(([s,r,j,A,E],T)=>`<g class="gi-s2-num" style="--i:${T}"><circle cx="${s}" cy="${r}" r="${j}" fill="${A}"/><text x="${s}" y="${r+.2}">${E}</text></g>`).join("")}
       <g class="gi-s2-headg">
         <circle class="gi-s2-head" cx="36.5" cy="25.5" r="7.6"/>
         <circle class="gi-eye" cx="39" cy="22.6" r="2.1"/>
         <circle class="gi-pupil" cx="39.8" cy="22.6" r="1.05"/>
         <path class="gi-tongue" d="M43.6 27.6 h4.2 l-1.8 1.6 m1.8-1.6 l-1.8-1.6"/>
       </g>`),g=()=>c("reversi",`<rect class="gi-rv-felt" x="4" y="4" width="40" height="40" rx="8"/>
     <path class="gi-rv-grid" d="M24 4v40M4 24h40"/>
     <circle class="gi-rv-k" cx="14" cy="14" r="7.4"/>
     <circle class="gi-rv-k" cx="34" cy="14" r="7.4"/>
     <circle class="gi-rv-w" cx="34" cy="34" r="7.4"/>
     <g class="gi-rv-flip"><circle class="gi-rv-face" cx="14" cy="34" r="7.4"/></g>`),a=()=>c("gomoku",`<rect class="gi-gm-wood" x="4" y="4" width="40" height="40" rx="8"/>
     <path class="gi-gm-grid" d="M12 4v40M20 4v40M28 4v40M36 4v40M4 12h40M4 20h40M4 28h40M4 36h40"/>
     <circle class="gi-gm-w" cx="20" cy="20" r="4.4"/>
     <circle class="gi-gm-w" cx="28" cy="36" r="4.4"/>
     ${[[12,36],[20,28],[28,20],[36,12]].map(([i,s],r)=>`<circle class="gi-gm-k" style="--i:${r}" cx="${i}" cy="${s}" r="4.4"/>`).join("")}`),h=()=>c("bomberman",`<g class="gi-boom">
       <circle class="gi-boom-ring" cx="22" cy="30" r="13"/>
       <g class="gi-boom-rays">
         <path d="M22 12v-7M22 48v7M6 30H-1M38 30h7M11 19l-5-5M33 19l5-5M11 41l-5 5M33 41l5 5"/>
       </g>
     </g>
     <g class="gi-bomb">
       <path class="gi-fuse" d="M28 20 C 33 13, 38 12, 40 6"/>
       <!-- \u0627\u0644\u0645\u0631\u0643\u0632 \u0635\u0641\u0631 \u0639\u0645\u062F\u0627: offset-path \u064A\u0636\u0639 \u0627\u0644\u0639\u0646\u0635\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0631\u060C \u0641\u0644\u0648 \u062D\u0645\u0644\u062A
            \u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0625\u062D\u062F\u0627\u062B\u064A\u0627\u062A\u0647\u0627 \u0644\u0623\u0632\u064A\u062D\u062A \u0645\u0631\u062A\u064A\u0646 \u0648\u0627\u0628\u062A\u0639\u062F\u062A \u0627\u0644\u0634\u0631\u0627\u0631\u0629 \u0639\u0646 \u0641\u062A\u064A\u0644\u0647\u0627 -->
       <circle class="gi-spark" cx="0" cy="0" r="3.4"/>
       <circle class="gi-bomb-b" cx="22" cy="30" r="13.5"/>
       <ellipse class="gi-shine" cx="17" cy="25" rx="4.4" ry="3" transform="rotate(-35 17 25)"/>
     </g>`),x=()=>c("pong",`<line class="gi-net" x1="24" y1="5" x2="24" y2="43"/>
     <rect class="gi-pad gi-pad-l" x="3"  y="16" width="7" height="17" rx="3.5"/>
     <rect class="gi-pad gi-pad-r" x="38" y="16" width="7" height="17" rx="3.5"/>
     <circle class="gi-ball" cx="24" cy="24" r="5.4"/>`),y=()=>c("xo",`<g class="gi-grid">
       <path d="M20 5v38M28 5v38M5 20h38M5 28h38"/>
     </g>
     <g class="gi-marks">
       <path class="gi-x" style="--i:0" d="M8 8l8 8M16 8l-8 8"/>
       <circle class="gi-o" style="--i:1" cx="24" cy="24" r="5.4"/>
       <path class="gi-x" style="--i:2" d="M32 32l8 8M40 32l-8 8"/>
     </g>
     <path class="gi-win" d="M10 10 L 38 38"/>`),d=()=>c("sudoku",`<rect class="gi-sd-bd" x="5" y="5" width="38" height="38" rx="6"/>
     <path class="gi-sd-thin" d="M18 6 V42 M31 6 V42 M6 18 H42 M6 31 H42"/>
     <path class="gi-sd-thick" d="M24.5 6 V42 M6 24.5 H42"/>
     <text class="gi-sd-n gi-sd-a" x="11.5" y="16">5</text>
     <text class="gi-sd-n gi-sd-b" x="37.5" y="16">3</text>
     <text class="gi-sd-n gi-sd-c" x="24.5" y="29">7</text>
     <text class="gi-sd-n gi-sd-d" x="11.5" y="42">1</text>
     <text class="gi-sd-n gi-sd-e" x="37.5" y="42">9</text>`),o=()=>c("patches",`<rect class="gi-pt-bd" x="5" y="5" width="38" height="38" rx="7"/>
     <rect class="gi-pt-p gi-pt-1" x="8" y="8" width="20" height="10" rx="2"/>
     <rect class="gi-pt-p gi-pt-2" x="30" y="8" width="10" height="22" rx="2"/>
     <rect class="gi-pt-p gi-pt-3" x="8" y="20" width="10" height="20" rx="2"/>
     <rect class="gi-pt-p gi-pt-4" x="20" y="20" width="8" height="8" rx="2"/>
     <rect class="gi-pt-p gi-pt-5" x="20" y="30" width="20" height="10" rx="2"/>`),n=()=>c("zip",`<rect class="gi-zp-bd" x="5" y="5" width="38" height="38" rx="7"/>
     <path class="gi-zp-line" d="M13 13 H35 V24 H24 V35 H35"/>
     <circle class="gi-zp-dot" cx="13" cy="13" r="4"/>
     <circle class="gi-zp-dot" cx="24" cy="24" r="4"/>
     <circle class="gi-zp-dot" cx="35" cy="35" r="4"/>`),p=()=>c("queens",`<rect class="gi-qn-bd" x="5" y="5" width="38" height="38" rx="6"/>
     <rect class="gi-qn-a" x="7" y="7" width="16" height="16"/>
     <rect class="gi-qn-b" x="23" y="7" width="18" height="10"/>
     <rect class="gi-qn-c" x="23" y="17" width="18" height="14"/>
     <rect class="gi-qn-d" x="7" y="23" width="16" height="18"/>
     <rect class="gi-qn-e" x="23" y="31" width="18" height="10"/>
     <path class="gi-qn-grid" d="M23 7 V41 M7 23 H23 M23 17 H41 M23 31 H41"/>
     <path class="gi-qn-crown" d="M11 18 l2-6 3 4 3-6 3 6 3-4 2 6 z"/>`),M=()=>c("ludo",`<rect class="gi-lu-bd" x="4" y="4" width="40" height="40" rx="7"/>
     <rect class="gi-lu-y0" x="7" y="7" width="13" height="13" rx="3"/>
     <rect class="gi-lu-y1" x="28" y="7" width="13" height="13" rx="3"/>
     <rect class="gi-lu-y2" x="28" y="28" width="13" height="13" rx="3"/>
     <rect class="gi-lu-y3" x="7" y="28" width="13" height="13" rx="3"/>
     <path class="gi-lu-cross" d="M20 7 H28 V20 H41 V28 H28 V41 H20 V28 H7 V20 H20 Z"/>
     <g class="gi-lu-die">
       <rect x="17" y="17" width="14" height="14" rx="3.5"/>
       <circle class="gi-lu-pip" cx="21" cy="21" r="1.7"/>
       <circle class="gi-lu-pip" cx="27" cy="27" r="1.7"/>
       <circle class="gi-lu-pip gi-lu-pip3" cx="24" cy="24" r="1.7"/>
     </g>`),u=()=>c("connect4",`<rect class="gi-c4-board" x="4" y="12" width="40" height="32" rx="6"/>
     <g class="gi-c4-holes">
       <circle cx="11" cy="20" r="4"/><circle cx="21" cy="20" r="4"/>
       <circle cx="31" cy="20" r="4"/><circle cx="41" cy="20" r="4"/>
       <circle cx="11" cy="30" r="4"/><circle cx="21" cy="30" r="4"/>
       <circle cx="31" cy="30" r="4"/><circle cx="41" cy="30" r="4"/>
       <circle cx="11" cy="40" r="4"/><circle cx="21" cy="40" r="4"/>
       <circle cx="31" cy="40" r="4"/><circle cx="41" cy="40" r="4"/>
     </g>
     <circle class="gi-c4-r" style="--i:0" cx="11" cy="40" r="4"/>
     <circle class="gi-c4-y" style="--i:1" cx="21" cy="40" r="4"/>
     <circle class="gi-c4-r" style="--i:2" cx="31" cy="40" r="4"/>
     <circle class="gi-c4-y" style="--i:3" cx="41" cy="30" r="4"/>
     <circle class="gi-c4-r gi-c4-last" style="--i:4" cx="41" cy="40" r="4"/>
     <path class="gi-c4-win" d="M11 40 H 41"/>`),w=()=>c("lightcycles",`<rect class="gi-lc-field" x="4" y="6" width="40" height="36" rx="5"/>
     <path class="gi-lc-a" d="M9 37 H 24 V 14 H 33"/>
     <path class="gi-lc-b" d="M39 11 H 24 V 34 H 15"/>
     <circle class="gi-lc-ha" cx="33" cy="14" r="3.2"/>
     <circle class="gi-lc-hb" cx="15" cy="34" r="3.2"/>
     <circle class="gi-lc-boom" cx="24" cy="24" r="6"/>`),m=()=>c("dots",`<g class="gi-dt-lines">
       <path class="gi-dt-l" style="--i:0" d="M14 14 H 34"/>
       <path class="gi-dt-l" style="--i:1" d="M14 14 V 34"/>
       <path class="gi-dt-l" style="--i:2" d="M34 14 V 34"/>
       <path class="gi-dt-l" style="--i:3" d="M14 34 H 34"/>
     </g>
     <rect class="gi-dt-fill" x="15" y="15" width="18" height="18" rx="3"/>
     <g class="gi-dt-dots">
       <circle cx="14" cy="14" r="3"/><circle cx="34" cy="14" r="3"/>
       <circle cx="14" cy="34" r="3"/><circle cx="34" cy="34" r="3"/>
     </g>`),b=()=>c("soccer",`<g class="gi-so-dots">
       <circle cx="12" cy="12" r="2"/><circle cx="24" cy="12" r="2"/><circle cx="36" cy="12" r="2"/>
       <circle cx="12" cy="24" r="2"/><circle cx="24" cy="24" r="2"/><circle cx="36" cy="24" r="2"/>
       <circle cx="12" cy="36" r="2"/><circle cx="24" cy="36" r="2"/><circle cx="36" cy="36" r="2"/>
     </g>
     <path class="gi-so-line" d="M12 36 L24 24 L36 36 L24 12"/>
     <circle class="gi-so-ball" cx="24" cy="12" r="4"/>`),v=()=>c("territory",`<g class="gi-tr-grid">
       <path d="M12 12 H36 M12 24 H36 M12 36 H36 M12 12 V36 M24 12 V36 M36 12 V36"/>
     </g>
     <circle class="gi-tr-foe" cx="24" cy="24" r="4"/>
     <g class="gi-tr-ring">
       <circle style="--i:0" cx="12" cy="24" r="3.6"/>
       <circle style="--i:1" cx="24" cy="12" r="3.6"/>
       <circle style="--i:2" cx="36" cy="24" r="3.6"/>
       <circle style="--i:3" cx="24" cy="36" r="3.6"/>
     </g>`),k=()=>c("checkers",`<g class="gi-ck-sq">
       <rect x="6" y="6" width="12" height="12"/><rect x="30" y="6" width="12" height="12"/>
       <rect x="18" y="18" width="12" height="12"/>
       <rect x="6" y="30" width="12" height="12"/><rect x="30" y="30" width="12" height="12"/>
     </g>
     <circle class="gi-ck-foe" cx="24" cy="24" r="5"/>
     <circle class="gi-ck-me" cx="36" cy="36" r="5.5"/>`),H=()=>c("quoridor",`<g class="gi-qd-cells">
       <rect x="7" y="7" width="10" height="10" rx="2"/><rect x="19" y="7" width="10" height="10" rx="2"/>
       <rect x="31" y="7" width="10" height="10" rx="2"/>
       <rect x="7" y="19" width="10" height="10" rx="2"/><rect x="19" y="19" width="10" height="10" rx="2"/>
       <rect x="31" y="19" width="10" height="10" rx="2"/>
       <rect x="7" y="31" width="10" height="10" rx="2"/><rect x="19" y="31" width="10" height="10" rx="2"/>
       <rect x="31" y="31" width="10" height="10" rx="2"/>
     </g>
     <rect class="gi-qd-wall" x="17" y="16.5" width="24" height="3" rx="1.5"/>
     <circle class="gi-qd-pawn" cx="24" cy="36" r="4"/>`),f=()=>c("chess",`<g class="gi-ch-sq">
       <rect x="6" y="6" width="12" height="12"/><rect x="30" y="6" width="12" height="12"/>
       <rect x="18" y="18" width="12" height="12"/>
       <rect x="6" y="30" width="12" height="12"/><rect x="30" y="30" width="12" height="12"/>
     </g>
     <text class="gi-ch-pc" x="24" y="32" text-anchor="middle">\u265E&#xFE0E;</text>`),$=()=>c("hex",`<g class="gi-hx-cells">
       <path d="M24 6 l7 4 v8 l-7 4 -7-4 v-8 z"/>
       <path d="M12 18 l7 4 v8 l-7 4 -7-4 v-8 z"/>
       <path d="M36 18 l7 4 v8 l-7 4 -7-4 v-8 z"/>
       <path d="M24 30 l7 4 v8 l-7 4 -7-4 v-8 z"/>
     </g>
     <g class="gi-hx-on">
       <circle style="--i:0" cx="24" cy="14" r="4"/>
       <circle style="--i:1" cx="24" cy="26" r="4"/>
       <circle style="--i:2" cx="24" cy="38" r="4"/>
     </g>`),q=()=>c("uno",`<rect class="gi-un-back" x="8" y="12" width="22" height="30" rx="4"
           transform="rotate(-16 19 27)"/>
     <rect class="gi-un-front" x="18" y="8" width="22" height="30" rx="4"/>
     <ellipse class="gi-un-oval" cx="29" cy="23" rx="8" ry="11" transform="rotate(-20 29 23)"/>
     <text class="gi-un-txt" x="29" y="29" text-anchor="middle">9</text>`),V=()=>c("mancala",`<rect class="gi-mc-board" x="3" y="15" width="42" height="18" rx="8"/>
     <g class="gi-mc-pits">
       <circle cx="16" cy="24" r="4.2"/><circle cx="24" cy="24" r="4.2"/>
       <circle cx="32" cy="24" r="4.2"/>
     </g>
     <ellipse class="gi-mc-store" cx="40" cy="24" rx="4" ry="6.5"/>
     <circle class="gi-mc-seed" style="--i:0" cx="16" cy="24" r="2.2"/>
     <circle class="gi-mc-seed" style="--i:1" cx="16" cy="24" r="2.2"/>
     <circle class="gi-mc-seed" style="--i:2" cx="16" cy="24" r="2.2"/>`),z=()=>c("morris",`<g class="gi-mo-lines">
       <path d="M10 10 H 38 M10 24 H 38 M10 38 H 38 M10 10 V 38 M24 10 V 38 M38 10 V 38 M10 10 L 38 38 M38 10 L 10 38"/>
     </g>
     <g class="gi-mo-dots">
       <circle cx="10" cy="10" r="2"/><circle cx="24" cy="10" r="2"/><circle cx="38" cy="10" r="2"/>
       <circle cx="10" cy="24" r="2"/><circle cx="24" cy="24" r="2"/><circle cx="38" cy="24" r="2"/>
       <circle cx="10" cy="38" r="2"/><circle cx="24" cy="38" r="2"/><circle cx="38" cy="38" r="2"/>
     </g>
     <circle class="gi-mo-b" style="--i:0" cx="10" cy="38" r="5"/>
     <circle class="gi-mo-b" style="--i:1" cx="38" cy="10" r="5"/>
     <circle class="gi-mo-a" style="--i:0" cx="10" cy="10" r="5"/>
     <circle class="gi-mo-a" style="--i:1" cx="24" cy="24" r="5"/>
     <circle class="gi-mo-slide" cx="38" cy="38" r="5"/>`),e={snake:t(),snake2048:l(),reversi:g(),gomoku:a(),bomberman:h(),pong:x(),xo:y(),connect4:u(),ludo:M(),queens:p(),zip:n(),patches:o(),sudoku:d(),lightcycles:w(),dots:m(),soccer:b(),territory:v(),checkers:k(),quoridor:H(),chess:f(),hex:$(),uno:q(),mancala:V(),morris:z()},L={snake:"\u{1F40D}",snake2048:"\u{1F40D}",reversi:"\u26AB",gomoku:"\u26AA",bomberman:"\u{1F4A3}",pong:"\u{1F3D3}",xo:"\u2B55",connect4:"\u{1F534}",lightcycles:"\u{1F3CD}\uFE0F",dots:"\u2B1C",mancala:"\u{1FAD8}",morris:"\u{1F53A}",uno:"\u{1F0CF}",hex:"\u2B21",chess:"\u265E",quoridor:"\u{1F9F1}",checkers:"\u26C0",territory:"\u26AB",soccer:"\u26BD",ludo:"\u{1F3B2}",queens:"\u{1F451}",zip:"\u{1F517}",patches:"\u{1F9E9}",sudoku:"\u{1F522}"};return{svg(i){return e[i]||`<span class="gi-emoji">${L[i]||"\u{1F3B2}"}</span>`},has(i){return!!e[i]},hydrate(i){$$("[data-icon]",i||document).forEach(s=>{const r=s.getAttribute("data-icon");s.dataset.iconDone!==r&&(s.dataset.iconDone=r,s.innerHTML=GameIcons.svg(r))})}}})();window.GameIcons=GameIcons;
