class ContactForm extends React.Component {
  
  render() {
    return (
        <div>
          <form className = {'contactForm'}>
            <input type = {'text'} placeholder = {'Imię'} value = {'Imię'}/>
            <input className = {'imieform'} type = {'text'} placeholder = ' ' value = {this.props.contact.firstName  + '                    '}/>
            <input className = {'nazwiskoLabelForm'} type = {'text'} placeholder = {''} value = {'Nazwisko'}/>
            <input className = {'nazwiskoform'} type = {'text'} placeholder = {''} value = {this.props.contact.lastName + '                           '}/>
            <br/>
            <input className = {'emailLabelForm'} type = {'email'} placeholder = {''} value = {'Email '}/>
            <br/>
            <input className = {'emailform'} type = {'email'} placeholder = {''} value = {this.props.contact.email + '                           '}/>
            <button type = {'submit'}> Dodaj kontakt </button>
          </form>
        </div>
    )}
    };
