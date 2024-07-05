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
const sidebarState = {
  fileIcon: true,
  searchIcon: false,
  versionIcon: false,
  debugIcon: false,
  extensionIcon: false
}

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

function updateSideBar(){
    // turn off all sidebar icons
    for (let [key, value] of sidebarState.entries()) {
        value = false;
    }
}

// function to flip the state at the given index
function toggleButton(index) {
    updateSideBar()
    sidebarState[index] = !sidebarState[index]; // negate existing value. true becomes false, vice-versa
    document.getElementById(index).classList.remove("icon");
    document.getElementById(index).classList.add("icon-current");
}