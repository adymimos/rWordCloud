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

