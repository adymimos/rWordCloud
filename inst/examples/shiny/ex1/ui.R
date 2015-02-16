library(rWordCloud)

fluidPage(
  h1("testing Solr Cloud"),
  HTML("
  <div id='selectedWord'></div>
  <div id='selectedWordLink'>
  </div>
  <div id='chart1'>
  </div>
  "),
  d3TextCloudOutput("d3TextCloud", width = "100%", height = 500)

)

