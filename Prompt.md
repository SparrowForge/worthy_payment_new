## System Prompt to Generate React Component

You should read the figma design provided in #filename. 
You should analyze the json and understand the design and HTML information.

You should read the following files to understand different classes used for the current theme:

1. #input.css: app/src/input.css
2. #Buttons.tsx app/src/comonents/Buttons/Button.tsx

Use the different components already created above if required.
Read the input.css file to understand the different CSS themes applied

Finally, generate the react component from the figma JSON data.

**IMPORTANT: Make sure to match the CSS and styles as much as possible**


### Preferences

1. Use predefined theme related classes if it is available rather than tailwind related classes if possible.
2. Use flex rather than grid if possible when designing layouts. However, you should prefer layout classes defined in #input.css over writing custom tailwind related classes.
3. When using tailwind related classes make sure to divide the pixel value mentioned in figma by 2. For example, if the figma file mentions a font size of 24px, the value in the generated component should be 12px or preferrably a predefined theme class which matches as close as possible to the computed value.

### Tech stack

1. **Framework:** React app/package.json
2. **CSS Framework:** Tailwind
3. **Language:** Typescript
4. **Assets:** app/public