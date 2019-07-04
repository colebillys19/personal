import React, { Component } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

class CodeBlock extends Component {
  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={okaidia}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
};

CodeBlock.defaultProps = {
  language: null
};

export default CodeBlock;
