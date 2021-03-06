// Business logic

var myArr = [];

function pingpong(max){
  for (var i = 1; i <= max; i++) {
      if (i % 15 === 0) {
          myArr.push("pingpong")
      }
      else if (i % 3 === 0) {
          myArr.push("ping");
      }
      else if (i % 5 === 0) {
          myArr.push("pong")
      }
      else {
          myArr.push(i);
      }

  }
}
// UI logic

$(document).ready(function () {
    $(".btn").click(function (event) {
        event.preventDefault();
        myArr=[];
        if($(".pingPongList").length > 0){
            $(".pingPongList").remove();
        }
        var myPong = document.getElementById("Number").value;
        var list = document.createElement('ul');

       document.getElementById("Pong").appendChild(list);
       pingpong(myPong);

        list.setAttribute("class", "pingPongList");
        for (var i = 1; i <= myArr.length; i++) {

            var item = document.createElement('li');
            item.appendChild(document.createTextNode(myArr[i - 1]));
            list.appendChild(item);
        }



    });
});
