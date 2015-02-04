/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
 /**
 * Author: NG, Yik-wai Jason
 * Contact & Support: ywng@ust.hk
 * The Hong Kong University of Science and Technology
 * Data Visualization, CSE, HKUST
 */

 /**
 * A HashMap Libaray for frequently used English auxiliary words or words without insighful meanings
 */
function _setUpStopWord(){
	stopWords=new HashMap();

	stopWords.put("is",null);
	stopWords.put("am",null);
	stopWords.put("are",null);
	stopWords.put("one",null);
	stopWords.put("two",null);
	stopWords.put("three",null);
	stopWords.put("four",null);
	stopWords.put("five",null);
	stopWords.put("six",null);
	stopWords.put("seven",null);
	stopWords.put("all",null);
	stopWords.put("he",null);
	stopWords.put("she",null);
	stopWords.put("it",null);
	stopWords.put("if",null);
	stopWords.put("in",null);
	stopWords.put("on",null);
	stopWords.put("at",null);
	stopWords.put("to",null);
	stopWords.put("and",null);
	stopWords.put("too",null);
	stopWords.put("or",null);
	stopWords.put("will",null);
	stopWords.put("should",null);
	stopWords.put("have",null);

	stopWords.put("so",null);
	stopWords.put("the",null);
	stopWords.put("its",null);
	stopWords.put("it's",null);
	stopWords.put("his",null);
	stopWords.put("her",null);
	stopWords.put("they",null);
	stopWords.put("them",null);
	stopWords.put("what",null);
	stopWords.put("how",null);
	stopWords.put("when",null);
	stopWords.put("since",null);
	stopWords.put("before",null);
	stopWords.put("after",null);
	stopWords.put("a",null);

	stopWords.put("an",null);
	stopWords.put("shall",null);
	stopWords.put("may",null);
	stopWords.put("according",null);
	stopWords.put("we",null);
	stopWords.put("off",null);
	stopWords.put("inc.",null);
	stopWords.put("on",null);
	stopWords.put("under",null);
	stopWords.put("who",null);

	stopWords.put("as",null);
	stopWords.put("such",null);
	stopWords.put("last",null);
	stopWords.put("for",null);
	stopWords.put("was",null);
	stopWords.put("not",null);
	stopWords.put("also",null);
	stopWords.put("where",null);


	stopWords.put("our",null);
	stopWords.put("no",null);
	stopWords.put("you",null);
	stopWords.put("do",null);
	stopWords.put("i",null);

	stopWords.put("still",null);
	stopWords.put("due",null);
	stopWords.put("about",null);
	stopWords.put("per",null);
	stopWords.put("any",null);
	stopWords.put("&",null);


	stopWords.put("than",null);
	stopWords.put("outside",null);
	stopWords.put("co",null);
	stopWords.put("in",null);
	stopWords.put("inside",null);
	
	stopWords.put("us",null);
	stopWords.put("some",null);
	stopWords.put("these",null);
	stopWords.put("can",null);
 	stopWords.put("bloomberg ",null);
	stopWords.put("this",null);
	stopWords.put("s",null);
	stopWords.put("rights",null);
	stopWords.put("reserved",null);
	stopWords.put("most",null);
	stopWords.put("pm",null);
	stopWords.put("am",null);
	stopWords.put("javascript",null);
	stopWords.put("please",null);

	stopWords.put("A1",null);
	stopWords.put("lot",null);
	stopWords.put("go",null);
	stopWords.put("but",null);
	stopWords.put("year",null);
	stopWords.put("day",null);
	stopWords.put("near",null);
	
	stopWords.put("out",null);
	stopWords.put("both",null);
	stopWords.put("be",null);
	stopWords.put("isnt",null);
	stopWords.put("told",null);
	stopWords.put("best",null);
	stopWords.put("with",null);

	stopWords.put("has",null);
	stopWords.put("ltd",null);
	stopWords.put("first",null);
	stopWords.put("inc",null);
	stopWords.put("jan",null);
	stopWords.put("march",null);
	stopWords.put("feb",null);

	stopWords.put("more",null);
	stopWords.put("total",null);
	stopWords.put("thats",null);
	stopWords.put("contact",null);
	stopWords.put("lp",null);
	stopWords.put("billion",null);
	stopWords.put("didnt",null);


	stopWords.put("comments",null);
	stopWords.put("months",null);
	stopWords.put("data",null);
	stopWords.put("had",null);
	stopWords.put("of",null);
	stopWords.put("hes",null);
	stopWords.put("by",null);
	stopWords.put("which",null);

	stopWords.put("that",null);
	stopWords.put("from",null);
	stopWords.put("week",null);
	stopWords.put("yesterday",null);
	stopWords.put("bloomberg",null);
	stopWords.put("percent",null);
	stopWords.put("said",null);
	stopWords.put("between",null);
	stopWords.put("would",null);
	stopWords.put("million",null);
	stopWords.put("company",null);
	stopWords.put("probably",null);
	stopWords.put("published",null);

	stopWords.put("years",null);
	stopWords.put("companies",null);
	stopWords.put("because",null);
	stopWords.put("rate",null);
	stopWords.put("month",null);
	stopWords.put("then",null);
	stopWords.put("hours",null);
	stopWords.put("having",null);
	stopWords.put("like",null);
	stopWords.put("beside",null);
	stopWords.put("given",null);
	stopWords.put("their",null);
	stopWords.put("while",null);
	stopWords.put("time",null);
	stopWords.put("each",null);
	stopWords.put("same",null);
	stopWords.put("through",null);
	stopWords.put("him",null);
	stopWords.put("even",null);
	stopWords.put("next",null);
	stopWords.put("prices",null);
	stopWords.put("quarter",null);
	stopWords.put("really",null);
	stopWords.put("title",null);
	stopWords.put("bank",null);
	stopWords.put("banks",null);
	stopWords.put("today",null);
	stopWords.put("could",null);
	stopWords.put("been",null);
	stopWords.put("markets",null);
	stopWords.put("rates",null);
	stopWords.put("there",null);
	stopWords.put("other",null);
	stopWords.put("into",null);
	stopWords.put("index",null);
	stopWords.put("further",null);
	stopWords.put("were",null);
	stopWords.put("over",null);

	//Months
	stopWords.put("january",null);
	stopWords.put("febuary",null);
	stopWords.put("march",null);
	stopWords.put("april",null);
	stopWords.put("may",null);
	stopWords.put("june",null);
	stopWords.put("july",null);
	stopWords.put("august",null);
	stopWords.put("september",null);
	stopWords.put("october",null);
	stopWords.put("november",null);
	stopWords.put("december",null);
	stopWords.put("dec",null);





}
