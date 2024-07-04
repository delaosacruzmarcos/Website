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

/* toggleLeftSideBar handles clicks on the sidebar icons
 *  fileIcon      - 0
 *  searchIcon    - 1
 *  versionIcon   - 2
 *  debugIcon     - 3
 *  extensionIcon - 4
*/
function toggleLeftSideBar(iconType){
    var mainContent = document.getElementById("content");
    var sideBar = document.getElementById("leftSideNav");
    const open = "150px";
    const close = "40px";
    
    var selectedIcon;
    var iconData;
    switch (iconType){
        case 0: //fileIcon
            selectedIcon = document.getElementById("fileIcon");
            break;
        case 1: //searchIcon
            selectedIcon = document.getElementById("searchIcon");
            break;
        case 2: //versionIcon
            selectedIcon = document.getElementById("versionIcon");
            break;
        case 3: //debugIcon
            selectedIcon = document.getElementById("debugIcon");
            break;
        case 4: //extensionIcon
            selectedIcon = document.getElementById("extensionIcon");
            break;
        default: // Something went wrong here!
            console.log("error non valid icon number passed in");
    }

    // Determine if sidebar is already open
    if (sideBar.style.marginLeft != close){
        // open - change icon panel or close

        //Determine if the open is from the same icon press - meaning we must close

    }else{
        //close - Open it up

    }
}


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

function changeSVG(){
    var fileIcon = document.getElementById("fileIcon");
    if (fileIcon.classList.contains("highlight")){
        fileIcon.classList.remove("highlight");
    }else{
        fileIcon.classList.add("highlight");
    }

}