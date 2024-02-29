import React, { useState } from 'react';
import stations from '../stations.json';

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      let node = current.children[ch];
      if (node == null) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  }

  searchPrefix(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      let node = current.children[ch];
      if (node == null) {
        return [];
      }
      current = node;
    }
    return this.getWords(current, word);
  }

  getWords(node, prefix) {
    let words = [];
    this.collect(node, prefix, words);
    return words;
  }

  collect(node, prefix, words) {
    if (node.endOfWord) {
      words.push(prefix);
    }
    for (let key in node.children) {
      this.collect(node.children[key], prefix + key, words);
    }
  }
}

const SearchResults = ({ station, setStation }) => {
    const trie = new Trie();
    stations.stations.forEach((s) => trie.insert(s.station));
  
    const results = trie.searchPrefix(station);
  
    return (
      <div>
        {results.map((result, index) => (
          <div key={index} onClick={() => setStation(result)}>
            {result}
          </div>
        ))}
      </div>
    );
  };
  

export default SearchResults;
