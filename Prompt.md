## System Prompt to Generate React Component

You should read the figma design provided below in JSON format. 
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
    "1:1375": {
      "document": {
        "id": "1:1375",
        "name": "Frame 114",
        "type": "FRAME",
        "scrollBehavior": "SCROLLS",
        "children": [
          {
            "id": "1:1376",
            "name": "Frame 113",
            "type": "FRAME",
            "scrollBehavior": "SCROLLS",
            "children": [
              {
                "id": "1:1377",
                "name": "Frame 37",
                "type": "FRAME",
                "scrollBehavior": "SCROLLS",
                "children": [
                  {
                    "id": "1:1378",
                    "name": "Frame 323",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:1379",
                        "name": "Modular solutions",
                        "type": "TEXT",
                        "scrollBehavior": "SCROLLS",
                        "blendMode": "PASS_THROUGH",
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.1323322355747223,
                              "g": 0.1634645015001297,
                              "b": 0.19070522487163544,
                              "a": 1.0
                            }
                          }
                        ],
                        "strokes": [],
                        "strokeWeight": 1.0,
                        "strokeAlign": "OUTSIDE",
                        "strokeCap": "ROUND",
                        "styles": {
                          "fill": "1:5748"
                        },
                        "absoluteBoundingBox": {
                          "x": 4096.3486328125,
                          "y": 5672.5,
                          "width": 127.3026123046875,
                          "height": 17.0
                        },
                        "absoluteRenderBounds": {
                          "x": 4097.32861328125,
                          "y": 5676.14697265625,
                          "width": 116.2802734375,
                          "height": 10.56298828125
                        },
                        "constraints": {
                          "vertical": "TOP",
                          "horizontal": "LEFT"
                        },
                        "layoutAlign": "INHERIT",
                        "layoutGrow": 0.0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "HUG",
                        "characters": "Modular solutions",
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
                          "textAutoResize": "HEIGHT",
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
                    "itemSpacing": 10.0,
                    "layoutWrap": "NO_WRAP",
                    "strokeDashes": [
                      4.0,
                      4.0
                    ],
                    "strokeCap": "ROUND",
                    "absoluteBoundingBox": {
                      "x": 4096.3486328125,
                      "y": 5672.5,
                      "width": 127.3026123046875,
                      "height": 17.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4096.3486328125,
                      "y": 5672.0,
                      "width": 127.802734375,
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
                    "id": "1:1380",
                    "name": "arrow-right-circle",
                    "type": "FRAME",
                    "scrollBehavior": "SCROLLS",
                    "children": [
                      {
                        "id": "1:1381",
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
                          "x": 4237.3173828125,
                          "y": 5672.6669921875,
                          "width": 16.66666603088379,
                          "height": 16.66666603088379
                        },
                        "absoluteRenderBounds": {
                          "x": 4236.8173828125,
                          "y": 5672.1669921875,
                          "width": 17.66650390625,
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
                        "id": "1:1382",
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
                          "x": 4245.6513671875,
                          "y": 5677.6669921875,
                          "width": 3.3333332538604736,
                          "height": 6.666666507720947
                        },
                        "absoluteRenderBounds": {
                          "x": 4245.1513671875,
                          "y": 5677.1669921875,
                          "width": 4.33349609375,
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
                        "id": "1:1383",
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
                          "x": 4242.3173828125,
                          "y": 5681.0,
                          "width": 6.666666507720947,
                          "height": 0.0
                        },
                        "absoluteRenderBounds": {
                          "x": 4241.8173828125,
                          "y": 5680.5,
                          "width": 7.66650390625,
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
                    "cornerRadius": 80.0,
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
                      "x": 4235.6513671875,
                      "y": 5671.0,
                      "width": 20.0,
                      "height": 20.0
                    },
                    "absoluteRenderBounds": {
                      "x": 4235.6513671875,
                      "y": 5671.0,
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
                    "exportSettings": [
                      {
                        "suffix": "",
                        "format": "PNG",
                        "constraint": {
                          "type": "SCALE",
                          "value": 1.0
                        }
                      }
                    ],
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
                "styles": {
                  "strokes": "1:5747",
                  "stroke": "1:5747"
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
                  "x": 4080.3486328125,
                  "y": 5665.0,
                  "width": 187.3026123046875,
                  "height": 32.0
                },
                "absoluteRenderBounds": {
                  "x": 4080.3486328125,
                  "y": 5665.0,
                  "width": 187.302734375,
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
                "id": "1:1384",
                "name": "A fully integrated suite of financial & payments products",
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
                "absoluteBoundingBox": {
                  "x": 3892.5,
                  "y": 5711.0,
                  "width": 563.0,
                  "height": 159.0
                },
                "absoluteRenderBounds": {
                  "x": 3905.802734375,
                  "y": 5720.0478515625,
                  "width": 536.41796875,
                  "height": 149.9521484375
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutAlign": "INHERIT",
                "layoutGrow": 0.0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "HUG",
                "characters": "A fully integrated suite of financial & payments products",
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
                  "fontPostScriptName": "Hauora-Bold",
                  "fontStyle": "Bold",
                  "fontWeight": 700,
                  "textAutoResize": "HEIGHT",
                  "fontSize": 48.0,
                  "textAlignHorizontal": "CENTER",
                  "textAlignVertical": "TOP",
                  "letterSpacing": 0.0,
                  "lineHeightPx": 52.80000305175781,
                  "lineHeightPercent": 80.52708435058594,
                  "lineHeightPercentFontSize": 110.0,
                  "lineHeightUnit": "FONT_SIZE_%"
                },
                "layoutVersion": 4,
                "effects": [],
                "interactions": []
              }
            ],
            "blendMode": "PASS_THROUGH",
            "clipsContent": true,
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
            "counterAxisAlignItems": "CENTER",
            "itemSpacing": 14.0,
            "layoutWrap": "NO_WRAP",
            "absoluteBoundingBox": {
              "x": 3892.5,
              "y": 5665.0,
              "width": 563.0,
              "height": 205.0
            },
            "absoluteRenderBounds": {
              "x": 3892.5,
              "y": 5665.0,
              "width": 563.0,
              "height": 205.0
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
            "id": "1:1385",
            "name": "Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform.",
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
              "x": 3921.5,
              "y": 5886.0,
              "width": 505.0,
              "height": 44.0
            },
            "absoluteRenderBounds": {
              "x": 3927.7373046875,
              "y": 5891.240234375,
              "width": 493.3759765625,
              "height": 37.83984375
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "layoutAlign": "INHERIT",
            "layoutGrow": 0.0,
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "HUG",
            "characters": "Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. ",
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
              "textAlignHorizontal": "CENTER",
              "textAlignVertical": "TOP",
              "letterSpacing": 0.0,
              "lineHeightPx": 21.600000381469727,
              "lineHeightPercent": 98.82868957519531,
              "lineHeightPercentFontSize": 135.0,
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
        "counterAxisAlignItems": "CENTER",
        "itemSpacing": 16.0,
        "layoutWrap": "NO_WRAP",
        "absoluteBoundingBox": {
          "x": 3892.5,
          "y": 5665.0,
          "width": 563.0,
          "height": 265.0
        },
        "absoluteRenderBounds": {
          "x": 3892.5,
          "y": 5665.0,
          "width": 563.0,
          "height": 265.0
        },
        "constraints": {
          "vertical": "TOP",
          "horizontal": "LEFT"
        },
        "layoutSizingHorizontal": "HUG",
        "layoutSizingVertical": "HUG",
        "effects": [],
        "interactions": []
      },
      "components": {},
      "componentSets": {},
      "schemaVersion": 0,
      "styles": {
        "1:5748": {
          "key": "eff71ae544e512640f2be8672c0d51d293d842d2",
          "name": "sub heading color",
          "styleType": "FILL",
          "remote": false,
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
        "1:5747": {
          "key": "a289fb078a01992229336ffb299962c18601da73",
          "name": "secendary batton Stroke color",
          "styleType": "FILL",
          "remote": false,
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