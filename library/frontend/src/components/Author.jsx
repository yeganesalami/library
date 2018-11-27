import React, { Component } from "react";
import { connect } from "react-redux";
import { authors } from "../actions";
import CreateAuthor from "./CreateAuthor";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

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
      <CreateAuthor />,
      <Paper
        style={{
          marginLeft: 120,
          marginRight: 120,
          marginTop: 20,
          padding: 50
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Born</TableCell>
              <TableCell>Kind</TableCell>
              <TableCell>Description</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.authors.map((author, id) => (
              <TableRow key={`author_${id}`}>
                <TableCell />
                <TableCell>{author.name}</TableCell>
                <TableCell>{author.gender}</TableCell>
                <TableCell>{author.birthday}</TableCell>
                <TableCell>{author.born}</TableCell>
                <TableCell>{author.kind}</TableCell>
                <TableCell>{author.description}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.props.deleteAuthor(id)}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
