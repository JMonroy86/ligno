window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 20) nav.className = 'navbar navbar-expand-lg navbar-light bg-transparent'; else nav.className = 'scroll navbar navbar-expand-lg navbar-light';
  };