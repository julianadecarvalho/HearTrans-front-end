# import requests
# import json
# url = "http://heartrans-back.herokuapp.com/providers/"
# payload = json.dumps({
#     "fullName": "Sydney Woolston",
#     "otherNames": [
#         "Sydney Woolston"
#     ],
#     "titles": [
#         "License Mental Health Counselor Associate"
#     ],
#     "specialties": ["Psychology"],
#     "services": [
#         "Couples/Relationship therapy",
#         "Individual therapy"
#     ],
#     "languages": ["English"],
#     "remoteVisits": True,
#     "slidingScalePay": False
# })
# headers = {
#     'Content-Type': 'application/json'
# }
# response = requests.request("POST", url, headers=headers, data=payload)
# print(response.text)

import requests
import json

# provider request bodies 
url = "http://heartrans-back.herokuapp.com/providers/"
payload = json.dumps({
    "fullName": "Chester Robachinski",
    "otherNames": [
        "Chet Robachinski"
    ],
    "titles": [
        "MD"
    ],
    "specialties": "Psychiatry",
    "services": [
        "Couples/Relationship therapy",
        "Individual therapy",
        "Medication management"
    ],
    "languages": ["English"],
    "remoteVisits": True,
    "slidingScalePay": False
})
headers = {
    'Content-Type': 'application/json'
}
response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)


url = "http://heartrans-back.herokuapp.com/providers/"
payload = json.dumps({
    "fullName": "Sydney Woolston",
    "otherNames": [
        "Sydney Woolston"
    ],
    "titles": [
        "MD"
    ],
    "specialties": ["Psychology"],
    "services": [
        "Couples/Relationship therapy",
        "Individual therapy",
    ],
    "languages": ["English"],
    "remoteVisits": True,
    "slidingScalePay": False
})
headers = {
    'Content-Type': 'application/json'
}
response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)

url = "http://heartrans-back.herokuapp.com/providers/"
payload = json.dumps({
    "fullName": "Rebecca Virata",
    "otherNames": [
        "Rebecca Virata"
    ],
    "titles": [
        "MD"
    ],
    "specialties": ["Primary Care"],
    "services": [
        "COVID-19 Testing"
    ],
    "languages": ["English"],
    "remoteVisits": True,
    "slidingScalePay": False
})
headers = {
    'Content-Type': 'application/json'
}
response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)


# location request bodies 
url = "http://heartrans-back.herokuapp.com/locations/new/"
​
payload={}
headers = {}
​
response = requests.request("POST", url, headers=headers, data=payload)
​
print(response.text)