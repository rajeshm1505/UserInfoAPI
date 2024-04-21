

const UserAPI = "https://fakestoreapi.com/users";
const userInfoContainer = document.querySelector('.user-container');

async function FetchData() {
  
    try {
      const response = await fetch(`${UserAPI}`);
      const UserInfoJSONData = await response.json();

      for (let i = 0 ; i< UserInfoJSONData.length ; i++) {
       presentUserInfo(UserInfoJSONData[i]);
      }  
         
    }
    catch (error) {
      console.log(error);
    }
  }

  function presentUserInfo(user) {
   
    const card = document.createElement('div'); 
    card.classList.add('user-card');
    // Create HTML elements to display user information
    const userInfoHTML = `
      <h2>User Information</h2>
      <p><strong>Name:</strong>${user.name.firstname} ${user.name.lastname}</p>
      <p><strong>Username:</strong>${user.username}</p>
      <p><strong>Email:</strong>${user.email}</p>
      <p><strong>Phone:</strong>${user.phone}</p>
      <p><strong>Address:</strong>${user.address.number} ${user.address.street},  ${user.address.zipcode}</p>
      <p><strong>City: </strong>${user.address.city}</p>
    `;
    
    // Render user information
    card.innerHTML += userInfoHTML;
    userInfoContainer.appendChild(card); 
  }

  FetchData();
