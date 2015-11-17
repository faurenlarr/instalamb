module.exports = {

images: [
"<div class='pic'>",
'<img src="<%= image %>"/>',
"<h3><%=caption%></h3>",
"<button data-id='<%=_id%>' 'type='submit' class='likeme'>" ,
 'LIKES: <%=likes%>',
 "</button>",
 "<button type='delete' class='delete'>",
 'DELETE',
 "</button>",
"</div>",
].join(""),



imageInput: [
  "<form class='imagethingy'>",
  "<input type='text' name='url' class='urlinput' placeholder='image url here'>",
  "<br>",
  "<input type='text' name='title' class='titleinput' placeholder='image caption here'>",
  "<button class='submit' type='submit'>upload</button>",
  "</form>"
].join(""),


};
