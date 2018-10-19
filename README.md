# Offers Search

A simple React App to search for offers/sales in Facebook public Groups.

It fetches the entire feed of the defined groups and cache in memory. Them
search the results using [elasticlunr](http://elasticlunr.com/).

## :warning: Discontinued

Facebook has recently changed its group API, which now requires a user to be the
group admin to allow fetching the feed and/or the app to be installed in the group.
Thus, offers-search will not work as it was initially planned.

## Dependencies

- Node.js
- Yarn

## Quick Start

Note: First you need to create a Facebook App in
https://developers.facebook.com/apps/.

```bash
# clone this repos
git clone https://github.com/paulodiovani/offers-search.git
cd offers-search

# configure
cp src/config.json.example src/config.json
vim src/config.json # fill in the facebook app id
                    # and the ids of groups to search

# install modules
yarn install

# run for local development
yarn start

# deploy to gh-pages
yarn deploy
```

## TODO

- [x] Facebook Login
- [x] Fetch groups feed
- [ ] Cache groups feed (maybe on local storage)
  + [ ] Refresh cache somehow
- [ ] Allow the user to change the searchable groups
- [ ] Create a decent design
- [ ] Add automated tests
- [ ] Add CI / CD with Travis
