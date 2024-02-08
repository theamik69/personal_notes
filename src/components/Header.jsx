import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState({ keyword: event.target.value }, () => {
      this.props.addKeyword(this.state.keyword);
    });
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan ..." value={this.state.keyword} onChange={this.onSearchEventHandler} />
        </div>
      </div>
    );
  }
}

export default Header;
