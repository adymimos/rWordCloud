library(solrCloud)

fluidPage(
  h1("testing Solr Cloud"),
  HTML("
  <div id='selectedWord'></div>
  <div id='selectedWordLink'>
  </div>
  <div id='chart1'>
  </div>
  "),
  solrCloudOutput("solrCloud", width = "100%", height = 500)

)

