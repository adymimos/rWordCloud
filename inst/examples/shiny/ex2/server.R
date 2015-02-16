library(shiny)
library(rWordCloud)

shinyServer(function(input, output, session) {
  
  terms <- reactive({
    input$update
    isolate({
        getTermMatrix(input$selection)
    })
  })

  # Make the wordcloud drawing predictable during a session
  wordcloud_rep <- repeatable(wordcloud)

  output$plot <- renderd3Cloud({
    v <- terms()
	d3Cloud(text = names(v), size = v)
    })
})