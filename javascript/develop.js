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