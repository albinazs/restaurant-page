(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{kQ:()=>p,Ux:()=>c,Nd:()=>m});const t=[{itemName:"Nova Scotia Lobster Roll",description:"choice of house-cut fries or greens",price:"16"},{itemName:"Ricotta Gnocchi",description:"cherry tomato, la bomba, stracciatella",price:"22"},{itemName:"Snow Crab Cakes",description:"summer vegetable slaw, miso mayo",price:"16"},{itemName:"Miso Glazed Salmon",description:"king oyster mushroom, saffron aioli",price:"28"},{itemName:"Parker House Rolls",description:"tomato vinaigrette",price:"30"}],i=[{itemName:"Oysters",description:"supplied by Maisy's Pearl ",price:"45"},{itemName:"Tuna Crudo",description:"crispy maitake mushroom, chili oil",price:"22"},{itemName:"Shrimp Cocktail",description:"herb salad, green peppercorn cocktail sauce",price:"24"},{itemName:"Salmon Tataki",description:"wasabi mayo, green bean salad",price:"28"},{itemName:"Spencer’s Platter",description:"oysters, shrimp, salmon tataki, snow crab, accompaniments",price:"55"}],n=[{itemName:"Bumbleberry Square",description:"vanilla bean ice cream, almond granola",price:"12"},{itemName:"Sweet Rhubarb Cheesecake",description:"lemon, ginger",price:"12"},{itemName:"Flourless Hazelnut Chocolate Cake",description:"raspberries, hazelnut ice cream",price:"12"},{itemName:"Coconut Sorbet",description:"ginger biscotti , lime zest",price:"11"}],a=e=>{const t=c("div",null,null),i=c("p","cursive-menu",`${e}`),n=c("hr",null,null);return t.appendChild(i),t.appendChild(n),t},r=(e,t,i)=>{const n=c("section","menu-item",null),a=c("p","item-name",`${e}`),r=c("p","item-desc",`${t}`),o=c("p","item-desc",`$${i}`);return n.appendChild(a),n.appendChild(r),n.appendChild(o),n},o=(e,t)=>{const i=c("div","contact-element",`${e}`),n=c("p","contact-element-name",null);return i.appendChild(n),t.forEach((e=>{const t=c("p","contact-para",`${e}`);i.appendChild(t)})),i},p=document.querySelector(".content"),c=(e,t,i)=>{const n=document.createElement(e);return t&&n.classList.add(t),i&&(n.textContent=i),n},d=()=>p.innerHTML="",l=()=>{const e=c("header",null,null),t=c("button",null,"Home"),i=c("button",null,"Menu"),n=c("button",null,"Contact");t.addEventListener("click",(()=>s())),i.addEventListener("click",(()=>m())),n.addEventListener("click",(()=>u())),p.appendChild(e),e.appendChild(t),e.appendChild(i),e.appendChild(n)},s=()=>{d(),l(),(()=>{const e=c("div","home",null),t=c("p","cursive","Osteria"),i=c("p",null,"at the waterfront"),n=c("button","order","Order now");n.addEventListener("click",(()=>{m(),console.log("test")}));const a=c("p","footer","Osteria at the waterfront is a part of Spencer group");p.appendChild(e),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(a)})()},m=()=>{d(),l(),(()=>{const e=c("div","menu",null);p.appendChild(e);const o=a("Starters");e.appendChild(o),t.forEach((t=>{const i=r(`${t.itemName}`,`${t.description}`,`${t.price}`);e.appendChild(i)}));const d=a("Main dishes");e.appendChild(d),i.forEach((t=>{const i=r(`${t.itemName}`,`${t.description}`,`${t.price}`);e.appendChild(i)}));const l=a("Dessert");e.appendChild(l),n.forEach((t=>{const i=r(`${t.itemName}`,`${t.description}`,`${t.price}`);e.appendChild(i)}));const s=c("p","footer","Osteria at the waterfront is a part of Spencer group");e.appendChild(s)})()},u=()=>{d(),l(),(()=>{const e=c("div","contact",null),t=c("div","contact-grid",null),i=o("Hours",["Dinner: Monday - Sunday 5-10:30 pm","Lunch: Saturday & Sunday 11 am-3 pm"]),n=o("Location",["245 Oyesters Ave, Brooklyn, NY 11111","hello@osteria.com"]),a=c("p","footer","Osteria at the waterfront is a part of Spencer group");p.appendChild(e),e.appendChild(t),t.appendChild(i),t.appendChild(n),e.appendChild(a)})()};s()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFZOEMsR0FDcEJ0RCxFQUFNbUIsU0FBUWlDLElBQ1YsTUFBTUMsRUFBVzVDLEVBQWUsR0FBRzJDLEVBQUt2RCxXQUFZLEdBQUd1RCxFQUFLdEQsY0FBZSxHQUFHc0QsRUFBS3JELFNBQ25GNEMsRUFBUW5DLFlBQVk2QyxFQUFTLElBR2pDLE1BQU1FLEVBQWtCckQsRUFBa0IsV0FDMUN5QyxFQUFRbkMsWUFBWStDLEdBQ3BCdEQsRUFBU2tCLFNBQVFpQyxJQUNiLE1BQU1DLEVBQVc1QyxFQUFlLEdBQUcyQyxFQUFLdkQsV0FBWSxHQUFHdUQsRUFBS3RELGNBQWUsR0FBR3NELEVBQUtyRCxTQUNuRjRDLEVBQVFuQyxZQUFZNkMsRUFBUyxJQUdqQyxNQUFNSixFQUFTNUMsRUFBa0IsSUFBSyxTQUFVLHdEQUNoRHNDLEVBQVFuQyxZQUFZeUMsRUFBTyxFRXhGM0JPLEVBQVksRUFHVmQsRUFBb0IsS0FDdEJWLElBQ0FFLElEL0N5QixNQUN6QixNQUFNUyxFQUFVdEMsRUFBa0IsTUFBTyxVQUFXLE1BQzlDb0QsRUFBY3BELEVBQWtCLE1BQU8sZUFBZ0IsTUFDdkRxRCxFQUFRNUMsRUFBcUIsUUFBUyxDQUFDLHFDQUFzQyx3Q0FDN0U2QyxFQUFXN0MsRUFBcUIsV0FBWSxDQUFDLHVDQUF3QyxzQkFDckZtQyxFQUFTNUMsRUFBa0IsSUFBSyxTQUFVLHdEQUVoRGlCLEVBQVFkLFlBQVltQyxHQUNwQkEsRUFBUW5DLFlBQVlpRCxHQUNwQkEsRUFBWWpELFlBQVlrRCxHQUN4QkQsRUFBWWpELFlBQVltRCxHQUN4QmhCLEVBQVFuQyxZQUFZeUMsRUFBTyxFQ3FDM0JXLEVBQWUsRUFHbkJwQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGRpdk1haW4gPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2hvbWUnLCBudWxsKTtcbiAgICBjb25zdCBjdXJzaXZlUGFyYSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2N1cnNpdmUnLCAnT3N0ZXJpYScpO1xuICAgIGNvbnN0IGJhc2ljUGFyYSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgbnVsbCwgJ2F0IHRoZSB3YXRlcmZyb250Jyk7XG4gICAgY29uc3Qgb3JkZXJOb3cgPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgJ29yZGVyJywgJ09yZGVyIG5vdycpO1xuICAgIG9yZGVyTm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2Zvb3RlcicsICdPc3RlcmlhIGF0IHRoZSB3YXRlcmZyb250IGlzIGEgcGFydCBvZiBTcGVuY2VyIGdyb3VwJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdk1haW4pO1xuICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoY3Vyc2l2ZVBhcmEpO1xuICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoYmFzaWNQYXJhKTtcbiAgICBkaXZNYWluLmFwcGVuZENoaWxkKG9yZGVyTm93KTtcbiAgICBkaXZNYWluLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5cblxuIiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4JztcblxuY29uc3Qgc3RhcnRlcnMgPSBbXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonTm92YSBTY290aWEgTG9ic3RlciBSb2xsJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2Nob2ljZSBvZiBob3VzZS1jdXQgZnJpZXMgb3IgZ3JlZW5zJyxcbiAgICAgICAgcHJpY2U6ICcxNicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidSaWNvdHRhIEdub2NjaGknLFxuICAgICAgICBkZXNjcmlwdGlvbjonY2hlcnJ5IHRvbWF0bywgbGEgYm9tYmEsIHN0cmFjY2lhdGVsbGEnLFxuICAgICAgICBwcmljZTogJzIyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J1Nub3cgQ3JhYiBDYWtlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOidzdW1tZXIgdmVnZXRhYmxlIHNsYXcsIG1pc28gbWF5bycsXG4gICAgICAgIHByaWNlOiAnMTYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonTWlzbyBHbGF6ZWQgU2FsbW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2tpbmcgb3lzdGVyIG11c2hyb29tLCBzYWZmcm9uIGFpb2xpJyxcbiAgICAgICAgcHJpY2U6ICcyOCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidQYXJrZXIgSG91c2UgUm9sbHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjondG9tYXRvIHZpbmFpZ3JldHRlJyxcbiAgICAgICAgcHJpY2U6ICczMCcsXG4gICAgfSxcbl07XG5cbmNvbnN0IG1haW5zID0gW1xuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J095c3RlcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3N1cHBsaWVkIGJ5IE1haXN5XFwncyBQZWFybCAnLFxuICAgICAgICBwcmljZTogJzQ1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J1R1bmEgQ3J1ZG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjonY3Jpc3B5IG1haXRha2UgbXVzaHJvb20sIGNoaWxpIG9pbCcsXG4gICAgICAgIHByaWNlOiAnMjInLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonU2hyaW1wIENvY2t0YWlsJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2hlcmIgc2FsYWQsIGdyZWVuIHBlcHBlcmNvcm4gY29ja3RhaWwgc2F1Y2UnLFxuICAgICAgICBwcmljZTogJzI0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J1NhbG1vbiBUYXRha2knLFxuICAgICAgICBkZXNjcmlwdGlvbjond2FzYWJpIG1heW8sIGdyZWVuIGJlYW4gc2FsYWQnLFxuICAgICAgICBwcmljZTogJzI4JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J1NwZW5jZXJcXOKAmXMgUGxhdHRlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOidveXN0ZXJzLCBzaHJpbXAsIHNhbG1vbiB0YXRha2ksIHNub3cgY3JhYiwgYWNjb21wYW5pbWVudHMnLFxuICAgICAgICBwcmljZTogJzU1JyxcbiAgICB9LFxuXTtcblxuY29uc3QgZGVzc2VydHMgPSBbXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonQnVtYmxlYmVycnkgU3F1YXJlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICd2YW5pbGxhIGJlYW4gaWNlIGNyZWFtLCBhbG1vbmQgZ3Jhbm9sYScsXG4gICAgICAgIHByaWNlOiAnMTInLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpdGVtTmFtZTonU3dlZXQgUmh1YmFyYiBDaGVlc2VjYWtlJyxcbiAgICAgICAgZGVzY3JpcHRpb246J2xlbW9uLCBnaW5nZXInLFxuICAgICAgICBwcmljZTogJzEyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaXRlbU5hbWU6J0Zsb3VybGVzcyBIYXplbG51dCBDaG9jb2xhdGUgQ2FrZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOidyYXNwYmVycmllcywgaGF6ZWxudXQgaWNlIGNyZWFtJyxcbiAgICAgICAgcHJpY2U6ICcxMicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGl0ZW1OYW1lOidDb2NvbnV0IFNvcmJldCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOidnaW5nZXIgYmlzY290dGkgLCBsaW1lIHplc3QnLFxuICAgICAgICBwcmljZTogJzExJyxcbiAgICB9LFxuXTtcblxuY29uc3QgY3JlYXRlTWVudVNlY3Rpb24gPSAoc2VjdGlvbk5hbWUpID0+IHtcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsKTtcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnY3Vyc2l2ZS1tZW51JywgYCR7c2VjdGlvbk5hbWV9YCk7XG4gICAgY29uc3QgaHIgPSBjcmVhdGVIdG1sRWxlbWVudCgnaHInLCBudWxsLCBudWxsKTtcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGhyKTtcblxuICAgIHJldHVybiBtZW51U2VjdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1OYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzZWN0aW9uJywgJ21lbnUtaXRlbScsIG51bGwpO1xuICAgIGNvbnN0IGh0bWxJdGVtTmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2l0ZW0tbmFtZScsIGAke2l0ZW1OYW1lfWApO1xuICAgIGNvbnN0IGh0bWxEZXNjcmlwdGlvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2l0ZW0tZGVzYycsIGAke2Rlc2NyaXB0aW9ufWApO1xuICAgIGNvbnN0IGh0bWxQcmljZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2l0ZW0tZGVzYycsIGAkJHtwcmljZX1gKTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGh0bWxJdGVtTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaHRtbERlc2NyaXB0aW9uKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChodG1sUHJpY2UpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGl2TWFpbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnbWVudScsIG51bGwpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2TWFpbik7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRlcnNTZWN0aW9uID0gY3JlYXRlTWVudVNlY3Rpb24oJ1N0YXJ0ZXJzJyk7XG4gICAgZGl2TWFpbi5hcHBlbmRDaGlsZChzdGFydGVyc1NlY3Rpb24pO1xuICAgIHN0YXJ0ZXJzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWxJdGVtID0gY3JlYXRlTWVudUl0ZW0oYCR7aXRlbS5pdGVtTmFtZX1gLCBgJHtpdGVtLmRlc2NyaXB0aW9ufWAsIGAke2l0ZW0ucHJpY2V9YCk7XG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoaHRtbEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpbnNTZWN0aW9uID0gY3JlYXRlTWVudVNlY3Rpb24oJ01haW4gZGlzaGVzJyk7XG4gICAgZGl2TWFpbi5hcHBlbmRDaGlsZChtYWluc1NlY3Rpb24pO1xuICAgIG1haW5zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWxJdGVtID0gY3JlYXRlTWVudUl0ZW0oYCR7aXRlbS5pdGVtTmFtZX1gLCBgJHtpdGVtLmRlc2NyaXB0aW9ufWAsIGAke2l0ZW0ucHJpY2V9YCk7XG4gICAgICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoaHRtbEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVzc2VydHNTZWN0aW9uID0gY3JlYXRlTWVudVNlY3Rpb24oJ0Rlc3NlcnQnKTtcbiAgICBkaXZNYWluLmFwcGVuZENoaWxkKGRlc3NlcnRzU2VjdGlvbik7XG4gICAgZGVzc2VydHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaHRtbEl0ZW0gPSBjcmVhdGVNZW51SXRlbShgJHtpdGVtLml0ZW1OYW1lfWAsIGAke2l0ZW0uZGVzY3JpcHRpb259YCwgYCR7aXRlbS5wcmljZX1gKTtcbiAgICAgICAgZGl2TWFpbi5hcHBlbmRDaGlsZChodG1sSXRlbSk7XG4gICAgfSk7XG4gICBcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdmb290ZXInLCAnT3N0ZXJpYSBhdCB0aGUgd2F0ZXJmcm9udCBpcyBhIHBhcnQgb2YgU3BlbmNlciBncm91cCcpO1xuICAgIGRpdk1haW4uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cblxuXG4iLCJpbXBvcnQgeyBjb250ZW50LCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXZNYWluID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdjb250YWN0JywgbnVsbCk7XG4gICAgY29uc3QgY29udGFjdEdyaWQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtZ3JpZCcsIG51bGwpO1xuICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlQ29udGFjdEVsZW1lbnQoJ0hvdXJzJywgWydEaW5uZXI6IE1vbmRheSAtIFN1bmRheSA1LTEwOjMwIHBtJywgJ0x1bmNoOiBTYXR1cmRheSAmIFN1bmRheSAxMSBhbS0zIHBtJ10pO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlQ29udGFjdEVsZW1lbnQoJ0xvY2F0aW9uJywgWycyNDUgT3llc3RlcnMgQXZlLCBCcm9va2x5biwgTlkgMTExMTEnLCAnaGVsbG9Ab3N0ZXJpYS5jb20nXSk7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAnZm9vdGVyJywgJ09zdGVyaWEgYXQgdGhlIHdhdGVyZnJvbnQgaXMgYSBwYXJ0IG9mIFNwZW5jZXIgZ3JvdXAnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2TWFpbik7XG4gICAgZGl2TWFpbi5hcHBlbmRDaGlsZChjb250YWN0R3JpZCk7XG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBkaXZNYWluLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0RWxlbWVudCA9IChlbGVtZW50TmFtZSwgZGVzY0xpbmVzKSA9PiB7XG4gICAgY29uc3QgY29udGFjdEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtZWxlbWVudCcsIGAke2VsZW1lbnROYW1lfWApO1xuICAgIGNvbnN0IGNvbnRhY3RFbGVtZW50TmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ2NvbnRhY3QtZWxlbWVudC1uYW1lJywgbnVsbCk7XG4gICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnROYW1lKTtcbiAgICBkZXNjTGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgY29uc3QgaHRtbExpbmUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdjb250YWN0LXBhcmEnLCBgJHtsaW5lfWApO1xuICAgICAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChodG1sTGluZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGFjdEVsZW1lbnQ7XG59IiwiaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlbmRlckNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9ICh0eXBlLCBzdHlsZUNsYXNzLCBjb250ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYoc3R5bGVDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGVDbGFzcyk7XG4gICAgfVxuICAgIGlmKGNvbnRlbnQpIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4gY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoZWFkZXInLCBudWxsLCBudWxsKTtcbiAgICBjb25zdCBidXR0b25Ib21lID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIG51bGwsICdIb21lJyk7XG4gICAgY29uc3QgYnV0dG9uTWVudSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBudWxsLCAnTWVudScpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhY3QgPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgbnVsbCwgJ0NvbnRhY3QnKTtcblxuICAgIGJ1dHRvbkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVIb21lUGFnZSgpKTtcbiAgICBidXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlTWVudVBhZ2UoKSk7XG4gICAgYnV0dG9uQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUNvbnRhY3RQYWdlKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25Ib21lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhY3QpO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlTmF2QmFyKCk7XG4gICAgcmVuZGVySG9tZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZU5hdkJhcigpO1xuICAgIHJlbmRlck1lbnUoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNyZWF0ZU5hdkJhcigpO1xuICAgIHJlbmRlckNvbnRhY3QoKTtcbn1cblxuY3JlYXRlSG9tZVBhZ2UoKTsiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzdGFydGVycyIsIml0ZW1OYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIm1haW5zIiwiZGVzc2VydHMiLCJjcmVhdGVNZW51U2VjdGlvbiIsInNlY3Rpb25OYW1lIiwibWVudVNlY3Rpb24iLCJjcmVhdGVIdG1sRWxlbWVudCIsInRleHQiLCJociIsImFwcGVuZENoaWxkIiwiY3JlYXRlTWVudUl0ZW0iLCJtZW51SXRlbSIsImh0bWxJdGVtTmFtZSIsImh0bWxEZXNjcmlwdGlvbiIsImh0bWxQcmljZSIsImNyZWF0ZUNvbnRhY3RFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJkZXNjTGluZXMiLCJjb250YWN0RWxlbWVudCIsImNvbnRhY3RFbGVtZW50TmFtZSIsImZvckVhY2giLCJsaW5lIiwiaHRtbExpbmUiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidHlwZSIsInN0eWxlQ2xhc3MiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiY2xlYXJDb250ZW50IiwiaW5uZXJIVE1MIiwiY3JlYXRlTmF2QmFyIiwiaGVhZGVyIiwiYnV0dG9uSG9tZSIsImJ1dHRvbk1lbnUiLCJidXR0b25Db250YWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUhvbWVQYWdlIiwiY3JlYXRlTWVudVBhZ2UiLCJjcmVhdGVDb250YWN0UGFnZSIsImRpdk1haW4iLCJjdXJzaXZlUGFyYSIsImJhc2ljUGFyYSIsIm9yZGVyTm93IiwiY29uc29sZSIsImxvZyIsImZvb3RlciIsInJlbmRlckhvbWUiLCJzdGFydGVyc1NlY3Rpb24iLCJpdGVtIiwiaHRtbEl0ZW0iLCJtYWluc1NlY3Rpb24iLCJkZXNzZXJ0c1NlY3Rpb24iLCJyZW5kZXJNZW51IiwiY29udGFjdEdyaWQiLCJob3VycyIsImxvY2F0aW9uIiwicmVuZGVyQ29udGFjdCJdLCJzb3VyY2VSb290IjoiIn0=