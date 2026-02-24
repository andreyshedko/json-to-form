# JSON-to-Form

A React application that produces an HTML form from a JSON configuration.

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm

### Installation

```bash
yarn install
```

### Running the App

```bash
yarn start
```

### Running Tests

```bash
yarn test
```

### Linting

```bash
yarn lint
```

## JSON Config Example

**Form**<br />
Supported attributes:
```json
{
  "autocomplete": "on",
  "name": "jsontoform",
  "action": "/api/v1/process",
  "method": "post",
  "enctype": "application/x-www-form-urlencoded",
  "title": "Test JSON to form"
}
```

Supported `autocomplete` values: `"on"` | `"off"`<br />
Supported `method` values: `"post"` | `"get"` | `"dialog"`<br />
Supported `enctype` values: `"application/x-www-form-urlencoded"` | `"multipart/form-data"` | `"text/plain"`

**Form Inputs**
```json
{
  "items": [
    { "id": "1", "name": "Numeric field", "type": "number" },
    { "id": "2", "name": "Date field", "type": "date" },
    { "id": "3", "name": "Textarea field", "type": "textarea" },
    { "id": "4", "name": "Text field", "type": "text" },
    { "type": "checkbox", "value": "Agree" },
    { "type": "radio", "name": "rad", "value": "Yes" },
    { "type": "radio", "name": "rad", "value": "No" },
    { "type": "button", "value": "OK" },
    { "type": "button", "value": "Cancel" }
  ]
}
```

The above configuration produces output like this:

![Output example](https://raw.githubusercontent.com/andreyshedko/veeam/main/public/screenshot.png)

## Planned Features

1. Autocomplete.
2. Support JSON schema.
3. Create form from uploaded JSON file.
