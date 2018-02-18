var width=window.innerWidth>0?window.innerWidth:screen.width,configDataLabels={color:"black",font:{size:"20",weight:"bold"}};function unanimidadChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:500},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:["Unanimidad","Disconformidad"],datasets:[{data:[189,284],backgroundColor:["#36B287","#D0577C"]}]}})}function repeticionChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:25}}]},legend:{display:!1}},data:{labels:["PP + PSOE + C'S","ZEC + PSOE + CHA","PP + ZEC + CHA"],datasets:[{data:[57,53,5],backgroundColor:["rgba(32, 159, 105, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"]}]}})}function masMocionesChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:80}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[77,45,79,80,65],backgroundColor:["rgba(0, 128, 184, 1)","rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function abstenidoChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:60}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[38,52,24,46,45],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function encontraChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[96,102,51,39,67],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function afavorChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:70}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[101,82,149,156,117],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function soledadChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:70}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[102,75,16,50,30],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}var container=document.getElementById("scroll"),step=document.querySelector(".step"),graphic=document.querySelector(".scroll__graphic"),text=document.querySelector(".scroll__text"),scroller=scrollama();function handleResize(){var e=Math.floor(.75*window.innerHeight);step.style.height=e+"px";var a=step.getBoundingClientRect(),t=container.getBoundingClientRect().width;console.log(t);a.width,t.width;var n=t-64,r=Math.floor(window.innerHeight/2);Math.floor(r/2);graphic.style.width=n,graphic.style.height=r,scroller.resize()}function handleStepEnter(e){0===e.index?unanimidadChart():1===e.index?repeticionChart():2===e.index?masMocionesChart():3===e.index?abstenidoChart():4===e.index?encontraChart():5===e.index?afavorChart():6===e.index&&soledadChart()}function init(){handleResize(),scroller.setup({container:"#scroll",graphic:".scroll__graphic",text:".scroll__text",step:".scroll__text .step",offset:.63}).onStepEnter(handleStepEnter),window.addEventListener("resize",handleResize)}function initResponsive(){scroller.setup({step:".step"}).onStepEnter(handleStepEnter).onStepExit(handleStepExit)}width>769?init():initResponsive();