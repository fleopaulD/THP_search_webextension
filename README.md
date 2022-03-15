# THP Search Webextension

## What it does

This Firefox extension allows you to search for THP courses based on one or more keywords. Each click on a link opens a new tab with the appropriate article.

You may not have access to all the pages proposed. Moreover, only "Fullstack courses" are managed for the moment.

![GUI](/README_parts/Capture.png)

## How it does

When you click on the extension icon, a popup opens with a search field.
During validation, a POST request goes to the public API THP_search. The results return as a JSON file, then are inserted into the popup.

## Development

This extension was designed on Firefox, it will be made compatible with Chromium systems later. Also, it's not packaged yet.

To install it temporarily in Firefox :
- Open the page [about:debugging](about:debugging)
- Click on "This Firefox"
- Click on "Load Temporary Add-on..."
- Select the `manifest.json` file
- Application is activated