'use strict';

chrome.tabs.query({}, function(tabs) {
  console.log(tabs);
});