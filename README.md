rWordCloud - An htmlwidget interface to D3 word cloud

to install
```
require(devtools)
install_github('adymimos/rWordCloud')

```
d3TextCloud - Pass compelete sentence, Java script calculates word count 
It performs stemming and stop word removals

d3Cloud - Pass word and its size

```
d3TextCloud
server.R
library(rWordCloud)
function(input, output, session) {
output$d3TextCloud <- renderd3TextCloud({
   content <- c('test test1 test2 hi ho hurray hi hurray ho ho ho ho','ho hi uh ho','test')
   label <- c('a1','a2','a3')
   d3TextCloud(content = content, label = label)
  })
}

ui.R

library(rWordCloud)
fluidPage(
d3TextCloudOutput("d3TextCloud", width = "100%", height = 500)
)
```
output
![alt tag](https://raw.github.com/ywng/Progressive-News-Cloud/master/screen%20shot%20main.png)


```
d3Cloud
library(rWordCloud)
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
Example from shiny gallery using rWordCloud - https://github.com/rstudio/shiny-examples/tree/master/082-word-cloud 
![alt tag](https://raw.github.com/adymimos/rWordCloud/master/wordcloud_example.png)
code - https://github.com/adymimos/rWordCloud/tree/master/inst/examples/shiny/ex2/

Interactive example - input$d3word gives you the word selected from the UI.
![alt tag](https://raw.github.com/adymimos/rWordCloud/master/interactive_example.png)
code - https://github.com/adymimos/rWordCloud/tree/master/inst/examples/shiny/ex3/

More info in my blog - http://bigdataanalyze.blogspot.com/2015/02/rwordcloud-htmlwidget-interface-for-d3.html


