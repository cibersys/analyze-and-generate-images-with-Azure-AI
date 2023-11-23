import requests
import time
import os

api_base = '<your_endpoint>'  # Enter your endpoint here
api_key = '<your_key>'        # Enter your API key here

# Assign the API version (DALL-E is currently supported for the 2023-06-01-preview API version only)
api_version = '2023-06-01-preview'

# Define the prompt for the image generation
url = f"{api_base}openai/images/generations:submit?api-version={api_version}"
headers= { "api-key": api_key, "Content-Type": "application/json" }
body = {
    # Enter your prompt text here
    "prompt": "a multi-colored umbrella on the beach, disposable camera",  
    "size": "1024x1024",
    "n": 1
}
submission = requests.post(url, headers=headers, json=body)

# Call the API to generate the image and retrieve the response
operation_location = submission.headers['operation-location']
status = ""
while (status != "succeeded"):
    time.sleep(1)
    response = requests.get(operation_location, headers=headers)
    status = response.json()['status']
image_url = response.json()['result']['data'][0]['url']

print(image_url)