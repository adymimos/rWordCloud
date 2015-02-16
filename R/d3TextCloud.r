d3TextCloud <- function(content, label, tooltip = "", color = "#EEEEEE",
  textColor = "#333333", width = NULL, height = NULL) {

  # forward options using x
  x = data.frame(
    content = content,
    label = label,
    tooltip = tooltip,
    color = color,
    textColor = textColor
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'd3TextCloud',
    x,
    width = width,
    height = height,
    package = 'rWordCloud',
    sizingPolicy = sizingPolicy(
      defaultWidth = 600,
      defaultHeight = 600
    )
  )
}


d3TextCloudOutput <- function(outputId, width = '600px', height = '600px'){
  shinyWidgetOutput(outputId, 'd3TextCloud', width, height, package = 'rWordCloud')
}

renderd3TextCloud <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, d3TextCloudOutput, env, quoted = TRUE)
}
