// Hedef URL'i belirleyin
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const apiRequestButton = document.getElementById('apiRequestButton');


function  servis (){
    console.log('merhabaaaaaaa aaaaa sssss');
    const newHomeText='deneme'
// GET isteği gönderin
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json(); // Yanıtı JSON olarak çözümleyin
  })
  .then(data => {
    console.log(data); // Yanıt verilerini kullanın
    homeLink.querySelector('a').textContent=data[1].id
  })
  .catch(error => {
    console.error('Hata:', error);
  });

  const homeLink = document.getElementById('home-link');


}
  apiRequestButton.addEventListener('click',servis)