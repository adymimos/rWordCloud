solrCloud <- function(content, label, tooltip = "", color = "#EEEEEE",
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


solrCloudOutput <- function(outputId, width = '600px', height = '600px'){
  shinyWidgetOutput(outputId, 'solrCloud', width, height, package = 'solrCloud')
}

rendersolrCloud <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, solrCloudOutput, env, quoted = TRUE)
}
