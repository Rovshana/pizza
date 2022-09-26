import { AxsiosMock, mock } from "../mocks";
import Data from "../mocks/menu/menu.json"
mock.onGet("/pizza").reply(200, {
    pizza: Data
  });
  
  export const menuApi = AxsiosMock.get('/pizza')