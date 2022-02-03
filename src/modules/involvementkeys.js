const setCommentsToAPI = async (idMeal, userName, userComment) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJAP5QBjQIyOxK4oOV98/comments',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idMeal,
        username: userName,
        comment: userComment,
      }),
    }
  )
    .then((res) => res.ok)
    .then((data) => data);
};

const getCommentsFromAPI = async (idMeal) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aJAP5QBjQIyOxK4oOV98/comments?item_id='${idMeal}'`
  );
  const result = await response.json();
  return result;
};

export default { setCommentsToAPI, getCommentsFromAPI };
