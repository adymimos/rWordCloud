# d3.js word cloud htmlwidget for R

# solrCloud

Experimentation to get interactive d3 word cloud which works with

   - simple D3 word cloud
   - responsive twitter search
   - solr interactive word cloud
   - jdbc calls (might not be implemented)

Its implemented with htmlwidget(really cool package, able to create a package with 2 days of javascript experience)

To install
```
require(devtools)
install_github('adymimos/solrCloud',ref='d3cloud')
```

```server.R
library(solrCloud)
function(input, output, session) {
  output$d3Cloud <- renderd3Cloud({
   text <- c('d3','wordcloud','impressive','experiment','htmlwidgets','myfirstwidget')
   size <- c(25,20,13,9,6,5)
   df <- data.frame(text,size)
   d3Cloud(text = text, size = size)
  })
}



ui.R
library(solrCloud)
fluidPage(
d3CloudOutput("d3Cloud", width = "100%", height = 500)
)
```