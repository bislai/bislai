function unanimidadChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["Unanimidad","Disconformidad"],datasets:[{data:[37.59,62.41],backgroundColor:["#36B287","#D0577C"]}]}})}function repeticionChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:25}}]},legend:{display:!1}},data:{labels:["PP + PSOE + C'S","ZEC + PSOE + CHA","ZEC + PSOE + C'S"],datasets:[{data:[11.31,10.58,2.5],backgroundColor:["rgba(32, 159, 105, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"]}]}})}function masMocionesChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:80}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[47,28,50,44,36],backgroundColor:["rgba(0, 128, 184, 1)","rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function abstenidoChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:20}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[8.02,10.21,5.47,9.12,10.21],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,.2)"]}]}})}function encontraChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:30}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[19.7,24.08,11.31,8.02,15.32],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function afavorChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:70}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[35.03,28.46,46.35,45.98,36.86],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function handleResize(){var e=Math.floor(.75*window.innerHeight)+"px";step.style.height=e;text.offsetWidth;var a=container.offsetWidth;console.log(a);var t=a-64+"px",n=Math.floor(window.innerHeight/2)+"px";console.log(n),console.log(t);Math.floor(n/2);graphic.style.width=t,graphic.style.height=n,scroller.resize()}function handleStepEnter(e){0===e.index&&unanimidadChart(),1===e.index&&repeticionChart(),2===e.index&&masMocionesChart(),3===e.index&&abstenidoChart(),4===e.index&&abstenidoChart(),5===e.index&&encontraChart(),6===e.index&&afavorChart()}function handleContainerEnter(e){}function handleContainerExit(e){}function init(){handleResize(),scroller.setup({container:"#scroll",graphic:".scroll__graphic",text:".scroll__text",step:".scroll__text .step",debug:!0,offset:.6}).onStepEnter(handleStepEnter).onContainerEnter(handleContainerEnter).onContainerExit(handleContainerExit),window.addEventListener("resize",handleResize)}var scroller=scrollama(),container=document.getElementById("scroll"),step=document.getElementsByClassName("step"),graphic=document.getElementsByClassName("scroll__graphic"),text=document.getElementsByClassName("scroll__text");init();