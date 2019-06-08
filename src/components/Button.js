import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : '提出する'
  }

  render() {
    return (
      <ColourContext.Consumer>
        {(colour) =>
          <button className={`ui button ${colour}`}>
          {/* Use Consumers when you want to access more than one context.
              Consumers must take a function as the child/argument */}
          <LanguageContext.Consumer>
            {(language) => this.renderSubmit(language)}
          </LanguageContext.Consumer>
        </button>
        }
      </ColourContext.Consumer>
    );
  }
}

export default Button;