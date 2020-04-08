/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/vtellez1")
  .then(response => {
  const cardContainer = document.querySelector('.cards');
  newCard = card(response)
  cardContainer.appendChild(newCard);
  // console.log(response);
})
.catch(error => {
  console.log (error);
});
 
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function card(arg){

//define new elements
const newCard = document.createElement('div');
const infoCard =document.createElement('div')
const newImg = document.createElement('img');
const gitName = document.createElement('h3');
const gitUser = document.createElement('p')
const gitLocation = document.createElement('p');
const gitProfile = document.createElement('p');
const gitProfileA = document.createElement('a');
const gitFollowers = document.createElement('p');
const gitFollowing = document.createElement('p');
const gitBio = document.createElement('p');

// Setup structure of elements 
newCard.appendChild(newImg);
newCard.appendChild(infoCard);
infoCard.appendChild(gitName);
infoCard.appendChild(gitUser);
infoCard.appendChild(gitLocation);
infoCard.appendChild(gitProfile);
gitProfile.appendChild(gitProfileA);
infoCard.appendChild(gitFollowers);
infoCard.appendChild(gitFollowing);
infoCard.appendChild(gitBio);

// set class names
newCard.classList.add("card");
gitName.classList.add("name");
infoCard.classList.add("card-info");
gitUser.classList.add("username");

// set text content 
newImg.src= arg.data.avatar_url;
gitName.textContent= arg.data.name;
gitUser.textContent = arg.data.login;
gitLocation.textContent= `Location: ${arg.data.location}`;
// gitProfile.textContent = `Profile:`;
gitProfileA.href= arg.data.html_url;
gitProfileA.textContent = arg.data.html_url
gitFollowers.textContent=`Followers: ${arg.data.followers}`;
gitFollowing.textContent=`Following: ${arg.data.following}`;
gitBio.textContent=`Bio:  ${arg.data.bio}`;

return newCard;

}



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["AndrewMaddocks", "ackers93", "emilybruner", "Hail91", "KaiHaskell"];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
  let newCard = card(response);
  const cardContainer = document.querySelector('.cards');
  cardContainer.appendChild(newCard);
  card(response);
})
  .catch(error => {
  console.log (error);
});
});



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
