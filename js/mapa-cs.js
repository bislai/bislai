var width=window.innerWidth>0?window.innerWidth:screen.width;$(function(){d3.json("mapas/distritos-ciudadanos-zaragoza.geojson",function(t,a){!function(t){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cjf4g011p1a8w2rsvlz258uqr",center:[-.850431,41.651729],zoom:11.5});a.addControl(new mapboxgl.Navigation);var s=a.getCanvasContainer(),o=d3.select(s).append("svg"),n=(o.append("g").attr("class","distritos"),d3.geo.transform({point:function(t,s){var o=a.project(new mapboxgl.LngLat(t,s));this.stream.point(o.x,o.y)}})),i=d3.geo.path().projection(n),p=d3.select("#map").append("div").attr("class","tooltip tooltip-cs"),e=o.selectAll("path").data(t.features).enter().append("path").attr("class","distritosCS").on("mouseover",function(t){p.style("display","block").html('<h4 class="tooltipTitulo">'+t.properties.distrito+'</h4><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:'+1.65*t.properties.quince_p+'%" class="bgc-pp"></span></span><span class="resultado"><span class="resultadoVotos"> '+t.properties.quince_p+'%</span><span class="resultadoVotos">'+t.properties.quince_v+" votos</span><p/>").transition().duration(200)}).transition().duration(200);a.scrollZoom.disable(),e.attr("d",i)}(a)})});