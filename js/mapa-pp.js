var width=window.innerWidth>0?window.innerWidth:screen.width;function distritoElectoralPP(){var t=48,a=48,s=48,o=48,e=450-o-a,r=390-t-s,n=d3.scale.ordinal().rangeRoundBands([0,e],.2),p=d3.scale.linear().range([r,0]),i=d3.svg.axis().scale(n).tickFormat(d3.format("d")).orient("bottom"),l=d3.svg.axis().scale(p).ticks(5).tickFormat(function(t){return t+"%"}).tickSize(-e).orient("left");d3.csv("datos/elecciones-distrito-pp.csv",function(c,d){datos=d,datos.forEach(function(t){t.fecha=t.fecha,t.cantidad=+t.cantidad});var u=d3.nest().key(function(t){return t.distrito}).entries(d);n.domain(d.map(function(t){return t.fecha})),p.domain([0,80]);var g=d3.select(".graficas-pp").selectAll("svg").data(u).enter().append("svg").attr("class","distrito").attr("width",e+o+a).attr("height",r+t+s).append("g").attr("transform","translate("+o+","+t+")");g.selectAll(".bar").data(function(t){return t.values}).enter().append("rect").attr("class","bar").attr("x",function(t){return n(t.fecha)}).attr("width",n.rangeBand()).attr("y",function(t){return p(t.cantidad)}).attr("height",function(t){return r-p(t.cantidad)}).attr("fill","#52788b"),g.selectAll("text").data(function(t){return t.values}).enter().append("text").attr("class","tooltip-porcentaje").text(function(t){return t.cantidad}).attr("x",function(t){return n(t.fecha)}).attr("y",function(t){return p(t.cantidad)-5}),g.append("g").attr("class","xAxis").attr("transform","translate(0,"+r+")").call(i),g.append("g").attr("class","yAxis").call(l).append("text").attr("class","nombre-distrito").attr("y","-3%").attr("x","8px").text(function(t){return t.key})})}function aFavorPP(){var t=20,a=20,s=70,o=40,e=600-o-a,r=300-t-s,n=d3.scale.ordinal().rangeRoundBands([0,e],.05),p=d3.scale.linear().range([r,0]),i=d3.svg.axis().scale(n).orient("bottom"),l=d3.svg.axis().scale(p).orient("left").ticks(10),c=d3.select("body").append("svg").attr("width",e+o+a).attr("height",r+t+s).append("g").attr("transform","translate("+o+","+t+")");d3.json("data.json",function(t,a){a.forEach(function(t){t.code=+t.code,t.grade=+t.grade}),a.sort(function(t,a){return t.grade-a.grade}),n.domain(a.map(function(t){return t.code})),p.domain([0,d3.max(a,function(t){return t.grade})]),c.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").call(i).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy","-.55em").attr("transform","rotate(-90)"),c.append("g").attr("class","y axis").call(l).append("text").attr("transform","rotate(0)").attr("y",-10).attr("dy",".71em").style("text-anchor","middle").text("Grade Scale"),c.selectAll("bar").data(a).enter().append("rect").attr("class","bar").attr("x",function(t){return n(t.code)}).attr("width",n.rangeBand()).attr("y",function(t){return p(t.grade)}).attr("height",function(t){return r-p(t.grade)}).sort()})}$(function(){d3.json("mapas/distritos-pp-zaragoza.geojson",function(t,a){!function(t){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cj8c0okok7se32spv3t4rx8bv",center:[-.850431,41.651729],zoom:11.5});a.addControl(new mapboxgl.Navigation);var s=a.getCanvasContainer(),o=d3.select(s).append("svg"),e=(o.append("g").attr("class","distritos"),d3.geo.transform({point:function(t,s){var o=a.project(new mapboxgl.LngLat(t,s));this.stream.point(o.x,o.y)}})),r=d3.geo.path().projection(e),n=d3.select("#map").append("div").attr("class","tooltip tooltip-pp"),p=o.selectAll("path").data(t.features).enter().append("path").attr("class","distritosPP").on("mouseover",function(t){n.style("display","block").html('<h4 class="tooltipTitulo">'+t.properties.distrito+'</h4><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:'+1.65*t.properties.quince_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.quince_p+'%</span><span class="resultadoVotos">'+t.properties.quince_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:'+1.65*t.properties.once_p+'%" class="bgc-pp"></span></span><span class="resultado"><span  class="resultadoVotos"> '+t.properties.once_p+'%</span><span class="resultadoVotos">'+t.properties.once_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:'+1.65*t.properties.siete_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.siete_p+'%</span> <span class="resultadoVotos">'+t.properties.siete_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:'+1.65*t.properties.tres_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.tres_p+'%</span> <span class="resultadoVotos">'+t.properties.tres_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:'+1.65*t.properties.nueve_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.nueve_p+'%</span> <span class="resultadoVotos"> '+t.properties.nueve_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:'+1.65*t.properties.cinco_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.cinco_p+'%</span> <span class="resultadoVotos"> '+t.properties.cinco_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:'+1.65*t.properties.uno_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.uno_p+'%</span> <span class="resultadoVotos"> '+t.properties.uno_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:'+1.65*t.properties.ochosiete_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.ochosiete_p+'%</span> <span class="resultadoVotos"> '+t.properties.ochosiete_v+" votos</span><p/></div>").transition().duration(200)}).transition().duration(200);a.scrollZoom.disable(),p.attr("d",r)}(a)})}),distritoElectoralPP();