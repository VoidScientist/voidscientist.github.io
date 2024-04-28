export function parseString(string) {

    let result = [];
    let viewed = {
        "*": 0
    };

    let tempElements = [];

    let sub = "";
    let mode = "NORMAL";

    for (const char of string) {

        if (char == "\n") {

            if (mode == "LIST") {

                tempElements.push(<li>{sub}</li>);

            } else {

                result.push(<span>{sub}</span>);
                result.push(<p />);

            }

            sub = "";
            mode = "NEWLINE";

            continue;

        }

        console.log(mode)

        switch (mode) {

            case "NORMAL": {

                if (char == "*") {

                    viewed[char] += 1;
                    continue;
                
                }


                if (viewed["*"] == 2) {

                    viewed["*"] = 0;
                    mode = "BOLD";
                    result.push(<span>{sub}</span>);
                    sub = "";

                }

                sub += char;
                break;

            }

            case "BOLD": {

                if (char == "*") {

                    viewed[char] += 1;
                    continue;
                
                }


                if (viewed["*"] == 2) {

                    viewed["*"] = 0;
                    mode = "NORMAL";
                    result.push(<b>{sub}</b>);
                    sub = "";

                }

                sub += char;
                break;

            }

            case "NEWLINE": {

                if (char == " ") continue;

                if (char == "-") {

                    mode = "LIST";
                    continue;
                    
                }

                if (tempElements.length > 0 && tempElements[0].type == "li") {

                    result.push(<ul>{tempElements}</ul>);
                    tempElements = [];

                }

                sub += char;
                mode = "NORMAL";
                break;

            }

            default: {

                sub += char;
                continue;

            }

        }
        
    }

    switch (mode) {

        case "NORMAL": {
            result.push(sub); 
            break;
        }
        case "BOLD": {
            result.push(<b>{sub}</b>)
            break;
        }
        case "LIST": {
            tempElements.push(<li>{sub}</li>)
            result.push(<ul>{tempElements}</ul>)
            break;
        }

    }

    return result;

}