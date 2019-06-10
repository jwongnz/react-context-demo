import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // contextType is a special React property name so needs to be exactly 'contextType'
  // lets you use this.context
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : '名';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;