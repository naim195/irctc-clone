import React, { useState, useEffect } from "react";
import stations from "../stations.json";
import "../styles/searchResults.css";

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

  const [results, setResults] = useState(trie.searchPrefix(station));
  const [stationSelected, setStationSelected] = useState(false);

  useEffect(() => {
    if (!stationSelected) {
      setResults(trie.searchPrefix(station));
    }
  }, [station, stationSelected]);

  const handleStationClick = (result) => {
    setStation(result);
    setStationSelected(true);
    setResults([]);
  };

  return (
    <div>
      {results.map((result, index) => (
        <div
          key={index}
          onClick={() => handleStationClick(result)}
          className="station-result"
        >
          {result}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
