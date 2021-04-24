import axios from 'axios';

const http = 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi'

const api = axios.create({
  baseURL: `${http}`,
})

export  { api, http };