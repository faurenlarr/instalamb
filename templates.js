module.exports = {

images: [
"<div class='pic'>",
'<img src="<%= image %>"/>',
"<button='type='submit' class='likeme'>" ,
 'LIKE ME',
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
