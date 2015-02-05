HTMLWidgets.widget({

  name: 'solrCloud',

  type: 'output',
  
  renderOnNullValue: true,

  initialize: function(el, width, height) {
  var newsArray;
  _setUpStopWord();
  _init()
  var fill = d3.scale.category20(); //color scale
  var maxFreq=100;
  var s = d3.scale.linear().domain([1,maxFreq]).range([10, 90]);//wordcloud size scaling 
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

    // Store the current value so we can easily call renderValue
    // from the resize method below, which doesn't give us an x
    // value
    instance.lastValue = x;

    // Retrieve our svg and bubble objects that were created in
    // the initialize method above
    var svg = instance.svg;
    var cloud = instance.solrCloud;
    
    // Resize our svg element and bubble layout according to the
    // size of the actual DOM element
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    svg.attr("width", width).attr("height", height);
    
    var df = HTMLWidgets.dataframeToD3(x);
     _setUpStopWord();
     _init(); 
    init_data(x);
    freqCounting();
    s = d3.scale.linear().domain([1,maxFreq]).range([10, 90]);
     cloud.size([width, height])
      .words(wordFreqArray)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return s(d.size); })
      .on("end", draw)
      .start();

  },

  resize: function(el, width, height, instance) {
    // Re-render the previous value, if any
    if (instance.lastValue) {
      this.renderValue(el, instance.lastValue, instance);
    }
  }

});
