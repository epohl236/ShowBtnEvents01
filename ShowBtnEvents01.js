// Showing button events

/** Maximum number of messages in the output textarea */
const MAXNUMMSGS = 20;

/** Expected maximum length of a series of events in msec */
const MSGBLOCKMSECS = 250;

/** true: after start of a series of events, waitig for end */
var inMsgBlock = false;

/** Messages to be shown in output textarea */
var aMsgs = [];


/**
 * Timeout handler
 * 
 * Used to insert an empty line separator after the last message
 * in the output textarea when no events were triggered after a
 * certain time (see MSGBLOCKMSECS)
 */
function handleTimeout()
{
    printMsg ("");
    inMsgBlock = false;
}


/**
 * Show a message in the output textarea
 * 
 * @param {string} strMsg - Message to be shown
 */
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
        setTimeout (handleTimeout, MSGBLOCKMSECS);
    }
}


/**
 * Check whether to throw an exception for events of button01.
 * The result depends on the selection of radio button group rb_button01.
 * 
 * @param {string} strEventType - One of "click", "pointerdown", or "touchstart"
 * @returns true if the handler should throw an exception for this event
 */
function button01ThrowAt (strEventType)
{
    let rb_button01_chkd = document.querySelector ("input[name='rb_button01']:checked");
    return rb_button01_chkd != null && rb_button01_chkd.value == strEventType;
}


function handleButton01Click()
{
    console.log ("click");
    printMsg ("btn: click");
    if (button01ThrowAt ("click"))
        throw new Error ("Button 01 click exception");
}


function handleButton01Ptr()
{
    console.log ("pointerdown");
    printMsg ("btn: pointerdown");
    if (button01ThrowAt ("pointerdown"))
        throw new Error ("Button 01 pointerdown exception");
}


function handleButton01TouchStart()
{
    console.log ("touchstart");
    printMsg ("btn: touchstart");
    if (button01ThrowAt ("touchstart"))
        throw new Error ("Button 01 touchstart exception");
}


/**
 * Check whether to throw an exception for events of inputBtn01.
 * The result depends on the selection of radio button group rb_inpBtn01.
 * 
 * @param {string} strEventType -  One of "click", "pointerdown", or "touchstart"
 * @returns true if the handler should throw an exception for this event
 */
function inputBtn01ThrowAt (strEventType)
{
    let rb_inputBtn01_chkd = document.querySelector ("input[name='rb_inpBtn01']:checked");
    return rb_inputBtn01_chkd != null && rb_inputBtn01_chkd.value == strEventType;
}


function handleInputBtn01Click()
{
    console.log ("click");
    printMsg ("inp: click");
    if (inputBtn01ThrowAt ("click"))
        throw new Error ("Input 01 click exception");
}


function handleInputBtn01Ptr()
{
    console.log ("pointerdown");
    printMsg ("inp: pointerdown");
    if (inputBtn01ThrowAt ("pointerdown"))
        throw new Error ("Input 01 pointerdown exception");
}


function handleInputBtn01TouchStart()
{
    console.log ("touchstart");
    printMsg ("inp: touchstart");
    if (inputBtn01ThrowAt ("touchstart"))
        throw new Error ("Input 01 touchstart exception");
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
