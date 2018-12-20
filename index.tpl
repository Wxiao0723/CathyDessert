<% for(var i=0;i<JSON.data.length;i++){ %>
	<li>
		<a href="#">
		<img src="<%= JSON.data[i].imgsrc%>" alt="<%= JSON.data[i].name%>">
		<span><h3><%= JSON.data[i].name%></h3><br><%= JSON.data[i].description%></span>
		</a>
	</li>
<% } %>

