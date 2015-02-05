d3Cloud <- function(text, size, tooltip = "", color = "#EEEEEE",
  textColor = "#333333", width = NULL, height = NULL) {

  # forward options using x
  x = data.frame(
    text = text,
    size = size,
    tooltip = tooltip,
    color = color,
    textColor = textColor
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'solrCloud',
    x,
    width = width,
    height = height,
    package = 'solrCloud',
    sizingPolicy = sizingPolicy(
      defaultWidth = 600,
      defaultHeight = 600
    )
  )
}


d3CloudOutput <- function(outputId, width = '600px', height = '600px'){
  shinyWidgetOutput(outputId, 'd3Cloud', width, height, package = 'solrCloud')
}

renderd3Cloud <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, d3CloudOutput, env, quoted = TRUE)
}
