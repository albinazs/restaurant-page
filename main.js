(()=>{"use strict";var e={d:(i,t)=>{for(var n in t)e.o(t,n)&&!e.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:t[n]})},o:(e,i)=>Object.prototype.hasOwnProperty.call(e,i)};e.d({},{k:()=>r,U:()=>c});const i=[{itemName:"Nova Scotia Lobster Roll",description:"choice of house-cut fries or greens",price:"26"},{itemName:"Ricotta Gnocchi",description:"cherry tomato, la bomba, stracciatella",price:"32"},{itemName:"Spencer's Burger",description:"red onion jam, bacon, arugula, provolone cheese, mushrooms, horseradish mayo",price:"26"},{itemName:"Miso Glazed Salmon",description:"king oyster mushroom, saffron aioli",price:"38"},{itemName:"Spiced Cornish Hen",description:"grilled corn, fingerling potato, baby watercress salad",price:"40"}],t=[{itemName:"Oysters",description:"supplied by Maisy's Pearl ",price:"45"},{itemName:"Tuna Crudo",description:"crispy maitake mushroom, chili oil",price:"22"},{itemName:"Shrimp Cocktail",description:"herb salad, green peppercorn cocktail sauce",price:"24"},{itemName:"Salmon Tataki",description:"wasabi mayo, green bean salad",price:"28"},{itemName:"Spencer’s Platter",description:"oysters, shrimp, salmon tataki, snow crab, accompaniments",price:"55"}],n=()=>{const e=c("div","menu",null);r.appendChild(e);const n=a("Starters");e.appendChild(n),i.forEach((i=>{const t=o(`${i.itemName}`,`${i.description}`,`${i.price}`);e.appendChild(t)}));const p=a("Main dishes");e.appendChild(p),t.forEach((i=>{const t=o(`${i.itemName}`,`${i.description}`,`${i.price}`);e.appendChild(t)}));const s=c("p","footer","Osteria at the waterfront is a part of Spencer group");e.appendChild(s)},o=(e,i,t)=>{const n=c("section","menu-item",null),o=c("p","item-name",`${e}`),a=c("p","item-desc",`${i}`),r=c("p","item-desc",`$${t}`);return n.appendChild(o),n.appendChild(a),n.appendChild(r),n},a=e=>{const i=c("div",null,null),t=c("p","cursive-menu",`${e}`),n=c("hr",null,null);return i.appendChild(t),i.appendChild(n),i},r=document.querySelector(".content"),c=(e,i,t)=>{const n=document.createElement(e);return i&&n.classList.add(i),t&&(n.textContent=t),n},p=()=>r.innerHTML="",s=()=>{const e=c("header",null,null),i=c("button",null,"Home"),t=c("button",null,"Menu"),n=c("button",null,"Contact");i.addEventListener("click",(()=>l())),t.addEventListener("click",(()=>d())),n.addEventListener("click",(()=>m())),r.appendChild(e),e.appendChild(i),e.appendChild(t),e.appendChild(n)},l=()=>{p(),s(),(()=>{const e=c("div","home",null),i=c("p","cursive","Osteria"),t=c("p",null,"at the waterfront"),n=c("p","footer","Osteria at the waterfront is a part of Spencer group");r.appendChild(e),e.appendChild(i),e.appendChild(t),e.appendChild(n)})(),console.log("home")},d=()=>{p(),s(),n(),console.log("menu")},m=()=>{p(),s(),n(),console.log("contact")};l()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxLQUFNLE1BQzNDZ0MsRUFBYWhDLEVBQWtCLFNBQVUsS0FBTSxRQUMvQ2lDLEVBQWFqQyxFQUFrQixTQUFVLEtBQU0sUUFDL0NrQyxFQUFnQmxDLEVBQWtCLFNBQVUsS0FBTSxXQUV4RGdDLEVBQVdHLGlCQUFpQixTQUFTLElBQU1DLE1BQzNDSCxFQUFXRSxpQkFBaUIsU0FBUyxJQUFNRSxNQUMzQ0gsRUFBY0MsaUJBQWlCLFNBQVMsSUFBTUcsTUFFOUNyQyxFQUFRQyxZQUFZNkIsR0FDcEJBLEVBQU83QixZQUFZOEIsR0FDbkJELEVBQU83QixZQUFZK0IsR0FDbkJGLEVBQU83QixZQUFZZ0MsRUFBYyxFQUcvQkUsRUFBaUIsS0FDbkJSLElBQ0FFLElGbENzQixNQUV0QixNQUFNL0IsRUFBVUMsRUFBa0IsTUFBTyxPQUFRLE1BQzNDdUMsRUFBY3ZDLEVBQWtCLElBQUssVUFBVyxXQUNoRHdDLEVBQVl4QyxFQUFrQixJQUFLLEtBQU0scUJBQ3pDVSxFQUFTVixFQUFrQixJQUFLLFNBQVUsd0RBRWhEQyxFQUFRQyxZQUFZSCxHQUNwQkEsRUFBUUcsWUFBWXFDLEdBQ3BCeEMsRUFBUUcsWUFBWXNDLEdBQ3BCekMsRUFBUUcsWUFBWVEsRUFBTyxFRXlCM0IrQixHQUNBQyxRQUFRQyxJQUFJLE9BQU8sRUFHakJOLEVBQWlCLEtBQ25CVCxJQUNBRSxJQUNBaEMsSUFDQTRDLFFBQVFDLElBQUksT0FBTyxFQUdqQkwsRUFBb0IsS0FDdEJWLElBQ0FFLElBQ0FoQyxJQUNBNEMsUUFBUUMsSUFBSSxVQUFVLEVBRzFCUCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGl2TWFpbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnaG9tZScsIG51bGwpO1xuICAgIGNvbnN0IGN1cnNpdmVQYXJhID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY3Vyc2l2ZScsICdPc3RlcmlhJyk7XG4gICAgY29uc3QgYmFzaWNQYXJhID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCBudWxsLCAnYXQgdGhlIHdhdGVyZnJvbnQnKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdmb290ZXInLCAnT3N0ZXJpYSBhdCB0aGUgd2F0ZXJmcm9udCBpcyBhIHBhcnQgb2YgU3BlbmNlciBncm91cCcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZNYWluKTtcbiAgICBkaXZNYWluLmFwcGVuZENoaWxkKGN1cnNpdmVQYXJhKTtcbiAgICBkaXZNYWluLmFwcGVuZENoaWxkKGJhc2ljUGFyYSk7XG4gICAgZGl2TWFpbi5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuXG5cbiIsImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IHN0YXJ0ZXJzID0gW1xuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J05vdmEgU2NvdGlhIExvYnN0ZXIgUm9sbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOidjaG9pY2Ugb2YgaG91c2UtY3V0IGZyaWVzIG9yIGdyZWVucycsXG4gICAgICAgIHByaWNlOiAnMjYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonUmljb3R0YSBHbm9jY2hpJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2NoZXJyeSB0b21hdG8sIGxhIGJvbWJhLCBzdHJhY2NpYXRlbGxhJyxcbiAgICAgICAgcHJpY2U6ICczMicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidTcGVuY2VyXFwncyBCdXJnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjoncmVkIG9uaW9uIGphbSwgYmFjb24sIGFydWd1bGEsIHByb3ZvbG9uZSBjaGVlc2UsIG11c2hyb29tcywgaG9yc2VyYWRpc2ggbWF5bycsXG4gICAgICAgIHByaWNlOiAnMjYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonTWlzbyBHbGF6ZWQgU2FsbW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2tpbmcgb3lzdGVyIG11c2hyb29tLCBzYWZmcm9uIGFpb2xpJyxcbiAgICAgICAgcHJpY2U6ICczOCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidTcGljZWQgQ29ybmlzaCBIZW4nLFxuICAgICAgICBkZXNjcmlwdGlvbjonZ3JpbGxlZCBjb3JuLCBmaW5nZXJsaW5nIHBvdGF0bywgYmFieSB3YXRlcmNyZXNzIHNhbGFkJyxcbiAgICAgICAgcHJpY2U6ICc0MCcsXG4gICAgfSxcbl07XG5jb25zdCBtYWlucyA9IFtcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidPeXN0ZXJzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdzdXBwbGllZCBieSBNYWlzeVxcJ3MgUGVhcmwgJyxcbiAgICAgICAgcHJpY2U6ICc0NScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidUdW5hIENydWRvJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2NyaXNweSBtYWl0YWtlIG11c2hyb29tLCBjaGlsaSBvaWwnLFxuICAgICAgICBwcmljZTogJzIyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J1NocmltcCBDb2NrdGFpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOidoZXJiIHNhbGFkLCBncmVlbiBwZXBwZXJjb3JuIGNvY2t0YWlsIHNhdWNlJyxcbiAgICAgICAgcHJpY2U6ICcyNCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidTYWxtb24gVGF0YWtpJyxcbiAgICAgICAgZGVzY3JpcHRpb246J3dhc2FiaSBtYXlvLCBncmVlbiBiZWFuIHNhbGFkJyxcbiAgICAgICAgcHJpY2U6ICcyOCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidTcGVuY2VyXFzigJlzIFBsYXR0ZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjonb3lzdGVycywgc2hyaW1wLCBzYWxtb24gdGF0YWtpLCBzbm93IGNyYWIsIGFjY29tcGFuaW1lbnRzJyxcbiAgICAgICAgcHJpY2U6ICc1NScsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGRpdk1haW4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ21lbnUnLCBudWxsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdk1haW4pO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0ZXJzU2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdTdGFydGVycycpO1xuICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoc3RhcnRlcnNTZWN0aW9uKTtcbiAgICBzdGFydGVycy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBodG1sSXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGAke2l0ZW0uaXRlbU5hbWV9YCwgYCR7aXRlbS5kZXNjcmlwdGlvbn1gLCBgJHtpdGVtLnByaWNlfWApO1xuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKGh0bWxJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1haW5zU2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdNYWluIGRpc2hlcycpO1xuICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQobWFpbnNTZWN0aW9uKTtcbiAgICBtYWlucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBodG1sSXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGAke2l0ZW0uaXRlbU5hbWV9YCwgYCR7aXRlbS5kZXNjcmlwdGlvbn1gLCBgJHtpdGVtLnByaWNlfWApO1xuICAgICAgICBkaXZNYWluLmFwcGVuZENoaWxkKGh0bWxJdGVtKTtcbiAgICB9KTtcbiAgIFxuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2Zvb3RlcicsICdPc3RlcmlhIGF0IHRoZSB3YXRlcmZyb250IGlzIGEgcGFydCBvZiBTcGVuY2VyIGdyb3VwJyk7XG4gICAgZGl2TWFpbi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG59O1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVIdG1sRWxlbWVudCgnc2VjdGlvbicsICdtZW51LWl0ZW0nLCBudWxsKTtcbiAgICBjb25zdCBodG1sSXRlbU5hbWUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdpdGVtLW5hbWUnLCBgJHtpdGVtTmFtZX1gKTtcbiAgICBjb25zdCBodG1sRGVzY3JpcHRpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdpdGVtLWRlc2MnLCBgJHtkZXNjcmlwdGlvbn1gKTtcbiAgICBjb25zdCBodG1sUHJpY2UgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdpdGVtLWRlc2MnLCBgJCR7cHJpY2V9YCk7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChodG1sSXRlbU5hbWUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGh0bWxEZXNjcmlwdGlvbik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaHRtbFByaWNlKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVTZWN0aW9uID0gKHNlY3Rpb25OYW1lKSA9PiB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCk7XG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2N1cnNpdmUtbWVudScsIGAke3NlY3Rpb25OYW1lfWApO1xuICAgIGNvbnN0IGhyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2hyJywgbnVsbCwgbnVsbCk7XG5cbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChocik7XG5cbiAgICByZXR1cm4gbWVudVNlY3Rpb247XG59O1xuXG5cbiIsImltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUh0bWxFbGVtZW50ID0gKHR5cGUsIHN0eWxlQ2xhc3MsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZihzdHlsZUNsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZUNsYXNzKTtcbiAgICB9XG4gICAgaWYoY29udGVudCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2hlYWRlcicsIG51bGwsIG51bGwpO1xuICAgIGNvbnN0IGJ1dHRvbkhvbWUgPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgJ0hvbWUnKTtcbiAgICBjb25zdCBidXR0b25NZW51ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIG51bGwsICdNZW51Jyk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFjdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBudWxsLCAnQ29udGFjdCcpO1xuXG4gICAgYnV0dG9uSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUhvbWVQYWdlKCkpO1xuICAgIGJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVNZW51UGFnZSgpKTtcbiAgICBidXR0b25Db250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGFjdFBhZ2UoKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkhvbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25NZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFjdCk7XG59O1xuXG5jb25zdCBjcmVhdGVIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVOYXZCYXIoKTtcbiAgICByZW5kZXJIb21lKCk7XG4gICAgY29uc29sZS5sb2coJ2hvbWUnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZU5hdkJhcigpO1xuICAgIHJlbmRlck1lbnUoKTtcbiAgICBjb25zb2xlLmxvZygnbWVudScpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlTmF2QmFyKCk7XG4gICAgcmVuZGVyTWVudSgpO1xuICAgIGNvbnNvbGUubG9nKCdjb250YWN0Jyk7XG59XG5cbmNyZWF0ZUhvbWVQYWdlKCk7XG5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInN0YXJ0ZXJzIiwiaXRlbU5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwibWFpbnMiLCJyZW5kZXJNZW51IiwiZGl2TWFpbiIsImNyZWF0ZUh0bWxFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwic3RhcnRlcnNTZWN0aW9uIiwiY3JlYXRlTWVudVNlY3Rpb24iLCJmb3JFYWNoIiwiaXRlbSIsImh0bWxJdGVtIiwiY3JlYXRlTWVudUl0ZW0iLCJtYWluc1NlY3Rpb24iLCJmb290ZXIiLCJtZW51SXRlbSIsImh0bWxJdGVtTmFtZSIsImh0bWxEZXNjcmlwdGlvbiIsImh0bWxQcmljZSIsInNlY3Rpb25OYW1lIiwibWVudVNlY3Rpb24iLCJ0ZXh0IiwiaHIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0eXBlIiwic3R5bGVDbGFzcyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJjbGVhckNvbnRlbnQiLCJpbm5lckhUTUwiLCJjcmVhdGVOYXZCYXIiLCJoZWFkZXIiLCJidXR0b25Ib21lIiwiYnV0dG9uTWVudSIsImJ1dHRvbkNvbnRhY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlSG9tZVBhZ2UiLCJjcmVhdGVNZW51UGFnZSIsImNyZWF0ZUNvbnRhY3RQYWdlIiwiY3Vyc2l2ZVBhcmEiLCJiYXNpY1BhcmEiLCJyZW5kZXJIb21lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=