class Contacts extends React.Component{
  
  render() {

    return (
      <ul className = {'contactsList'}>
        {this.props.items.map(item => <Contact key = {item.id} item = {item} />)}
      </ul>
    );
  }
};
