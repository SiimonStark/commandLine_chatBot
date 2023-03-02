# Node.js Command Line Tool using OpenAI API Services

This is a simple Node.js command line tool that utilizes OpenAI API services to perform various operations like text generation, language translation, sentiment analysis, and more. 

## Prerequisites

Before running the application, make sure you have Node.js and npm (Node Package Manager) installed on your local machine. You can download them from [nodejs.org](https://nodejs.org/en/).

Also, you need to request your own OpenAI API key before using the tool. You can get the key from the [OpenAI website](https://beta.openai.com/signup/). After receiving the key, set the ".env" variable to `OPENAIKEY="YOUR_KEY_HERE"`.

## Installation

To install the tool, run the following command:

```npm install```

## Usage

To start the application, run the following command:

```npm start```

This will launch the command line interface of the tool, where you can choose from various operations provided by the OpenAI API services.

## Operations

Currently, the tool supports the following operations:

* **Text Generation**: This operation generates text based on the provided prompt using the OpenAI GPT-3 model.
* **Language Translation**: This operation translates the provided text from one language to another using the OpenAI GPT-3 model.
* **Sentiment Analysis**: This operation analyzes the sentiment of the provided text using the OpenAI GPT-3 model.
* **Image Creation**: Given a prompt the result will be a URL link to the image made available.

To perform any of the above operations, simply select the corresponding option from the command line interface and follow the prompts.

## License

This tool is licensed under the [MIT License](https://opensource.org/licenses/MIT).
