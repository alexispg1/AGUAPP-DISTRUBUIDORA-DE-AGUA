export const environment = {
  production: true,
  mapBoxkey:'pk.eyJ1IjoiYWxleGlzcGVyZXpnb21leiIsImEiOiJja2R2NGtoc3UxZWUzMnNueTBuMGl2bnAyIn0.lY1yu5v85OGmnS82Cgjn2A'
};

export const regex={
  validate_email:/\S+@\S+\.\S+/,
  validate_cell_phone:/(9)[0-9]{9}/,
  validate_password:/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
};
