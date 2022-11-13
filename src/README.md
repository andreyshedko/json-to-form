# Getting Started with Json-To-Form
It producing HTML form from the JSON configuration.

## Json config example

**Form**<br />
Supported attributes:
```json
{
  "autocomplete": "on", // supported values - "on" | "off",
  "name": "jsontoform", // unique string non-empty value
  "action": "/api/v1/process", // The URL that processes the form submission
  "method": "", // supported values - "post" | "get" | "dialog"
  "enctype": "", // supported values - "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain"
  "title": "Test JSON to form" // Title to show above form inputs (not belong to form tag)
  ...
}
```

**Form inputs**
```json
{
    ...
    "items": [
    {
    "id": "1",
    "name": "Numeric field",
    "type": "number"
    },
    {
    "id": "2",
    "name": "Date field",
    "type": "date"
    },
    {
    "id": "3",
    "name": "Textarea field",
    "type": "textarea"
    },
    {
    "id": "4",
    "name": "Text field",
    "type": "text"
    },
    {
    "type": "checkbox",
    "value": "Agree"
    },
    {
    "type": "radio",
    "name": "rad",
    "value": "Yes"
    },
    {
    "type": "radio",
    "name": "rad",
    "value": "No"
    },
    {
    "type": "button",
    "value": "OK"
    },
    {
    "type": "button",
    "value": "Cancel"
    }
  ]
}
```
It produce such output:
![Output example!](https://raw.githubusercontent.com/andreyshedko/veeam/main/public/screenshot.png)

### Next Features
1.  Autocomplete.
2.  Support JSON schema.
3.  Create form from uploaded json file.

