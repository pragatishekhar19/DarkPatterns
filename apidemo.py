import requests
import json

url='https://language.googleapis.com/v1beta2/models/text-bison-001:generateText'

headers= { 'Authorization' : 'Bearer AIzaSyDUMGJB_1FWKEyK92HIIE1qbIZ-RsYrWI8', 'Content-Type': 'applicaion/json'}

data = {
    'prompt': 'tell me a joke'
}

response= requests.post(url,headers=headers,data=json.dumps(data))

if response.status_code == 200:
    print(response.json()['choices'][0]['text']['content'])
else:
    print(f"Request failed with status code {response.status_code}")
