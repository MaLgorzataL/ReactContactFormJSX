var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
        React.createElement('div', {},
        React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: 'Imię',
        }),
        React.createElement('input', {className: 'imieform',
          type: 'text',
          placeholder: ' ',
          value: this.props.contact.firstName + '                           ',
        }),
        React.createElement('input', {className: 'nazwiskoLabelForm',
          type: 'text',
          placeholder: '',
          value: 'Nazwisko',
        }),
        React.createElement('input', {className: 'nazwiskoform',
          type: 'text',
          placeholder: '',
          value: this.props.contact.lastName + '                           ',
        }),
        React.createElement('br', {}, ),
        React.createElement('input', {className: 'emailLabelForm',
          type: 'email',
          placeholder: '',
          value: 'Email ',
        }),
        React.createElement('br', {}, ),
        React.createElement('input', {className: 'emailform',
          type: 'email',
          placeholder: '',
          value: this.props.contact.email + '                           ',
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    )
    )
  },
});

