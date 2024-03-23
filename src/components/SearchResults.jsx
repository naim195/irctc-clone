import React, { useState, useEffect } from "react";
import stations from "../stations.json";
import "../styles/searchResults.css";

class TrieNode {
  constructor(code = null) {
    this.children = {};
    this.endOfWord = false;
    this.code = code;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, code) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      let node = current.children[ch];
      if (node == null) {
        node = new TrieNode(code);
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
    current.code = code;
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
      words.push({ station: prefix, code: node.code });
    }
    for (let key in node.children) {
      this.collect(node.children[key], prefix + key, words);
    }
  }
}

const SearchResults = ({ station, setStation, code, setCode }) => {
  const trie = new Trie();
  stations.stations.forEach((s) => trie.insert(s.station, s.code));

  const [results, setResults] = useState(trie.searchPrefix(station));
  const [stationSelected, setStationSelected] = useState(false);

  useEffect(() => {
    if (!stationSelected) {
      setResults(trie.searchPrefix(station));
    }
  }, [station, stationSelected]);

  const handleStationClick = (result) => {
    setStation(result.station);
    setCode(result.code);
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
          {result.station}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
