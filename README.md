# d3.js word cloud htmlwidget for R

# solrCloud

This is just an experimentation of https://github.com/ywng/Progressive-News-Cloud app ( this app no longer works, but i used its component )


server.R
library(solrCloud)
function(input, output, session) {
output$solrCloud <- rendersolrCloud({
   content <- c('test test1 test2 hi ho hurray hi hurray ho ho ho ho','ho hi uh ho','test')
   label <- c('a1','a2','a3')
   solrCloud(content = content, label = label)
  })
}

library(solrCloud)
fluidPage(
solrCloudOutput("solrCloud", width = "100%", height = 500)
)
output
![alt tag](https://raw.github.com/ywng/Progressive-News-Cloud/master/screen%20shot%20main.png)
