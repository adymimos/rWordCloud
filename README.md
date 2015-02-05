# d3.js word cloud htmlwidget for R

# solrCloud

Experimentation to get interactive d3 word cloud which works with

   - twitter
   - solr
   - jdbc calls (might not be implemented)


```server.R
library(solrCloud)
library(XML)
function(input, output, session) {
  output$solrCloud <- rendersolrCloud({
    doc.html = htmlTreeParse('http://en.wikipedia.org/wiki/R_(programming_language)',
                             useInternal = TRUE)
    
    doc.text = unlist(xpathApply(doc.html, '//p', xmlValue))
    
    doc.text = gsub('\\n', ' ', doc.text)
    
    data <- as.data.frame(doc.text)
   solrCloud(content = doc.text, label = rownames(data))
  })
}


ui.R
library(solrCloud)
fluidPage(
solrCloudOutput("solrCloud", width = "100%", height = 500)
)
```