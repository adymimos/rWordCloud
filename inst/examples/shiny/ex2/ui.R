library(shiny)
library(rWordCloud)

shinyUI(fluidPage(

  # Application title
  headerPanel("Word Cloud"),
  
  # Sidebar with a slider and selection inputs
  sidebarPanel(width = 3,
    selectInput("selection", "Choose a book:", 
                choices = books),
    actionButton("update", "Change"),
    hr(),
    sliderInput("freq", 
                "Minimum Frequency:", 
                min = 1,  max = 50, value = 15),
    sliderInput("max", 
                "Maximum Number of Words:", 
                min = 1,  max = 300,  value = 100)
  ),
  
  # Show Word Cloud
  mainPanel(
	d3CloudOutput("plot", width = "100%", height = 500)
  )
))