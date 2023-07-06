/* Post */
const posts = [];
posts.count = 0;

posts.push({
  id: ++posts.count,
  userId: 4,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg",
  text: "Hello, it is my dog Milka",
});

posts.push({
  id: ++posts.count,
  userId: 3,
  image:
    "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
  text: "Hello, here is my beautiful dog Ferd",
});
