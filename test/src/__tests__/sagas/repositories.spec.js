import { runSaga } from "redux-saga";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";
import { getRepositories } from "../../store/sagas/repositories";

import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    apiMock.onGet("users/leosilvagomes/repos").reply(200, ["Repo 1", "Repo 2"]);

    await runSaga(
      {
        dispatch: (action) => {
          dispatched.push(action);
        },
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getSuccess(["Repo 1", "Repo 2"])
    );
  });
});
