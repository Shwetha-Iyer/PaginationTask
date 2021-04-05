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
    ul.append(liprev);

    var j=1;
    while(j<=10){
        var li = createTag("li","page-item");
        var a = createTag("a","page-link");
        a.setAttribute("id",j);
        a.addEventListener("click",display);
        a.innerHTML = j;
        li.append(a);
        ul.append(li);
        j++;
    }
    
    var linext = createTag("li","page-item");
    var anext = createTag("a","page-link");
    anext.setAttribute("id","Next");
    linext.addEventListener("click", display);
    anext.innerHTML = "Next";
    linext.append(anext);
    ul.append(linext);
    nav.append(ul);

    table.append(thead,tbody);
    col.append(table,nav);
    row.append(col);
    container.append(row);
    document.body.append(h1,container);
}
