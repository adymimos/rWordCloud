library(rWordCloud)
library(XML)
function(input, output, session) {
  output$d3TextCloud <- renderd3TextCloud({
    doc.html = htmlTreeParse('http://en.wikipedia.org/wiki/R_(programming_language)',
                             useInternal = TRUE)
    
    doc.text = unlist(xpathApply(doc.html, '//p', xmlValue))
    
    doc.text = gsub('\\n', ' ', doc.text)
    
    data <- as.data.frame(doc.text)
   d3TextCloud(content = doc.text, label = rownames(data))
  })
}

