Visualize selected button events in different browsers, and whether they differ for button or input elements, and whether they are affected if the handler throws an exception.

Results so far:
In order to support most browsers, both click and pointerdown should be handled.
- Click may not be triggered in mobile browsers, but pointerdown will.
- Click may be the only event triggered in desktop browsers (using tab).
- Exceptions in handlers don't seem to suppress events.
- No difference was found between button and input elements.

