import React from 'react';

const Profile = ({ show }) => (
  show && (
    <div>
      <h2>Ada Lovelace</h2>
      <p>The world's first computer programmer</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg"
        alt="Ada Lovelace"
      />
      <p>Profession: Mathematician and Writer</p>
    </div>
  )
);

export default Profile;
