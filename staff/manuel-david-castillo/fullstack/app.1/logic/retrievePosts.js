const retrievePosts = function (userId) {
  validateId(userId)

  return fetch('http://localhost:9000/posts',{
    headers: {Authorization: `Bearer ${userId}`}
  })
  .then(res => {
    if(res.status === 200) return res.json()
      .then(posts => posts) 
    else if (res.status === 400) return res.json()
      .then(err => {
        throw new Error (err.error)
      })
  }) 
};
