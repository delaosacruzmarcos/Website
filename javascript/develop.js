 /***********************************************************\
|  DEVELOP JAVASCRIPT                                         |
| For learning how to how to use java script in conjunction   |
| with other elements of my webpage                           |
 \***********************************************************/
 
function greet() {
    document.getElementById("add_to_me")
        .innerHTML +=
        `<h3>
            hello world
        </h3>`;
}


 /**************** SIDE BAR ANNIMATIONS *********************/

function openLeftSideBar() {
    var mainContent = document.getElementById("content");
    var sideBar = document.getElementById("leftSideNav");

    // Increase width of sidebar
    mainContent.style.marginLeft = "150px";
    sideBar.style.width = "150px";

    // Unfocus main content
    mainContent.classList.add("overlayed");
    
}

function closeLeftSideBar() {
    var mainContent = document.getElementById("content");
    var sideBar = document.getElementById("leftSideNav");

    // Decrease width of sidebar
    mainContent.style.marginLeft = "40px";
    sideBar.style.width = "40px";

    // Focus main content
    if (mainContent.classList.contains("overlayed")){
        mainContent.classList.remove("overlayed");
    }
}