let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let eachColWidth = (windowWidth/5)
// document.querySelector(".kanban_wrapper .col1").setAttribute("style","width:500px");

document.addEventListener("DOMContentLoaded", ()=>{
    let colnames = ["col1", "col2", "col3", "col4", "col5"]
    colnames.forEach(element => {
        document.querySelector("."+element).style.width = eachColWidth.toString() + "px";
    });

    let col1 = document.querySelector(".col1");
    let col2 = document.querySelector(".col2");
    let col3 = document.querySelector(".col3");
    let col4 = document.querySelector(".col4");
    let col5 = document.querySelector(".col5");
    

    let lists = document.getElementsByClassName("list");

    for (list of lists){
        list.addEventListener("dragstart", (e) => {
            let selected = e.target;

            // dragover
            col2.addEventListener("dragover", (e)=>{
                e.preventDefault();
            });
            col3.addEventListener("dragover", (e)=>{
                e.preventDefault();
            });
            col4.addEventListener("dragover", (e)=>{
                e.preventDefault();
            });
            col5.addEventListener("dragover", (e)=>{
                e.preventDefault();
            });


            // drop
            col2.addEventListener("drop", (e)=>{
                col2.appendChild(selected);
                selected = null;
            });
            col3.addEventListener("drop", (e)=>{
                col3.appendChild(selected);
                selected = null;
            });
            col4.addEventListener("drop", (e)=>{
                col4.appendChild(selected);
                selected = null;
            });
            col5.addEventListener("drop", (e)=>{
                col5.appendChild(selected);
                selected = null;
            });
        })
    };
});
