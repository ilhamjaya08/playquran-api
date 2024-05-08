# Playquran API
This is a public Rest API project containing holy verses of the Al-Qur'an, Murottal readings of the Al-Qur'an, as well as translations of several languages. Created with TypeScript and the HonoJS framework. Free and Open Source for everyone. Currently on working progress

## Contributing
If you want to contribute to this project, Make sure you have basic skills in the Git control system, and master at least the basic way to read the Al-Qur'an

## API Guide
Use a Rest API Client like cURL, Thunder, or Postman.
> Endpoint = http://api.playquran.blue
- Get Surah data by surah id
```
GET https://api.playquran.blue/surah/:sid
```
Example:
```
GET https://api.playquran.blue/surah/1
```
The response will be:
```
{
  "status": 200,
  "message": "Success to get surah data",
  "data": {
    "default": {
      "name": {
        "ar": "الفاتحة",
        "id": "Al-Fatihah",
        "en": "Al-Faatiha"
      },
      "number": 1,
      "ayatCount": 7,
      "manzil": {
        "ar": "مدنية",
        "id": "Madaniyyah",
        "en": "Madaniyyah"
      },
      "ayat": [
        {
          "ayat_id": 1,
          "arab": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "translation": {
            "id-ID": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
            "en-EN": "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
            "fr-FR": "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
            "de-DE": "Im Namen Allahs, des Gnädigen, des Barmherzigen.",
            "nl-NL": "In de naam van Allah, de Erbarmer, de Barmhartige.",
            "it-IT": "Nel nome di Allah, il Compassionevole, il Misericordioso.",
            "ko-KR": "아불라 이름으로, 그 자비로우신 자, 그 자비로우신 자의 이름으로.",
            "ja-JP": "アッラーの御名において。慈悲深き御方、慈愛の主によります。"
          }
        },
        //etc.....
      ]
    }
  }
}
```
## Development
To run this API locally on your computer, run
```
git clone http://github.com/ilhamjaya08/playquran-api.git
```
Then, install the node dependency using pnpm package manager
```
pnpm install
```
if the installation of dependency is successfull, run the script by run
```
pnpm dev
```