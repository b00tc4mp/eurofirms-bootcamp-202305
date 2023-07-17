function addAndQuitFav(userId, postId) {
    validateId(userId)
    validateId(postId)

    return fetch(`http://localhost:9000/users/fav-posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${userId}`
        }
    })
    .then((res)=> {
        if(res.status === 200) {
            return
          } else if (res.status === 400) {
            res.json()
              .then(body => {
                throw new Error(body.error)
              })
          }
    })
}