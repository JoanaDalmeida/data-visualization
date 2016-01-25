# data-visualization

Tool used to display a visual representation of your json data.

# Prerequisite

The following software is prerequisite to use this tool:

* NODE JS 
* NPM

# Usage

* Launch the program, via the start.sh script, the apps listens by default on the port 8888. 
You can change the port number via the config file.

* Paste your data in the textarea and then submit it.

#Expected JSON Schema

```JSON
{
  "expenses": [
    {
      "type": {"type": "string", "required": true},
      "value": {"type": "number", "minimun": 0, "required": true},
      "date": {"type": "date", "required": true}
    }
  ]
}

```

The JSON schema can be modified via the config.json file.


# See it in action

