rWordCloud - An htmlwidget interface to D3 word cloud

to install
```
require(devtools)
install_github('adymimos/rWordCloud')

```


```server.R
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
