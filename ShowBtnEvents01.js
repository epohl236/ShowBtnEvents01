// Showing button events

const MAXNUMMSGS = 20;

var inMsgBlock = false;
var aMsgs = [];


function handleTimeout()
{
    printMsg ("");
    inMsgBlock = false;
}


function printMsg (strMsg)
{
    let textArea01 = document.getElementById ("textArea01");
    if (textArea01 == null)
        return;

    if (strMsg.length > 0)
    {
        dt = new Date();
        strTimeStamp = `${dt.getHours()}.${dt.getMinutes()}.${dt.getSeconds()}:${dt.getMilliseconds()}`;
        strMsg = strTimeStamp + " " + strMsg
    }

    aMsgs.push (strMsg);
    if (aMsgs.length > MAXNUMMSGS)
        aMsgs.shift();

    textArea01.value = aMsgs.join ("\n")

    if (!inMsgBlock)
    {
        inMsgBlock = true;
        setTimeout (handleTimeout, 250);
    }
}



function handleButton01Click()
{
    console.log ("click");
    printMsg ("btn: click");
}


function handleButton01Ptr()
{
    console.log ("pointerdown");
    printMsg ("btn: pointerdown");
}


function handleInputBtn01TouchStart()
{
    console.log ("touchstart");
    printMsg ("btn: touchstart");
}


function handleInputBtn01Click()
{
    console.log ("click");
    printMsg ("inp: click");
}


function handleInputBtn01Ptr()
{
    console.log ("pointerdown");
    printMsg ("inp: pointerdown");
}


function handleButton01TouchStart()
{
    console.log ("touchstart");
    printMsg ("inp: touchstart");
}

function installButtonHandlers()
{
    let button01 = document.getElementById ("button01");
    if (button01 == null)
        return;

    button01.addEventListener ("click", handleButton01Click);
    button01.addEventListener ("pointerdown", handleButton01Ptr);
    button01.addEventListener ("touchstart", handleButton01TouchStart);
}


function installInputHandlers()
{
    let inputBtn01 = document.getElementById ("inputBtn01");
    if (inputBtn01 == null)
        return;

    inputBtn01.addEventListener ("click", handleInputBtn01Click);
    inputBtn01.addEventListener ("pointerdown", handleInputBtn01Ptr);
    inputBtn01.addEventListener ("touchstart", handleInputBtn01TouchStart);
}



function installEventHandlers()
{
    installButtonHandlers();
    installInputHandlers();
}


window.addEventListener ("DOMContentLoaded", installEventHandlers);
