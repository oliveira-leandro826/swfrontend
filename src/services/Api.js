import Axios from "axios";
const Api = Axios.create({baseURL: "https://swapi.dev/api/"});


Api.listarpessoas = () => Api.get('people/');
Api.listarnaves = () => Api.get('starships/');
Api.listarfilmes = () => Api.get('films/');
Api.listarveiculos = () => Api.get('vehicles/');
Api.listarespecies = () => Api.get('species/');
Api.listarplanetas = () => Api.get('planets/');

Api.visualizarpessoas = (id) => Api.get(`people/${id}`);
Api.visualizarnaves = (id) => Api.get(`starships/${id}`);
Api.visualizarfilmes = (id) => Api.get(`films/${id}`);
Api.visualizarveiculos = (id) => Api.get(`vehicles/${id}`);
Api.visualizarespecies = (id) => Api.get(`species/${id}`);
Api.visualizarplanetas = (id) => Api.get(`planets/${id}`);

Api.buscarpessoas = (busca) => Api.get(`people/?search=${busca}`);
Api.buscarnaves = (busca) => Api.get(`starships/?search=${busca}`);
Api.buscarfilmes = (busca) => Api.get(`films/?search=${busca}`);
Api.buscarveiculos = (busca) => Api.get(`vehicles/?search=${busca}`);
Api.buscarespecies = (busca) => Api.get(`species/?search=${busca}`);
Api.buscarplanetas = (busca) => Api.get(`planets/?search=${busca}`);







export default Api;