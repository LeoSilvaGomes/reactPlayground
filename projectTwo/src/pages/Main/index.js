import React, { Component } from "react";
import moment from "moment";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: "",
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    for (var i = 0; i < localStorage.length; i++) {
      try {
        const { data: repository } = await api.get(
          `/repos/${localStorage.getItem(localStorage.key(i))}`
        );

        repository.lastCommit = moment(repository.pushed_at).fromNow();

        this.setState({
          repositoryInput: "",
          repositories: [...this.state.repositories, repository],
          repositoryError: false,
        });
      } catch (err) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      try {
        localStorage.setItem(repository.id, this.state.repositoryInput);
      } catch (err) {
        throw err;
      }

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "Ok"
            )}
          </button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
