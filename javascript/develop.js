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

// function to flip the state at the given index
function toggleButton(index) {
    var toggle = true;
    var element = document.getElementsByClassName("icon-current")[0];
    var icon = document.getElementById(chooseIcon(index));
    if (!(element === undefined)){

            // Turn off Icon highlighting
            element.classList.remove("icon-current");
            element.classList.add("icon");

            const iconList = ["fileText", "searchText", "versionText", "debugText", "extensionText"];
            // Toggle all text off
            for (text in iconList){
                var elem = document.getElementById(iconList[text]);
                if (elem.classList.contains("icon-element-visible")){
                    elem.classList.remove("icon-element-visible");
                    elem.classList.add("icon-element-invisible");
                }
            }
            if (element.id == index){
                toggle = false;
                closeLeftSideBar();
            }
    }
    if (toggle){
        openLeftSideBar();
        var iconIndex = document.getElementById(index);
        iconIndex.classList.remove("icon");
        iconIndex.classList.add("icon-current");
        icon.classList.add("icon-element-visible");
        icon.classList.remove("icon-element-invisible");
    }
}

// Using the index toggle the Icon related to that index on
function chooseIcon(index){
    var idx = index.indexOf('Icon');
    str = index.substring(0, idx);
    return str + "Text";
}