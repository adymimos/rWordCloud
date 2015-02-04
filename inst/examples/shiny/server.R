library(solrCloud)

function(input, output, session) {
  
  # Connect to data source
  
  output$solrCloud <- rendersolrCloud({
   value <- 3
   label <- 'test'
   solrCloud(value = value, label = label)
  })
}
