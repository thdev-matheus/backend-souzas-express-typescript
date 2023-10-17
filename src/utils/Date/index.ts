export const getDateHour = () => {
  const dataAtual = new Date();

  // pega a data
  const dd = String(dataAtual.getDate()).padStart(2, "0");
  const mm = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const yyyy = dataAtual.getFullYear();

  // pega  ahora
  const hh = String(dataAtual.getHours()).padStart(2, "0");
  const min = String(dataAtual.getMinutes()).padStart(2, "0");

  const res = {
    date: `${dd}/${mm}/${yyyy}`,
    hour: `${hh}:${min}`,
  };

  return res;
};
