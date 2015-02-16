library(shiny)
library(rWordCloud)

shinyUI(fluidPage(

  # Application title
  headerPanel("Interactive word cloud"),
  
  # Sidebar with a slider and selection inputs
  # Show Word Cloud
  mainPanel(
	d3CloudOutput("plot", width = "100%", height = 500),
	h1(
	htmlOutput("text1"))
  )
))