
var newsArray;
var origArray;
var wordFreqArray;
var freqMap;
var stopWords;
var numWordsDisplay=110;


function sleep(milliseconds) {
  console.log('Going to sleep');
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
  console.log('wakeup');
}


function waitForElement(){
    if(typeof wordFreqArray !== "undefined"){
        //variable exists, do what you want
        console.log('element found');
    }
    else{
        
        waitForElement();
    }
}
function draw(words) {
    svg=d3.select("#chart1").append("svg");

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

        //mouse on event
        .on("mousemove", function(d) {
            console.log("Mouse Move:"+d.text);   
            


         
        



        })

        //mouse leave event
        .on("mouseout", function(d) {
            console.log("Mouse Out:"+d.text); 


        })

        //mouse click event
        //do the drill down of the selected key words
        .on("click", function(d) { 
            console.log("Selected words:"+d.text);   
            newsArray=origArray;
            freqCounting();
            //display selected word and its frequency appeared
            var str="<p><center><b>Selected word: </b>"+d.text+" &nbsp;&nbsp;&nbsp;&nbsp;<b>Frequency: </b>"+d.size+"</center></p>";
            document.getElementById('selectedWord').innerHTML = str;

            //get a HashMap that contain the indexes of the newsArray, in which the articles contain the clicked word
            var containList=d.articleContain.keys();
            //make a new raw data for new word cloud generation

            var strLink=" ";
            var tempNewsArray=new Array();
            for(var i=0;i<containList.length;i++){
               tempNewsArray[i]=newsArray[containList[i]];
               strLink+="<a href='"+tempNewsArray[i].link+"' target='_blank' style='text-decoration : none; color : #000000;'><center>Case :"+tempNewsArray[i].title+"</center></a>";

            }
            strLink+="<p></p>";
            document.getElementById('selectedWordLink').innerHTML = strLink;

            //get the articles that containing the clicked word, and updating the raw data array
            newsArray=tempNewsArray;

            //recalculating the word statistics
            freqCounting();

            //updating the freq range so that can rescale
            maxFreq=wordFreqArray[0].size;
            s = d3.scale.linear().domain([1,maxFreq]).range([10, 90]);//wordcloud size scaling 

            svg.remove();//clear old content 
            //redraw
            d3.layout.cloud().size([width, height])
              .words(wordFreqArray)
              .padding(5)
              .rotate(function() { return ~~(Math.random() * 2) * 90; })
              .font("Impact")
              .fontSize(function(d) { return s(d.size); })
              .on("end", draw)
              .start();
        });


  }
function on_data(data) {
        $('#results').empty();
        var docs = data.response.docs;
	newsArray=new Array();
        $.each(docs, function(i, item) {
	     var article=new Object();
                                article.title=item.CaseId;
                                article.date=item.Date;
                                article.category=item.Category;
                                article.content=item.Summary;
                                article.link=item.Status;

                                newsArray[i]=article;

        });
  origArray = new Array();
  origArray = newsArray;
	freqCounting();
  
  fill = d3.scale.category20(); //color scale
  maxFreq=wordFreqArray[0].size;
  s = d3.scale.linear().domain([1,maxFreq]).range([10, 90]);//wordcloud size scaling 
  var svg;

  //word cloud layout 
  cloud = d3.layout.cloud().size([width, height])
      .words(wordFreqArray)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return s(d.size); })
      .on("end", draw)
      .start();
      
  //main part: draw function of the cloud layout
  
      
    }

    function on_search() {
        var url='http://10.1.4.117:8983/solr/collection1/query?q=*:*&rows=12&fl=CaseId,Summary,Complainant,Complainee,Status&wt=json&callback=?&json.wrf=on_data';
        $.getJSON(url);
    }

function _init(){
      on_search();
     // waitForElement();
}

