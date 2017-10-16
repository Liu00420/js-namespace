var LIU00420 = {
    init: function(){
        
        var div = document.createElement("div");
        let boxes = document.getElementById('boxes');
        div.classList.add("box");
        div.textContent = 'liu00420';
        boxes.appendChild(div);
        div.addEventListener("click",c);
        div.addEventListener("mousedown", m);
        div.addEventListener("mouseover", m);
    
        function m(ev){
            ev.currentTarget.classList.toggle("highlight");
            }

        function c(ev){
            var a=parseInt(Math.random()*10);
            var b=parseInt(Math.random()*10);
            var c=parseInt(Math.random()*10);
            var a2=parseInt(Math.random()*10);
            var b2=parseInt(Math.random()*10);
            var c2=parseInt(Math.random()*10);
            var color1 ="#"+a+b+c;
            var color2 ="#"+a2+b2+c2;
            ev.currentTarget.style.borderColor = color1;
            ev.currentTarget.style.backgroundColor = color2;
            }
        }
}

