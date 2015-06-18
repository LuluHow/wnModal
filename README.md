# wnModal
Plugin for easy modal window

#Include
<pre>
&lt;html&gt;
  &lt;head&gt;
    &lt;href="wnModal.css" rel="stylesheet"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="window"&gt;&lt;/div&gt;
    &lt;div id="popup1" class="popup_block"&gt;
      &lt;p&gt;I'm a test&lt;/p&gt;
    &lt;/div&gt;
    &lt;src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"&gt;&lt;/&gt;
    &lt;script type="text/javascript" src="wnModal.js"&gt;&lt;script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

#Usage
<pre>
jQuery(function(){
  $("#window").wnModal();
});
</pre>

#Options
<pre>
larger: "width of modal window, in px"
windowID: "ID of popup"   <--- if popup1, windowID: "1", popup2, windowID: "2"...
</pre>

<pre>
jQuery(function(){
  $("#window").wnModal({
    larger: "700",
    windowID: "1"
  });
});
</pre>
