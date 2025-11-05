## System Prompt to Generate React Component

You should read the figma design provided below in JSON format. 
You should analyze the json and understand the design and HTML information.

You should read the following files to understand different classes used for the current theme:

1. #input.css: app/src/input.css
2. #Buttons.tsx app/src/comonents/Buttons/Button.tsx

Use the different components already created above if required.
Read the input.css file to understand the different CSS themes applied

Finally, generate the react component from the figma JSON data.

**IMPORTANT: Make sure to match the CSS and styles as much as possible.**

**IMPORTANT: Make sure to use the text content provided in the figma design and do not use it from any of the reference files.**

### Preferences

1. Use predefined theme related classes if it is available rather than tailwind related classes if possible.
2. Use flex rather than grid if possible when designing layouts. However, you should prefer layout classes defined in #input.css over writing custom tailwind related classes.
3. When using tailwind related classes make sure to divide the pixel value mentioned in figma by 2. For example, if the figma file mentions a font size of 24px, the value in the generated component should be 12px or preferrably a predefined theme class which matches as close as possible to the computed value.

### Tech stack

1. **Framework:** React app/package.json
2. **CSS Framework:** Tailwind
3. **Language:** Typescript
4. **Assets:** app/public

### Figma Design

```json
{
  "name": "Worthy Payments Website (Copy File) - Partial file saved 11-3-2025",
  "lastModified": "2025-11-04T19:43:01Z",
  "thumbnailUrl": "https://s3-alpha.figma.com/thumbnails/ae0b120c-df40-4c77-80dc-0aec37ec1341?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWCZNGRZIVS%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2ec1c16016c742a2d5ba4939592c5e8b149fbed0b92f483089b70c97647cd752",
  "version": "2282655421951123632",
  "role": "owner",
  "editorType": "figma",
  "linkAccess": "view",
  "nodes": {
    "1:2509": {
      "document": {
        "id": "1:2509",
        "name": "Frame 3938",
        "type": "FRAME",
        "scrollBehavior": "SCROLLS",
        "children": [
          {
            "id": "1:2510",
            "name": "Frame 166",
            "type": "FRAME",
            "scrollBehavior": "SCROLLS",
            "children": [
              {
                "id": "1:2511",
                "name": "Frame 46",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2512",
                    "name": "Frame 43",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2513",
                        "name": "Frame 42",
                        "type": "FRAME",
                        "scrollBehavior": "SCROLLS",
                        "children": [
                          {
                            "id": "1:2514",
                            "name": "Frame 37",
                            "type": "FRAME",
                            "scrollBehavior": "SCROLLS",
                            "children": [
                              {
                                "id": "1:2515",
                                "name": "Frame 324",
                                "type": "FRAME",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2516",
                                    "name": "Payments",
                                    "type": "TEXT",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.12037205696105957,
                                          "g": 0.13782061636447906,
                                          "b": 0.1299438178539276,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "OUTSIDE",
                                    "styles": {
                                      "fill": "1:4"
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 3590.0,
                                      "y": 5997.5,
                                      "width": 66.0,
                                      "height": 17.0
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 3590.97998046875,
                                      "y": 6001.419921875,
                                      "width": 63.520751953125,
                                      "height": 13.43994140625
                                    },
                                    "constraints": {
                                      "vertical": "TOP",
                                      "horizontal": "LEFT"
                                    },
                                    "layoutAlign": "INHERIT",
                                    "layoutGrow": 0.0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG",
                                    "characters": "Payments",
                                    "characterStyleOverrides": [],
                                    "styleOverrideTable": {},
                                    "lineTypes": [
                                      "NONE"
                                    ],
                                    "lineIndentations": [
                                      0
                                    ],
                                    "style": {
                                      "fontFamily": "Hauora",
                                      "fontPostScriptName": "Hauora-Medium",
                                      "fontStyle": "Medium",
                                      "fontWeight": 500,
                                      "textAutoResize": "WIDTH_AND_HEIGHT",
                                      "fontSize": 14.0,
                                      "textAlignHorizontal": "LEFT",
                                      "textAlignVertical": "TOP",
                                      "letterSpacing": 0.0,
                                      "lineHeightPx": 16.80000114440918,
                                      "lineHeightPercent": 87.84773254394531,
                                      "lineHeightPercentFontSize": 120.00000762939453,
                                      "lineHeightUnit": "FONT_SIZE_%"
                                    },
                                    "layoutVersion": 4,
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [
                                  {
                                    "blendMode": "NORMAL",
                                    "type": "SOLID",
                                    "color": {
                                      "r": 0.8894230723381042,
                                      "g": 0.8894230723381042,
                                      "b": 0.8894230723381042,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokeWeight": 1.0,
                                "individualStrokeWeights": {
                                  "top": 0.0,
                                  "right": 1.0,
                                  "bottom": 0.0,
                                  "left": 0.0
                                },
                                "strokeAlign": "CENTER",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "layoutMode": "HORIZONTAL",
                                "counterAxisAlignItems": "CENTER",
                                "primaryAxisAlignItems": "CENTER",
                                "paddingRight": 10.0,
                                "itemSpacing": 10.0,
                                "layoutWrap": "NO_WRAP",
                                "strokeDashes": [
                                  4.0,
                                  4.0
                                ],
                                "strokeCap": "ROUND",
                                "absoluteBoundingBox": {
                                  "x": 3590.0,
                                  "y": 5997.5,
                                  "width": 76.0,
                                  "height": 17.0
                                },
                                "absoluteRenderBounds": {
                                  "x": 3590.0,
                                  "y": 5997.0,
                                  "width": 76.5,
                                  "height": 18.0
                                },
                                "constraints": {
                                  "vertical": "TOP",
                                  "horizontal": "LEFT"
                                },
                                "layoutAlign": "INHERIT",
                                "layoutGrow": 0.0,
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG",
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2517",
                                "name": "arrow-right-circle",
                                "type": "FRAME",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2518",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06765924394130707,
                                          "g": 0.7676283121109009,
                                          "b": 0.45164239406585693,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.09154099225997925,
                                          "g": 0.8525639772415161,
                                          "b": 0.5090168118476868,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "CENTER",
                                    "strokeJoin": "ROUND",
                                    "strokeCap": "ROUND",
                                    "styles": {
                                      "fill": "1:6"
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 3679.666015625,
                                      "y": 5997.6669921875,
                                      "width": 16.66666603088379,
                                      "height": 16.66666603088379
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 3679.166015625,
                                      "y": 5997.1669921875,
                                      "width": 17.666748046875,
                                      "height": 17.66650390625
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2519",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [],
                                    "strokes": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 1.0,
                                          "g": 1.0,
                                          "b": 1.0,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "CENTER",
                                    "strokeJoin": "ROUND",
                                    "strokeCap": "ROUND",
                                    "styles": {
                                      "stroke": "1:7"
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 3688.0,
                                      "y": 6002.6669921875,
                                      "width": 3.3333332538604736,
                                      "height": 6.666666507720947
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 3687.5,
                                      "y": 6002.1669921875,
                                      "width": 4.333251953125,
                                      "height": 7.66650390625
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2520",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [],
                                    "strokes": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 1.0,
                                          "g": 1.0,
                                          "b": 1.0,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "CENTER",
                                    "strokeJoin": "ROUND",
                                    "strokeCap": "ROUND",
                                    "styles": {
                                      "stroke": "1:7"
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 3684.666015625,
                                      "y": 6006.0,
                                      "width": 6.666666507720947,
                                      "height": 0.0
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 3684.166015625,
                                      "y": 6005.5,
                                      "width": 7.666748046875,
                                      "height": 1.0
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": true,
                                "background": [
                                  {
                                    "blendMode": "NORMAL",
                                    "visible": false,
                                    "type": "SOLID",
                                    "color": {
                                      "r": 1.0,
                                      "g": 1.0,
                                      "b": 1.0,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "fills": [
                                  {
                                    "blendMode": "NORMAL",
                                    "visible": false,
                                    "type": "SOLID",
                                    "color": {
                                      "r": 1.0,
                                      "g": 1.0,
                                      "b": 1.0,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 3678.0,
                                  "y": 5996.0,
                                  "width": 20.0,
                                  "height": 20.0
                                },
                                "absoluteRenderBounds": {
                                  "x": 3678.0,
                                  "y": 5996.0,
                                  "width": 20.0,
                                  "height": 20.0
                                },
                                "constraints": {
                                  "vertical": "TOP",
                                  "horizontal": "LEFT"
                                },
                                "layoutAlign": "INHERIT",
                                "layoutGrow": 0.0,
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED",
                                "effects": [],
                                "interactions": []
                              }
                            ],
                            "blendMode": "PASS_THROUGH",
                            "clipsContent": false,
                            "background": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 1.0,
                                  "g": 1.0,
                                  "b": 1.0,
                                  "a": 1.0
                                }
                              }
                            ],
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 1.0,
                                  "g": 1.0,
                                  "b": 1.0,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.8894230723381042,
                                  "g": 0.8894230723381042,
                                  "b": 0.8894230723381042,
                                  "a": 1.0
                                }
                              }
                            ],
                            "cornerRadius": 50.0,
                            "cornerSmoothing": 0.0,
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "backgroundColor": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            },
                            "layoutMode": "HORIZONTAL",
                            "counterAxisAlignItems": "CENTER",
                            "primaryAxisAlignItems": "CENTER",
                            "paddingLeft": 16.0,
                            "paddingRight": 12.0,
                            "paddingTop": 6.0,
                            "paddingBottom": 6.0,
                            "itemSpacing": 12.0,
                            "layoutWrap": "NO_WRAP",
                            "absoluteBoundingBox": {
                              "x": 3574.0,
                              "y": 5990.0,
                              "width": 136.0,
                              "height": 32.0
                            },
                            "absoluteRenderBounds": {
                              "x": 3574.0,
                              "y": 5990.0,
                              "width": 136.0,
                              "height": 32.0
                            },
                            "constraints": {
                              "vertical": "TOP",
                              "horizontal": "LEFT"
                            },
                            "layoutAlign": "INHERIT",
                            "layoutGrow": 0.0,
                            "layoutSizingHorizontal": "HUG",
                            "layoutSizingVertical": "HUG",
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2521",
                            "name": "Accept and optimize payments, globally",
                            "type": "TEXT",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.12037205696105957,
                                  "g": 0.13782061636447906,
                                  "b": 0.1299438178539276,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "OUTSIDE",
                            "styles": {
                              "fill": "1:4"
                            },
                            "absoluteBoundingBox": {
                              "x": 3574.0,
                              "y": 6034.0,
                              "width": 428.0,
                              "height": 92.0
                            },
                            "absoluteRenderBounds": {
                              "x": 3574.760009765625,
                              "y": 6043.72802734375,
                              "width": 366.60205078125,
                              "height": 83.9619140625
                            },
                            "constraints": {
                              "vertical": "TOP",
                              "horizontal": "LEFT"
                            },
                            "layoutAlign": "STRETCH",
                            "layoutGrow": 0.0,
                            "layoutSizingHorizontal": "FILL",
                            "layoutSizingVertical": "HUG",
                            "characters": "Accept and optimize payments, globally",
                            "characterStyleOverrides": [],
                            "styleOverrideTable": {},
                            "lineTypes": [
                              "NONE"
                            ],
                            "lineIndentations": [
                              0
                            ],
                            "style": {
                              "fontFamily": "Hauora",
                              "fontPostScriptName": "Hauora-SemiBold",
                              "fontStyle": "SemiBold",
                              "fontWeight": 600,
                              "textAutoResize": "HEIGHT",
                              "fontSize": 38.0,
                              "textAlignHorizontal": "LEFT",
                              "textAlignVertical": "TOP",
                              "letterSpacing": 0.0,
                              "lineHeightPx": 45.60000228881836,
                              "lineHeightPercent": 87.84773254394531,
                              "lineHeightPercentFontSize": 120.00000762939453,
                              "lineHeightUnit": "FONT_SIZE_%"
                            },
                            "layoutVersion": 4,
                            "effects": [],
                            "interactions": []
                          }
                        ],
                        "blendMode": "PASS_THROUGH",
                        "clipsContent": false,
                        "background": [],
                        "fills": [],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "INSIDE",
                        "backgroundColor": {
                          "r": 0.0,
                          "g": 0.0,
                          "b": 0.0,
                          "a": 0.0
                        },
                        "layoutMode": "VERTICAL",
                        "counterAxisSizingMode": "FIXED",
                        "itemSpacing": 12.0,
                        "layoutWrap": "NO_WRAP",
                        "absoluteBoundingBox": {
                          "x": 3574.0,
                          "y": 5990.0,
                          "width": 428.0,
                          "height": 136.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3574.0,
                          "y": 5990.0,
                          "width": 428.0,
                          "height": 137.68994140625
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "STRETCH",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "HUG",
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2522",
                        "name": "Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
                        "type": "TEXT",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.2596307098865509,
                              "g": 0.2660255432128906,
                              "b": 0.26282811164855957,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "OUTSIDE",
                        "styles": {
                          "fill": "1:5"
                        },
                        "absoluteBoundingBox": {
                          "x": 3574.0,
                          "y": 6142.0,
                          "width": 428.0,
                          "height": 48.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3574.159912109375,
                          "y": 6148.240234375,
                          "width": 424.123291015625,
                          "height": 39.83984375
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "INHERIT",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "HUG",
                        "characters": "Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
                        "characterStyleOverrides": [],
                        "styleOverrideTable": {},
                        "lineTypes": [
                          "NONE"
                        ],
                        "lineIndentations": [
                          0
                        ],
                        "style": {
                          "fontFamily": "Hauora",
                          "fontPostScriptName": "Hauora-Regular",
                          "fontStyle": "Regular",
                          "fontWeight": 400,
                          "textAutoResize": "HEIGHT",
                          "fontSize": 16.0,
                          "textAlignHorizontal": "LEFT",
                          "textAlignVertical": "TOP",
                          "letterSpacing": 0.0,
                          "lineHeightPx": 24.0,
                          "lineHeightPercent": 109.80966186523438,
                          "lineHeightPercentFontSize": 150.0,
                          "lineHeightUnit": "FONT_SIZE_%"
                        },
                        "layoutVersion": 4,
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": false,
                    "background": [],
                    "fills": [],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.0,
                      "g": 0.0,
                      "b": 0.0,
                      "a": 0.0
                    },
                    "layoutMode": "VERTICAL",
                    "counterAxisSizingMode": "FIXED",
                    "itemSpacing": 16.0,
                    "layoutWrap": "NO_WRAP",
                    "absoluteBoundingBox": {
                      "x": 3574.0,
                      "y": 5990.0,
                      "width": 428.0,
                      "height": 200.0
                    },
                    "absoluteRenderBounds": {
                      "x": 3574.0,
                      "y": 5990.0,
                      "width": 428.0,
                      "height": 200.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "STRETCH",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FILL",
                    "layoutSizingVertical": "HUG",
                    "effects": [],
                    "interactions": []
                  },
                  {
                    "id": "1:2523",
                    "name": "Frame 3",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2524",
                        "name": "Start with payments",
                        "type": "TEXT",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "OUTSIDE",
                        "absoluteBoundingBox": {
                          "x": 3598.0,
                          "y": 6237.0,
                          "width": 149.0,
                          "height": 19.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3598.535888671875,
                          "y": 6241.240234375,
                          "width": 147.731689453125,
                          "height": 15.599609375
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "INHERIT",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "characters": "Start with payments",
                        "characterStyleOverrides": [],
                        "styleOverrideTable": {},
                        "lineTypes": [
                          "NONE"
                        ],
                        "lineIndentations": [
                          0
                        ],
                        "style": {
                          "fontFamily": "Hauora",
                          "fontPostScriptName": "Hauora-Regular",
                          "fontStyle": "Regular",
                          "fontWeight": 400,
                          "textAutoResize": "WIDTH_AND_HEIGHT",
                          "fontSize": 16.0,
                          "textAlignHorizontal": "LEFT",
                          "textAlignVertical": "TOP",
                          "letterSpacing": 0.0,
                          "lineHeightPx": 19.200000762939453,
                          "lineHeightPercent": 87.84773254394531,
                          "lineHeightPercentFontSize": 120.00000762939453,
                          "lineHeightUnit": "FONT_SIZE_%"
                        },
                        "layoutVersion": 4,
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2525",
                        "name": "arrow-right-circle",
                        "type": "FRAME",
                        "scrollBehavior": "SCROLLS",
                        "children": [
                          {
                            "id": "1:2526",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "visible": false,
                                "type": "SOLID",
                                "color": {
                                  "r": 0.2653654217720032,
                                  "g": 0.29734155535697937,
                                  "b": 0.32532060146331787,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [
                              {
                                "blendMode": "NORMAL",
                                "visible": false,
                                "type": "SOLID",
                                "color": {
                                  "r": 0.477302223443985,
                                  "g": 0.52188640832901,
                                  "b": 0.5608975291252136,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokeWeight": 0.6000000238418579,
                            "strokeAlign": "CENTER",
                            "strokeJoin": "ROUND",
                            "strokeCap": "ROUND",
                            "absoluteBoundingBox": {
                              "x": 3752.33203125,
                              "y": 6241.3330078125,
                              "width": 13.333333969116211,
                              "height": 13.333333969116211
                            },
                            "absoluteRenderBounds": null,
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2527",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [],
                            "strokes": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 1.0,
                                  "g": 1.0,
                                  "b": 1.0,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokeWeight": 1.2000000476837158,
                            "strokeAlign": "CENTER",
                            "strokeJoin": "ROUND",
                            "absoluteBoundingBox": {
                              "x": 3757.0,
                              "y": 6244.0,
                              "width": 4.0,
                              "height": 8.0
                            },
                            "absoluteRenderBounds": {
                              "x": 3756.57568359375,
                              "y": 6243.57568359375,
                              "width": 5.0244140625,
                              "height": 8.8486328125
                            },
                            "preserveRatio": true,
                            "targetAspectRatio": {
                              "x": 2.666666269302368,
                              "y": 5.333332538604736
                            },
                            "constraints": {
                              "vertical": "CENTER",
                              "horizontal": "CENTER"
                            },
                            "effects": [],
                            "interactions": []
                          }
                        ],
                        "blendMode": "PASS_THROUGH",
                        "clipsContent": true,
                        "background": [
                          {
                            "blendMode": "NORMAL",
                            "visible": false,
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            }
                          }
                        ],
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "visible": false,
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "INSIDE",
                        "backgroundColor": {
                          "r": 0.0,
                          "g": 0.0,
                          "b": 0.0,
                          "a": 0.0
                        },
                        "absoluteBoundingBox": {
                          "x": 3751.0,
                          "y": 6240.0,
                          "width": 16.0,
                          "height": 16.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3751.0,
                          "y": 6240.0,
                          "width": 16.0,
                          "height": 16.0
                        },
                        "targetAspectRatio": {
                          "x": 20.0,
                          "y": 20.0
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "INHERIT",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED",
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": false,
                    "background": [
                      {
                        "blendMode": "NORMAL",
                        "type": "SOLID",
                        "color": {
                          "r": 0.06765924394130707,
                          "g": 0.7676283121109009,
                          "b": 0.45164239406585693,
                          "a": 1.0
                        }
                      }
                    ],
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "type": "SOLID",
                        "color": {
                          "r": 0.06765924394130707,
                          "g": 0.7676283121109009,
                          "b": 0.45164239406585693,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [],
                    "cornerRadius": 8.0,
                    "cornerSmoothing": 1.0,
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.06765924394130707,
                      "g": 0.7676283121109009,
                      "b": 0.45164239406585693,
                      "a": 1.0
                    },
                    "styles": {
                      "fills": "1:6",
                      "fill": "1:6"
                    },
                    "layoutMode": "HORIZONTAL",
                    "counterAxisAlignItems": "MAX",
                    "primaryAxisAlignItems": "CENTER",
                    "paddingLeft": 24.0,
                    "paddingRight": 24.0,
                    "paddingTop": 12.0,
                    "paddingBottom": 12.0,
                    "itemSpacing": 4.0,
                    "layoutWrap": "NO_WRAP",
                    "absoluteBoundingBox": {
                      "x": 3574.0,
                      "y": 6225.0,
                      "width": 217.0,
                      "height": 43.0
                    },
                    "absoluteRenderBounds": {
                      "x": 3574.0,
                      "y": 6225.0,
                      "width": 217.0,
                      "height": 43.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "INHERIT",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "HUG",
                    "layoutSizingVertical": "HUG",
                    "effects": [],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [],
                "fills": [],
                "strokes": [],
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 0.0
                },
                "layoutMode": "VERTICAL",
                "counterAxisSizingMode": "FIXED",
                "itemSpacing": 35.0,
                "layoutWrap": "NO_WRAP",
                "absoluteBoundingBox": {
                  "x": 3574.0,
                  "y": 5990.0,
                  "width": 428.0,
                  "height": 278.0
                },
                "absoluteRenderBounds": {
                  "x": 3574.0,
                  "y": 5990.0,
                  "width": 428.0,
                  "height": 278.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutAlign": "STRETCH",
                "layoutGrow": 0.0,
                "layoutSizingHorizontal": "FILL",
                "layoutSizingVertical": "HUG",
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2528",
                "name": "Frame 165",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2529",
                    "name": "See also",
                    "type": "TEXT",
                    "scrollBehavior": "SCROLLS",
                    "blendMode": "PASS_THROUGH",
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "type": "SOLID",
                        "color": {
                          "r": 0.12037205696105957,
                          "g": 0.13782061636447906,
                          "b": 0.1299438178539276,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "OUTSIDE",
                    "strokeCap": "ROUND",
                    "styles": {
                      "fill": "1:4"
                    },
                    "absoluteBoundingBox": {
                      "x": 3590.0,
                      "y": 6316.0,
                      "width": 396.0,
                      "height": 19.0
                    },
                    "absoluteRenderBounds": {
                      "x": 3590.583984375,
                      "y": 6320.240234375,
                      "width": 63.043701171875,
                      "height": 12.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "STRETCH",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FILL",
                    "layoutSizingVertical": "HUG",
                    "characters": "See also",
                    "characterStyleOverrides": [],
                    "styleOverrideTable": {},
                    "lineTypes": [
                      "NONE"
                    ],
                    "lineIndentations": [
                      0
                    ],
                    "style": {
                      "fontFamily": "Hauora",
                      "fontPostScriptName": "Hauora-SemiBold",
                      "fontStyle": "SemiBold",
                      "fontWeight": 600,
                      "textAutoResize": "HEIGHT",
                      "fontSize": 16.0,
                      "textAlignHorizontal": "LEFT",
                      "textAlignVertical": "TOP",
                      "letterSpacing": 0.0,
                      "lineHeightPx": 19.200000762939453,
                      "lineHeightPercent": 87.84773254394531,
                      "lineHeightPercentFontSize": 120.00000762939453,
                      "lineHeightUnit": "FONT_SIZE_%"
                    },
                    "layoutVersion": 4,
                    "effects": [],
                    "interactions": []
                  },
                  {
                    "id": "1:2530",
                    "name": "Frame 164",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2531",
                        "name": "Tax for automating tax registration, collection, & filing",
                        "type": "TEXT",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.12037205696105957,
                              "g": 0.13782061636447906,
                              "b": 0.1299438178539276,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "OUTSIDE",
                        "strokeCap": "ROUND",
                        "styles": {
                          "fill": "1:4"
                        },
                        "absoluteBoundingBox": {
                          "x": 3590.0,
                          "y": 6351.0,
                          "width": 394.0,
                          "height": 19.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3590.159912109375,
                          "y": 6355.240234375,
                          "width": 391.957763671875,
                          "height": 15.83984375
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "INHERIT",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "characters": "Tax for automating tax registration, collection, & filing",
                        "characterStyleOverrides": [
                          8,
                          8,
                          8,
                          0,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12,
                          12
                        ],
                        "styleOverrideTable": {
                          "12": {
                            "fontFamily": "Hauora",
                            "fontPostScriptName": "Hauora-Regular",
                            "fontStyle": "Regular",
                            "fontWeight": 400,
                            "fontSize": 16.0,
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.2596307098865509,
                                  "g": 0.2660255432128906,
                                  "b": 0.26282811164855957,
                                  "a": 1.0
                                }
                              }
                            ],
                            "inheritFillStyleId": "1:5"
                          },
                          "8": {
                            "fontFamily": "Hauora",
                            "fontPostScriptName": "Hauora-Bold",
                            "fontStyle": "Bold",
                            "fontWeight": 700,
                            "fontSize": 16.0
                          }
                        },
                        "lineTypes": [
                          "NONE"
                        ],
                        "lineIndentations": [
                          0
                        ],
                        "style": {
                          "fontFamily": "Hauora",
                          "fontPostScriptName": "Hauora-Medium",
                          "fontStyle": "Medium",
                          "fontWeight": 500,
                          "textAutoResize": "WIDTH_AND_HEIGHT",
                          "fontSize": 16.0,
                          "textAlignHorizontal": "LEFT",
                          "textAlignVertical": "TOP",
                          "letterSpacing": 0.0,
                          "lineHeightPx": 19.200000762939453,
                          "lineHeightPercent": 87.84773254394531,
                          "lineHeightPercentFontSize": 120.00000762939453,
                          "lineHeightUnit": "FONT_SIZE_%"
                        },
                        "layoutVersion": 4,
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2532",
                        "name": "Radar for Al-powered fraud protection",
                        "type": "TEXT",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.12037205696105957,
                              "g": 0.13782061636447906,
                              "b": 0.1299438178539276,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "OUTSIDE",
                        "strokeCap": "ROUND",
                        "styles": {
                          "fill": "1:4"
                        },
                        "absoluteBoundingBox": {
                          "x": 3590.0,
                          "y": 6382.0,
                          "width": 396.0,
                          "height": 19.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3591.1201171875,
                          "y": 6386.240234375,
                          "width": 278.548828125,
                          "height": 15.599609375
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "STRETCH",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "HUG",
                        "characters": "Radar for Al-powered fraud protection",
                        "characterStyleOverrides": [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20
                        ],
                        "styleOverrideTable": {
                          "20": {
                            "fontFamily": "Hauora",
                            "fontPostScriptName": "Hauora-Regular",
                            "fontStyle": "Regular",
                            "fontWeight": 400,
                            "fontSize": 16.0,
                            "letterSpacing": 0.0,
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.2596307098865509,
                                  "g": 0.2660255432128906,
                                  "b": 0.26282811164855957,
                                  "a": 1.0
                                }
                              }
                            ],
                            "lineHeightPx": 19.200000762939453,
                            "lineHeightPercent": 87.84773254394531,
                            "lineHeightPercentFontSize": 120.00000762939453,
                            "lineHeightUnit": "FONT_SIZE_%",
                            "inheritFillStyleId": "1:5"
                          }
                        },
                        "lineTypes": [
                          "NONE"
                        ],
                        "lineIndentations": [
                          0
                        ],
                        "style": {
                          "fontFamily": "Hauora",
                          "fontPostScriptName": "Hauora-Bold",
                          "fontStyle": "Bold",
                          "fontWeight": 700,
                          "textAutoResize": "HEIGHT",
                          "fontSize": 16.0,
                          "textAlignHorizontal": "LEFT",
                          "textAlignVertical": "TOP",
                          "letterSpacing": 0.0,
                          "lineHeightPx": 19.200000762939453,
                          "lineHeightPercent": 87.84773254394531,
                          "lineHeightPercentFontSize": 120.00000762939453,
                          "lineHeightUnit": "FONT_SIZE_%"
                        },
                        "layoutVersion": 4,
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2533",
                        "name": "Terminal for custom in-person payments",
                        "type": "TEXT",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.12037205696105957,
                              "g": 0.13782061636447906,
                              "b": 0.1299438178539276,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "OUTSIDE",
                        "strokeCap": "ROUND",
                        "styles": {
                          "fill": "1:4"
                        },
                        "absoluteBoundingBox": {
                          "x": 3590.0,
                          "y": 6413.0,
                          "width": 396.0,
                          "height": 19.0
                        },
                        "absoluteRenderBounds": {
                          "x": 3590.159912109375,
                          "y": 6417.02392578125,
                          "width": 300.404541015625,
                          "height": 15.81591796875
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "STRETCH",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "HUG",
                        "characters": "Terminal for custom in-person payments",
                        "characterStyleOverrides": [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30,
                          30
                        ],
                        "styleOverrideTable": {
                          "30": {
                            "fontFamily": "Hauora",
                            "fontPostScriptName": "Hauora-Regular",
                            "fontStyle": "Regular",
                            "fontWeight": 400,
                            "fontSize": 16.0,
                            "letterSpacing": 0.0,
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.2596307098865509,
                                  "g": 0.2660255432128906,
                                  "b": 0.26282811164855957,
                                  "a": 1.0
                                }
                              }
                            ],
                            "lineHeightPx": 19.200000762939453,
                            "lineHeightPercent": 87.84773254394531,
                            "lineHeightPercentFontSize": 120.00000762939453,
                            "lineHeightUnit": "FONT_SIZE_%",
                            "inheritFillStyleId": "1:5"
                          }
                        },
                        "lineTypes": [
                          "NONE"
                        ],
                        "lineIndentations": [
                          0
                        ],
                        "style": {
                          "fontFamily": "Hauora",
                          "fontPostScriptName": "Hauora-Bold",
                          "fontStyle": "Bold",
                          "fontWeight": 700,
                          "textAutoResize": "HEIGHT",
                          "fontSize": 16.0,
                          "textAlignHorizontal": "LEFT",
                          "textAlignVertical": "TOP",
                          "letterSpacing": 0.0,
                          "lineHeightPx": 19.200000762939453,
                          "lineHeightPercent": 87.84773254394531,
                          "lineHeightPercentFontSize": 120.00000762939453,
                          "lineHeightUnit": "FONT_SIZE_%"
                        },
                        "layoutVersion": 4,
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": false,
                    "background": [],
                    "fills": [],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.0,
                      "g": 0.0,
                      "b": 0.0,
                      "a": 0.0
                    },
                    "layoutMode": "VERTICAL",
                    "counterAxisSizingMode": "FIXED",
                    "itemSpacing": 12.0,
                    "layoutWrap": "NO_WRAP",
                    "strokeCap": "ROUND",
                    "absoluteBoundingBox": {
                      "x": 3590.0,
                      "y": 6351.0,
                      "width": 396.0,
                      "height": 81.0
                    },
                    "absoluteRenderBounds": {
                      "x": 3590.0,
                      "y": 6351.0,
                      "width": 396.0,
                      "height": 81.83984375
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "STRETCH",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FILL",
                    "layoutSizingVertical": "HUG",
                    "effects": [],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_LINEAR",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5,
                        "y": -3.0616171314629196e-17
                      },
                      {
                        "x": 0.5,
                        "y": 0.9999999999999999
                      },
                      {
                        "x": 0.0,
                        "y": 0.0
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.9736078977584839,
                          "g": 0.9736078977584839,
                          "b": 0.9736078977584839,
                          "a": 0.10000000149011612
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.9725490212440491,
                          "g": 0.9725490212440491,
                          "b": 0.9725490212440491,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_LINEAR",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5,
                        "y": -3.0616171314629196e-17
                      },
                      {
                        "x": 0.5,
                        "y": 0.9999999999999999
                      },
                      {
                        "x": 0.0,
                        "y": 0.0
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.9736078977584839,
                          "g": 0.9736078977584839,
                          "b": 0.9736078977584839,
                          "a": 0.10000000149011612
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.9725490212440491,
                          "g": 0.9725490212440491,
                          "b": 0.9725490212440491,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "strokes": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.9375,
                      "g": 0.9375,
                      "b": 0.9375,
                      "a": 1.0
                    }
                  }
                ],
                "cornerRadius": 12.0,
                "cornerSmoothing": 1.0,
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 0.0
                },
                "layoutMode": "VERTICAL",
                "counterAxisSizingMode": "FIXED",
                "paddingLeft": 16.0,
                "paddingRight": 16.0,
                "paddingTop": 16.0,
                "paddingBottom": 16.0,
                "itemSpacing": 16.0,
                "layoutWrap": "NO_WRAP",
                "absoluteBoundingBox": {
                  "x": 3574.0,
                  "y": 6300.0,
                  "width": 428.0,
                  "height": 148.0
                },
                "absoluteRenderBounds": {
                  "x": 3574.0,
                  "y": 6300.0,
                  "width": 428.0,
                  "height": 148.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutAlign": "STRETCH",
                "layoutGrow": 0.0,
                "layoutSizingHorizontal": "FILL",
                "layoutSizingVertical": "HUG",
                "effects": [],
                "interactions": []
              }
            ],
            "blendMode": "PASS_THROUGH",
            "clipsContent": false,
            "background": [],
            "fills": [],
            "strokes": [],
            "strokeWeight": 1.0,
            "strokeAlign": "INSIDE",
            "backgroundColor": {
              "r": 0.0,
              "g": 0.0,
              "b": 0.0,
              "a": 0.0
            },
            "layoutMode": "VERTICAL",
            "counterAxisSizingMode": "FIXED",
            "itemSpacing": 32.0,
            "layoutWrap": "NO_WRAP",
            "absoluteBoundingBox": {
              "x": 3574.0,
              "y": 5990.0,
              "width": 428.0,
              "height": 458.0
            },
            "absoluteRenderBounds": {
              "x": 3574.0,
              "y": 5990.0,
              "width": 428.0,
              "height": 458.0
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "layoutAlign": "INHERIT",
            "layoutGrow": 0.0,
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "HUG",
            "effects": [],
            "interactions": []
          },
          {
            "id": "1:2534",
            "name": "Frame 3937",
            "type": "FRAME",
            "scrollBehavior": "SCROLLS",
            "children": [
              {
                "id": "1:2535",
                "name": "Ellipse 7",
                "type": "ELLIPSE",
                "scrollBehavior": "SCROLLS",
                "blendMode": "PASS_THROUGH",
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_RADIAL",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5,
                        "y": 0.49999999999999994
                      },
                      {
                        "x": 0.5,
                        "y": 0.9999999999999999
                      },
                      {
                        "x": 0.0,
                        "y": 0.5
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.8589741587638855,
                          "g": 0.8589741587638855,
                          "b": 0.8589741587638855,
                          "a": 1.0
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.914963960647583,
                          "g": 0.9375,
                          "b": 0.9253652095794678,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "strokes": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.8676470518112183,
                      "g": 0.8676470518112183,
                      "b": 0.8676470518112183,
                      "a": 1.0
                    }
                  }
                ],
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "absoluteBoundingBox": {
                  "x": 4167.0,
                  "y": 6034.0,
                  "width": 370.0,
                  "height": 370.0
                },
                "absoluteRenderBounds": {
                  "x": 4128.0,
                  "y": 5995.0,
                  "width": 448.0,
                  "height": 448.0
                },
                "preserveRatio": true,
                "targetAspectRatio": {
                  "x": 279.0,
                  "y": 279.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "effects": [
                  {
                    "type": "DROP_SHADOW",
                    "visible": true,
                    "color": {
                      "r": 0.25028494000434875,
                      "g": 0.3509615361690521,
                      "b": 0.297267347574234,
                      "a": 0.27000001072883606
                    },
                    "blendMode": "NORMAL",
                    "offset": {
                      "x": 0.0,
                      "y": 0.0
                    },
                    "radius": 34.0,
                    "spread": 5.0,
                    "showShadowBehindNode": false
                  },
                  {
                    "type": "INNER_SHADOW",
                    "visible": true,
                    "color": {
                      "r": 0.7399503588676453,
                      "g": 0.7708332538604736,
                      "b": 0.7584800720214844,
                      "a": 1.0
                    },
                    "blendMode": "NORMAL",
                    "offset": {
                      "x": 0.0,
                      "y": 4.0
                    },
                    "radius": 17.0,
                    "spread": 6.0
                  }
                ],
                "arcData": {
                  "startingAngle": 0.0,
                  "endingAngle": 6.2831854820251465,
                  "innerRadius": 0.720454752445221
                },
                "interactions": []
              },
              {
                "id": "1:2536",
                "name": "Vector 1",
                "type": "VECTOR",
                "scrollBehavior": "SCROLLS",
                "blendMode": "PASS_THROUGH",
                "fills": [],
                "strokes": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.5924451947212219,
                      "g": 0.6474360227584839,
                      "b": 0.6199403405189514,
                      "a": 1.0
                    }
                  }
                ],
                "strokeWeight": 1.0,
                "strokeAlign": "CENTER",
                "strokeDashes": [
                  6.0,
                  6.0
                ],
                "strokeCap": "ROUND",
                "cornerRadius": 20.0,
                "cornerSmoothing": 1.0,
                "absoluteBoundingBox": {
                  "x": 4456.5,
                  "y": 6051.5,
                  "width": 52.0,
                  "height": 46.0
                },
                "absoluteRenderBounds": {
                  "x": 4456.0,
                  "y": 6051.0,
                  "width": 53.0,
                  "height": 47.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2537",
                "name": "Vector 3",
                "type": "VECTOR",
                "scrollBehavior": "SCROLLS",
                "rotation": 3.141592653589793,
                "blendMode": "PASS_THROUGH",
                "fills": [],
                "strokes": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.5924451947212219,
                      "g": 0.6474360227584839,
                      "b": 0.6199403405189514,
                      "a": 1.0
                    }
                  }
                ],
                "strokeWeight": 1.0,
                "strokeAlign": "CENTER",
                "strokeDashes": [
                  6.0,
                  6.0
                ],
                "strokeCap": "ROUND",
                "cornerRadius": 20.0,
                "cornerSmoothing": 1.0,
                "absoluteBoundingBox": {
                  "x": 4195.0,
                  "y": 6051.5,
                  "width": 52.0,
                  "height": 46.0
                },
                "absoluteRenderBounds": {
                  "x": 4194.5,
                  "y": 6051.0,
                  "width": 53.0,
                  "height": 47.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2538",
                "name": "Vector 2",
                "type": "VECTOR",
                "scrollBehavior": "SCROLLS",
                "blendMode": "PASS_THROUGH",
                "fills": [],
                "fillOverrideTable": {
                  "1": null
                },
                "strokes": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.5924451947212219,
                      "g": 0.6474360227584839,
                      "b": 0.6199403405189514,
                      "a": 1.0
                    }
                  }
                ],
                "strokeWeight": 1.0,
                "strokeAlign": "CENTER",
                "strokeDashes": [
                  6.0,
                  6.0
                ],
                "strokeCap": "ROUND",
                "cornerRadius": 20.0,
                "cornerSmoothing": 1.0,
                "absoluteBoundingBox": {
                  "x": 4457.0,
                  "y": 6339.5,
                  "width": 52.0,
                  "height": 46.0
                },
                "absoluteRenderBounds": {
                  "x": 4456.5,
                  "y": 6339.0,
                  "width": 53.0,
                  "height": 47.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2539",
                "name": "Vector 4",
                "type": "VECTOR",
                "scrollBehavior": "SCROLLS",
                "rotation": 3.141592653589793,
                "blendMode": "PASS_THROUGH",
                "fills": [],
                "strokes": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.5924451947212219,
                      "g": 0.6474360227584839,
                      "b": 0.6199403405189514,
                      "a": 1.0
                    }
                  }
                ],
                "strokeWeight": 1.0,
                "strokeAlign": "CENTER",
                "strokeDashes": [
                  6.0,
                  6.0
                ],
                "strokeCap": "ROUND",
                "cornerRadius": 20.0,
                "cornerSmoothing": 1.0,
                "absoluteBoundingBox": {
                  "x": 4195.0,
                  "y": 6339.5,
                  "width": 52.0,
                  "height": 46.0
                },
                "absoluteRenderBounds": {
                  "x": 4194.5,
                  "y": 6339.0,
                  "width": 53.0,
                  "height": 47.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2540",
                "name": "Frame 325",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2541",
                    "name": "fi_16959779",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2542",
                        "name": "_x31_9_Credit_Card",
                        "type": "GROUP",
                        "scrollBehavior": "SCROLLS",
                        "children": [
                          {
                            "id": "1:2543",
                            "name": "Group",
                            "type": "GROUP",
                            "scrollBehavior": "SCROLLS",
                            "children": [
                              {
                                "id": "1:2544",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2545",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2546",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06765924394130707,
                                              "g": 0.7676283121109009,
                                              "b": 0.45164239406585693,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "fillOverrideTable": {
                                          "1": null
                                        },
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "styles": {
                                          "fill": "1:6"
                                        },
                                        "absoluteBoundingBox": {
                                          "x": 4184.6533203125,
                                          "y": 6024.97314453125,
                                          "width": 22.693172454833984,
                                          "height": 15.8728609085083
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4184.6533203125,
                                          "y": 6024.97314453125,
                                          "width": 22.693359375,
                                          "height": 15.873046875
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4184.6533203125,
                                      "y": 6024.97314453125,
                                      "width": 22.693172454833984,
                                      "height": 15.8728609085083
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4184.6533203125,
                                      "y": 6024.97314453125,
                                      "width": 22.693359375,
                                      "height": 15.873046875
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2547",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2548",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.2286192774772644,
                                              "g": 0.9086538553237915,
                                              "b": 0.6016669869422913,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4184.6533203125,
                                          "y": 6024.97314453125,
                                          "width": 22.693172454833984,
                                          "height": 15.873891830444336
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4184.6533203125,
                                          "y": 6024.97314453125,
                                          "width": 22.693359375,
                                          "height": 15.8740234375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4184.6533203125,
                                      "y": 6024.97314453125,
                                      "width": 22.693172454833984,
                                      "height": 15.873891830444336
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4184.6533203125,
                                      "y": 6024.97314453125,
                                      "width": 22.693359375,
                                      "height": 15.8740234375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2549",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2550",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4184.6533203125,
                                          "y": 6029.20361328125,
                                          "width": 22.693218231201172,
                                          "height": 3.2197511196136475
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4184.6533203125,
                                          "y": 6029.20361328125,
                                          "width": 22.693359375,
                                          "height": 3.2197265625
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4184.6533203125,
                                      "y": 6029.20361328125,
                                      "width": 22.693218231201172,
                                      "height": 3.2197511196136475
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4184.6533203125,
                                      "y": 6029.20361328125,
                                      "width": 22.693359375,
                                      "height": 3.2197511196136475
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2551",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2552",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.2286192774772644,
                                              "g": 0.9086538553237915,
                                              "b": 0.6016669869422913,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4184.6533203125,
                                          "y": 6029.203125,
                                          "width": 22.693172454833984,
                                          "height": 3.2201714515686035
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4184.6533203125,
                                          "y": 6029.203125,
                                          "width": 22.693359375,
                                          "height": 3.22021484375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4184.6533203125,
                                      "y": 6029.203125,
                                      "width": 22.693172454833984,
                                      "height": 3.2201714515686035
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4184.6533203125,
                                      "y": 6029.203125,
                                      "width": 22.693359375,
                                      "height": 3.22021484375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2553",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2554",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4187.234375,
                                          "y": 6035.9599609375,
                                          "width": 5.48085880279541,
                                          "height": 2.5241260528564453
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4187.234375,
                                          "y": 6035.9599609375,
                                          "width": 5.48095703125,
                                          "height": 2.52392578125
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4187.234375,
                                      "y": 6035.9599609375,
                                      "width": 5.48085880279541,
                                      "height": 2.5241260528564453
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4187.234375,
                                      "y": 6035.9599609375,
                                      "width": 5.48095703125,
                                      "height": 2.5241260528564453
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2555",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2556",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.2286192774772644,
                                              "g": 0.9086538553237915,
                                              "b": 0.6016669869422913,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4187.2333984375,
                                          "y": 6036.00439453125,
                                          "width": 5.435062408447266,
                                          "height": 2.480343818664551
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4187.2333984375,
                                          "y": 6036.00439453125,
                                          "width": 5.43505859375,
                                          "height": 2.48046875
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4187.2333984375,
                                      "y": 6036.00439453125,
                                      "width": 5.435062408447266,
                                      "height": 2.480343818664551
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4187.2333984375,
                                      "y": 6036.00439453125,
                                      "width": 5.435062408447266,
                                      "height": 2.48046875
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2557",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2558",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4201.36865234375,
                                          "y": 6036.20166015625,
                                          "width": 3.1712822914123535,
                                          "height": 0.0
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4201.36865234375,
                                          "y": 6036.20166015625,
                                          "width": 3.17138671875,
                                          "height": 0.0
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      },
                                      {
                                        "id": "1:2559",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4201.3681640625,
                                          "y": 6038.2421875,
                                          "width": 3.17132830619812,
                                          "height": 0.0
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4201.3681640625,
                                          "y": 6038.2421875,
                                          "width": 3.17138671875,
                                          "height": 0.0
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4201.3681640625,
                                      "y": 6036.20166015625,
                                      "width": 3.171879768371582,
                                      "height": 2.040515661239624
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4201.3681640625,
                                      "y": 6036.20166015625,
                                      "width": 3.171879768371582,
                                      "height": 2.04052734375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4184.6533203125,
                                  "y": 6024.97314453125,
                                  "width": 22.693218231201172,
                                  "height": 15.873891830444336
                                },
                                "absoluteRenderBounds": {
                                  "x": 4184.6533203125,
                                  "y": 6024.97314453125,
                                  "width": 22.693359375,
                                  "height": 15.8740234375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2560",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2561",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2562",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.2286192774772644,
                                              "g": 0.9086538553237915,
                                              "b": 0.6016669869422913,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4189.81591796875,
                                          "y": 6018.15380859375,
                                          "width": 12.367499351501465,
                                          "height": 12.369186401367188
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4189.81591796875,
                                          "y": 6018.15380859375,
                                          "width": 12.36767578125,
                                          "height": 12.369140625
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4189.81591796875,
                                      "y": 6018.15380859375,
                                      "width": 12.367499351501465,
                                      "height": 12.369186401367188
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4189.81591796875,
                                      "y": 6018.15380859375,
                                      "width": 12.36767578125,
                                      "height": 12.369186401367188
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2563",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2564",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06765924394130707,
                                              "g": 0.7676283121109009,
                                              "b": 0.45164239406585693,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "fillOverrideTable": {
                                          "1": null
                                        },
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "styles": {
                                          "fill": "1:6"
                                        },
                                        "absoluteBoundingBox": {
                                          "x": 4189.81591796875,
                                          "y": 6018.923828125,
                                          "width": 11.593453407287598,
                                          "height": 11.598516464233398
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4189.81591796875,
                                          "y": 6018.923828125,
                                          "width": 11.59326171875,
                                          "height": 11.5986328125
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4189.81591796875,
                                      "y": 6018.923828125,
                                      "width": 11.593453407287598,
                                      "height": 11.598516464233398
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4189.81591796875,
                                      "y": 6018.923828125,
                                      "width": 11.593453407287598,
                                      "height": 11.5986328125
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4189.81591796875,
                                  "y": 6018.15380859375,
                                  "width": 12.367639541625977,
                                  "height": 12.369186401367188
                                },
                                "absoluteRenderBounds": {
                                  "x": 4189.81591796875,
                                  "y": 6018.15380859375,
                                  "width": 12.36767578125,
                                  "height": 12.369186401367188
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2565",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2566",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2567",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4192.3642578125,
                                          "y": 6021.3896484375,
                                          "width": 7.2701945304870605,
                                          "height": 5.8968281745910645
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4192.3642578125,
                                          "y": 6021.3896484375,
                                          "width": 7.27001953125,
                                          "height": 5.89697265625
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4192.3642578125,
                                      "y": 6021.3896484375,
                                      "width": 7.2701945304870605,
                                      "height": 5.8968281745910645
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4192.3642578125,
                                      "y": 6021.3896484375,
                                      "width": 7.2701945304870605,
                                      "height": 5.89697265625
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2568",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2569",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.540071427822113,
                                              "g": 0.9182692170143127,
                                              "b": 0.747539758682251,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4192.3642578125,
                                          "y": 6021.7021484375,
                                          "width": 7.2705230712890625,
                                          "height": 5.584664344787598
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4192.3642578125,
                                          "y": 6021.7021484375,
                                          "width": 7.2705078125,
                                          "height": 5.58447265625
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4192.3642578125,
                                      "y": 6021.7021484375,
                                      "width": 7.2705230712890625,
                                      "height": 5.584664344787598
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4192.3642578125,
                                      "y": 6021.7021484375,
                                      "width": 7.2705230712890625,
                                      "height": 5.584664344787598
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4192.3642578125,
                                  "y": 6021.3896484375,
                                  "width": 7.270651340484619,
                                  "height": 5.897144794464111
                                },
                                "absoluteRenderBounds": {
                                  "x": 4192.3642578125,
                                  "y": 6021.3896484375,
                                  "width": 7.270651340484619,
                                  "height": 5.897144794464111
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2570",
                                "name": "Vector",
                                "type": "VECTOR",
                                "scrollBehavior": "SCROLLS",
                                "blendMode": "PASS_THROUGH",
                                "fills": [
                                  {
                                    "blendMode": "NORMAL",
                                    "type": "SOLID",
                                    "color": {
                                      "r": 0.06732537597417831,
                                      "g": 0.3926283121109009,
                                      "b": 0.24577730894088745,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "absoluteBoundingBox": {
                                  "x": 4184.42626953125,
                                  "y": 6017.9267578125,
                                  "width": 23.147109985351562,
                                  "height": 23.14607810974121
                                },
                                "absoluteRenderBounds": {
                                  "x": 4184.42626953125,
                                  "y": 6017.9267578125,
                                  "width": 23.14697265625,
                                  "height": 23.14599609375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2571",
                                "name": "Vector",
                                "type": "VECTOR",
                                "scrollBehavior": "SCROLLS",
                                "blendMode": "PASS_THROUGH",
                                "fills": [
                                  {
                                    "blendMode": "NORMAL",
                                    "type": "SOLID",
                                    "color": {
                                      "r": 0.06732537597417831,
                                      "g": 0.3926283121109009,
                                      "b": 0.24577730894088745,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "absoluteBoundingBox": {
                                  "x": 4187.00732421875,
                                  "y": 6035.73291015625,
                                  "width": 5.93484354019165,
                                  "height": 2.9780616760253906
                                },
                                "absoluteRenderBounds": {
                                  "x": 4187.00732421875,
                                  "y": 6035.73291015625,
                                  "width": 5.93505859375,
                                  "height": 2.97802734375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2572",
                                "name": "Vector",
                                "type": "VECTOR",
                                "scrollBehavior": "SCROLLS",
                                "blendMode": "PASS_THROUGH",
                                "fills": [
                                  {
                                    "blendMode": "NORMAL",
                                    "type": "SOLID",
                                    "color": {
                                      "r": 0.06732537597417831,
                                      "g": 0.3926283121109009,
                                      "b": 0.24577730894088745,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "absoluteBoundingBox": {
                                  "x": 4201.1416015625,
                                  "y": 6035.974609375,
                                  "width": 3.625359296798706,
                                  "height": 0.4538440704345703
                                },
                                "absoluteRenderBounds": {
                                  "x": 4201.1416015625,
                                  "y": 6035.974609375,
                                  "width": 3.62548828125,
                                  "height": 0.45361328125
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2573",
                                "name": "Vector",
                                "type": "VECTOR",
                                "scrollBehavior": "SCROLLS",
                                "blendMode": "PASS_THROUGH",
                                "fills": [
                                  {
                                    "blendMode": "NORMAL",
                                    "type": "SOLID",
                                    "color": {
                                      "r": 0.06732537597417831,
                                      "g": 0.3926283121109009,
                                      "b": 0.24577730894088745,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "absoluteBoundingBox": {
                                  "x": 4201.14111328125,
                                  "y": 6038.01513671875,
                                  "width": 3.625124931335449,
                                  "height": 0.4538426399230957
                                },
                                "absoluteRenderBounds": {
                                  "x": 4201.14111328125,
                                  "y": 6038.01513671875,
                                  "width": 3.625,
                                  "height": 0.45361328125
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2574",
                                "name": "Vector",
                                "type": "VECTOR",
                                "scrollBehavior": "SCROLLS",
                                "blendMode": "PASS_THROUGH",
                                "fills": [
                                  {
                                    "blendMode": "NORMAL",
                                    "type": "SOLID",
                                    "color": {
                                      "r": 0.06732537597417831,
                                      "g": 0.3926283121109009,
                                      "b": 0.24577730894088745,
                                      "a": 1.0
                                    }
                                  }
                                ],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "absoluteBoundingBox": {
                                  "x": 4192.13818359375,
                                  "y": 6021.16259765625,
                                  "width": 7.723635673522949,
                                  "height": 6.350302219390869
                                },
                                "absoluteRenderBounds": {
                                  "x": 4192.13818359375,
                                  "y": 6021.16259765625,
                                  "width": 7.7236328125,
                                  "height": 6.35009765625
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              }
                            ],
                            "blendMode": "PASS_THROUGH",
                            "clipsContent": false,
                            "background": [],
                            "fills": [],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "backgroundColor": {
                              "r": 0.0,
                              "g": 0.0,
                              "b": 0.0,
                              "a": 0.0
                            },
                            "absoluteBoundingBox": {
                              "x": 4184.42626953125,
                              "y": 6017.9267578125,
                              "width": 23.147109985351562,
                              "height": 23.14607810974121
                            },
                            "absoluteRenderBounds": {
                              "x": 4184.42626953125,
                              "y": 6017.9267578125,
                              "width": 23.147109985351562,
                              "height": 23.14607810974121
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          }
                        ],
                        "blendMode": "PASS_THROUGH",
                        "clipsContent": false,
                        "background": [],
                        "fills": [],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "INSIDE",
                        "backgroundColor": {
                          "r": 0.0,
                          "g": 0.0,
                          "b": 0.0,
                          "a": 0.0
                        },
                        "absoluteBoundingBox": {
                          "x": 4184.42626953125,
                          "y": 6017.9267578125,
                          "width": 23.147109985351562,
                          "height": 23.14607810974121
                        },
                        "absoluteRenderBounds": {
                          "x": 4184.42626953125,
                          "y": 6017.9267578125,
                          "width": 23.147109985351562,
                          "height": 23.14607810974121
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": true,
                    "background": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.0,
                      "g": 0.0,
                      "b": 0.0,
                      "a": 0.0
                    },
                    "absoluteBoundingBox": {
                      "x": 4184.0,
                      "y": 6017.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4184.0,
                      "y": 6017.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "targetAspectRatio": {
                      "x": 255.0,
                      "y": 254.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "INHERIT",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "effects": [],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_RADIAL",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5000000610207427,
                        "y": 5.551115123125783e-16
                      },
                      {
                        "x": 0.5000000610207462,
                        "y": 1.0000000000000007
                      },
                      {
                        "x": -1.5475163032169528,
                        "y": -1.9984014443252818e-15
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.36882859468460083,
                          "g": 0.38942307233810425,
                          "b": 0.3800250291824341,
                          "a": 1.0
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.2777597904205322,
                          "g": 0.29326921701431274,
                          "b": 0.28706538677215576,
                          "a": 1.0
                        },
                        "position": 0.17266885936260223
                      },
                      {
                        "color": {
                          "r": 0.13833653926849365,
                          "g": 0.15224339067935944,
                          "b": 0.14593012630939484,
                          "a": 1.0
                        },
                        "position": 0.48378461599349976
                      },
                      {
                        "color": {
                          "r": 0.05400148034095764,
                          "g": 0.06890986859798431,
                          "b": 0.06216360628604889,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_RADIAL",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5000000610207427,
                        "y": 5.551115123125783e-16
                      },
                      {
                        "x": 0.5000000610207462,
                        "y": 1.0000000000000007
                      },
                      {
                        "x": -1.5475163032169528,
                        "y": -1.9984014443252818e-15
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.36882859468460083,
                          "g": 0.38942307233810425,
                          "b": 0.3800250291824341,
                          "a": 1.0
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.2777597904205322,
                          "g": 0.29326921701431274,
                          "b": 0.28706538677215576,
                          "a": 1.0
                        },
                        "position": 0.17266885936260223
                      },
                      {
                        "color": {
                          "r": 0.13833653926849365,
                          "g": 0.15224339067935944,
                          "b": 0.14593012630939484,
                          "a": 1.0
                        },
                        "position": 0.48378461599349976
                      },
                      {
                        "color": {
                          "r": 0.05400148034095764,
                          "g": 0.06890986859798431,
                          "b": 0.06216360628604889,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "strokes": [
                  {
                    "opacity": 0.1599999964237213,
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 1.0,
                      "g": 1.0,
                      "b": 1.0,
                      "a": 1.0
                    }
                  }
                ],
                "cornerRadius": 8.0,
                "cornerSmoothing": 1.0,
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 0.0
                },
                "layoutMode": "HORIZONTAL",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "CENTER",
                "primaryAxisAlignItems": "CENTER",
                "paddingLeft": 10.0,
                "paddingRight": 10.0,
                "paddingTop": 11.0,
                "paddingBottom": 11.0,
                "itemSpacing": 10.0,
                "layoutWrap": "NO_WRAP",
                "absoluteBoundingBox": {
                  "x": 4174.0,
                  "y": 6007.5,
                  "width": 44.0,
                  "height": 44.0
                },
                "absoluteRenderBounds": {
                  "x": 4157.0,
                  "y": 5990.5,
                  "width": 84.0,
                  "height": 84.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED",
                "effects": [
                  {
                    "type": "DROP_SHADOW",
                    "visible": true,
                    "color": {
                      "r": 0.182417094707489,
                      "g": 0.2227560132741928,
                      "b": 0.20450207591056824,
                      "a": 0.5
                    },
                    "blendMode": "NORMAL",
                    "offset": {
                      "x": 3.0,
                      "y": 3.0
                    },
                    "radius": 18.0,
                    "spread": 2.0,
                    "showShadowBehindNode": false
                  }
                ],
                "interactions": []
              },
              {
                "id": "1:2575",
                "name": "Frame 326",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2576",
                    "name": "fi_18793960",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2577",
                        "name": "Group",
                        "type": "GROUP",
                        "scrollBehavior": "SCROLLS",
                        "children": [
                          {
                            "id": "1:2578",
                            "name": "Group",
                            "type": "GROUP",
                            "scrollBehavior": "SCROLLS",
                            "children": [
                              {
                                "id": "1:2579",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2580",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2581",
                                        "name": "Group",
                                        "type": "GROUP",
                                        "scrollBehavior": "SCROLLS",
                                        "children": [
                                          {
                                            "id": "1:2582",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2583",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2584",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2585",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06765924394130707,
                                                              "g": 0.7676283121109009,
                                                              "b": 0.45164239406585693,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "fillOverrideTable": {
                                                          "1": null
                                                        },
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "styles": {
                                                          "fill": "1:6"
                                                        },
                                                        "absoluteBoundingBox": {
                                                          "x": 4498.732421875,
                                                          "y": 6031.470703125,
                                                          "width": 18.401540756225586,
                                                          "height": 9.259655952453613
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4498.732421875,
                                                          "y": 6031.470703125,
                                                          "width": 18.4013671875,
                                                          "height": 9.259765625
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4498.732421875,
                                                      "y": 6031.470703125,
                                                      "width": 18.401540756225586,
                                                      "height": 9.259655952453613
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4498.732421875,
                                                      "y": 6031.470703125,
                                                      "width": 18.401540756225586,
                                                      "height": 9.259765625
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4498.732421875,
                                                  "y": 6031.470703125,
                                                  "width": 18.401540756225586,
                                                  "height": 9.259655952453613
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4498.732421875,
                                                  "y": 6031.470703125,
                                                  "width": 18.401540756225586,
                                                  "height": 9.259765625
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2586",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2587",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2588",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 1.0,
                                                              "g": 1.0,
                                                              "b": 1.0,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4498.732421875,
                                                          "y": 6031.470703125,
                                                          "width": 8.863924980163574,
                                                          "height": 9.260039329528809
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4498.732421875,
                                                          "y": 6031.470703125,
                                                          "width": 8.86376953125,
                                                          "height": 9.26025390625
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4498.732421875,
                                                      "y": 6031.470703125,
                                                      "width": 8.863924980163574,
                                                      "height": 9.260039329528809
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4498.732421875,
                                                      "y": 6031.470703125,
                                                      "width": 8.863924980163574,
                                                      "height": 9.26025390625
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4498.732421875,
                                                  "y": 6031.470703125,
                                                  "width": 8.863924980163574,
                                                  "height": 9.260039329528809
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4498.732421875,
                                                  "y": 6031.470703125,
                                                  "width": 8.863924980163574,
                                                  "height": 9.26025390625
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2589",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2590",
                                                    "name": "Vector",
                                                    "type": "VECTOR",
                                                    "scrollBehavior": "SCROLLS",
                                                    "blendMode": "PASS_THROUGH",
                                                    "fills": [
                                                      {
                                                        "blendMode": "NORMAL",
                                                        "type": "SOLID",
                                                        "color": {
                                                          "r": 1.0,
                                                          "g": 1.0,
                                                          "b": 1.0,
                                                          "a": 1.0
                                                        }
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "absoluteBoundingBox": {
                                                      "x": 4511.84326171875,
                                                      "y": 6033.0234375,
                                                      "width": 5.1895318031311035,
                                                      "height": 5.589091777801514
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4511.84326171875,
                                                      "y": 6033.0234375,
                                                      "width": 5.189453125,
                                                      "height": 5.5888671875
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4511.84326171875,
                                                  "y": 6033.0234375,
                                                  "width": 5.1895318031311035,
                                                  "height": 5.589091777801514
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4511.84326171875,
                                                  "y": 6033.0234375,
                                                  "width": 5.1895318031311035,
                                                  "height": 5.589091777801514
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2591",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2592",
                                                    "name": "Vector",
                                                    "type": "VECTOR",
                                                    "scrollBehavior": "SCROLLS",
                                                    "blendMode": "PASS_THROUGH",
                                                    "fills": [
                                                      {
                                                        "blendMode": "NORMAL",
                                                        "type": "SOLID",
                                                        "color": {
                                                          "r": 1.0,
                                                          "g": 1.0,
                                                          "b": 1.0,
                                                          "a": 1.0
                                                        }
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "absoluteBoundingBox": {
                                                      "x": 4499.48388671875,
                                                      "y": 6033.830078125,
                                                      "width": 8.0254545211792,
                                                      "height": 6.900974750518799
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4499.48388671875,
                                                      "y": 6033.830078125,
                                                      "width": 8.025390625,
                                                      "height": 6.90087890625
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4499.48388671875,
                                                  "y": 6033.830078125,
                                                  "width": 8.0254545211792,
                                                  "height": 6.900974750518799
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4499.48388671875,
                                                  "y": 6033.830078125,
                                                  "width": 8.0254545211792,
                                                  "height": 6.900974750518799
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2593",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2594",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2595",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06732537597417831,
                                                              "g": 0.3926283121109009,
                                                              "b": 0.24577730894088745,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4498.55419921875,
                                                          "y": 6031.29638671875,
                                                          "width": 18.752084732055664,
                                                          "height": 9.610910415649414
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4498.55419921875,
                                                          "y": 6031.29638671875,
                                                          "width": 18.751953125,
                                                          "height": 9.61083984375
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4498.55419921875,
                                                      "y": 6031.29638671875,
                                                      "width": 18.752084732055664,
                                                      "height": 9.610910415649414
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4498.55419921875,
                                                      "y": 6031.29638671875,
                                                      "width": 18.752084732055664,
                                                      "height": 9.610910415649414
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4498.55419921875,
                                                  "y": 6031.29638671875,
                                                  "width": 18.752084732055664,
                                                  "height": 9.610910415649414
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4498.55419921875,
                                                  "y": 6031.29638671875,
                                                  "width": 18.752084732055664,
                                                  "height": 9.610910415649414
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2596",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2597",
                                                    "name": "Vector",
                                                    "type": "VECTOR",
                                                    "scrollBehavior": "SCROLLS",
                                                    "blendMode": "PASS_THROUGH",
                                                    "fills": [
                                                      {
                                                        "blendMode": "NORMAL",
                                                        "type": "SOLID",
                                                        "color": {
                                                          "r": 0.06732537597417831,
                                                          "g": 0.3926283121109009,
                                                          "b": 0.24577730894088745,
                                                          "a": 1.0
                                                        }
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "absoluteBoundingBox": {
                                                      "x": 4499.31005859375,
                                                      "y": 6033.6552734375,
                                                      "width": 8.370468139648438,
                                                      "height": 7.25200891494751
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4499.31005859375,
                                                      "y": 6033.6552734375,
                                                      "width": 8.37060546875,
                                                      "height": 7.251953125
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4499.31005859375,
                                                  "y": 6033.6552734375,
                                                  "width": 8.370468139648438,
                                                  "height": 7.25200891494751
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4499.31005859375,
                                                  "y": 6033.6552734375,
                                                  "width": 8.37060546875,
                                                  "height": 7.25200891494751
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2598",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2599",
                                                    "name": "Vector",
                                                    "type": "VECTOR",
                                                    "scrollBehavior": "SCROLLS",
                                                    "blendMode": "PASS_THROUGH",
                                                    "fills": [
                                                      {
                                                        "blendMode": "NORMAL",
                                                        "type": "SOLID",
                                                        "color": {
                                                          "r": 0.06732537597417831,
                                                          "g": 0.3926283121109009,
                                                          "b": 0.24577730894088745,
                                                          "a": 1.0
                                                        }
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "absoluteBoundingBox": {
                                                      "x": 4511.67236328125,
                                                      "y": 6032.85595703125,
                                                      "width": 5.533013820648193,
                                                      "height": 5.934937953948975
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4511.67236328125,
                                                      "y": 6032.85595703125,
                                                      "width": 5.533203125,
                                                      "height": 5.93505859375
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4511.67236328125,
                                                  "y": 6032.85595703125,
                                                  "width": 5.533013820648193,
                                                  "height": 5.934937953948975
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4511.67236328125,
                                                  "y": 6032.85595703125,
                                                  "width": 5.533203125,
                                                  "height": 5.93505859375
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4498.55419921875,
                                              "y": 6031.29638671875,
                                              "width": 18.752084732055664,
                                              "height": 9.610910415649414
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4498.55419921875,
                                              "y": 6031.29638671875,
                                              "width": 18.752084732055664,
                                              "height": 9.610910415649414
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2600",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2601",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2602",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2603",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06765924394130707,
                                                              "g": 0.7676283121109009,
                                                              "b": 0.45164239406585693,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "fillOverrideTable": {
                                                          "1": null
                                                        },
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "styles": {
                                                          "fill": "1:6"
                                                        },
                                                        "absoluteBoundingBox": {
                                                          "x": 4501.74365234375,
                                                          "y": 6023.06005859375,
                                                          "width": 2.1034860610961914,
                                                          "height": 7.207272529602051
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4501.74365234375,
                                                          "y": 6023.06005859375,
                                                          "width": 2.103515625,
                                                          "height": 7.20703125
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4501.74365234375,
                                                      "y": 6023.06005859375,
                                                      "width": 2.1034860610961914,
                                                      "height": 7.207272529602051
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4501.74365234375,
                                                      "y": 6023.06005859375,
                                                      "width": 2.103515625,
                                                      "height": 7.207272529602051
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  },
                                                  {
                                                    "id": "1:2604",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2605",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06732537597417831,
                                                              "g": 0.3926283121109009,
                                                              "b": 0.24577730894088745,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4501.5703125,
                                                          "y": 6022.88916015625,
                                                          "width": 2.4500420093536377,
                                                          "height": 7.556363105773926
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4501.5703125,
                                                          "y": 6022.88916015625,
                                                          "width": 2.4501953125,
                                                          "height": 7.55615234375
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4501.5703125,
                                                      "y": 6022.88916015625,
                                                      "width": 2.4500420093536377,
                                                      "height": 7.556363105773926
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4501.5703125,
                                                      "y": 6022.88916015625,
                                                      "width": 2.4501953125,
                                                      "height": 7.556363105773926
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4501.5703125,
                                                  "y": 6022.88916015625,
                                                  "width": 2.4500420093536377,
                                                  "height": 7.556363105773926
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4501.5703125,
                                                  "y": 6022.88916015625,
                                                  "width": 2.4501953125,
                                                  "height": 7.556363105773926
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2606",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2607",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2608",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06765924394130707,
                                                              "g": 0.7676283121109009,
                                                              "b": 0.45164239406585693,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "fillOverrideTable": {
                                                          "1": null
                                                        },
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "styles": {
                                                          "fill": "1:6"
                                                        },
                                                        "absoluteBoundingBox": {
                                                          "x": 4506.6748046875,
                                                          "y": 6023.06005859375,
                                                          "width": 2.1034860610961914,
                                                          "height": 7.207272529602051
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4506.6748046875,
                                                          "y": 6023.06005859375,
                                                          "width": 2.103515625,
                                                          "height": 7.20703125
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4506.6748046875,
                                                      "y": 6023.06005859375,
                                                      "width": 2.1034860610961914,
                                                      "height": 7.207272529602051
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4506.6748046875,
                                                      "y": 6023.06005859375,
                                                      "width": 2.103515625,
                                                      "height": 7.207272529602051
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  },
                                                  {
                                                    "id": "1:2609",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2610",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06732537597417831,
                                                              "g": 0.3926283121109009,
                                                              "b": 0.24577730894088745,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4506.50146484375,
                                                          "y": 6022.88916015625,
                                                          "width": 2.4500420093536377,
                                                          "height": 7.556363105773926
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4506.50146484375,
                                                          "y": 6022.88916015625,
                                                          "width": 2.4501953125,
                                                          "height": 7.55615234375
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4506.50146484375,
                                                      "y": 6022.88916015625,
                                                      "width": 2.4500420093536377,
                                                      "height": 7.556363105773926
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4506.50146484375,
                                                      "y": 6022.88916015625,
                                                      "width": 2.4501953125,
                                                      "height": 7.556363105773926
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4506.50146484375,
                                                  "y": 6022.88916015625,
                                                  "width": 2.4500420093536377,
                                                  "height": 7.556363105773926
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4506.50146484375,
                                                  "y": 6022.88916015625,
                                                  "width": 2.4501953125,
                                                  "height": 7.556363105773926
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              },
                                              {
                                                "id": "1:2611",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2612",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2613",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06765924394130707,
                                                              "g": 0.7676283121109009,
                                                              "b": 0.45164239406585693,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "fillOverrideTable": {
                                                          "1": null
                                                        },
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "styles": {
                                                          "fill": "1:6"
                                                        },
                                                        "absoluteBoundingBox": {
                                                          "x": 4511.60546875,
                                                          "y": 6023.06005859375,
                                                          "width": 2.1034867763519287,
                                                          "height": 7.207272529602051
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4511.60546875,
                                                          "y": 6023.06005859375,
                                                          "width": 2.103515625,
                                                          "height": 7.20703125
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4511.60546875,
                                                      "y": 6023.06005859375,
                                                      "width": 2.1034867763519287,
                                                      "height": 7.207272529602051
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4511.60546875,
                                                      "y": 6023.06005859375,
                                                      "width": 2.103515625,
                                                      "height": 7.207272529602051
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  },
                                                  {
                                                    "id": "1:2614",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2615",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06732537597417831,
                                                              "g": 0.3926283121109009,
                                                              "b": 0.24577730894088745,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4511.43212890625,
                                                          "y": 6022.88916015625,
                                                          "width": 2.450042486190796,
                                                          "height": 7.556363105773926
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4511.43212890625,
                                                          "y": 6022.88916015625,
                                                          "width": 2.4501953125,
                                                          "height": 7.55615234375
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4511.43212890625,
                                                      "y": 6022.88916015625,
                                                      "width": 2.450042486190796,
                                                      "height": 7.556363105773926
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4511.43212890625,
                                                      "y": 6022.88916015625,
                                                      "width": 2.4501953125,
                                                      "height": 7.556363105773926
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4511.43212890625,
                                                  "y": 6022.88916015625,
                                                  "width": 2.450042486190796,
                                                  "height": 7.556363105773926
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4511.43212890625,
                                                  "y": 6022.88916015625,
                                                  "width": 2.4501953125,
                                                  "height": 7.556363105773926
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4501.5703125,
                                              "y": 6022.88916015625,
                                              "width": 12.311860084533691,
                                              "height": 7.556363105773926
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4501.5703125,
                                              "y": 6022.88916015625,
                                              "width": 12.31201171875,
                                              "height": 7.556363105773926
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2616",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2617",
                                                "name": "Vector",
                                                "type": "VECTOR",
                                                "scrollBehavior": "SCROLLS",
                                                "blendMode": "PASS_THROUGH",
                                                "fills": [
                                                  {
                                                    "blendMode": "NORMAL",
                                                    "type": "SOLID",
                                                    "color": {
                                                      "r": 0.06765924394130707,
                                                      "g": 0.7676283121109009,
                                                      "b": 0.45164239406585693,
                                                      "a": 1.0
                                                    }
                                                  }
                                                ],
                                                "fillOverrideTable": {
                                                  "1": null
                                                },
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "styles": {
                                                  "fill": "1:6"
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4500.46875,
                                                  "y": 6029.84326171875,
                                                  "width": 14.524116516113281,
                                                  "height": 1.6252708435058594
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4500.46875,
                                                  "y": 6029.84326171875,
                                                  "width": 14.52392578125,
                                                  "height": 1.62548828125
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4500.46875,
                                              "y": 6029.84326171875,
                                              "width": 14.524116516113281,
                                              "height": 1.6252708435058594
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4500.46875,
                                              "y": 6029.84326171875,
                                              "width": 14.524116516113281,
                                              "height": 1.62548828125
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2618",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2619",
                                                "name": "Vector",
                                                "type": "VECTOR",
                                                "scrollBehavior": "SCROLLS",
                                                "blendMode": "PASS_THROUGH",
                                                "fills": [
                                                  {
                                                    "blendMode": "NORMAL",
                                                    "type": "SOLID",
                                                    "color": {
                                                      "r": 0.06732537597417831,
                                                      "g": 0.3926283121109009,
                                                      "b": 0.24577730894088745,
                                                      "a": 1.0
                                                    }
                                                  }
                                                ],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "absoluteBoundingBox": {
                                                  "x": 4500.287109375,
                                                  "y": 6029.67138671875,
                                                  "width": 14.873039245605469,
                                                  "height": 1.9742069244384766
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4500.287109375,
                                                  "y": 6029.67138671875,
                                                  "width": 14.873046875,
                                                  "height": 1.97412109375
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4500.287109375,
                                              "y": 6029.67138671875,
                                              "width": 14.873039245605469,
                                              "height": 1.9742069244384766
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4500.287109375,
                                              "y": 6029.67138671875,
                                              "width": 14.873046875,
                                              "height": 1.9742069244384766
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2620",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2621",
                                                "name": "Vector",
                                                "type": "VECTOR",
                                                "scrollBehavior": "SCROLLS",
                                                "blendMode": "PASS_THROUGH",
                                                "fills": [
                                                  {
                                                    "blendMode": "NORMAL",
                                                    "type": "SOLID",
                                                    "color": {
                                                      "r": 0.06765924394130707,
                                                      "g": 0.7676283121109009,
                                                      "b": 0.45164239406585693,
                                                      "a": 1.0
                                                    }
                                                  }
                                                ],
                                                "fillOverrideTable": {
                                                  "1": null
                                                },
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "styles": {
                                                  "fill": "1:6"
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4500.87890625,
                                                  "y": 6018.27001953125,
                                                  "width": 13.795583724975586,
                                                  "height": 5.284310817718506
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4500.87890625,
                                                  "y": 6018.27001953125,
                                                  "width": 13.79541015625,
                                                  "height": 5.2841796875
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4500.87890625,
                                              "y": 6018.27001953125,
                                              "width": 13.795583724975586,
                                              "height": 5.284310817718506
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4500.87890625,
                                              "y": 6018.27001953125,
                                              "width": 13.795583724975586,
                                              "height": 5.284310817718506
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2622",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2623",
                                                "name": "Vector",
                                                "type": "VECTOR",
                                                "scrollBehavior": "SCROLLS",
                                                "blendMode": "PASS_THROUGH",
                                                "fills": [
                                                  {
                                                    "blendMode": "NORMAL",
                                                    "type": "SOLID",
                                                    "color": {
                                                      "r": 1.0,
                                                      "g": 1.0,
                                                      "b": 1.0,
                                                      "a": 1.0
                                                    }
                                                  }
                                                ],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "absoluteBoundingBox": {
                                                  "x": 4500.87890625,
                                                  "y": 6018.26708984375,
                                                  "width": 8.001399993896484,
                                                  "height": 5.287521839141846
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4500.87890625,
                                                  "y": 6018.26708984375,
                                                  "width": 8.00146484375,
                                                  "height": 5.28759765625
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4500.87890625,
                                              "y": 6018.26708984375,
                                              "width": 8.001399993896484,
                                              "height": 5.287521839141846
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4500.87890625,
                                              "y": 6018.26708984375,
                                              "width": 8.00146484375,
                                              "height": 5.28759765625
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2624",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2625",
                                                "name": "Vector",
                                                "type": "VECTOR",
                                                "scrollBehavior": "SCROLLS",
                                                "blendMode": "PASS_THROUGH",
                                                "fills": [
                                                  {
                                                    "blendMode": "NORMAL",
                                                    "type": "SOLID",
                                                    "color": {
                                                      "r": 0.06732537597417831,
                                                      "g": 0.3926283121109009,
                                                      "b": 0.24577730894088745,
                                                      "a": 1.0
                                                    }
                                                  }
                                                ],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "absoluteBoundingBox": {
                                                  "x": 4500.70263671875,
                                                  "y": 6018.095703125,
                                                  "width": 14.14821720123291,
                                                  "height": 5.640573024749756
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4500.70263671875,
                                                  "y": 6018.095703125,
                                                  "width": 14.1484375,
                                                  "height": 5.640625
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4500.70263671875,
                                              "y": 6018.095703125,
                                              "width": 14.14821720123291,
                                              "height": 5.640573024749756
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4500.70263671875,
                                              "y": 6018.095703125,
                                              "width": 14.1484375,
                                              "height": 5.640625
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          },
                                          {
                                            "id": "1:2626",
                                            "name": "Group",
                                            "type": "GROUP",
                                            "scrollBehavior": "SCROLLS",
                                            "children": [
                                              {
                                                "id": "1:2627",
                                                "name": "Group",
                                                "type": "GROUP",
                                                "scrollBehavior": "SCROLLS",
                                                "children": [
                                                  {
                                                    "id": "1:2628",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2629",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06732537597417831,
                                                              "g": 0.3926283121109009,
                                                              "b": 0.24577730894088745,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4507.4873046875,
                                                          "y": 6019.998046875,
                                                          "width": 1.650909423828125,
                                                          "height": 2.5309090614318848
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4507.4873046875,
                                                          "y": 6019.998046875,
                                                          "width": 1.65087890625,
                                                          "height": 2.53076171875
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4507.4873046875,
                                                      "y": 6019.998046875,
                                                      "width": 1.650909423828125,
                                                      "height": 2.5309090614318848
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4507.4873046875,
                                                      "y": 6019.998046875,
                                                      "width": 1.650909423828125,
                                                      "height": 2.5309090614318848
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  },
                                                  {
                                                    "id": "1:2630",
                                                    "name": "Group",
                                                    "type": "GROUP",
                                                    "scrollBehavior": "SCROLLS",
                                                    "children": [
                                                      {
                                                        "id": "1:2631",
                                                        "name": "Vector",
                                                        "type": "VECTOR",
                                                        "scrollBehavior": "SCROLLS",
                                                        "blendMode": "PASS_THROUGH",
                                                        "fills": [
                                                          {
                                                            "blendMode": "NORMAL",
                                                            "type": "SOLID",
                                                            "color": {
                                                              "r": 0.06732537597417831,
                                                              "g": 0.3926283121109009,
                                                              "b": 0.24577730894088745,
                                                              "a": 1.0
                                                            }
                                                          }
                                                        ],
                                                        "strokes": [],
                                                        "strokeWeight": 1.0,
                                                        "strokeAlign": "INSIDE",
                                                        "absoluteBoundingBox": {
                                                          "x": 4508.13818359375,
                                                          "y": 6019.7109375,
                                                          "width": 0.349090576171875,
                                                          "height": 3.1018178462982178
                                                        },
                                                        "absoluteRenderBounds": {
                                                          "x": 4508.13818359375,
                                                          "y": 6019.7109375,
                                                          "width": 0.34912109375,
                                                          "height": 3.10205078125
                                                        },
                                                        "constraints": {
                                                          "vertical": "SCALE",
                                                          "horizontal": "SCALE"
                                                        },
                                                        "effects": [],
                                                        "interactions": []
                                                      }
                                                    ],
                                                    "blendMode": "PASS_THROUGH",
                                                    "clipsContent": false,
                                                    "background": [],
                                                    "fills": [],
                                                    "strokes": [],
                                                    "strokeWeight": 1.0,
                                                    "strokeAlign": "INSIDE",
                                                    "backgroundColor": {
                                                      "r": 0.0,
                                                      "g": 0.0,
                                                      "b": 0.0,
                                                      "a": 0.0
                                                    },
                                                    "absoluteBoundingBox": {
                                                      "x": 4508.13818359375,
                                                      "y": 6019.7109375,
                                                      "width": 0.349090576171875,
                                                      "height": 3.1018178462982178
                                                    },
                                                    "absoluteRenderBounds": {
                                                      "x": 4508.13818359375,
                                                      "y": 6019.7109375,
                                                      "width": 0.34912109375,
                                                      "height": 3.10205078125
                                                    },
                                                    "constraints": {
                                                      "vertical": "SCALE",
                                                      "horizontal": "SCALE"
                                                    },
                                                    "effects": [],
                                                    "interactions": []
                                                  }
                                                ],
                                                "blendMode": "PASS_THROUGH",
                                                "clipsContent": false,
                                                "background": [],
                                                "fills": [],
                                                "strokes": [],
                                                "strokeWeight": 1.0,
                                                "strokeAlign": "INSIDE",
                                                "backgroundColor": {
                                                  "r": 0.0,
                                                  "g": 0.0,
                                                  "b": 0.0,
                                                  "a": 0.0
                                                },
                                                "absoluteBoundingBox": {
                                                  "x": 4507.4873046875,
                                                  "y": 6019.7109375,
                                                  "width": 1.650909423828125,
                                                  "height": 3.1018178462982178
                                                },
                                                "absoluteRenderBounds": {
                                                  "x": 4507.4873046875,
                                                  "y": 6019.7109375,
                                                  "width": 1.650909423828125,
                                                  "height": 3.10205078125
                                                },
                                                "constraints": {
                                                  "vertical": "SCALE",
                                                  "horizontal": "SCALE"
                                                },
                                                "effects": [],
                                                "interactions": []
                                              }
                                            ],
                                            "blendMode": "PASS_THROUGH",
                                            "clipsContent": false,
                                            "background": [],
                                            "fills": [],
                                            "strokes": [],
                                            "strokeWeight": 1.0,
                                            "strokeAlign": "INSIDE",
                                            "backgroundColor": {
                                              "r": 0.0,
                                              "g": 0.0,
                                              "b": 0.0,
                                              "a": 0.0
                                            },
                                            "absoluteBoundingBox": {
                                              "x": 4507.4873046875,
                                              "y": 6019.7109375,
                                              "width": 1.650909423828125,
                                              "height": 3.1018178462982178
                                            },
                                            "absoluteRenderBounds": {
                                              "x": 4507.4873046875,
                                              "y": 6019.7109375,
                                              "width": 1.650909423828125,
                                              "height": 3.10205078125
                                            },
                                            "constraints": {
                                              "vertical": "SCALE",
                                              "horizontal": "SCALE"
                                            },
                                            "effects": [],
                                            "interactions": []
                                          }
                                        ],
                                        "blendMode": "PASS_THROUGH",
                                        "clipsContent": false,
                                        "background": [],
                                        "fills": [],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "backgroundColor": {
                                          "r": 0.0,
                                          "g": 0.0,
                                          "b": 0.0,
                                          "a": 0.0
                                        },
                                        "absoluteBoundingBox": {
                                          "x": 4498.55419921875,
                                          "y": 6018.095703125,
                                          "width": 18.752084732055664,
                                          "height": 22.81148338317871
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4498.55419921875,
                                          "y": 6018.095703125,
                                          "width": 18.752084732055664,
                                          "height": 22.8115234375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4498.55419921875,
                                      "y": 6018.095703125,
                                      "width": 18.752084732055664,
                                      "height": 22.81148338317871
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4498.55419921875,
                                      "y": 6018.095703125,
                                      "width": 18.752084732055664,
                                      "height": 22.8115234375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2632",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2633",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06732537597417831,
                                              "g": 0.3926283121109009,
                                              "b": 0.24577730894088745,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4507.4833984375,
                                          "y": 6024.59033203125,
                                          "width": 0.41868266463279724,
                                          "height": 3.825955867767334
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4507.4833984375,
                                          "y": 6024.59033203125,
                                          "width": 0.41845703125,
                                          "height": 3.826171875
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4507.4833984375,
                                      "y": 6024.59033203125,
                                      "width": 0.41868266463279724,
                                      "height": 3.825955867767334
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4507.4833984375,
                                      "y": 6024.59033203125,
                                      "width": 0.41868266463279724,
                                      "height": 3.826171875
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2634",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2635",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06732537597417831,
                                              "g": 0.3926283121109009,
                                              "b": 0.24577730894088745,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4512.451171875,
                                          "y": 6024.5869140625,
                                          "width": 0.41868335008621216,
                                          "height": 3.829592227935791
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4512.451171875,
                                          "y": 6024.5869140625,
                                          "width": 0.41845703125,
                                          "height": 3.82958984375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4512.451171875,
                                      "y": 6024.5869140625,
                                      "width": 0.41868335008621216,
                                      "height": 3.829592227935791
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4512.451171875,
                                      "y": 6024.5869140625,
                                      "width": 0.41868335008621216,
                                      "height": 3.829592227935791
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2636",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2637",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06732537597417831,
                                              "g": 0.3926283121109009,
                                              "b": 0.24577730894088745,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4502.556640625,
                                          "y": 6024.5869140625,
                                          "width": 0.41868335008621216,
                                          "height": 3.829592227935791
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4502.556640625,
                                          "y": 6024.5869140625,
                                          "width": 0.41845703125,
                                          "height": 3.82958984375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4502.556640625,
                                      "y": 6024.5869140625,
                                      "width": 0.41868335008621216,
                                      "height": 3.829592227935791
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4502.556640625,
                                      "y": 6024.5869140625,
                                      "width": 0.41868335008621216,
                                      "height": 3.829592227935791
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4498.55419921875,
                                  "y": 6018.095703125,
                                  "width": 18.752084732055664,
                                  "height": 22.81148338317871
                                },
                                "absoluteRenderBounds": {
                                  "x": 4498.55419921875,
                                  "y": 6018.095703125,
                                  "width": 18.752084732055664,
                                  "height": 22.8115234375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2638",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2639",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2640",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4514.375,
                                          "y": 6018.26904296875,
                                          "width": 4.90519905090332,
                                          "height": 3.1072049140930176
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4514.375,
                                          "y": 6018.26904296875,
                                          "width": 4.9052734375,
                                          "height": 3.107421875
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4514.375,
                                      "y": 6018.26904296875,
                                      "width": 4.90519905090332,
                                      "height": 3.1072049140930176
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4514.375,
                                      "y": 6018.26904296875,
                                      "width": 4.9052734375,
                                      "height": 3.107421875
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2641",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2642",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.2286192774772644,
                                              "g": 0.9086538553237915,
                                              "b": 0.6016669869422913,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4514.375,
                                          "y": 6019.27099609375,
                                          "width": 4.88701057434082,
                                          "height": 2.1016604900360107
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4514.375,
                                          "y": 6019.27099609375,
                                          "width": 4.88720703125,
                                          "height": 2.1015625
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4514.375,
                                      "y": 6019.27099609375,
                                      "width": 4.88701057434082,
                                      "height": 2.1016604900360107
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4514.375,
                                      "y": 6019.27099609375,
                                      "width": 4.88720703125,
                                      "height": 2.1016604900360107
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2643",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2644",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06732537597417831,
                                              "g": 0.3926283121109009,
                                              "b": 0.24577730894088745,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4514.1982421875,
                                          "y": 6018.091796875,
                                          "width": 5.252935409545898,
                                          "height": 3.458982467651367
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4514.1982421875,
                                          "y": 6018.091796875,
                                          "width": 5.2529296875,
                                          "height": 3.458984375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4514.1982421875,
                                      "y": 6018.091796875,
                                      "width": 5.252935409545898,
                                      "height": 3.458982467651367
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4514.1982421875,
                                      "y": 6018.091796875,
                                      "width": 5.252935409545898,
                                      "height": 3.458984375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4514.1982421875,
                                  "y": 6018.091796875,
                                  "width": 5.252935409545898,
                                  "height": 3.458982467651367
                                },
                                "absoluteRenderBounds": {
                                  "x": 4514.1982421875,
                                  "y": 6018.091796875,
                                  "width": 5.252935409545898,
                                  "height": 3.458984375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2645",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2646",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2647",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 1.0,
                                              "g": 1.0,
                                              "b": 1.0,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4496.720703125,
                                          "y": 6018.77099609375,
                                          "width": 4.9088358879089355,
                                          "height": 3.106822967529297
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4496.720703125,
                                          "y": 6018.77099609375,
                                          "width": 4.90869140625,
                                          "height": 3.10693359375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4496.720703125,
                                      "y": 6018.77099609375,
                                      "width": 4.9088358879089355,
                                      "height": 3.106822967529297
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4496.720703125,
                                      "y": 6018.77099609375,
                                      "width": 4.9088358879089355,
                                      "height": 3.10693359375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2648",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2649",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.2286192774772644,
                                              "g": 0.9086538553237915,
                                              "b": 0.6016669869422913,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4496.72412109375,
                                          "y": 6019.77294921875,
                                          "width": 4.887010097503662,
                                          "height": 2.1016604900360107
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4496.72412109375,
                                          "y": 6019.77294921875,
                                          "width": 4.88720703125,
                                          "height": 2.1015625
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4496.72412109375,
                                      "y": 6019.77294921875,
                                      "width": 4.887010097503662,
                                      "height": 2.1016604900360107
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4496.72412109375,
                                      "y": 6019.77294921875,
                                      "width": 4.88720703125,
                                      "height": 2.1016604900360107
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  },
                                  {
                                    "id": "1:2650",
                                    "name": "Group",
                                    "type": "GROUP",
                                    "scrollBehavior": "SCROLLS",
                                    "children": [
                                      {
                                        "id": "1:2651",
                                        "name": "Vector",
                                        "type": "VECTOR",
                                        "scrollBehavior": "SCROLLS",
                                        "blendMode": "PASS_THROUGH",
                                        "fills": [
                                          {
                                            "blendMode": "NORMAL",
                                            "type": "SOLID",
                                            "color": {
                                              "r": 0.06732537597417831,
                                              "g": 0.3926283121109009,
                                              "b": 0.24577730894088745,
                                              "a": 1.0
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "strokeWeight": 1.0,
                                        "strokeAlign": "INSIDE",
                                        "absoluteBoundingBox": {
                                          "x": 4496.54736328125,
                                          "y": 6018.59375,
                                          "width": 5.256572246551514,
                                          "height": 3.458982467651367
                                        },
                                        "absoluteRenderBounds": {
                                          "x": 4496.54736328125,
                                          "y": 6018.59375,
                                          "width": 5.25634765625,
                                          "height": 3.458984375
                                        },
                                        "constraints": {
                                          "vertical": "SCALE",
                                          "horizontal": "SCALE"
                                        },
                                        "effects": [],
                                        "interactions": []
                                      }
                                    ],
                                    "blendMode": "PASS_THROUGH",
                                    "clipsContent": false,
                                    "background": [],
                                    "fills": [],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "backgroundColor": {
                                      "r": 0.0,
                                      "g": 0.0,
                                      "b": 0.0,
                                      "a": 0.0
                                    },
                                    "absoluteBoundingBox": {
                                      "x": 4496.54736328125,
                                      "y": 6018.59375,
                                      "width": 5.256572246551514,
                                      "height": 3.458982467651367
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4496.54736328125,
                                      "y": 6018.59375,
                                      "width": 5.256572246551514,
                                      "height": 3.458984375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4496.54736328125,
                                  "y": 6018.59375,
                                  "width": 5.256572246551514,
                                  "height": 3.458982467651367
                                },
                                "absoluteRenderBounds": {
                                  "x": 4496.54736328125,
                                  "y": 6018.59375,
                                  "width": 5.256572246551514,
                                  "height": 3.458984375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              }
                            ],
                            "blendMode": "PASS_THROUGH",
                            "clipsContent": false,
                            "background": [],
                            "fills": [],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "backgroundColor": {
                              "r": 0.0,
                              "g": 0.0,
                              "b": 0.0,
                              "a": 0.0
                            },
                            "absoluteBoundingBox": {
                              "x": 4496.54736328125,
                              "y": 6018.091796875,
                              "width": 22.903844833374023,
                              "height": 22.815345764160156
                            },
                            "absoluteRenderBounds": {
                              "x": 4496.54736328125,
                              "y": 6018.091796875,
                              "width": 22.903844833374023,
                              "height": 22.8154296875
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2652",
                            "name": "Group",
                            "type": "GROUP",
                            "scrollBehavior": "SCROLLS",
                            "children": [
                              {
                                "id": "1:2653",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2654",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06732537597417831,
                                          "g": 0.3926283121109009,
                                          "b": 0.24577730894088745,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "absoluteBoundingBox": {
                                      "x": 4517.2607421875,
                                      "y": 6028.77490234375,
                                      "width": 1.540958046913147,
                                      "height": 1.6199415922164917
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4517.2607421875,
                                      "y": 6028.77490234375,
                                      "width": 1.541015625,
                                      "height": 1.6201171875
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4517.2607421875,
                                  "y": 6028.77490234375,
                                  "width": 1.540958046913147,
                                  "height": 1.6199415922164917
                                },
                                "absoluteRenderBounds": {
                                  "x": 4517.2607421875,
                                  "y": 6028.77490234375,
                                  "width": 1.541015625,
                                  "height": 1.6201171875
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2655",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2656",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06732537597417831,
                                          "g": 0.3926283121109009,
                                          "b": 0.24577730894088745,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "absoluteBoundingBox": {
                                      "x": 4518.05029296875,
                                      "y": 6030.4326171875,
                                      "width": 1.4026079177856445,
                                      "height": 0.5911140441894531
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4518.05029296875,
                                      "y": 6030.4326171875,
                                      "width": 1.40283203125,
                                      "height": 0.59130859375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4518.05029296875,
                                  "y": 6030.4326171875,
                                  "width": 1.4026079177856445,
                                  "height": 0.5911140441894531
                                },
                                "absoluteRenderBounds": {
                                  "x": 4518.05029296875,
                                  "y": 6030.4326171875,
                                  "width": 1.40283203125,
                                  "height": 0.59130859375
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2657",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2658",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06732537597417831,
                                          "g": 0.3926283121109009,
                                          "b": 0.24577730894088745,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "absoluteBoundingBox": {
                                      "x": 4516.53759765625,
                                      "y": 6028.06298828125,
                                      "width": 0.656050443649292,
                                      "height": 1.7207523584365845
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4516.53759765625,
                                      "y": 6028.06298828125,
                                      "width": 0.65625,
                                      "height": 1.720703125
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4516.53759765625,
                                  "y": 6028.06298828125,
                                  "width": 0.656050443649292,
                                  "height": 1.7207523584365845
                                },
                                "absoluteRenderBounds": {
                                  "x": 4516.53759765625,
                                  "y": 6028.06298828125,
                                  "width": 0.65625,
                                  "height": 1.7207523584365845
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              }
                            ],
                            "blendMode": "PASS_THROUGH",
                            "clipsContent": false,
                            "background": [],
                            "fills": [],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "backgroundColor": {
                              "r": 0.0,
                              "g": 0.0,
                              "b": 0.0,
                              "a": 0.0
                            },
                            "absoluteBoundingBox": {
                              "x": 4516.53759765625,
                              "y": 6028.06298828125,
                              "width": 2.915501594543457,
                              "height": 2.960752010345459
                            },
                            "absoluteRenderBounds": {
                              "x": 4516.53759765625,
                              "y": 6028.06298828125,
                              "width": 2.91552734375,
                              "height": 2.9609375
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2659",
                            "name": "Group",
                            "type": "GROUP",
                            "scrollBehavior": "SCROLLS",
                            "children": [
                              {
                                "id": "1:2660",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2661",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06732537597417831,
                                          "g": 0.3926283121109009,
                                          "b": 0.24577730894088745,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "absoluteBoundingBox": {
                                      "x": 4497.2021484375,
                                      "y": 6028.77099609375,
                                      "width": 1.5409578084945679,
                                      "height": 1.6235779523849487
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4497.2021484375,
                                      "y": 6028.77099609375,
                                      "width": 1.541015625,
                                      "height": 1.62353515625
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4497.2021484375,
                                  "y": 6028.77099609375,
                                  "width": 1.5409578084945679,
                                  "height": 1.6235779523849487
                                },
                                "absoluteRenderBounds": {
                                  "x": 4497.2021484375,
                                  "y": 6028.77099609375,
                                  "width": 1.541015625,
                                  "height": 1.6235779523849487
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2662",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2663",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06732537597417831,
                                          "g": 0.3926283121109009,
                                          "b": 0.24577730894088745,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "absoluteBoundingBox": {
                                      "x": 4496.54638671875,
                                      "y": 6030.43603515625,
                                      "width": 1.4038095474243164,
                                      "height": 0.587476909160614
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4496.54638671875,
                                      "y": 6030.43603515625,
                                      "width": 1.40380859375,
                                      "height": 0.58740234375
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4496.54638671875,
                                  "y": 6030.43603515625,
                                  "width": 1.4038095474243164,
                                  "height": 0.587476909160614
                                },
                                "absoluteRenderBounds": {
                                  "x": 4496.54638671875,
                                  "y": 6030.43603515625,
                                  "width": 1.4038095474243164,
                                  "height": 0.587476909160614
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              },
                              {
                                "id": "1:2664",
                                "name": "Group",
                                "type": "GROUP",
                                "scrollBehavior": "SCROLLS",
                                "children": [
                                  {
                                    "id": "1:2665",
                                    "name": "Vector",
                                    "type": "VECTOR",
                                    "scrollBehavior": "SCROLLS",
                                    "blendMode": "PASS_THROUGH",
                                    "fills": [
                                      {
                                        "blendMode": "NORMAL",
                                        "type": "SOLID",
                                        "color": {
                                          "r": 0.06732537597417831,
                                          "g": 0.3926283121109009,
                                          "b": 0.24577730894088745,
                                          "a": 1.0
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "strokeWeight": 1.0,
                                    "strokeAlign": "INSIDE",
                                    "absoluteBoundingBox": {
                                      "x": 4498.806640625,
                                      "y": 6028.06298828125,
                                      "width": 0.6560509204864502,
                                      "height": 1.7207523584365845
                                    },
                                    "absoluteRenderBounds": {
                                      "x": 4498.806640625,
                                      "y": 6028.06298828125,
                                      "width": 0.65625,
                                      "height": 1.720703125
                                    },
                                    "constraints": {
                                      "vertical": "SCALE",
                                      "horizontal": "SCALE"
                                    },
                                    "effects": [],
                                    "interactions": []
                                  }
                                ],
                                "blendMode": "PASS_THROUGH",
                                "clipsContent": false,
                                "background": [],
                                "fills": [],
                                "strokes": [],
                                "strokeWeight": 1.0,
                                "strokeAlign": "INSIDE",
                                "backgroundColor": {
                                  "r": 0.0,
                                  "g": 0.0,
                                  "b": 0.0,
                                  "a": 0.0
                                },
                                "absoluteBoundingBox": {
                                  "x": 4498.806640625,
                                  "y": 6028.06298828125,
                                  "width": 0.6560509204864502,
                                  "height": 1.7207523584365845
                                },
                                "absoluteRenderBounds": {
                                  "x": 4498.806640625,
                                  "y": 6028.06298828125,
                                  "width": 0.65625,
                                  "height": 1.7207523584365845
                                },
                                "constraints": {
                                  "vertical": "SCALE",
                                  "horizontal": "SCALE"
                                },
                                "effects": [],
                                "interactions": []
                              }
                            ],
                            "blendMode": "PASS_THROUGH",
                            "clipsContent": false,
                            "background": [],
                            "fills": [],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "backgroundColor": {
                              "r": 0.0,
                              "g": 0.0,
                              "b": 0.0,
                              "a": 0.0
                            },
                            "absoluteBoundingBox": {
                              "x": 4496.54638671875,
                              "y": 6028.06298828125,
                              "width": 2.9163951873779297,
                              "height": 2.960752010345459
                            },
                            "absoluteRenderBounds": {
                              "x": 4496.54638671875,
                              "y": 6028.06298828125,
                              "width": 2.91650390625,
                              "height": 2.960752010345459
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          }
                        ],
                        "blendMode": "PASS_THROUGH",
                        "clipsContent": false,
                        "background": [],
                        "fills": [],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "INSIDE",
                        "backgroundColor": {
                          "r": 0.0,
                          "g": 0.0,
                          "b": 0.0,
                          "a": 0.0
                        },
                        "absoluteBoundingBox": {
                          "x": 4496.54638671875,
                          "y": 6018.091796875,
                          "width": 22.906755447387695,
                          "height": 22.815345764160156
                        },
                        "absoluteRenderBounds": {
                          "x": 4496.54638671875,
                          "y": 6018.091796875,
                          "width": 22.906755447387695,
                          "height": 22.8154296875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": true,
                    "background": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.0,
                      "g": 0.0,
                      "b": 0.0,
                      "a": 0.0
                    },
                    "absoluteBoundingBox": {
                      "x": 4496.0,
                      "y": 6017.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4496.0,
                      "y": 6017.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "targetAspectRatio": {
                      "x": 178.0,
                      "y": 178.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "INHERIT",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "effects": [],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.8998572826385498,
                      "g": 0.9342947602272034,
                      "b": 0.9136319160461426,
                      "a": 1.0
                    }
                  }
                ],
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.8998572826385498,
                      "g": 0.9342947602272034,
                      "b": 0.9136319160461426,
                      "a": 1.0
                    }
                  }
                ],
                "strokes": [],
                "cornerRadius": 8.0,
                "cornerSmoothing": 1.0,
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.8998572826385498,
                  "g": 0.9342947602272034,
                  "b": 0.9136319160461426,
                  "a": 1.0
                },
                "layoutMode": "HORIZONTAL",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "CENTER",
                "primaryAxisAlignItems": "CENTER",
                "paddingLeft": 10.0,
                "paddingRight": 10.0,
                "paddingTop": 10.0,
                "paddingBottom": 10.0,
                "itemSpacing": 10.0,
                "layoutWrap": "NO_WRAP",
                "absoluteBoundingBox": {
                  "x": 4486.0,
                  "y": 6007.5,
                  "width": 44.0,
                  "height": 44.0
                },
                "absoluteRenderBounds": {
                  "x": 4486.0,
                  "y": 6007.5,
                  "width": 44.0,
                  "height": 44.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "HUG",
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2666",
                "name": "Frame 328",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2667",
                    "name": "fi_11168399",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2668",
                        "name": "Group",
                        "type": "GROUP",
                        "scrollBehavior": "SCROLLS",
                        "children": [
                          {
                            "id": "1:2669",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4496.046875,
                              "y": 6396.34375,
                              "width": 23.90625,
                              "height": 22.313173294067383
                            },
                            "absoluteRenderBounds": {
                              "x": 4496.046875,
                              "y": 6396.34375,
                              "width": 23.90625,
                              "height": 22.31298828125
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2670",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06765924394130707,
                                  "g": 0.7676283121109009,
                                  "b": 0.45164239406585693,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4503.95263671875,
                              "y": 6396.84423828125,
                              "width": 7.900550365447998,
                              "height": 7.5248918533325195
                            },
                            "absoluteRenderBounds": {
                              "x": 4503.95263671875,
                              "y": 6396.84423828125,
                              "width": 7.900390625,
                              "height": 7.52490234375
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2671",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 1.0,
                                  "g": 1.0,
                                  "b": 1.0,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4503.46875,
                              "y": 6416.1806640625,
                              "width": 9.067968368530273,
                              "height": 0.600468635559082
                            },
                            "absoluteRenderBounds": {
                              "x": 4503.46875,
                              "y": 6416.1806640625,
                              "width": 9.06787109375,
                              "height": 0.6005859375
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2672",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.2286192774772644,
                                  "g": 0.9086538553237915,
                                  "b": 0.6016669869422913,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4497.650390625,
                              "y": 6402.6875,
                              "width": 20.701875686645508,
                              "height": 12.992342948913574
                            },
                            "absoluteRenderBounds": {
                              "x": 4497.650390625,
                              "y": 6402.6875,
                              "width": 20.70166015625,
                              "height": 12.9921875
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2673",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06765924394130707,
                                  "g": 0.7676283121109009,
                                  "b": 0.45164239406585693,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4496.54736328125,
                              "y": 6416.1806640625,
                              "width": 22.90546989440918,
                              "height": 1.976250171661377
                            },
                            "absoluteRenderBounds": {
                              "x": 4496.54736328125,
                              "y": 6416.1806640625,
                              "width": 22.9052734375,
                              "height": 1.97607421875
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2674",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4499.6865234375,
                              "y": 6406.13671875,
                              "width": 6.2268595695495605,
                              "height": 6.338813304901123
                            },
                            "absoluteRenderBounds": {
                              "x": 4499.6865234375,
                              "y": 6406.13671875,
                              "width": 6.22705078125,
                              "height": 6.3388671875
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2675",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4498.38818359375,
                              "y": 6404.89404296875,
                              "width": 8.8228120803833,
                              "height": 8.8228120803833
                            },
                            "absoluteRenderBounds": {
                              "x": 4498.38818359375,
                              "y": 6404.89404296875,
                              "width": 8.82275390625,
                              "height": 8.82275390625
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2676",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06765924394130707,
                                  "g": 0.7676283121109009,
                                  "b": 0.45164239406585693,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4498.888671875,
                              "y": 6405.39404296875,
                              "width": 7.821563243865967,
                              "height": 7.821561813354492
                            },
                            "absoluteRenderBounds": {
                              "x": 4498.888671875,
                              "y": 6405.39404296875,
                              "width": 7.82177734375,
                              "height": 7.82177734375
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2677",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 1.0,
                                  "g": 1.0,
                                  "b": 1.0,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4500.19140625,
                              "y": 6409.84375,
                              "width": 5.218125343322754,
                              "height": 2.131406307220459
                            },
                            "absoluteRenderBounds": {
                              "x": 4500.19140625,
                              "y": 6409.84375,
                              "width": 5.21826171875,
                              "height": 2.13134765625
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2678",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 1.0,
                                  "g": 1.0,
                                  "b": 1.0,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4501.1845703125,
                              "y": 6406.63720703125,
                              "width": 3.2346174716949463,
                              "height": 3.2345049381256104
                            },
                            "absoluteRenderBounds": {
                              "x": 4501.1845703125,
                              "y": 6406.63720703125,
                              "width": 3.234375,
                              "height": 3.234375
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2679",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4508.224609375,
                              "y": 6410.61474609375,
                              "width": 9.081274032592773,
                              "height": 2.321254253387451
                            },
                            "absoluteRenderBounds": {
                              "x": 4508.224609375,
                              "y": 6410.61474609375,
                              "width": 9.0810546875,
                              "height": 2.3212890625
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2680",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06765924394130707,
                                  "g": 0.7676283121109009,
                                  "b": 0.45164239406585693,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4508.72314453125,
                              "y": 6411.115234375,
                              "width": 8.082758903503418,
                              "height": 1.3209450244903564
                            },
                            "absoluteRenderBounds": {
                              "x": 4508.72314453125,
                              "y": 6411.115234375,
                              "width": 8.08251953125,
                              "height": 1.32080078125
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2681",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4508.224609375,
                              "y": 6407.49560546875,
                              "width": 9.081274032592773,
                              "height": 2.321258306503296
                            },
                            "absoluteRenderBounds": {
                              "x": 4508.224609375,
                              "y": 6407.49560546875,
                              "width": 9.0810546875,
                              "height": 2.3212890625
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2682",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06765924394130707,
                                  "g": 0.7676283121109009,
                                  "b": 0.45164239406585693,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4508.72314453125,
                              "y": 6407.99560546875,
                              "width": 8.082934379577637,
                              "height": 1.3209450244903564
                            },
                            "absoluteRenderBounds": {
                              "x": 4508.72314453125,
                              "y": 6407.99560546875,
                              "width": 8.0830078125,
                              "height": 1.32080078125
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2683",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4510.17236328125,
                              "y": 6405.4140625,
                              "width": 5.183438301086426,
                              "height": 0.5006246566772461
                            },
                            "absoluteRenderBounds": {
                              "x": 4510.17236328125,
                              "y": 6405.4140625,
                              "width": 5.18359375,
                              "height": 0.50048828125
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          },
                          {
                            "id": "1:2684",
                            "name": "Vector",
                            "type": "VECTOR",
                            "scrollBehavior": "SCROLLS",
                            "blendMode": "PASS_THROUGH",
                            "fills": [
                              {
                                "blendMode": "NORMAL",
                                "type": "SOLID",
                                "color": {
                                  "r": 0.06732537597417831,
                                  "g": 0.3926283121109009,
                                  "b": 0.24577730894088745,
                                  "a": 1.0
                                }
                              }
                            ],
                            "strokes": [],
                            "strokeWeight": 1.0,
                            "strokeAlign": "INSIDE",
                            "absoluteBoundingBox": {
                              "x": 4505.7001953125,
                              "y": 6399.1083984375,
                              "width": 4.397088527679443,
                              "height": 2.994103193283081
                            },
                            "absoluteRenderBounds": {
                              "x": 4505.7001953125,
                              "y": 6399.1083984375,
                              "width": 4.39697265625,
                              "height": 2.994140625
                            },
                            "constraints": {
                              "vertical": "SCALE",
                              "horizontal": "SCALE"
                            },
                            "effects": [],
                            "interactions": []
                          }
                        ],
                        "blendMode": "PASS_THROUGH",
                        "clipsContent": false,
                        "background": [],
                        "fills": [],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "INSIDE",
                        "backgroundColor": {
                          "r": 0.0,
                          "g": 0.0,
                          "b": 0.0,
                          "a": 0.0
                        },
                        "absoluteBoundingBox": {
                          "x": 4496.046875,
                          "y": 6396.34375,
                          "width": 23.90625,
                          "height": 22.313173294067383
                        },
                        "absoluteRenderBounds": {
                          "x": 4496.046875,
                          "y": 6396.34375,
                          "width": 23.90625,
                          "height": 22.313173294067383
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": true,
                    "background": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.0,
                      "g": 0.0,
                      "b": 0.0,
                      "a": 0.0
                    },
                    "absoluteBoundingBox": {
                      "x": 4496.0,
                      "y": 6395.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4496.0,
                      "y": 6395.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "targetAspectRatio": {
                      "x": 276.0,
                      "y": 276.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "INHERIT",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "effects": [],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_RADIAL",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5000000610207427,
                        "y": 5.551115123125783e-16
                      },
                      {
                        "x": 0.5000000610207462,
                        "y": 1.0000000000000007
                      },
                      {
                        "x": -1.5475163032169528,
                        "y": -1.9984014443252818e-15
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.36882859468460083,
                          "g": 0.38942307233810425,
                          "b": 0.3800250291824341,
                          "a": 1.0
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.2777597904205322,
                          "g": 0.29326921701431274,
                          "b": 0.28706538677215576,
                          "a": 1.0
                        },
                        "position": 0.17266885936260223
                      },
                      {
                        "color": {
                          "r": 0.13833653926849365,
                          "g": 0.15224339067935944,
                          "b": 0.14593012630939484,
                          "a": 1.0
                        },
                        "position": 0.48378461599349976
                      },
                      {
                        "color": {
                          "r": 0.05400148034095764,
                          "g": 0.06890986859798431,
                          "b": 0.06216360628604889,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "GRADIENT_RADIAL",
                    "gradientHandlePositions": [
                      {
                        "x": 0.5000000610207427,
                        "y": 5.551115123125783e-16
                      },
                      {
                        "x": 0.5000000610207462,
                        "y": 1.0000000000000007
                      },
                      {
                        "x": -1.5475163032169528,
                        "y": -1.9984014443252818e-15
                      }
                    ],
                    "gradientStops": [
                      {
                        "color": {
                          "r": 0.36882859468460083,
                          "g": 0.38942307233810425,
                          "b": 0.3800250291824341,
                          "a": 1.0
                        },
                        "position": 0.0
                      },
                      {
                        "color": {
                          "r": 0.2777597904205322,
                          "g": 0.29326921701431274,
                          "b": 0.28706538677215576,
                          "a": 1.0
                        },
                        "position": 0.17266885936260223
                      },
                      {
                        "color": {
                          "r": 0.13833653926849365,
                          "g": 0.15224339067935944,
                          "b": 0.14593012630939484,
                          "a": 1.0
                        },
                        "position": 0.48378461599349976
                      },
                      {
                        "color": {
                          "r": 0.05400148034095764,
                          "g": 0.06890986859798431,
                          "b": 0.06216360628604889,
                          "a": 1.0
                        },
                        "position": 1.0
                      }
                    ]
                  }
                ],
                "strokes": [
                  {
                    "opacity": 0.1599999964237213,
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 1.0,
                      "g": 1.0,
                      "b": 1.0,
                      "a": 1.0
                    }
                  }
                ],
                "cornerRadius": 8.0,
                "cornerSmoothing": 1.0,
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 0.0
                },
                "layoutMode": "HORIZONTAL",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "CENTER",
                "primaryAxisAlignItems": "CENTER",
                "paddingLeft": 10.0,
                "paddingRight": 10.0,
                "paddingTop": 10.0,
                "paddingBottom": 10.0,
                "itemSpacing": 10.0,
                "layoutWrap": "NO_WRAP",
                "absoluteBoundingBox": {
                  "x": 4486.0,
                  "y": 6385.5,
                  "width": 44.0,
                  "height": 44.0
                },
                "absoluteRenderBounds": {
                  "x": 4469.0,
                  "y": 6368.5,
                  "width": 84.0,
                  "height": 84.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED",
                "effects": [
                  {
                    "type": "DROP_SHADOW",
                    "visible": true,
                    "color": {
                      "r": 0.182417094707489,
                      "g": 0.2227560132741928,
                      "b": 0.20450207591056824,
                      "a": 0.5
                    },
                    "blendMode": "NORMAL",
                    "offset": {
                      "x": 3.0,
                      "y": 3.0
                    },
                    "radius": 18.0,
                    "spread": 2.0,
                    "showShadowBehindNode": false
                  }
                ],
                "interactions": []
              },
              {
                "id": "1:2685",
                "name": "Frame 327",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2686",
                    "name": "fi_1198291",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:2687",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06765924394130707,
                              "g": 0.7676283121109009,
                              "b": 0.45164239406585693,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4187.22119140625,
                          "y": 6396.46484375,
                          "width": 8.807912826538086,
                          "height": 12.729477882385254
                        },
                        "absoluteRenderBounds": {
                          "x": 4187.22119140625,
                          "y": 6396.46484375,
                          "width": 8.80810546875,
                          "height": 12.7294921875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2688",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.2286192774772644,
                              "g": 0.9086538553237915,
                              "b": 0.6016669869422913,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4188.94287109375,
                          "y": 6396.46533203125,
                          "width": 1.6860332489013672,
                          "height": 12.72929573059082
                        },
                        "absoluteRenderBounds": {
                          "x": 4188.94287109375,
                          "y": 6396.46533203125,
                          "width": 1.68603515625,
                          "height": 12.7294921875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2689",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.2286192774772644,
                              "g": 0.9086538553237915,
                              "b": 0.6016669869422913,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4192.23193359375,
                          "y": 6395.8515625,
                          "width": 13.501118659973145,
                          "height": 13.956048011779785
                        },
                        "absoluteRenderBounds": {
                          "x": 4192.23193359375,
                          "y": 6395.8515625,
                          "width": 13.5009765625,
                          "height": 13.9560546875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2690",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06765924394130707,
                              "g": 0.7676283121109009,
                              "b": 0.45164239406585693,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4198.53466796875,
                          "y": 6400.2431640625,
                          "width": 7.198034286499023,
                          "height": 9.564608573913574
                        },
                        "absoluteRenderBounds": {
                          "x": 4198.53466796875,
                          "y": 6400.2431640625,
                          "width": 7.1982421875,
                          "height": 9.564453125
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2691",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4195.984375,
                          "y": 6401.0703125,
                          "width": 4.750855445861816,
                          "height": 5.298713684082031
                        },
                        "absoluteRenderBounds": {
                          "x": 4195.984375,
                          "y": 6401.0703125,
                          "width": 4.7509765625,
                          "height": 5.298828125
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2692",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06765924394130707,
                              "g": 0.7676283121109009,
                              "b": 0.45164239406585693,
                              "a": 1.0
                            }
                          }
                        ],
                        "fillOverrideTable": {
                          "1": null
                        },
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "styles": {
                          "fill": "1:6"
                        },
                        "absoluteBoundingBox": {
                          "x": 4186.2734375,
                          "y": 6403.64501953125,
                          "width": 18.03898048400879,
                          "height": 13.348739624023438
                        },
                        "absoluteRenderBounds": {
                          "x": 4186.2734375,
                          "y": 6403.64501953125,
                          "width": 18.0390625,
                          "height": 13.3486328125
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2693",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.2286192774772644,
                              "g": 0.9086538553237915,
                              "b": 0.6016669869422913,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4201.76318359375,
                          "y": 6403.64501953125,
                          "width": 2.549374580383301,
                          "height": 13.348739624023438
                        },
                        "absoluteRenderBounds": {
                          "x": 4201.76318359375,
                          "y": 6403.64501953125,
                          "width": 2.54931640625,
                          "height": 13.3486328125
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2694",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4199.27099609375,
                          "y": 6408.14599609375,
                          "width": 6.430656909942627,
                          "height": 4.346919536590576
                        },
                        "absoluteRenderBounds": {
                          "x": 4199.27099609375,
                          "y": 6408.14599609375,
                          "width": 6.4306640625,
                          "height": 4.3466796875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2695",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06765924394130707,
                              "g": 0.7676283121109009,
                              "b": 0.45164239406585693,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4199.27099609375,
                          "y": 6409.796875,
                          "width": 6.430656909942627,
                          "height": 2.696408271789551
                        },
                        "absoluteRenderBounds": {
                          "x": 4199.27099609375,
                          "y": 6409.796875,
                          "width": 6.4306640625,
                          "height": 2.6962890625
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2696",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.2286192774772644,
                              "g": 0.9086538553237915,
                              "b": 0.6016669869422913,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4200.58203125,
                          "y": 6409.36767578125,
                          "width": 1.9041117429733276,
                          "height": 1.9039286375045776
                        },
                        "absoluteRenderBounds": {
                          "x": 4200.58203125,
                          "y": 6409.36767578125,
                          "width": 1.904296875,
                          "height": 1.90380859375
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2697",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 0.8039215803146362,
                              "b": 0.20392157137393951,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4191.39697265625,
                          "y": 6411.35693359375,
                          "width": 7.7916789054870605,
                          "height": 7.7914958000183105
                        },
                        "absoluteRenderBounds": {
                          "x": 4191.39697265625,
                          "y": 6411.35693359375,
                          "width": 7.79150390625,
                          "height": 7.79150390625
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2698",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.9019607901573181,
                              "g": 0.5647059082984924,
                              "b": 0.07058823853731155,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4192.60400390625,
                          "y": 6411.75537109375,
                          "width": 6.584648132324219,
                          "height": 7.3930583000183105
                        },
                        "absoluteRenderBounds": {
                          "x": 4192.60400390625,
                          "y": 6411.75537109375,
                          "width": 6.58447265625,
                          "height": 7.39306640625
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2699",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06732537597417831,
                              "g": 0.3926283121109009,
                              "b": 0.24577730894088745,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4197.43505859375,
                          "y": 6397.32861328125,
                          "width": 2.9980812072753906,
                          "height": 1.6480023860931396
                        },
                        "absoluteRenderBounds": {
                          "x": 4197.43505859375,
                          "y": 6397.32861328125,
                          "width": 2.998046875,
                          "height": 1.64794921875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2700",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06732537597417831,
                              "g": 0.3926283121109009,
                              "b": 0.24577730894088745,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4202.58642578125,
                          "y": 6399.86865234375,
                          "width": 1.6203045845031738,
                          "height": 2.9980263710021973
                        },
                        "absoluteRenderBounds": {
                          "x": 4202.58642578125,
                          "y": 6399.86865234375,
                          "width": 1.6201171875,
                          "height": 2.998046875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2701",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06732537597417831,
                              "g": 0.3926283121109009,
                              "b": 0.24577730894088745,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4200.23046875,
                          "y": 6409.01611328125,
                          "width": 2.347461700439453,
                          "height": 2.607235908508301
                        },
                        "absoluteRenderBounds": {
                          "x": 4200.23046875,
                          "y": 6409.01611328125,
                          "width": 2.34765625,
                          "height": 2.607421875
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2702",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06732537597417831,
                              "g": 0.3926283121109009,
                              "b": 0.24577730894088745,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4185.921875,
                          "y": 6395.5,
                          "width": 20.162500381469727,
                          "height": 21.84557342529297
                        },
                        "absoluteRenderBounds": {
                          "x": 4185.921875,
                          "y": 6395.5,
                          "width": 20.16259765625,
                          "height": 21.845703125
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2703",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.06732537597417831,
                              "g": 0.3926283121109009,
                              "b": 0.24577730894088745,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4191.0458984375,
                          "y": 6411.00537109375,
                          "width": 8.494803428649902,
                          "height": 8.494803428649902
                        },
                        "absoluteRenderBounds": {
                          "x": 4191.0458984375,
                          "y": 6411.00537109375,
                          "width": 8.49462890625,
                          "height": 8.49462890625
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      },
                      {
                        "id": "1:2704",
                        "name": "Vector",
                        "type": "VECTOR",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 1.0,
                              "g": 1.0,
                              "b": 1.0,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.3333319425582886,
                        "strokeAlign": "INSIDE",
                        "absoluteBoundingBox": {
                          "x": 4193.9697265625,
                          "y": 6412.908203125,
                          "width": 2.646786689758301,
                          "height": 4.68841028213501
                        },
                        "absoluteRenderBounds": {
                          "x": 4193.9697265625,
                          "y": 6412.908203125,
                          "width": 2.64697265625,
                          "height": 4.6884765625
                        },
                        "constraints": {
                          "vertical": "SCALE",
                          "horizontal": "SCALE"
                        },
                        "effects": [],
                        "interactions": []
                      }
                    ],
                    "blendMode": "PASS_THROUGH",
                    "clipsContent": true,
                    "background": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "visible": false,
                        "type": "SOLID",
                        "color": {
                          "r": 1.0,
                          "g": 1.0,
                          "b": 1.0,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "backgroundColor": {
                      "r": 0.0,
                      "g": 0.0,
                      "b": 0.0,
                      "a": 0.0
                    },
                    "absoluteBoundingBox": {
                      "x": 4184.0,
                      "y": 6395.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4184.0,
                      "y": 6395.5,
                      "width": 24.0,
                      "height": 24.0
                    },
                    "targetAspectRatio": {
                      "x": 365.0,
                      "y": 365.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "INHERIT",
                    "layoutGrow": 0.0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "effects": [],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.8998572826385498,
                      "g": 0.9342947602272034,
                      "b": 0.9136319160461426,
                      "a": 1.0
                    }
                  }
                ],
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 0.8998572826385498,
                      "g": 0.9342947602272034,
                      "b": 0.9136319160461426,
                      "a": 1.0
                    }
                  }
                ],
                "strokes": [],
                "cornerRadius": 8.0,
                "cornerSmoothing": 1.0,
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.8998572826385498,
                  "g": 0.9342947602272034,
                  "b": 0.9136319160461426,
                  "a": 1.0
                },
                "layoutMode": "HORIZONTAL",
                "counterAxisSizingMode": "FIXED",
                "primaryAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "CENTER",
                "primaryAxisAlignItems": "CENTER",
                "paddingLeft": 10.0,
                "paddingRight": 10.0,
                "paddingTop": 10.0,
                "paddingBottom": 10.0,
                "itemSpacing": 10.0,
                "layoutWrap": "NO_WRAP",
                "absoluteBoundingBox": {
                  "x": 4174.0,
                  "y": 6385.5,
                  "width": 44.0,
                  "height": 44.0
                },
                "absoluteRenderBounds": {
                  "x": 4174.0,
                  "y": 6385.5,
                  "width": 44.0,
                  "height": 44.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED",
                "effects": [],
                "interactions": []
              },
              {
                "id": "1:2705",
                "name": "Group 32",
                "type": "GROUP",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:2706",
                    "name": "image 122",
                    "type": "RECTANGLE",
                    "scrollBehavior": "SCROLLS",
                    "blendMode": "PASS_THROUGH",
                    "fills": [
                      {
                        "opacity": 0.5,
                        "blendMode": "NORMAL",
                        "type": "SOLID",
                        "color": {
                          "r": 0.6079594492912292,
                          "g": 0.6810898184776306,
                          "b": 0.6445241570472717,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokes": [
                      {
                        "blendMode": "NORMAL",
                        "type": "SOLID",
                        "color": {
                          "r": 0.5924451947212219,
                          "g": 0.6474360227584839,
                          "b": 0.6199403405189514,
                          "a": 1.0
                        }
                      }
                    ],
                    "strokeWeight": 0.6000000238418579,
                    "strokeAlign": "CENTER",
                    "strokeDashes": [
                      4.199999809265137,
                      4.199999809265137
                    ],
                    "strokeCap": "ROUND",
                    "cornerRadius": 28.0,
                    "cornerSmoothing": 0.0,
                    "absoluteBoundingBox": {
                      "x": 4248.0,
                      "y": 6001.0,
                      "width": 208.0,
                      "height": 435.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4247.7001953125,
                      "y": 6000.7001953125,
                      "width": 208.599609375,
                      "height": 435.599609375
                    },
                    "preserveRatio": true,
                    "targetAspectRatio": {
                      "x": 208.0,
                      "y": 435.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "effects": [],
                    "interactions": []
                  },
                  {
                    "id": "1:2707",
                    "name": "image 123",
                    "type": "RECTANGLE",
                    "scrollBehavior": "SCROLLS",
                    "blendMode": "PASS_THROUGH",
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "type": "IMAGE",
                        "scaleMode": "FILL",
                        "imageRef": "3fed75c8c586f45e171cfdea649948fc7394eeaa"
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1.0,
                    "strokeAlign": "INSIDE",
                    "rectangleCornerRadii": [
                      26.0,
                      25.0,
                      24.0,
                      25.0
                    ],
                    "cornerSmoothing": 0.0,
                    "absoluteBoundingBox": {
                      "x": 4255.0,
                      "y": 6009.5,
                      "width": 194.0,
                      "height": 419.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4241.0,
                      "y": 5999.5,
                      "width": 222.0,
                      "height": 447.0
                    },
                    "preserveRatio": true,
                    "targetAspectRatio": {
                      "x": 194.0,
                      "y": 419.0
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "effects": [
                      {
                        "type": "DROP_SHADOW",
                        "visible": true,
                        "color": {
                          "r": 0.7516024708747864,
                          "g": 0.7516024708747864,
                          "b": 0.7516024708747864,
                          "a": 1.0
                        },
                        "blendMode": "NORMAL",
                        "offset": {
                          "x": 0.0,
                          "y": 4.0
                        },
                        "radius": 12.0,
                        "spread": 2.0,
                        "showShadowBehindNode": false
                      }
                    ],
                    "interactions": []
                  }
                ],
                "blendMode": "PASS_THROUGH",
                "clipsContent": false,
                "background": [],
                "fills": [],
                "strokes": [],
                "rectangleCornerRadii": [
                  0.0,
                  0.0,
                  0.0,
                  0.0
                ],
                "cornerSmoothing": 0.0,
                "strokeWeight": 1.0,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0.0,
                  "g": 0.0,
                  "b": 0.0,
                  "a": 0.0
                },
                "absoluteBoundingBox": {
                  "x": 4248.0,
                  "y": 6001.0,
                  "width": 208.0,
                  "height": 435.0
                },
                "absoluteRenderBounds": {
                  "x": 4241.0,
                  "y": 5999.5,
                  "width": 222.0,
                  "height": 447.0
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "effects": [],
                "interactions": []
              }
            ],
            "blendMode": "PASS_THROUGH",
            "clipsContent": false,
            "background": [],
            "fills": [],
            "strokes": [],
            "strokeWeight": 1.0,
            "strokeAlign": "INSIDE",
            "backgroundColor": {
              "r": 0.0,
              "g": 0.0,
              "b": 0.0,
              "a": 0.0
            },
            "absoluteBoundingBox": {
              "x": 4174.0,
              "y": 6001.5,
              "width": 356.0,
              "height": 435.0
            },
            "absoluteRenderBounds": {
              "x": 4128.0,
              "y": 5990.5,
              "width": 448.0,
              "height": 462.0
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "layoutAlign": "INHERIT",
            "layoutGrow": 0.0,
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "FIXED",
            "effects": [],
            "interactions": []
          }
        ],
        "blendMode": "PASS_THROUGH",
        "clipsContent": false,
        "background": [],
        "fills": [],
        "strokes": [],
        "strokeWeight": 1.0,
        "strokeAlign": "INSIDE",
        "backgroundColor": {
          "r": 0.0,
          "g": 0.0,
          "b": 0.0,
          "a": 0.0
        },
        "layoutMode": "HORIZONTAL",
        "primaryAxisSizingMode": "FIXED",
        "counterAxisAlignItems": "CENTER",
        "itemSpacing": 172.0,
        "layoutWrap": "NO_WRAP",
        "absoluteBoundingBox": {
          "x": 3574.0,
          "y": 5990.0,
          "width": 1200.0,
          "height": 458.0
        },
        "absoluteRenderBounds": {
          "x": 3574.0,
          "y": 5990.0,
          "width": 1200.0,
          "height": 462.5
        },
        "constraints": {
          "vertical": "TOP",
          "horizontal": "LEFT"
        },
        "layoutSizingHorizontal": "FIXED",
        "layoutSizingVertical": "HUG",
        "effects": [],
        "interactions": []
      },
      "components": {},
      "componentSets": {},
      "schemaVersion": 0,
      "styles": {
        "1:4": {
          "key": "543d634ef4d7f3013abac4cde8f1f24039ef1302",
          "name": "Heading Font Color",
          "styleType": "FILL",
          "remote": true,
          "description": ""
        },
        "1:6": {
          "key": "cec718ae5c46476cfa437fe17b123429b5c3797d",
          "name": "CTA Color",
          "styleType": "FILL",
          "remote": true,
          "description": ""
        },
        "1:7": {
          "key": "603bd82bdc9893aabf3e6ccd55074b987c03499b",
          "name": "White Color",
          "styleType": "FILL",
          "remote": true,
          "description": ""
        },
        "1:5": {
          "key": "566c0df25fc1b1aa92c2ce4c59e138c7231c6703",
          "name": "Paragraph Font color",
          "styleType": "FILL",
          "remote": true,
          "description": ""
        }
      }
    }
  }
}
```