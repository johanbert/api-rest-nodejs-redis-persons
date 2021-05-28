export const SERVER_PORT: number = Number(process.env.PORT) || 3333;
export const HOSTNAME: string = process.env.HOSTNAME || window.location.hostname;
export const environment = {
  production: false,
  API_URL:`http://${HOSTNAME}:${SERVER_PORT}`,
  ENDPOINTS: {
    createPerson:'/api/persons/',
    getPersons:  '/api/persons/',
    updatePerson:'/api/persons/',
}
};
