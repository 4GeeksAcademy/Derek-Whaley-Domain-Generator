/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "his"];
  let adjectives = ["great", "big", "amazing"];
  let nouns = ["jogger", "racoon", "dog", "merchant", "driver"];
  let extensions = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domain = pronouns[i] + adjectives[j] + nouns[k] + extensions[l];
          console.log(domain);
        }
      }
    }
  }
};
