// const sendRequest = id => {
//     api.getItem(id).then(({ item }) => {
//         api.getItemData(item.uid).then(result => {
//             // ...
//         })
//     })
// };

const sendRequest = async (id) => {
  try {
    const { item } = await api.getItem(id);
    const res = await api.getItemData(item.uid);
    // дальше какая-то логика
  } catch (e) {
    console.error(e);
  } finally {
    // для каких то действий при любом исходе
    // например, чтобы убрать прелоадер
  }
};
