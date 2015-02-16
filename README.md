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
d3TextCloudOutput("solrCloud", width = "100%", height = 500)
)
```
output
![alt tag](https://raw.github.com/ywng/Progressive-News-Cloud/master/screen%20shot%20main.png)


```
d3Cloud
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
