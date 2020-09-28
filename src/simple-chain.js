const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    let chainLength = this.chain.length;
    this.chain = [];
    return chainLength;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if(!position || isNaN(+position - 1) || position == '' || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error('Error');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    this.chain.map( (i) => { result += `( ${i} )~~`; });
    this.chain = [];
    return result.slice(0, -2);
  }
};

module.exports = chainMaker;