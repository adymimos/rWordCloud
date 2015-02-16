library(shiny)
library(rWordCloud)

shinyServer(function(input, output, session) {
  output$plot <- renderd3Cloud({
	d3Cloud(text = rownames(mtcars), size = mtcars$hp)
    })
	 output$text1 <- renderText({ 
	 if(!any(names(input)=='d3word')) return ("You havent clicked")
	 paste ("You have clicked ",input$d3word)
     })

	
})