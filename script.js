var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'https://ak0.scstatic.net/1/cdn2-cont6.sweetcouch.com/142799107604616069-harry-potter-minimalist-poster.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: "Film o królu sawanny",
    img: 'https://i.pinimg.com/originals/86/aa/11/86aa1148d7cdd38ca370abea1f18415e.jpg'
  },
  {
    id: 3,
    title: 'Skazani na Shawshank',
    desc: "Film o więźniach",
    img: 'https://i.pinimg.com/originals/7b/88/9e/7b889e797f07e42ca0fdb6c271767b0a.jpg'
  },
  {
    id: 4,
    title: 'Avengers',
    desc: "Film o superbohaterach",
    img: 'https://images-na.ssl-images-amazon.com/images/I/81CVzI-ByHL._SY679_.jpg'
  },
  {
    id: 5,
    title: 'Dwunastu gniewnych ludzi',
    desc: "Film o naradzie przysięgłych",
    img: 'https://i.pinimg.com/originals/da/00/90/da0090eff288fc551cd2144b21cb1c0d.jpg'
  }
];

var movieElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.img})
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, movieElements)
  );

ReactDOM.render(element, document.getElementById('app'));
