function loadJSON(s){var a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET","mociones.json",!0),a.onreadystatechange=function(){4==a.readyState&&"200"==a.status&&s(a.responseText)},a.send(null)}function init(){loadJSON(function(s){var a=JSON.parse(s);console.log(a[0].fecha)})}$(function(){d3.json("mapas/distrito-electoral-zaragoza.geojson",function(s,a){!function(s){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6ImNqdm5vOXB1NzFreXczem1nanptb3Q3bTUifQ.ffla2sla83t7DMKiwyLIMQ";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cj9x6vj1k6eux2sl4jh9c2jpn",center:[-.850431,41.651729],zoom:11.5});a.addControl(new mapboxgl.Navigation);var t=a.getCanvasContainer(),o=d3.select(t).append("svg"),p=(o.append("g").attr("class","distritos"),d3.geo.transform({point:function(s,t){var o=a.project(new mapboxgl.LngLat(s,t));this.stream.point(o.x,o.y)}})),e=d3.geo.path().projection(p),n=d3.select("#map").append("div").attr("class","tooltip"),l=o.selectAll("path").data(s.features).enter().append("path").attr("class","distritos").on("mouseover",function(s){n.style("display","block").html('<h4 class="tooltipTitulo">'+s.properties.distrito+'</h4><div class="container-tooltip-leyenda"><p class="tooltipLeyenda"><span>Censo:</span> <span class="resultado"> '+s.properties.total+'</span><p/><p class="tooltipLeyenda"><span>Votantes:</span> <span class="resultado">'+s.properties.votantes+'%</span><p/><p class="tooltipLeyenda"><span>Abstención:</span> <span class="resultado">'+s.properties.abstencion+'%</span><p/></div><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">PP</span><span style="width:'+1.65*s.properties.pp+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.pp+'%</span><span class="resultadoVotos">'+s.properties.ppVotos+'</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">ZEC</span><span style="width:'+1.65*s.properties.zec+'%" class="bgc-zec"></span></span><span class="resultado"><span  class="resultadoVotos"> '+s.properties.zec+'%</span><span class="resultadoVotos">'+s.properties.zecVotos+'</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">PSOE</span><span style="width:'+1.65*s.properties.psoe+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.psoe+'%</span> <span class="resultadoVotos">'+s.properties.psoeVotos+'</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">CS</span><span style="width:'+1.65*s.properties.cs+'%" class="bgc-cs"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.cs+'%</span> <span class="resultadoVotos">'+s.properties.csVotos+'</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">CHA</span><span style="width:'+1.65*s.properties.cha+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.cha+'%</span> <span class="resultadoVotos"> '+s.properties.chaVotos+"</span><p/></div>").transition().duration(200)}).transition().duration(200);a.scrollZoom.disable(),l.attr("d",e)}(a)})});