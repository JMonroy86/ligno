window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    console.log(scrollY);
    if(this.scrollY <= 20) nav.className = 'navbar navbar-expand-lg navbar-light bg-light'; else nav.className = 'scroll navbar navbar-expand-lg navbar-light bg-light';
  };