# data-visualization

Tool used to display a visual representation of your JSON data.

# Prerequisite

The following software is prerequisite to use this tool:

* NODE JS 
* NPM

# Usage

* Launch the program, via the start.sh script or by using npm start command. 
  From the project directory(data-visualization) run the command below 
  
  ```shell
  . ./start.sh
  ```
  Or 
  ```shell
  npm start
  ```
  
  The app listens by default on the port 8888. You can change the port number via the config file.


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

# Tests

There are some tests for the Json validation function. (folder: test)
To run tests, use the command below :

  ```shell
  npm test
  ```

# See it in action

[ See it in action](usage.gif)