function _init1() {
	header("Access-Control-Allow-Origin: {$_SERVER['10.1.4.117']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
	var url='http://10.1.4.117:8983/solr/collection1/query?q=*:*&rows=12&fl=CaseId,Summary,Complainant,Complainee,Status&wt=json';
	$.getJSON( url , function( data ) {
		 var docs = data.response.docs;
        newsArray=new Array();
        $.each(docs, function(i, item) {
             var article=new Object();
                                article.title=item.CaseId;
                                article.date=item.Date;
                                article.category=item.Category;
                                article.content=item.Summary;
                                article.link=item.Status;

                                newsArray[i]=article;

        });
	freqCounting();

	});
}

function _init1(){
        // fetch data from server
        //should have some sort of API for getting the data
        $.ajax({
                url: "http://10.1.4.117:8983/solr/collection1/query?q=*:*&rows=12&fl=CaseId,Summary,Complainant,Complainee,Status&wt=json",
                context: document.body,
                dataType: "jsonp",
        //      headers : {Accept : "application/json"},
//              type: 'GET', 
//              async: false,
                success: function(data, textStatus, jqXHR){
			               var docs = data.response.docs;
        newsArray=new Array();
        $.each(docs, function(i, item) {
             var article=new Object();
                                article.title=item.CaseId;
                                article.date=item.Date;
                                article.category=item.Category;
                                article.content=item.Summary;
                                article.link=item.Status;

                                newsArray[i]=article;

        });
        freqCounting();

                },
                error: function(jqHXR, textStatus, errorThrown) {
                        console.log('ajax error in get survey ID call:' +textStatus + ' ' + errorThrown);
                }

         }); // end of the ajax call

}


function _init4(){
	// fetch data from server
	//should have some sort of API for getting the data
	$.ajax({
		url: "http://10.1.4.117:8983/solr/collection1/query?q=*:*&rows=12&fl=CaseId,Summary,Complainant,Complainee,Status&wt=json",
		context: document.body,
		dataType: "jsonp", 
	//	headers : {Accept : "application/json"},
//		type: 'GET', 
//		async: false,
		success: function(data, textStatus, jqXHR){
			//fetch succeeded
			newsArray=new Array();
			for(var i=0; i < data.length; i++) {
				var article=new Object();
				article.title=data[i].response.CaseId;
				article.date=data[i].response.Date;
				article.category=data[i].response.Category;
				article.content=data[i].response.Summary;
				article.link=data[i].response.Status;

				newsArray[i]=article;

			}

			freqCounting();
		},
		error: function(jqHXR, textStatus, errorThrown) {
			console.log('ajax error in get survey ID call:' +textStatus + ' ' + errorThrown);
		}

	 }); // end of the ajax call

}

function removeMeaningLessWords(word){
	if(word.indexOf('@') > -1)
		return null;

	if(isNumber(word)){
		return null;
	}

    if(stopWords.containsKey(word.toLowerCase())){
    	return null;
    }

    return word;
}

function freqCounting(){
 	wordFreqArray=new Array();

 	freqMap=new HashMap();
 	//freqMap.put("aaa", 3);
 	//console.log(freqMap.get("aaa"));

 	for(var i=0; i < newsArray.length; i++) {
 		var words=newsArray[i].content.split(" ");

 		for(var j=0; j < words.length; j++) {
 	//		console.log("Before:",words[j]);
			words[j]=words[j].replace(/[,"';:{}‘’!.<>?“”$#%&*()@，-]*/g,"");
	//		console.log("After:", words[j]);
 		
 			if(removeMeaningLessWords(words[j])){
		 		if(freqMap.containsKey(words[j])){
		 			var freqObj=freqMap.get(words[j]);
		 			freqObj.freq=freqObj.freq+parseInt('1');
		 			//console.log(freqObj.freq);
		 			freqObj.articleContain.put(i,"YES");
		 			freqMap.put(words[j],freqObj);

		 		}else{
		 			var freqObj=new Object();
		 			freqObj.freq=parseInt('1');
		 			freqObj.articleContain=new HashMap();
		 			freqObj.articleContain.put(i,"YES");
		 			//console.log(freqObj.freq);
		 			freqMap.put(words[j],freqObj);
		 		}
		 	}
		}

 	}

 	var freqMapKeySet=freqMap.keys();
 	var j=0;
 	for(var i=0;i<freqMapKeySet.length;i++){
 		
 		var freqCount=freqMap.get(freqMapKeySet[i]).freq;
 		if(freqCount>1){
 			//we need 60 most frequent words
 			//find the insertion pos
 			var arrayObj=new Object();
	 		arrayObj.text=freqMapKeySet[i];
	 		arrayObj.size=freqCount;
	 		arrayObj.articleContain=freqMap.get(freqMapKeySet[i]).articleContain;

 			if(j>0){
 				var finalIndex;
 				if(j>numWordsDisplay)
 					finalIndex=numWordsDisplay;
 				else
 					finalIndex=j;
 				for(var k=finalIndex-1;k>=0;k--){
 					//console.log(k);
 					if(freqCount>wordFreqArray[k].size){
 						if(k<numWordsDisplay-1){
 							wordFreqArray[k+1]=wordFreqArray[k];
 							if(k==0){
 								wordFreqArray[k]=arrayObj;
 							}
 						}
 					}else{
 						wordFreqArray[k+1]=arrayObj;
 						break;
 					}
 				}

 			}else{
 				//console.log("j:"+j);
 				wordFreqArray[j]=arrayObj;
 			}
	 
	 	//	console.log(wordFreqArray[j].text+"  "+wordFreqArray[j].size);
	 		j++;
	 	}
 	}
 
 	for(var i=0;i<wordFreqArray.length;i++){
 	//	console.log(wordFreqArray[i].text+"  "+wordFreqArray[i].size);
 	}
 	
}

/**
** HashMap for the convenience of freq stat and storing raw data
*/
function HashMap()
{
    
    var size = 0;
 
    var entry = new Object();
    
    
    this.put = function (key , value)
    {
        if(!this.containsKey(key))
        {
            size ++ ;
        }
        entry[key] = value;
    }
    
    this.get = function (key)
    {
        return this.containsKey(key) ? entry[key] : null;
    }
    
    this.remove = function ( key )
    {
        if( this.containsKey(key) && ( delete entry[key] ) )
        {
            size --;
        }
    }
    
    this.containsKey = function ( key )
    {
        return (key in entry);
    }
    
    this.containsValue = function ( value )
    {
        for(var prop in entry)
        {
            if(entry[prop] == value)
            {
                return true;
            }
        }
        return false;
    }
    
    this.values = function ()
    {
        var values = new Array();
        for(var prop in entry)
        {
            values.push(entry[prop]);
        }
        return values;
    }
    
    this.keys = function ()
    {
        var keys = new Array();
        for(var prop in entry)
        {
            keys.push(prop);
        }
        return keys;
    }
    
    /** Map Size **/
    this.size = function ()
    {
        return size;
    }
    
    this.clear = function ()
    {
        size = 0;
        entry = new Object();
    }
}

//check if is a number, we remove numbers from the word cloud
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
