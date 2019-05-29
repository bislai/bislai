var width=window.innerWidth>0?window.innerWidth:screen.width;function graficasPSOE(){var t=48,s=24,a=24,e=24,n=320-e-s,o=340-t-a,r=d3.scaleBand().range([0,n],.2),i=d3.scaleLinear().range([o,0]),c=d3.axisBottom(r).tickFormat(d3.format("d")),p=d3.axisLeft(i).ticks(5).tickFormat(function(t){return t+"%"}).tickSize(-n);d3.csv("datos/elecciones/elecciones-distrito-psoe.csv",function(l,d){d.forEach(function(t){t.fecha=t.fecha,t.cantidad=+t.cantidad});var u=d3.nest().key(function(t){return t.distrito}).entries(d);r.domain(d.map(function(t){return t.fecha})),i.domain([0,60]);var v=d3.select(".graficas-psoe").selectAll("svg").data(u).enter().append("svg").attr("class","distrito").attr("width",n+e+s).attr("height",o+t+a).append("g").attr("transform","translate("+e+","+t+")");v.selectAll(".bar").data(function(t){return t.values}).enter().append("rect").attr("class","bar").attr("x",function(t){return r(t.fecha)}).attr("width",r.bandwidth()-2).attr("y",function(t){return i(t.cantidad)}).attr("height",function(t){return o-i(t.cantidad)}).attr("fill","#e30613"),v.selectAll("text").data(function(t){return t.values}).enter().append("text").attr("class","tooltip-porcentaje").text(function(t){return t.cantidad}).attr("x",function(t){return r(t.fecha)}).attr("y",function(t){return i(t.cantidad)-5}),v.append("g").attr("class","xAxis").attr("transform","translate(0,"+o+")").call(c),v.append("g").attr("class","yAxis").call(p),v.append("text").attr("class","nombre-distrito").attr("y","-15px").attr("x","0").text(function(t){return t.key})})}width>767&&$(function(){d3.json("mapas/distritos-psoe-zaragoza.geojson",function(t,s){!function(t){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6ImNqdm5vOXB1NzFreXczem1nanptb3Q3bTUifQ.ffla2sla83t7DMKiwyLIMQ";var s=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cjf1lzmig08ry2sqqyvml8ycl",center:[-.850431,41.651729],zoom:11.5});s.addControl(new mapboxgl.Navigation);var a=s.getCanvasContainer(),e=d3.select(a).append("svg"),n=(e.append("g").attr("class","distritos"),d3.geoTransform({point:function(t,a){var e=s.project(new mapboxgl.LngLat(t,a));this.stream.point(e.x,e.y)}})),o=d3.geoPath().projection(n),r=d3.select("#map").append("div").attr("class","tooltip tooltip-psoe"),i=e.selectAll("path").data(t.features).enter().append("path").attr("class","distritosPSOE").on("mouseover",function(t){r.style("display","block").html('<h4 class="tooltipTitulo">'+t.properties.distrito+'</h4><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:'+1.65*t.properties.quince_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.quince_p+'%</span><span class="resultadoVotos">'+t.properties.quince_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:'+1.65*t.properties.once_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span  class="resultadoVotos"> '+t.properties.once_p+'%</span><span class="resultadoVotos">'+t.properties.once_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:'+1.65*t.properties.siete_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.siete_p+'%</span> <span class="resultadoVotos">'+t.properties.siete_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:'+1.65*t.properties.tres_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.tres_p+'%</span> <span class="resultadoVotos">'+t.properties.tres_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:'+1.65*t.properties.nueve_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.nueve_p+'%</span> <span class="resultadoVotos"> '+t.properties.nueve_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:'+1.65*t.properties.cinco_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.cinco_p+'%</span> <span class="resultadoVotos"> '+t.properties.cinco_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:'+1.65*t.properties.uno_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.uno_p+'%</span> <span class="resultadoVotos"> '+t.properties.uno_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:'+1.65*t.properties.ochosiete_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.ochosiete_p+'%</span> <span class="resultadoVotos"> '+t.properties.ochosiete_v+" votos</span><p/></div>").transition().duration(200)}).transition().duration(200);s.scrollZoom.disable(),i.attr("d",o)}(s)})}),graficasPSOE();const csvElements=["datos/psoe/en-su-contra.csv","datos/psoe/a-su-favor.csv","datos/psoe/abstencion.csv","datos/psoe/en-contra.csv","datos/psoe/a-favor.csv"];function estadisticasChart(t){const s={top:24,right:24,bottom:24,left:24};let a=0,e=0,n=0,o=0;const r=d3.select(".chart-estadisticas"),i=r.select("svg"),c={};let p;function l(t){n=r.node().offsetWidth,o=400,a=n-s.left-s.right,e=o-s.top-s.bottom,i.attr("width",n).attr("height",o);const p="translate("+s.left+","+s.top+")",l=i.select(".chart-estadisticas-container");l.attr("transform",p),function(t,s){c.count.x.range([0,t]).padding(.6),c.count.y.range([s,0])}(a,e);const d=r.select(".area-container-chart-vertical").selectAll(".bar-vertical").data(t),u=d.enter().append("rect").attr("class","bar-vertical");d.merge(u).attr("width",c.count.x.bandwidth()).attr("x",t=>c.count.x(t.nombre)).attr("y",t=>c.count.y(0)).attr("height",0).transition().ease(d3.easeSin).duration(1200).attr("y",t=>c.count.y(t.valor)).attr("height",t=>e-c.count.y(t.valor)),function(t){const s=d3.axisBottom(c.count.x);t.select(".axis-x").attr("transform","translate(0,"+e+")").call(s);const a=d3.axisLeft(c.count.y).tickFormat(d3.format("d")).ticks(5).tickSizeInner(-n);t.select(".axis-y").transition().duration(1e3).call(a)}(l)}window.addEventListener("resize",function(){l(p)}),d3.csv(t,function(t,s){t?console.log(t):((p=s).forEach(t=>{t.valor=+t.valor}),function(){const t=i.select(".chart-estadisticas-container");t.append("g").attr("class","axis axis-x"),t.append("g").attr("class","axis axis-y"),t.append("g").attr("class","area-container-chart-vertical")}(),function(){const t=d3.scaleBand().domain(p.map(function(t){return t.nombre})),s=d3.scaleLinear().domain([0,d3.max(p,t=>t.valor)+d3.max(p,t=>t.valor)/4]);c.count={x:t,y:s}}(),l(p))})}var container=document.getElementById("scroll"),step=document.querySelector(".step"),graphic=document.querySelector(".scroll__graphic"),text=document.querySelector(".scroll__text"),scroller=scrollama();function handleResize(){var t=Math.floor(.75*window.innerHeight);step.style.height=t+"px";var s=step.getBoundingClientRect(),a=container.getBoundingClientRect().width,e=(s.width,a.width,a-64),n=Math.floor(window.innerHeight/2);Math.floor(n/2);graphic.style.width=e,graphic.style.height=n,scroller.resize()}function handleStepEnter(t){0===t.index?estadisticasChart(csvElements[0]):1===t.index?estadisticasChart(csvElements[1]):2===t.index?estadisticasChart(csvElements[2]):3===t.index?estadisticasChart(csvElements[3]):4===t.index&&estadisticasChart(csvElements[4])}function init(){handleResize(),scroller.setup({container:"#scroll",graphic:".scroll__graphic",text:".scroll__text",step:".scroll__text .step",offset:.63}).onStepEnter(handleStepEnter),window.addEventListener("resize",handleResize)}function initResponsive(){scroller.setup({step:".step"}).onStepEnter(handleStepEnter)}function multipleLines(){var t=24,s=24,a=24,e=24,n=960-e-s,o=220-t-a;d3.scaleOrdinal(["#9a1622","#e30613","#0080b8","#f07a36"]);let r=d3.timeParse("%x");var i=d3.scaleTime().range([0,n]),c=d3.scaleLinear().range([o,0]),p=d3.area().x(function(t){return i(t.fecha)}).y0(o).y1(function(t){return c(t.votos)}).curve(d3.curveBasis),l=d3.line().x(function(t){return i(t.fecha)}).y(function(t){return c(t.votos)}).curve(d3.curveBasis);d3.csv("datos/psoe/legislatura-psoe-votos-a-favor.csv",function(t){return t.votos=+t.votos,t.fecha=r(t.fecha),t},function(r,d){var u=d3.nest().key(function(t){return t.presentada}).entries(d);u.forEach(function(t){t.maxPrice=d3.max(t.values,function(t){return t.votos})}),i.domain([d3.min(d,t=>t.fecha),d3.max(d,t=>t.fecha)]),c.domain([d3.min(d,t=>t.votos),d3.max(d,t=>t.votos)]);var v=d3.select(".grafica-favor-legislatura").selectAll("svg").data(u).enter().append("svg").attr("viewBox","0 0 "+(n+(e+s))+"  "+(o+(t+a))).append("g").attr("transform","translate("+e+","+t+")");v.append("g").attr("class","axis axis-x"),v.append("g").attr("class","axis axis-y");var f=d3.axisBottom(i).tickFormat(d3.timeFormat("%Y")).ticks(5),h=d3.axisLeft(c).tickFormat(d3.format("d")).ticks(5).tickSizeInner(-n);v.select(".axis-x").attr("transform","translate(0,"+o+")").call(f),v.select(".axis-y").call(h),v.append("path").attr("class","area").attr("class",function(t){return t.key}).style("opacity",.7).attr("d",function(t){return p(t.values)}),v.append("path").attr("class","line").attr("d",function(t){return l(t.values)}).style("stroke","#111"),v.append("text").attr("class","multiple-legend").attr("x",16).attr("y",-10).style("text-anchor","start").text(function(t){return t.key})})}width>769?init():initResponsive(),multipleLines();