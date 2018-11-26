import React, { Component } from "react";
import { connect } from "react-redux";
import { authors } from "../actions";
import { Button, TextField, Paper, Grid } from "@material-ui/core";

class Author extends Component {
  state = {
    id: "",
    name: "",
    gender: "",
    birthday: "",
    born: "",
    kind: "",
    description: ""
  };

  submitAuthor = e => {
    e.preventDefault();
    this.props.addAuthor(
      this.state.id,
      this.state.name,
      this.state.gender,
      this.state.birthday,
      this.state.born,
      this.state.kind,
      this.state.description
    );

    this.setState({
      id: "",
      name: "",
      gender: "",
      birthday: "",
      born: "",
      kind: "",
      description: ""
    });
  };

  render() {
    return [
      <Paper
        style={{
          marginLeft: 120,
          marginRight: 120,
          marginTop: 20,
          padding: 50
        }}
      >
        <form onSubmit={this.submitAuthor}>
          <Grid container sm={12}>
            <Grid item sm>
              <TextField
                label="Name"
                required
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </Grid>
            <Grid item sm>
              <TextField
                label="Gender"
                required
                value={this.state.gender}
                onChange={e => this.setState({ gender: e.target.value })}
              />
            </Grid>
            <Grid item sm>
              <TextField
                label="Birthday"
                required
                value={this.state.birthday}
                onChange={e => this.setState({ birthday: e.target.value })}
              />
            </Grid>
            <Grid item sm>
              <TextField
                label="Born"
                required
                value={this.state.born}
                onChange={e => this.setState({ born: e.target.value })}
              />
            </Grid>
          </Grid>
          <Grid container sm={12} style={{ marginTop: 20 }}>
            <Grid item sm={3}>
              <TextField
                label="Kind"
                required
                value={this.state.kind}
                onChange={e => this.setState({ kind: e.target.value })}
              />
            </Grid>
            <Grid item sm={3}>
              <TextField
                label="Description"
                required
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </Grid>
          </Grid>
          <Grid container sm={12} style={{ marginTop: 20 }}>
            <Grid item sm>
              <Button variant="contained" color="primary" type="submit">
                <i className="fa fa-plus" aria-hidden="true" />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>,
      <div className="container mt-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Born</th>
              <th>Kind</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map((author, id) => (
              <tr key={`author_${id}`}>
                <td />
                <td>{author.name}</td>
                <td>{author.gender}</td>
                <td>{author.birthday}</td>
                <td>{author.born}</td>
                <td>{author.kind}</td>
                <td>{author.description}</td>
                <td>
                  <button
                    onClick={() => this.props.deleteAuthor(id)}
                    className="btn btn-outline-danger btn-small"
                  >
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ];
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: (id, name, gender, birthday, born, kind, description) => {
      return dispatch(
        authors.addAuthor(id, name, gender, birthday, born, kind, description)
      );
      // console.log("hi")
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
