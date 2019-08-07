



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAczSFKEJxdgIczX-PFtsUaIQlnYOw:1413471380899";
 
 
 var CS_env = {"assetHostPath": "https://ssl.gstatic.com/codesite/ph", "relativeBaseUrl": "", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/10868592318973270098", "projectName": "jquery-ui", "profileUrl": "/u/115568053944372562093/", "domainName": null, "loggedInUserEmail": "mirko.benessere@gmail.com", "token": "ABZ6GAczSFKEJxdgIczX-PFtsUaIQlnYOw:1413471380899", "projectHomeUrl": "/p/jquery-ui"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-2427667-2'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>jquery.ui.datepicker-ar.js - 
 jquery-ui -
 
 
 The official jQuery User Interface framework - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/10868592318973270098/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>mirko.benessere@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/115568053944372562093/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/115568053944372562093/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fjquery-ui%2Fsource%2Fbrowse%2Fbranches%2Flabs%2Fdatepicker2%2Fui%2Fi18n%2Fjquery.ui.datepicker-ar.js%3Fr%3D3875" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/jquery-ui">
 <a href="/p/jquery-ui/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/jquery-ui/"><span itemprop="name">jquery-ui</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/jquery-ui/"><span itemprop="description">The official jQuery User Interface framework</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/jquery-ui/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/jquery-ui/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 
 
 
 
 <a href="/p/jquery-ui/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/jquery-ui/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/jquery-ui/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/jquery-ui/source/list">Changes</a></span> &nbsp;
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/jquery-ui/source/browse/?r=3875">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/jquery-ui/source/browse/branches/?r=3875">branches</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/labs/?r=3875">labs</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/labs/datepicker2/?r=3875">datepicker2</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/?r=3875">ui</a><span class="sp">/&nbsp;</span><a href="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/?r=3875">i18n</a><span class="sp">/&nbsp;</span>jquery.ui.datepicker-ar.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js?r=3874" title="Previous">&lsaquo;r3874</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r3875</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn3875_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn3875_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn3875_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn3875_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn3875_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn3875_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn3875_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn3875_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn3875_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn3875_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn3875_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn3875_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn3875_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn3875_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn3875_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn3875_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn3875_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn3875_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn3875_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn3875_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn3875_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn3875_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn3875_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn3875_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn3875_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn3875_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn3875_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn3875_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn3875_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn3875_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn3875_31"

><td id="31"><a href="#31">31</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn3875_1

><td class="source">﻿/* Arabic Translation for jQuery UI date picker plugin. */<br></td></tr
><tr
id=sl_svn3875_2

><td class="source">/* Khaled Al Horani -- koko.dw@gmail.com */<br></td></tr
><tr
id=sl_svn3875_3

><td class="source">/* خالد الحوراني -- koko.dw@gmail.com */<br></td></tr
><tr
id=sl_svn3875_4

><td class="source">/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name فبراير - يناير and there isn&#39;t any Arabic roots for these months */<br></td></tr
><tr
id=sl_svn3875_5

><td class="source">(function($) {<br></td></tr
><tr
id=sl_svn3875_6

><td class="source">	$.ui.datepicker.regional[&#39;ar&#39;] = {<br></td></tr
><tr
id=sl_svn3875_7

><td class="source">		renderer: $.ui.datepicker.defaultRenderer,<br></td></tr
><tr
id=sl_svn3875_8

><td class="source">		monthNames: [&#39;كانون الثاني&#39;, &#39;شباط&#39;, &#39;آذار&#39;, &#39;نيسان&#39;, &#39;آذار&#39;, &#39;حزيران&#39;,<br></td></tr
><tr
id=sl_svn3875_9

><td class="source">		&#39;تموز&#39;, &#39;آب&#39;, &#39;أيلول&#39;,	&#39;تشرين الأول&#39;, &#39;تشرين الثاني&#39;, &#39;كانون الأول&#39;],<br></td></tr
><tr
id=sl_svn3875_10

><td class="source">		monthNamesShort: [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;,&#39;4&#39;,&#39;5&#39;,&#39;6&#39;,&#39;7&#39;,&#39;8&#39;,&#39;9&#39;,&#39;10&#39;,&#39;11&#39;,&#39;12&#39;],<br></td></tr
><tr
id=sl_svn3875_11

><td class="source">		dayNames: [&#39;السبت&#39;, &#39;الأحد&#39;, &#39;الاثنين&#39;, &#39;الثلاثاء&#39;, &#39;الأربعاء&#39;, &#39;الخميس&#39;, &#39;الجمعة&#39;],<br></td></tr
><tr
id=sl_svn3875_12

><td class="source">		dayNamesShort: [&#39;سبت&#39;, &#39;أحد&#39;, &#39;اثنين&#39;, &#39;ثلاثاء&#39;, &#39;أربعاء&#39;, &#39;خميس&#39;, &#39;جمعة&#39;],<br></td></tr
><tr
id=sl_svn3875_13

><td class="source">		dayNamesMin: [&#39;سبت&#39;, &#39;أحد&#39;, &#39;اثنين&#39;, &#39;ثلاثاء&#39;, &#39;أربعاء&#39;, &#39;خميس&#39;, &#39;جمعة&#39;],<br></td></tr
><tr
id=sl_svn3875_14

><td class="source">		dateFormat: &#39;dd/mm/yyyy&#39;,<br></td></tr
><tr
id=sl_svn3875_15

><td class="source">		firstDay: 0,<br></td></tr
><tr
id=sl_svn3875_16

><td class="source">		prevText: &#39;&amp;#x3c;السابق&#39;, prevStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_17

><td class="source">		prevJumpText: &#39;&amp;#x3c;&amp;#x3c;&#39;, prevJumpStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_18

><td class="source">		nextText: &#39;التالي&amp;#x3e;&#39;, nextStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_19

><td class="source">		nextJumpText: &#39;&amp;#x3e;&amp;#x3e;&#39;, nextJumpStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_20

><td class="source">		currentText: &#39;اليوم&#39;, currentStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_21

><td class="source">		todayText: &#39;اليوم&#39;, todayStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_22

><td class="source">		clearText: &#39;-&#39;, clearStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_23

><td class="source">		closeText: &#39;إغلاق&#39;, closeStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_24

><td class="source">		yearStatus: &#39;&#39;, monthStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_25

><td class="source">		weekText: &#39;أسبوع&#39;, weekStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_26

><td class="source">		dayStatus: &#39;DD d MM&#39;,<br></td></tr
><tr
id=sl_svn3875_27

><td class="source">		defaultStatus: &#39;&#39;,<br></td></tr
><tr
id=sl_svn3875_28

><td class="source">  		isRTL: true<br></td></tr
><tr
id=sl_svn3875_29

><td class="source">	};<br></td></tr
><tr
id=sl_svn3875_30

><td class="source">	$.extend($.ui.datepicker.defaults, $.ui.datepicker.regional[&#39;ar&#39;]);<br></td></tr
><tr
id=sl_svn3875_31

><td class="source">})(jQuery);<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn3875_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn3875_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/jquery-ui/source/detail?spec=svn3875&amp;r=3875">r3875</a>
 by kbwood.au
 on Mar 6, 2010
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn3875&r=3875&amp;format=side&amp;path=/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js&amp;old_path=/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js&amp;old=3874">Diff</a>
 </div>
 <pre>Refactor of datepicker</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/jquery-ui/source/detail?r=3875&spec=svn3875';
 var publish_url = '/p/jquery-ui/source/detail?r=3875&spec=svn3875#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/alignment.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/alignment.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/alt-field.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/alt-field.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/buttonbar.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/buttonbar.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/change-content.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/change-content.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/change-select.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/change-select.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/change-style.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/change-style.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/date-formats.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/date-formats.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/day-hover.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/day-hover.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/default-date.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/default-date.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/default.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/default.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/dropdown-month-year.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/dropdown-month-year.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/event-search.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/event-search.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/events.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/events.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/first-day.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/first-day.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/icon-trigger.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/icon-trigger.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/index.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/index.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/inline.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/inline.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/localization.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/localization.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/min-max.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/min-max.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/multiple-calendars.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/multiple-calendars.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/other-months.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/other-months.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/show-status.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/show-status.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/demos/datepicker/show-week.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/show-week.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/tests/unit/datepicker/datepicker.html');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker.html?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/tests/unit/datepicker/datepicker_core.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_core.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/tests/unit/datepicker/datepicker_events.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_events.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/tests/unit/datepicker/datepicker_methods.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_methods.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/tests/unit/datepicker/datepicker_options.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_options.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/tests/unit/datepicker/datepicker_tickets.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_tickets.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/themes/base/jquery.ui.datepicker.css');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/themes/base/jquery.ui.datepicker.css?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-af.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-af.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js?r\x3d3875\x26spec\x3dsvn3875');
 
 var selected_path = '/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js';
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-az.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-az.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-bg.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-bg.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-bs.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-bs.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ca.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ca.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-cs.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-cs.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-da.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-da.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-de.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-de.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-el.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-el.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-en-GB.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-en-GB.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-eo.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-eo.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-es.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-es.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-et.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-et.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-eu.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-eu.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fa.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fa.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fi.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fi.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fo.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fo.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fr-CH.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fr-CH.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fr.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fr.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-he.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-he.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hr.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hr.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hu.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hu.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hy.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hy.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-id.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-id.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-is.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-is.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-it.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-it.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ja.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ja.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ko.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ko.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-lt.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-lt.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-lv.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-lv.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ms.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ms.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-nl.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-nl.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-no.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-no.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-pl.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-pl.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-pt-BR.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-pt-BR.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ro.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ro.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ru.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ru.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sk.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sk.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sl.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sl.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sq.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sq.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sr-SR.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sr-SR.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sr.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sr.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sv.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sv.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ta.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ta.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-th.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-th.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-tr.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-tr.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-uk.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-uk.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-vi.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-vi.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-CN.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-CN.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-HK.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-HK.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-TW.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-TW.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/jquery.ui.datepicker.ext.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/jquery.ui.datepicker.ext.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 changed_paths.push('/branches/labs/datepicker2/ui/jquery.ui.datepicker.js');
 changed_urls.push('/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/jquery.ui.datepicker.js?r\x3d3875\x26spec\x3dsvn3875');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/alignment.html?r=3875&amp;spec=svn3875"
 
 >.../demos/datepicker/alignment.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/alt-field.html?r=3875&amp;spec=svn3875"
 
 >.../demos/datepicker/alt-field.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/buttonbar.html?r=3875&amp;spec=svn3875"
 
 >.../demos/datepicker/buttonbar.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/change-content.html?r=3875&amp;spec=svn3875"
 
 >...s/datepicker/change-content.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/change-select.html?r=3875&amp;spec=svn3875"
 
 >...os/datepicker/change-select.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/change-style.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/change-style.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/date-formats.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/date-formats.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/day-hover.html?r=3875&amp;spec=svn3875"
 
 >.../demos/datepicker/day-hover.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/default-date.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/default-date.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/default.html?r=3875&amp;spec=svn3875"
 
 >...r2/demos/datepicker/default.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/dropdown-month-year.html?r=3875&amp;spec=svn3875"
 
 >...epicker/dropdown-month-year.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/event-search.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/event-search.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/events.html?r=3875&amp;spec=svn3875"
 
 >...er2/demos/datepicker/events.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/first-day.html?r=3875&amp;spec=svn3875"
 
 >.../demos/datepicker/first-day.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/icon-trigger.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/icon-trigger.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/index.html?r=3875&amp;spec=svn3875"
 
 >...ker2/demos/datepicker/index.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/inline.html?r=3875&amp;spec=svn3875"
 
 >...er2/demos/datepicker/inline.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/localization.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/localization.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/min-max.html?r=3875&amp;spec=svn3875"
 
 >...r2/demos/datepicker/min-max.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/multiple-calendars.html?r=3875&amp;spec=svn3875"
 
 >...tepicker/multiple-calendars.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/other-months.html?r=3875&amp;spec=svn3875"
 
 >...mos/datepicker/other-months.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/show-status.html?r=3875&amp;spec=svn3875"
 
 >...emos/datepicker/show-status.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/demos/datepicker/show-week.html?r=3875&amp;spec=svn3875"
 
 >.../demos/datepicker/show-week.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker.html?r=3875&amp;spec=svn3875"
 
 >.../unit/datepicker/datepicker.html</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_core.js?r=3875&amp;spec=svn3875"
 
 >...it/datepicker/datepicker_core.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_events.js?r=3875&amp;spec=svn3875"
 
 >.../datepicker/datepicker_events.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_methods.js?r=3875&amp;spec=svn3875"
 
 >...datepicker/datepicker_methods.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_options.js?r=3875&amp;spec=svn3875"
 
 >...datepicker/datepicker_options.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/tests/unit/datepicker/datepicker_tickets.js?r=3875&amp;spec=svn3875"
 
 >...datepicker/datepicker_tickets.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/themes/base/jquery.ui.datepicker.css?r=3875&amp;spec=svn3875"
 
 >...es/base/jquery.ui.datepicker.css</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-af.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-af.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js?r=3875&amp;spec=svn3875"
 selected="selected"
 >.../i18n/jquery.ui.datepicker-ar.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-az.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-az.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-bg.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-bg.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-bs.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-bs.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ca.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ca.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-cs.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-cs.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-da.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-da.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-de.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-de.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-el.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-el.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-en-GB.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-en-GB.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-eo.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-eo.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-es.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-es.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-et.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-et.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-eu.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-eu.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fa.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-fa.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fi.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-fi.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fo.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-fo.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fr-CH.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-fr-CH.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-fr.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-fr.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-he.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-he.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hr.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-hr.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hu.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-hu.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-hy.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-hy.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-id.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-id.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-is.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-is.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-it.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-it.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ja.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ja.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ko.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ko.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-lt.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-lt.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-lv.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-lv.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ms.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ms.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-nl.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-nl.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-no.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-no.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-pl.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-pl.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-pt-BR.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-pt-BR.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ro.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ro.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ru.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ru.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sk.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-sk.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sl.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-sl.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sq.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-sq.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sr-SR.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-sr-SR.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sr.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-sr.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-sv.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-sv.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ta.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-ta.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-th.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-th.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-tr.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-tr.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-uk.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-uk.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-vi.js?r=3875&amp;spec=svn3875"
 
 >.../i18n/jquery.ui.datepicker-vi.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-CN.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-zh-CN.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-HK.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-zh-HK.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-zh-TW.js?r=3875&amp;spec=svn3875"
 
 >...8n/jquery.ui.datepicker-zh-TW.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/jquery.ui.datepicker.ext.js?r=3875&amp;spec=svn3875"
 
 >...2/ui/jquery.ui.datepicker.ext.js</option>
 
 <option value="/p/jquery-ui/source/browse/branches/labs/datepicker2/ui/jquery.ui.datepicker.js?r=3875&amp;spec=svn3875"
 
 >...cker2/ui/jquery.ui.datepicker.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/jquery-ui/source/detail?spec=svn3875&r=3874">r3874</a>
 by kbwood.au
 on Mar 5, 2010
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn3875&r=3874&amp;format=side&amp;path=/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js&amp;old_path=/trunk/ui/i18n/jquery.ui.datepicker-ar.js&amp;old=3243">Diff</a>
 <br>
 <pre class="ifOpened">Refactor of datepicker</pre>
 </div>
 
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/jquery-ui/source/detail?spec=svn3875&r=3243">r3243</a>
 by rdworth
 on Sep 17, 2009
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn3875&r=3243&amp;format=side&amp;path=/trunk/ui/i18n/jquery.ui.datepicker-ar.js&amp;old_path=/trunk/ui/i18n/jquery.ui.datepicker-ar.js&amp;old=3004">Diff</a>
 <br>
 <pre class="ifOpened">renamed all ui.*.js files to
jquery.ui.*.js, all effects.*.js files
to jquery.effects.*.js per
announcement and discussion here
<a href="http://groups.google.com/group/jquery-" rel="nofollow">http://groups.google.com/group/jquery-</a>
...</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/jquery-ui/source/detail?spec=svn3875&r=3004">r3004</a>
 by kbwood.au
 on Jul 29, 2009
 &nbsp; <a href="/p/jquery-ui/source/diff?spec=svn3875&r=3004&amp;format=side&amp;path=/trunk/ui/i18n/jquery.ui.datepicker-ar.js&amp;old_path=/trunk/ui/i18n/jquery.ui.datepicker-ar.js&amp;old=2421">Diff</a>
 <br>
 <pre class="ifOpened">Datepicker: Fixed #4131 Could week
numbers [be] added to the Datepicker</pre>
 </div>
 
 
 <a href="/p/jquery-ui/source/list?path=/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js&start=3875">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 1723 bytes,
 31 lines</div>
 
 <div><a href="//jquery-ui.googlecode.com/svn-history/r3875/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 <dt>svn:eol-style</dt>
 <dd>native</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn3875': '/branches/labs/datepicker2/ui/i18n/jquery.ui.datepicker-ar.js'}
 codereviews = CR_controller.setup(
 {"assetHostPath": "https://ssl.gstatic.com/codesite/ph", "relativeBaseUrl": "", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/10868592318973270098", "projectName": "jquery-ui", "profileUrl": "/u/115568053944372562093/", "domainName": null, "loggedInUserEmail": "mirko.benessere@gmail.com", "token": "ABZ6GAczSFKEJxdgIczX-PFtsUaIQlnYOw:1413471380899", "projectHomeUrl": "/p/jquery-ui"}, '', 'svn3875', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/10868592318973270098/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

