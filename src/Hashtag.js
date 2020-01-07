import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Hashtags({text}) {
  const [hashtagsString, sethashtagsString] = useState('');
  
  useEffect(() => {
    let updatedText = text.split(' ').map((item) => {
      if (item.search('#')) return item;
      else return `<span style=color:blue>${item}</span>`;
    }).join(' ');
    sethashtagsString(updatedText);
  },[text])

  return <div dangerouslySetInnerHTML={{__html: hashtagsString}}/>
}

HashTags.propTypes = {
  text: PropTypes.string.isRequired
};

export default Hashtags;
