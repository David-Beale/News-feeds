# News Scraper Frontend
https://david-beale.github.io/News-feeds

![image](https://user-images.githubusercontent.com/59053870/127153119-f75df9de-4ea0-4038-adab-88e9cbaa04ab.png)

#### News Feeds helps you to create your own feeds by selecting text and/or images to scrape from any website. The sites will be scraped every hour allowing you to stay up to date with the latest news from your favourite sites all in one place.

## Instructions
 
Simply enter the target site and a name for your new feed. This will open up the site for you inside the app (note - some script based websites may not display correctly).


 <p align="center">
  <img src="https://user-images.githubusercontent.com/59053870/127149979-e791b040-63ca-4078-9fe1-0dc7c31a1131.png" />
</p>

The instructions at the top will guide you through the process. Simply point and click the part of the website you want to scrape. 


![image](https://user-images.githubusercontent.com/59053870/127150286-75d530c1-e3e5-41d3-9cfe-00131edca143.png)


A list of options will be provided as websites tend to have very different html structures.


 <p align="center">
  <img src="https://user-images.githubusercontent.com/59053870/127150615-fc7708af-1410-4291-b5a4-d3aef1e169d0.png" />
</p>


A title is required, but a summary, image and link are optional.

When you're happy with the feed, click submit to upload the feed to the database. The scraper will then run every hour and will update your feed automatically.


 <p align="center">
  <img src="https://user-images.githubusercontent.com/59053870/127150719-899224c0-51c4-4dd9-9637-448df108ed55.png" />
</p>
 
 
## Features

### Authentication
Authentication is used to allow users to keep their own private feeds. 

### Scheduled actions
The back end uses a scheduled function to run every hour. The function currently deletes any old headlines (over 1 week old) and will check every site for any updates. 

### Live database connection
The app is securely connected directly to the database and will update automatically if any changes are detected, so there is no need to refresh the page. 

### Delete
Deleting a headline will remove it from your feed and will not be shown again even if scraped in the next scheduled function.

If you delete a feed, it will no longer be scraped every hour, but it will not delete any previously scraped headlines.


 <p align="center">
  <img src="https://user-images.githubusercontent.com/59053870/127151729-bdf7af5a-6ea4-4f94-9a56-93fb8850e359.png" />
</p>


### Optimizations

A virtualised list is used to ensure that only the headlines in view are rendered (instead of rendering every single headline).

Infinite loading and paginated requests are sent automatically to the database to reduce network load.


### Responsive Design


 <p align="center">
  <img src="https://user-images.githubusercontent.com/59053870/127152024-46308e7a-290b-4be9-8cec-ef012f9dee65.png" />
</p>

 <p align="center">
  <img src="https://user-images.githubusercontent.com/59053870/127152087-ac19ecff-960c-4caa-9b02-e32fd66fed7d.png" />
</p>

## Built With
* React/Redux
* Firebase: Authentication, Cloud Firestore, Cloud Functions

## Observations
* All external scripts are disabled when viewing external sites. Therefore, websites which rely heavily on scripts will not display properly. However, any visible content can still be scraped even if the formatting is broken.
* The scraping algorithm relies on the path to the content. Changes to the external site may cause the path to break, resulting in scrape failures.
* Some sites (e.g. Youtube) use anti-scraping measures which prevent the app from scraping the content correctly.
* The site is for educational purposes only and is not intended as a commercial product.
