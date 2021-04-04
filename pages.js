function createTag(element,elementClass=""){
    var tag = document.createElement(element);
    tag.setAttribute("class",elementClass);
    //tag.setAttribute("id",elementId);
    return tag;
}

var h1 = createTag("h1","","heading");
h1.setAttribute("style","text-align:center");
h1.innerHTML = "<br> USER DATA <br> <br>";

window.current = 1;
// XML HTTP REQUEST

var request = new XMLHttpRequest();
var url_string = "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json";
request.open('GET',url_string , true);
request.send();
request.onload =function() {
    var data = JSON.parse(this.response);
    var container = createTag("div","container");
    var row = createTag("div","row");
    var col = createTag("div","col-12");
    var table = createTag("table","table table-striped table-bordered");
    var thead = createTag("thead","thead-dark");
    var theadtr = createTag("tr");
    var th1 = createTag("th");
    th1.innerHTML = "ID";
    var th2 = createTag("th");
    th2.innerHTML = "NAME";
    var th3 = createTag("th");
    th3.innerHTML = "EMAIL";
    theadtr.append(th1,th2,th3);
    thead.append(theadtr);


    var tbody = createTag("tbody");
    display();
    function display(){
        tbody.innerHTML=" ";
        var value="";
        if(this.innerText){
            value = this.innerText;
            if(value === "Next"){
                if(window.current==10)
                ;
                else
               window.current++;
            }
            else if(value === "Previous"){
                if(window.current == 1)
                ;
                else
                window.current--;
            }
            else
            window.current=value;
        }
        else
        window.current = 1;
        for(var i = (current*10)-10; i < current*10; i++){
            var tr = createTag("tr");
            var td1 = createTag("td");
            td1.innerHTML = data[i].id;
            var td2 = createTag("td");
            td2.innerHTML = data[i].name;
            var td3 = createTag("td");
            td3.innerHTML = data[i].email;
            tr.append(td1,td2,td3);
            tbody.append(tr);
        }
    }
    var nav = createTag("nav");
    var ul = createTag("ul","pagination justify-content-center");
    var liprev = createTag("li","page-item");
    var aprev = createTag("a","page-link");
    aprev.setAttribute("id","Previous");
    liprev.addEventListener("click", display);
    aprev.innerHTML = "Previous";
    liprev.append(aprev);
    
    var li1 = createTag("li","page-item");
    var a1 = createTag("a","page-link");
    a1.setAttribute("id","1");
    a1.addEventListener("click", display);
    a1.innerHTML = "1";
    li1.append(a1);

    var li2 = createTag("li","page-item");
    var a2 = createTag("a","page-link");
    a2.setAttribute("id","2");
    a2.addEventListener("click", display);
    a2.innerHTML = "2";
    li2.append(a2);

    var li3 = createTag("li","page-item");
    var a3 = createTag("a","page-link");
    a3.setAttribute("id","3");
    a3.addEventListener("click", display);
    a3.innerHTML = "3";
    li3.append(a3);

    var li4 = createTag("li","page-item");
    var a4 = createTag("a","page-link");
    a4.setAttribute("id","4");
    a4.addEventListener("click", display);
    a4.innerHTML = "4";
    li4.append(a4);

    var li5 = createTag("li","page-item");
    var a5 = createTag("a","page-link");
    a5.setAttribute("id","5");
    a5.addEventListener("click", display);
    a5.innerHTML = "5";
    li5.append(a5);

    var li6 = createTag("li","page-item");
    var a6 = createTag("a","page-link");
    a6.setAttribute("id","6");
    a6.addEventListener("click", display);
    a6.innerHTML = "6";
    li6.append(a6);

    var li7 = createTag("li","page-item");
    var a7 = createTag("a","page-link");
    a7.setAttribute("id","7");
    a7.addEventListener("click", display);
    a7.innerHTML = "7";
    li7.append(a7);

    var li8 = createTag("li","page-item");
    var a8 = createTag("a","page-link");
    a8.setAttribute("id","8");
    a8.addEventListener("click", display);
    a8.innerHTML = "8";
    li8.append(a8);

    var li9 = createTag("li","page-item");
    var a9 = createTag("a","page-link");
    a9.setAttribute("id","9");
    a9.addEventListener("click", display);
    a9.innerHTML = "9";
    li9.append(a9);

    var li10 = createTag("li","page-item");
    var a10 = createTag("a","page-link");
    a10.setAttribute("id","10");
    a10.addEventListener("click", display);
    a10.innerHTML = "10";
    li10.append(a10);



    var linext = createTag("li","page-item");
    var anext = createTag("a","page-link");
    anext.setAttribute("id","Next");
    linext.addEventListener("click", display);
    anext.innerHTML = "Next";
    linext.append(anext);
    ul.append(liprev,li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,linext);
    nav.append(ul);

    table.append(thead,tbody);
    col.append(table,nav);
    row.append(col);
    container.append(row);
    document.body.append(h1,container);


}