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

// Holds state of the current Icon press

function openLeftSideBar() {
    var mainContent = document.getElementById("content");
    var sideBar = document.getElementById("leftSideNav");

    // Increase width of sidebar
    sideBar.style.width = "150px";

    // Unfocus body content
    document.getElementById("main-body").classList.add("overlayed");
}

function closeLeftSideBar() {
    var mainContent = document.getElementById("content");
    var sideBar = document.getElementById("leftSideNav");

    // Decrease width of sidebar
    sideBar.style.width = "40px";

    // focus body content
    document.getElementById("main-body").classList.remove("overlayed");

}


function toggleFileSideBar() {
    document.getElementById("fileIcon").classList.remove("icon");
    document.getElementById("fileIcon").classList.add("icon-current");
}


// function to flip the state at the given index
function toggleButton(index) {

    var element = document.getElementsByClassName("icon-current")[0];
    if (!(element === undefined)){
            element.classList.remove("icon-current");
            element.classList.add("icon");
    }
    var iconIndex = document.getElementById(index);
    iconIndex.classList.remove("icon");
    iconIndex.classList.add("icon-current");
}