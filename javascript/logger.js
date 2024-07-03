 /*
    Logging library for development of front end functionality
*/

const Levels = Object.freeze({
    DEBUG:   Symbol("DEBUG"),
    WARNING: Symbol("WARNING"),
    ERROR:   Symbol("ERROR")
});

// Responsible for making lines in the log
class line {

    #lineChar = "x";
    #lineLen = 40;

    constructor(level){
        switch (level) {
            case DEBUG:
                this.lineChar = "-";
                break;
            case WARNING:
                this.lineChar = "=";
                break;
            case ERROR:
                this.lineChar = "#";
                break;
            default:
        }
    }

    // Inserts message into line
    function createLine(text){
        try{
            // Add padding for spaces, odd length strings are made even
            if (text.Length % 2 > 0){
                text = " " + text + "  ";
            }else{
                text = " " + text + " ";
            }
            let textLen = text.Length;\
            // determine the midsection to add the text too
            let chars = (this.#lineLen - textLen) / 2;
            // I'm a bit too drunk to finish this atm come back later...

            // Determine insertion 
        } catch (error){
            // Most likely text is not a string
        }
        
    }

}

class logger {

    constructor(){}

    // Creates line of chars with centered text
    function string lineBuilder(char, text){

    }

    // Applies proper logging functionality to error messages
    function print(level, error_string){
        pass;
    }

}



