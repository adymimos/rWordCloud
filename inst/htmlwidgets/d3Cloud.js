HTMLWidgets.widget({

  name: 'd3Cloud',

  type: 'output',
  
  renderOnNullValue: true,

  initialize: function(el, width, height) {

  var svg;
  //word cloud layout 
  var cloud = d3.layout.cloud().size([width, height])
      .padding(5);
  var svg = d3.select(el).append("svg")
        .attr("class", "solrCloud");
        
    return {
      svg: svg,
      solrCloud: cloud
    }

  },

  renderValue: function(el, x, instance) {
    var fill = d3.scale.category20();
    function draws(words) {
    svg = instance.svg;
    wordCloudGraph=svg.attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate("+width/2+","+height/2+")")
      .selectAll("text")
      .data(words);
        
    var words=wordCloudGraph.enter().append("text")
        .style("font-size", function(d) { return d.size*1.2 + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
  }
        var svg = instance.svg;
        var cloud = instance.solrCloud;
   


    // Retrieve our svg and bubble objects that were created in
    // the initialize method above

	//svg.remove(); //clearing old stuffs
    
    
    // Resize our svg element and bubble layout according to the
    // size of the actual DOM element
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    svg.attr("width", width).attr("height", height);
    var df = HTMLWidgets.dataframeToD3(x);
    maxFreq=df[0].size;
    s = d3.scale.linear().domain([1,maxFreq]).range([10, 90]);
     if ( instance.lastValue !== undefined) {
        svg.remove();
        console.log('Clearing svg');
         
    }
    cloud = d3.layout.cloud().size([width, height])
              .words(df)
              .padding(5)
              .rotate(function() { return ~~(Math.random() * 2) * 90; })
              .font("Impact")
              .fontSize(function(d) { return s(d.size); })
              .on("end", draws)
              .start();
 //   cloud.size([width, height])
 //     .words(df)
 //     .rotate(function() { return ~~(Math.random() * 2) * 90; })
 //     .font("Impact")
 //     .fontSize(function(d) { return s(d.size); })
 //     .on("end", draws)
 //     .start();
     // Store the current value so we can easily call renderValue
    // from the resize method below, which doesn't give us an x
    // value
    instance.lastValue = x;
  
  },

  resize: function(el, width, height, instance) {
    // Re-render the previous value, if any
    if (instance.lastValue) {
      this.renderValue(el, instance.lastValue, instance);
    }
  }

});
